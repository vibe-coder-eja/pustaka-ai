import { describe, expect, it } from 'vitest';
import { buildGraph, layoutGraph } from '../src/lib/graph';

const terms = [
  { slug: 'a', category: 'x', related: ['b', 'c', 'a', 'tidak-ada'] },
  { slug: 'b', category: 'x', related: ['a'] },
  { slug: 'c', category: 'y', related: [] },
  { slug: 'd', category: 'y', related: [] }
];

describe('buildGraph', () => {
  it('membuat sisi tak berarah tanpa duplikat, tanpa loop, dan mengabaikan slug yang tidak ada', () => {
    const graph = buildGraph(terms);
    expect(graph.edges).toEqual([['a', 'b'], ['a', 'c']]);
  });

  it('memisahkan istilah terhubung dan terisolasi serta menghitung derajat', () => {
    const graph = buildGraph(terms);
    expect(graph.connected).toEqual(['a', 'b', 'c']);
    expect(graph.isolated).toEqual(['d']);
    expect(graph.degree.get('a')).toBe(2);
    expect(graph.degree.get('b')).toBe(1);
    expect(graph.degree.has('d')).toBe(false);
  });

  it('tidak bergantung pada urutan masukan', () => {
    const reversed = buildGraph([...terms].reverse());
    expect(reversed.edges).toEqual(buildGraph(terms).edges);
  });
});

describe('layoutGraph', () => {
  const nodes = Array.from({ length: 24 }, (_, i) => ({ id: `n${i}`, cluster: i < 12 ? 'satu' : 'dua' }));
  const edges: [string, string][] = nodes.slice(1).map((node, i) => [nodes[i].id, node.id]);
  const options = { width: 1000, height: 640, iterations: 120, padding: 40 };

  it('deterministik untuk seed yang sama', () => {
    const first = layoutGraph(nodes, edges, options);
    const second = layoutGraph(nodes, edges, options);
    expect([...first]).toEqual([...second]);
  });

  it('menghasilkan koordinat valid di dalam kotak dengan margin', () => {
    const layout = layoutGraph(nodes, edges, options);
    expect(layout.size).toBe(nodes.length);
    for (const { x, y } of layout.values()) {
      expect(Number.isFinite(x) && Number.isFinite(y)).toBe(true);
      expect(x).toBeGreaterThanOrEqual(39.9);
      expect(x).toBeLessThanOrEqual(960.1);
      expect(y).toBeGreaterThanOrEqual(39.9);
      expect(y).toBeLessThanOrEqual(600.1);
    }
  });

  it('tidak menumpuk dua simpul pada titik yang sama', () => {
    const points = [...layoutGraph(nodes, edges, options).values()];
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) expect(Math.hypot(points[i].x - points[j].x, points[i].y - points[j].y)).toBeGreaterThan(2);
    }
  });

  it('menangani graf kosong dan satu simpul', () => {
    expect(layoutGraph([], [], options).size).toBe(0);
    expect([...layoutGraph([{ id: 'x', cluster: 'k' }], [], options).values()]).toEqual([{ x: 500, y: 320 }]);
  });
});
