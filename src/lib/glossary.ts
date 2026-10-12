import { slugifyHeading } from './content';

/** Slug yang dipakai rute tetap di bawah /ensiklopedia/; tidak boleh dipakai istilah. */
export const RESERVED_SLUGS = ['abjad', 'kategori'] as const;

export interface TermLite {
  slug: string;
  title: string;
  category: string;
  summary: string;
  related: string[];
  aliases: string[];
}

export function slugifyTerm(title: string): string {
  return slugifyHeading(title.replace(/\+/g, ' plus ').replace(/#/g, ' sharp '));
}

const collator = new Intl.Collator('id-ID', { sensitivity: 'base', numeric: true });

export function sortTerms<T extends { title: string }>(terms: T[]): T[] {
  return [...terms].sort((a, b) => collator.compare(a.title, b.title));
}

/** Huruf indeks: A–Z, atau `#` untuk judul yang diawali angka/simbol. */
export function letterOf(title: string): string {
  const first = title.normalize('NFKD').replace(/[̀-ͯ]/g, '').trim().charAt(0).toUpperCase();
  return /[A-Z]/.test(first) ? first : '#';
}

export function groupByLetter<T extends { title: string }>(terms: T[]): { letter: string; terms: T[] }[] {
  const groups = new Map<string, T[]>();
  for (const term of sortTerms(terms)) {
    const letter = letterOf(term.title);
    groups.set(letter, [...(groups.get(letter) ?? []), term]);
  }
  return [...groups]
    .map(([letter, items]) => ({ letter, terms: items }))
    .sort((a, b) => (a.letter === '#' ? -1 : b.letter === '#' ? 1 : a.letter.localeCompare(b.letter)));
}

/**
 * Istilah terkait: rujukan eksplisit lebih dulu, lalu istilah yang merujuk balik,
 * lalu istilah sekategori sebagai pelengkap. Tanpa duplikat dan tanpa istilah itu sendiri.
 */
export function resolveRelated(term: TermLite, all: TermLite[], limit = 6): TermLite[] {
  const bySlug = new Map(all.map((item) => [item.slug, item]));
  const picked = new Map<string, TermLite>();
  const add = (item: TermLite | undefined) => {
    if (item && item.slug !== term.slug && !picked.has(item.slug)) picked.set(item.slug, item);
  };
  for (const slug of term.related) add(bySlug.get(slug));
  for (const item of sortTerms(all)) if (item.related.includes(term.slug)) add(item);
  for (const item of sortTerms(all)) if (item.category === term.category) add(item);
  return [...picked.values()].slice(0, limit);
}

/** Memotong ringkasan untuk deskripsi meta (maks. 160 karakter, berhenti di batas kata). */
export function metaDescription(summary: string, max = 160): string {
  const text = summary.replace(/\s+/g, ' ').trim();
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, Math.max(cut.lastIndexOf(' '), 40)).trimEnd()}…`;
}

export interface TermJsonLdInput {
  title: string;
  summary: string;
  url: string;
  setUrl: string;
  setName: string;
  aliases?: string[];
}

export function termJsonLd(input: TermJsonLdInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: input.title,
    ...(input.aliases?.length ? { alternateName: input.aliases } : {}),
    description: input.summary,
    inLanguage: 'id',
    url: input.url,
    inDefinedTermSet: { '@type': 'DefinedTermSet', name: input.setName, url: input.setUrl }
  };
}
