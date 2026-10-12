export interface GraphInputTerm {
  slug: string;
  category: string;
  related: string[];
}

export interface Graph {
  /** Slug istilah yang punya sedikitnya satu hubungan. */
  connected: string[];
  /** Pasangan tak berarah, urut abjad, tanpa duplikat. */
  edges: [string, string][];
  /** Slug istilah tanpa hubungan sama sekali. */
  isolated: string[];
  degree: Map<string, number>;
}

export function buildGraph(terms: GraphInputTerm[]): Graph {
  const known = new Set(terms.map((term) => term.slug));
  const seen = new Set<string>();
  const edges: [string, string][] = [];
  for (const term of terms) {
    for (const other of term.related) {
      if (other === term.slug || !known.has(other)) continue;
      const [a, b] = term.slug < other ? [term.slug, other] : [other, term.slug];
      const key = `${a}\u0000${b}`;
      if (seen.has(key)) continue;
      seen.add(key);
      edges.push([a, b]);
    }
  }
  edges.sort((x, y) => x[0].localeCompare(y[0]) || x[1].localeCompare(y[1]));
  const degree = new Map<string, number>();
  for (const [a, b] of edges) {
    degree.set(a, (degree.get(a) ?? 0) + 1);
    degree.set(b, (degree.get(b) ?? 0) + 1);
  }
  const connected = terms.map((term) => term.slug).filter((slug) => degree.has(slug)).sort();
  const isolated = terms.map((term) => term.slug).filter((slug) => !degree.has(slug)).sort();
  return { connected, edges, isolated, degree };
}

export interface LayoutNode {
  id: string;
  /** Node dengan klaster sama ditarik ke wilayah yang sama. */
  cluster: string;
}

export interface LayoutOptions {
  width: number;
  height: number;
  iterations?: number;
  seed?: number;
  padding?: number;
}

export interface Point {
  x: number;
  y: number;
}

/** PRNG deterministik agar tata letak sama pada setiap build. */
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Tata letak gaya Fruchterman–Reingold dengan tarikan lemah ke pusat klaster.
 * Hasilnya deterministik dan dinormalkan agar muat dalam kotak (dengan margin).
 */
export function layoutGraph(nodes: LayoutNode[], edges: [string, string][], options: LayoutOptions): Map<string, Point> {
  const { width, height, iterations = 280, seed = 7, padding = 48 } = options;
  const rand = mulberry32(seed);
  const result = new Map<string, Point>();
  if (nodes.length === 0) return result;
  if (nodes.length === 1) {
    result.set(nodes[0].id, { x: width / 2, y: height / 2 });
    return result;
  }

  const clusters = [...new Set(nodes.map((node) => node.cluster))].sort();
  const centers = new Map(clusters.map((cluster, index) => {
    const angle = (2 * Math.PI * index) / clusters.length;
    return [cluster, { x: width / 2 + Math.cos(angle) * width * 0.28, y: height / 2 + Math.sin(angle) * height * 0.28 }];
  }));

  const pos = nodes.map((node) => {
    const center = centers.get(node.cluster)!;
    return { x: center.x + (rand() - 0.5) * 80, y: center.y + (rand() - 0.5) * 80 };
  });
  const index = new Map(nodes.map((node, i) => [node.id, i]));
  const links = edges
    .map(([a, b]) => [index.get(a), index.get(b)] as const)
    .filter((pair): pair is readonly [number, number] => pair[0] !== undefined && pair[1] !== undefined);

  const k = Math.sqrt((width * height) / nodes.length) * 0.7;
  const dx = new Float64Array(nodes.length);
  const dy = new Float64Array(nodes.length);

  for (let step = 0; step < iterations; step++) {
    const temperature = Math.max(0.5, (width / 8) * (1 - step / iterations));
    dx.fill(0);
    dy.fill(0);
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        let vx = pos[i].x - pos[j].x;
        let vy = pos[i].y - pos[j].y;
        let dist = Math.hypot(vx, vy);
        if (dist < 0.01) { vx = rand() - 0.5; vy = rand() - 0.5; dist = Math.hypot(vx, vy) || 0.01; }
        const force = (k * k) / dist;
        dx[i] += (vx / dist) * force; dy[i] += (vy / dist) * force;
        dx[j] -= (vx / dist) * force; dy[j] -= (vy / dist) * force;
      }
    }
    for (const [a, b] of links) {
      const vx = pos[a].x - pos[b].x;
      const vy = pos[a].y - pos[b].y;
      const dist = Math.max(Math.hypot(vx, vy), 0.01);
      const force = (dist * dist) / k;
      dx[a] -= (vx / dist) * force; dy[a] -= (vy / dist) * force;
      dx[b] += (vx / dist) * force; dy[b] += (vy / dist) * force;
    }
    for (let i = 0; i < nodes.length; i++) {
      const center = centers.get(nodes[i].cluster)!;
      dx[i] += (center.x - pos[i].x) * 0.35;
      dy[i] += (center.y - pos[i].y) * 0.35;
      const length = Math.max(Math.hypot(dx[i], dy[i]), 0.01);
      const move = Math.min(length, temperature);
      pos[i].x += (dx[i] / length) * move;
      pos[i].y += (dy[i] / length) * move;
    }
  }

  const xs = pos.map((p) => p.x);
  const ys = pos.map((p) => p.y);
  const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
  const scale = Math.min((width - 2 * padding) / Math.max(maxX - minX, 1), (height - 2 * padding) / Math.max(maxY - minY, 1));
  const offsetX = (width - (maxX - minX) * scale) / 2 - minX * scale;
  const offsetY = (height - (maxY - minY) * scale) / 2 - minY * scale;
  nodes.forEach((node, i) => {
    result.set(node.id, { x: Math.round((pos[i].x * scale + offsetX) * 10) / 10, y: Math.round((pos[i].y * scale + offsetY) * 10) / 10 });
  });
  return result;
}
