export interface CatalogRow {
  id: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
}

export function normalizeSearchText(value: unknown): string {
  return String(value ?? '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('id-ID')
    .trim();
}

export function filterCatalog<T extends CatalogRow>(rows: T[], query: string, category: string): T[] {
  const needle = normalizeSearchText(query);
  return rows.filter((row) => {
    if (category && row.category !== category) return false;
    if (!needle) return true;
    return normalizeSearchText(`${row.name} ${row.id} ${row.category} ${row.description} ${row.tags.join(' ')}`).includes(needle);
  });
}

export interface SearchEntry {
  type: 'buku' | 'bab' | 'model';
  title: string;
  text: string;
  href: string;
}

export function searchAll<T extends SearchEntry>(entries: T[], query: string, limit = 30): T[] {
  const needle = normalizeSearchText(query);
  if (!needle) return [];
  return entries
    .filter((entry) => normalizeSearchText(`${entry.title} ${entry.text}`).includes(needle))
    .map((entry, order) => ({ entry, order, starts: normalizeSearchText(entry.title).startsWith(needle) }))
    .sort((a, b) => Number(b.starts) - Number(a.starts) || a.order - b.order)
    .slice(0, Math.max(1, limit))
    .map(({ entry }) => entry);
}

export function paginate<T>(items: T[], requestedPage: number, pageSize: number) {
  const safeSize = Math.max(1, Math.floor(pageSize));
  const totalPages = Math.max(1, Math.ceil(items.length / safeSize));
  const page = Math.min(totalPages, Math.max(1, Math.floor(requestedPage) || 1));
  const start = (page - 1) * safeSize;
  return { items: items.slice(start, start + safeSize), page, pageSize: safeSize, totalItems: items.length, totalPages };
}
