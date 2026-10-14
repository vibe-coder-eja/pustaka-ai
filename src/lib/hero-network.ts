// Animasi jaringan di hero beranda: titik pengetahuan naik dari halaman buku,
// tersambung menjadi jaringan, lalu memadat ke satu inti. Satu siklus 16 detik.
// Berhenti saat hero tidak terlihat; dengan prefers-reduced-motion hanya bingkai akhir yang digambar.
import { VIEW, pagePoint, type Side } from './hero-book';

const CYCLE_MS = 16_000;
const CENTER = { x: 500, y: 360 };
const RINGS: Array<[radius: number, count: number]> = [[0, 1], [150, 6], [280, 10], [410, 14]];
const LINK_DISTANCE = 200;
const STATIC_PHASE = 0.86;

interface NetNode { radius: number; angle: number; ring: number; delay: number; side: Side; u: number; v: number; jitter: number }
interface Palette { navy: string; purple: string; accent: string; paper: string }

const clamp01 = (t: number) => Math.min(1, Math.max(0, t));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/** PRNG kecil berbenih agar susunan simpul sama di setiap kunjungan. */
function seeded(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function buildNodes(seed = 7): NetNode[] {
  const random = seeded(seed);
  return RINGS.flatMap(([radius, count], ring) => Array.from({ length: count }, (_, i) => ({
    radius,
    ring,
    angle: (i / count) * Math.PI * 2 + ring * 0.4,
    delay: 0.06 + ring * 0.15 + random() * 0.12,
    side: (random() < 0.5 ? -1 : 1) as Side,
    u: 0.15 + random() * 0.7,
    v: 0.2 + random() * 0.6,
    jitter: random() * Math.PI * 2
  })));
}

function readPalette(): Palette {
  const style = getComputedStyle(document.documentElement);
  const token = (name: string, fallback: string) => style.getPropertyValue(name).trim() || fallback;
  return { navy: token('--navy', '#172541'), purple: token('--purple', '#6a4c86'), accent: token('--accent', '#ad6d58'), paper: token('--paper', '#fffaf0') };
}

export function startHeroNetwork(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const nodes = buildNodes();
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let palette = readPalette();
  let size = 0;
  let visible = true;
  let frame = 0;
  let start = performance.now();

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    size = canvas.clientWidth;
    canvas.width = Math.round(size * ratio);
    canvas.height = Math.round(size * ratio);
    ctx!.setTransform((size * ratio) / VIEW, 0, 0, (size * ratio) / VIEW, 0, 0);
  }

  function draw(phase: number, now: number) {
    const c = ctx!;
    c.clearRect(0, 0, VIEW, VIEW);
    const hair = Math.max(1, VIEW / Math.max(size, 1));
    const fade = phase > 0.92 ? 1 - (phase - 0.92) / 0.08 : 1;
    const shrink = 1 - 0.18 * easeOut(clamp01((phase - 0.55) / 0.35));
    const spin = now / 9000;

    // Dua orbit yang berputar pelan.
    c.lineWidth = hair;
    c.strokeStyle = palette.purple;
    c.globalAlpha = 0.25;
    for (const [tilt, squash, speed] of [[0.3, 0.48, 0.04], [-0.3, 0.38, -0.04]]) {
      c.save();
      c.translate(CENTER.x, CENTER.y + 20);
      c.rotate(tilt + (now / 1000) * speed);
      c.scale(1, squash);
      c.beginPath();
      c.arc(0, 0, 500, 0, Math.PI * 2);
      c.restore();
      c.stroke();
    }

    const points = nodes.map((node) => {
      const arrive = easeOut(clamp01((phase - node.delay) / 0.2));
      const angle = node.angle + spin * (node.ring % 2 ? 1 : -1);
      const targetX = CENTER.x + Math.cos(angle) * node.radius * 1.05 * shrink;
      const targetY = CENTER.y + Math.sin(angle) * node.radius * 0.66 * shrink + Math.sin(now / 900 + node.jitter) * 3;
      const [fromX, fromY] = pagePoint(node.side, node.u, node.v);
      return { node, arrive, fromX, fromY, x: lerp(fromX, targetX, arrive), y: lerp(fromY, targetY, arrive) };
    });

    // Sambungan antarsimpul dan denyut yang mengalir di atasnya.
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const a = points[i];
        const b = points[j];
        if (a.arrive < 1 || b.arrive < 1 || Math.abs(a.node.ring - b.node.ring) > 1) continue;
        const distance = Math.hypot(a.x - b.x, a.y - b.y);
        if (distance >= LINK_DISTANCE) continue;
        const strength = (1 - distance / LINK_DISTANCE) * 0.45 * fade;
        c.globalAlpha = strength;
        c.strokeStyle = palette.navy;
        c.beginPath();
        c.moveTo(a.x, a.y);
        c.lineTo(b.x, b.y);
        c.stroke();
        if ((i + j) % 5 === 0) {
          const t = (now / 1400 + i * 0.37 + j * 0.11) % 1;
          c.globalAlpha = Math.min(1, strength * 1.8);
          c.fillStyle = palette.accent;
          c.beginPath();
          c.arc(lerp(b.x, a.x, t), lerp(b.y, a.y, t), 3.6, 0, Math.PI * 2);
          c.fill();
        }
      }
    }

    // Simpul; selama masih naik, tiap simpul meninggalkan jejak tipis dari halaman.
    for (const point of points) {
      if (point.arrive <= 0) continue;
      if (point.arrive < 1) {
        c.globalAlpha = 0.35 * (1 - point.arrive) * fade;
        c.strokeStyle = palette.purple;
        c.beginPath();
        c.moveTo(point.fromX, point.fromY);
        c.lineTo(point.x, point.y);
        c.stroke();
      }
      const core = point.node.ring === 0;
      const outer = point.node.ring === RINGS.length - 1;
      c.globalAlpha = fade;
      c.fillStyle = core ? palette.purple : outer ? palette.paper : palette.navy;
      c.beginPath();
      c.arc(point.x, point.y, core ? 13 : outer ? 7.5 : 6, 0, Math.PI * 2);
      c.fill();
      if (outer) {
        c.lineWidth = hair * 1.3;
        c.strokeStyle = palette.navy;
        c.stroke();
        c.lineWidth = hair;
      }
    }

    // Inti yang berdenyut: metafora superintelligence.
    const glow = easeOut(clamp01((phase - 0.5) / 0.4)) * fade;
    if (glow > 0) {
      c.strokeStyle = palette.purple;
      for (let ring = 0; ring < 4; ring++) {
        c.globalAlpha = (0.35 - ring * 0.08) * glow;
        c.beginPath();
        c.arc(CENTER.x, CENTER.y, (16 + ring * 20 + ((now / 30) % 20)) * (0.6 + glow), 0, Math.PI * 2);
        c.stroke();
      }
      c.globalAlpha = glow;
      c.fillStyle = palette.accent;
      c.beginPath();
      c.arc(CENTER.x, CENTER.y, 6, 0, Math.PI * 2);
      c.fill();
    }
    c.globalAlpha = 1;
  }

  function tick(now: number) {
    frame = 0;
    draw(((now - start) % CYCLE_MS) / CYCLE_MS, now);
    schedule();
  }

  function schedule() {
    if (!frame && visible && !reducedMotion.matches && !document.hidden) frame = requestAnimationFrame(tick);
  }

  function render() {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    if (reducedMotion.matches) draw(STATIC_PHASE, 0);
    else schedule();
  }

  resize();
  render();

  new ResizeObserver(() => { resize(); render(); }).observe(canvas);
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; render(); }).observe(canvas);
  new MutationObserver(() => { palette = readPalette(); if (reducedMotion.matches) render(); }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  reducedMotion.addEventListener('change', () => { start = performance.now(); render(); });
  document.addEventListener('visibilitychange', render);
}
