import { extractChapters, renderBookMarkdown } from './content';
import { normalizeHermesCliMarkdown } from './transform';
import snapshots from '../data/snapshots.json';
import { formatDateId } from './catalog';

const skillsDate = formatDateId(snapshots.skills.fetchedAt);
const nousDate = formatDateId(snapshots.nous.fetchedAt);

const bookSources = import.meta.glob('../content/books/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
}) as Record<string, string>;

export interface BookMeta {
  slug: string;
  file: string;
  title: string;
  shortTitle: string;
  description: string;
  eyebrow: string;
  snapshot?: string;
  tone: string;
}

export const books: BookMeta[] = [
  {
    slug: 'hermes-cli', file: 'hermes-cli.md',
    title: 'Referensi Perintah Hermes CLI', shortTitle: 'Hermes CLI',
    description: 'Peta perintah terminal Hermes Agent yang disusun per kelompok untuk rujukan cepat.',
    eyebrow: 'Referensi CLI', tone: 'navy'
  },
  {
    slug: 'katalog-skills-hermes', file: 'katalog-skills-hermes.md',
    title: 'Katalog Skills Hermes Agent', shortTitle: 'Skills Hermes',
    description: `${snapshots.skills.count} skill resmi Hermes Agent dari repositori Nous Research, dengan deskripsi berbahasa Indonesia dan tautan ke kode sumber.`,
    eyebrow: `Snapshot ${skillsDate}`, snapshot: skillsDate, tone: 'plum'
  },
  {
    slug: 'nous-portal-models', file: 'nous-portal-models.md',
    title: 'Model AI di Nous Portal', shortTitle: 'Nous Portal Models',
    description: `Snapshot ${snapshots.nous.count} model dari ${snapshots.nous.companies} perusahaan yang tersedia melalui Nous Portal, lengkap dengan konteks dan harga.`,
    eyebrow: `Snapshot ${nousDate}`, snapshot: nousDate, tone: 'indigo'
  }
];

function rawBook(meta: BookMeta): string {
  const source = bookSources[`../content/books/${meta.file}`]?.replace(/^\uFEFF/, '');
  if (!source) throw new Error(`Sumber buku tidak ditemukan: ${meta.file}`);
  return meta.slug === 'hermes-cli' ? normalizeHermesCliMarkdown(source) : source;
}

export async function loadBook(slug: string) {
  const meta = books.find((book) => book.slug === slug);
  if (!meta) throw new Error(`Buku tidak ditemukan: ${slug}`);
  const markdown = rawBook(meta);
  const chapters = extractChapters(markdown);
  const html = await renderBookMarkdown(markdown);
  const words = markdown.trim().split(/\s+/).length;
  return { meta, markdown, chapters, html, words, minutes: Math.max(1, Math.ceil(words / 210)) };
}

export function getBookSearchEntries(base: string) {
  return books.flatMap((meta) => {
    const markdown = rawBook(meta);
    return [
      { type: 'buku' as const, title: meta.title, text: meta.description, href: `${base}buku/${meta.slug}/` },
      ...extractChapters(markdown).map((chapter) => ({
        type: 'bab' as const,
        title: chapter.title,
        text: meta.shortTitle,
        href: `${base}buku/${meta.slug}/#${chapter.id}`
      }))
    ];
  });
}
