import { describe, expect, it } from 'vitest';
import { groupByLetter, letterOf, metaDescription, resolveRelated, slugifyTerm, termJsonLd, type TermLite } from '../src/lib/glossary';

const term = (slug: string, title: string, category = 'dasar-ai', related: string[] = []): TermLite => ({ slug, title, category, summary: `${title}.`, related, aliases: [] });

describe('slugifyTerm', () => {
  it('membuat slug stabil untuk judul dengan simbol', () => {
    expect(slugifyTerm('CI/CD')).toBe('ci-cd');
    expect(slugifyTerm('C++')).toBe('c-plus-plus');
    expect(slugifyTerm('C#')).toBe('c-sharp');
    expect(slugifyTerm('Layout (Next.js)')).toBe('layout-next-js');
    expect(slugifyTerm('.env')).toBe('env');
  });
});

describe('indeks abjad', () => {
  it('menentukan huruf tanpa aksen dan menaruh angka/simbol di #', () => {
    expect(letterOf('Étika')).toBe('E');
    expect(letterOf('3D')).toBe('#');
    expect(letterOf('  api')).toBe('A');
  });

  it('mengelompokkan per huruf, terurut, dengan # lebih dulu', () => {
    const groups = groupByLetter([{ title: 'Bias' }, { title: 'agent' }, { title: '3D' }, { title: 'AI' }]);
    expect(groups.map((group) => group.letter)).toEqual(['#', 'A', 'B']);
    expect(groups[1].terms.map((item) => item.title)).toEqual(['agent', 'AI']);
  });
});

describe('resolveRelated', () => {
  const all = [
    term('a', 'A', 'x', ['c']),
    term('b', 'B', 'x'),
    term('c', 'C', 'y'),
    term('d', 'D', 'y', ['a']),
    term('e', 'E', 'z')
  ];

  it('mendahulukan rujukan eksplisit, lalu rujukan balik, lalu sekategori, tanpa duplikat', () => {
    expect(resolveRelated(all[0], all).map((item) => item.slug)).toEqual(['c', 'd', 'b']);
  });

  it('mengabaikan slug yang tidak ada dan tidak menyertakan istilah itu sendiri', () => {
    const lone = term('a', 'A', 'x', ['tidak-ada', 'a']);
    expect(resolveRelated(lone, [lone, term('b', 'B', 'x')]).map((item) => item.slug)).toEqual(['b']);
  });

  it('membatasi jumlah hasil', () => {
    expect(resolveRelated(all[0], all, 1)).toHaveLength(1);
  });
});

describe('metaDescription', () => {
  it('memotong di batas kata dengan elipsis dan membiarkan teks pendek', () => {
    expect(metaDescription('Singkat saja.')).toBe('Singkat saja.');
    const long = metaDescription('kata '.repeat(60), 50);
    expect(long.length).toBeLessThanOrEqual(50);
    expect(long.endsWith('…')).toBe(true);
    expect(long).not.toMatch(/kat…$/);
  });
});

describe('termJsonLd', () => {
  it('menghasilkan DefinedTerm schema.org beserta set istilahnya', () => {
    const json = termJsonLd({ title: 'LLM', summary: 'Model bahasa besar.', aliases: ['Model Bahasa Besar'], url: 'https://x/llm/', setName: 'Ensiklopedia', setUrl: 'https://x/' });
    expect(json['@type']).toBe('DefinedTerm');
    expect(json.alternateName).toEqual(['Model Bahasa Besar']);
    expect(json.inDefinedTermSet).toEqual({ '@type': 'DefinedTermSet', name: 'Ensiklopedia', url: 'https://x/' });
    expect(termJsonLd({ title: 'A', summary: 's', url: 'u', setName: 'n', setUrl: 'u' })).not.toHaveProperty('alternateName');
  });
});
