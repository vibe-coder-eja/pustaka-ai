import { describe, expect, it } from 'vitest';
import { BOOK, VIEW, pagePoint, pagePath } from '../src/lib/hero-book';
import { buildNodes } from '../src/lib/hero-network';

describe('buku di hero beranda', () => {
  it('kedua halaman simetris terhadap jilid', () => {
    for (const u of [0, 0.25, 0.5, 0.75, 1]) {
      for (const v of [0, 0.5, 1]) {
        const [lx, ly] = pagePoint(-1, u, v);
        const [rx, ry] = pagePoint(1, u, v);
        expect(lx + rx).toBeCloseTo(BOOK.x * 2);
        expect(ly).toBeCloseTo(ry);
      }
    }
  });

  it('seluruh buku, termasuk sampul, muat di dalam viewBox', () => {
    const numbers = [-1, 1].flatMap((side) => pagePath(side as -1 | 1, 28, 24).match(/-?\d+(?:\.\d+)?/g)!.map(Number));
    expect(Math.min(...numbers)).toBeGreaterThanOrEqual(0);
    expect(Math.max(...numbers)).toBeLessThanOrEqual(VIEW);
  });

  it('susunan simpul jaringan deterministik dan berangkat dari halaman', () => {
    const nodes = buildNodes();
    expect(nodes).toEqual(buildNodes());
    expect(nodes).toHaveLength(31);
    for (const node of nodes) {
      expect(node.u).toBeGreaterThan(0);
      expect(node.u).toBeLessThan(1);
      expect(node.v).toBeGreaterThan(0);
      expect(node.v).toBeLessThan(1);
    }
  });
});
