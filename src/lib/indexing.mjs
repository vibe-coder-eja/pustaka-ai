// Aturan pengindeksan mesin pencari untuk entri ensiklopedia.
// Berformat .mjs agar dapat diimpor dari astro.config.mjs dan scripts/verify-build.mjs tanpa langkah kompilasi.
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';

/** Status entri yang belum berisi (hanya ringkasan) sehingga diberi noindex dan dikeluarkan dari sitemap. */
export const NOINDEX_STATUSES = ['catatan'];

/** Status kosong mengikuti default skema di src/content.config.ts. */
const DEFAULT_STATUS = 'catatan';

/**
 * @param {string | undefined | null} status
 * @returns {boolean}
 */
export function isIndexable(status) {
  return !NOINDEX_STATUSES.includes(status || DEFAULT_STATUS);
}

/**
 * Membaca frontmatter seluruh berkas .md di `dir` dan mengembalikan slug entri yang tidak boleh diindeks.
 * @param {string | URL} dir
 * @returns {Set<string>}
 */
export function readNoindexSlugs(dir) {
  const root = dir instanceof URL ? fileURLToPath(dir) : dir;
  const slugs = new Set();
  for (const name of readdirSync(root)) {
    if (!name.endsWith('.md')) continue;
    const source = readFileSync(join(root, name), 'utf8');
    const frontmatter = /^---\r?\n([\s\S]*?)\r?\n---/.exec(source)?.[1] ?? '';
    const data = parse(frontmatter) ?? {};
    if (!isIndexable(data.status)) slugs.add(name.slice(0, -'.md'.length));
  }
  return slugs;
}
