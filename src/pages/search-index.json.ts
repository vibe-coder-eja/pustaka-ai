import type { APIRoute } from 'astro';
import catalog from '../data/fal-models.json';
import { getBookSearchEntries } from '../lib/books';
import { getTerms } from '../lib/terms';
import { getCategory } from '../lib/taxonomy';
import { termUrl } from '../lib/ensiklopedia';
import { withBase } from '../lib/site';

const base = import.meta.env.BASE_URL;
const clip = (text: string, max: number) => (text.length > max ? `${text.slice(0, max - 1)}…` : text);

/** Indeks pencarian global. Dimuat browser hanya saat dialog pencarian dibuka. */
export const GET: APIRoute = async () => {
  const terms = await getTerms();
  const entries = [
    ...terms.map((term) => ({
      type: 'istilah',
      title: term.title,
      text: [...term.aliases, getCategory(term.category)?.title, clip(term.summary, 110)].filter(Boolean).join(' · '),
      href: termUrl(term.slug)
    })),
    ...getBookSearchEntries(base),
    { type: 'buku', title: 'Katalog Model Fal AI', text: `${catalog.length} model AI lintas kategori`, href: withBase(base, 'katalog-fal/') },
    ...catalog.map((row) => ({
      type: 'model',
      title: row.name,
      text: `${row.category} · ${clip(row.description, 110)}`,
      href: `${withBase(base, 'katalog-fal/')}?q=${encodeURIComponent(row.id)}`
    }))
  ];
  return new Response(JSON.stringify(entries), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
