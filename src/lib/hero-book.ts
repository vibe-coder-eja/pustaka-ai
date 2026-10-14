// Geometri buku terbuka di hero beranda, dalam ruang koordinat 1000 × 1000.
// Dipakai bersama oleh SVG statis (saat build) dan canvas animasi (di browser),
// sehingga titik pengetahuan berangkat tepat dari baris teks di halaman.

export const VIEW = 1000;
export const BOOK = { x: 500, y: 780, w: 880, h: 230 } as const;

/** Sisi halaman: -1 kiri, 1 kanan. */
export type Side = -1 | 1;

const quad = (p0: number, p1: number, p2: number, t: number) => (1 - t) * (1 - t) * p0 + 2 * (1 - t) * t * p1 + t * t * p2;
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const r = (value: number) => Math.round(value * 10) / 10;

/** Titik di permukaan halaman: u dari jilid (0) ke tepi luar (1), v dari atas (0) ke bawah (1). */
export function pagePoint(side: Side, u: number, v: number): [number, number] {
  const half = BOOK.w / 2;
  const { h } = BOOK;
  const x = BOOK.x + side * quad(0, half * 0.45, half, u);
  const top = quad(-h * 0.34, -h * 0.62, -h * 0.46, u);
  const bottom = quad(h * 0.5, h * 0.36, h * 0.44, u);
  return [x, BOOK.y + lerp(top, bottom, v)];
}

/** Path SVG satu halaman; `offset` menggeser ke bawah, `grow` melebarkan ke samping (untuk tumpukan lembar dan sampul). */
export function pagePath(side: Side, offset = 0, grow = 0): string {
  const w = BOOK.w / 2 + grow;
  const { x, y, h } = BOOK;
  return [
    `M${r(x)} ${r(y - h * 0.34 + offset)}`,
    `Q${r(x + side * w * 0.45)} ${r(y - h * 0.62 + offset)} ${r(x + side * w)} ${r(y - h * 0.46 + offset)}`,
    `L${r(x + side * w)} ${r(y + h * 0.44 + offset)}`,
    `Q${r(x + side * w * 0.45)} ${r(y + h * 0.36 + offset)} ${r(x)} ${r(y + h * 0.5 + offset)}Z`
  ].join('');
}

/** Baris teks yang mengikuti lengkung halaman. */
export const TEXT_ROWS = Array.from({ length: 7 }, (_, row) => ({ v: 0.16 + row * 0.11, end: row === 6 ? 0.6 : 0.86 }));

export function textLinePath(side: Side, v: number, end: number, start = 0.14, steps = 16): string {
  return Array.from({ length: steps + 1 }, (_, i) => {
    const [px, py] = pagePoint(side, lerp(start, end, i / steps), v);
    return `${i ? 'L' : 'M'}${r(px)} ${r(py)}`;
  }).join('');
}

/** Bayangan tipis di lipatan jilid. */
export function gutterPath(side: Side, width = 0.07): string {
  const points = [pagePoint(side, 0, 0), pagePoint(side, width, 0), pagePoint(side, width, 1), pagePoint(side, 0, 1)];
  return points.map(([px, py], i) => `${i ? 'L' : 'M'}${r(px)} ${r(py)}`).join('') + 'Z';
}

/** Pita pembatas yang menjuntai dari jilid. */
export function ribbonPath(): string {
  const { x, y, w, h } = BOOK;
  const cx = x + w * 0.07;
  const top = y - h * 0.38;
  const bottom = y + h * 0.78;
  return `M${r(cx - 12)} ${r(top)}L${r(cx + 12)} ${r(top)}L${r(cx + 12)} ${r(bottom)}L${r(cx)} ${r(bottom - 16)}L${r(cx - 12)} ${r(bottom)}Z`;
}
