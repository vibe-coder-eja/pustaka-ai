import { getCollection, render } from 'astro:content';
import { sortTerms, type TermLite } from './glossary';

export interface Term extends TermLite {
  data: Awaited<ReturnType<typeof getCollection<'istilah'>>>[number]['data'];
  entry: Awaited<ReturnType<typeof getCollection<'istilah'>>>[number];
}

/** Seluruh istilah, terurut abjad. */
export async function getTerms(): Promise<Term[]> {
  const entries = await getCollection('istilah');
  return sortTerms(entries.map((entry) => ({
    slug: entry.id,
    title: entry.data.title,
    category: entry.data.category,
    summary: entry.data.summary,
    related: entry.data.related,
    aliases: entry.data.aliases,
    data: entry.data,
    entry
  })));
}

export { render };
