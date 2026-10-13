import { buildGraph, layoutGraph, type Point } from './graph';
import { termUrl } from './ensiklopedia';
import { CATEGORIES, GROUPS, getCategory, type GroupId } from './taxonomy';
import { getTerms } from './terms';

export const GRAPH_W = 1000;
export const GRAPH_H = 640;

/**
 * Grafik konsep: simpul = entri yang punya hubungan, sisi = "istilah terkait".
 * Dua tata letak: "inti" (tanpa istilah perangkat lunak, tampilan awal) dan "penuh" (semua kelompok),
 * supaya titik-titik AI tidak tertekan ke satu sudut oleh puluhan istilah perangkat lunak.
 * Dipakai halaman peta-si (SVG awal) dan endpoint data/graf-konsep.json (data interaktif di klien),
 * sehingga keduanya selalu memakai tata letak yang sama.
 */
async function compute() {
  const terms = await getTerms();
  const graph = buildGraph(terms);
  const termBySlug = new Map(terms.map((term) => [term.slug, term]));
  const groupOf = (slug: string) => getCategory(termBySlug.get(slug)!.category)!.group;
  const coreEdges = graph.edges.filter(([a, b]) => groupOf(a) !== 'perangkat-lunak' && groupOf(b) !== 'perangkat-lunak');
  const coreIds = [...new Set(coreEdges.flat())].sort();
  const toLayoutNode = (id: string) => ({ id, cluster: termBySlug.get(id)!.category });
  const layoutFull = layoutGraph(graph.connected.map(toLayoutNode), graph.edges, { width: GRAPH_W, height: GRAPH_H, iterations: 320, seed: 11 });
  const layoutCore = layoutGraph(coreIds.map(toLayoutNode), coreEdges, { width: GRAPH_W, height: GRAPH_H, iterations: 320, seed: 5 });
  const coreSet = new Set(coreIds);
  const initialPoint = (id: string): Point => layoutCore.get(id) ?? layoutFull.get(id)!;
  const neighbors = new Map<string, string[]>(graph.connected.map((id) => [id, []]));
  for (const [a, b] of graph.edges) { neighbors.get(a)!.push(b); neighbors.get(b)!.push(a); }
  const nodes = graph.connected.map((id) => {
    const term = termBySlug.get(id)!;
    const category = getCategory(term.category)!;
    const point = initialPoint(id);
    const degree = graph.degree.get(id)!;
    return {
      id, title: term.title, summary: term.summary, href: termUrl(id),
      category: term.category, group: category.group, aliases: term.aliases,
      x: point.x, y: point.y, r: Math.round(Math.min(15, 5 + 2 * Math.sqrt(degree)) * 10) / 10, degree,
      off: !coreSet.has(id),
      neighbors: neighbors.get(id)!.sort((x, y) => termBySlug.get(x)!.title.localeCompare(termBySlug.get(y)!.title, 'id'))
    };
  });
  const groupCounts = Object.fromEntries(GROUPS.map((group) => [group.id, nodes.filter((node) => node.group === group.id).length])) as Record<GroupId, number>;

  // Data klien dibuat ringkas: href diturunkan dari slug, nama kategori lewat tabel kecil, judul tetangga dari simpulnya.
  const clientData = {
    cats: Object.fromEntries(CATEGORIES.map((category) => [category.slug, category.title])),
    nodes: nodes.map(({ id, title, summary, group, category, aliases, neighbors: near }) => ({
      id, title, summary, group, cat: category, aliases,
      core: layoutCore.get(id) ?? null,
      full: layoutFull.get(id)!,
      neighbors: near
    }))
  };

  return { terms, termBySlug, graph, nodes, coreSet, initialPoint, groupCounts, clientData };
}

let cached: ReturnType<typeof compute> | undefined;

/** Dihitung sekali per build lalu dipakai bersama halaman dan endpoint JSON. */
export function getConceptGraph() {
  cached ??= compute();
  return cached;
}
