import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { parse } from 'yaml';
import { RESERVED_SLUGS, slugifyTerm } from '../src/lib/glossary';
import { CATEGORIES, CATEGORY_SLUGS, GROUPS } from '../src/lib/taxonomy';

const dir = path.resolve(import.meta.dirname, '../src/content/istilah');
const entries = readdirSync(dir)
  .filter((name) => name.endsWith('.md'))
  .map((name) => {
    const text = readFileSync(path.join(dir, name), 'utf8');
    const match = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text);
    return { slug: name.replace(/\.md$/, ''), data: (match ? parse(match[1]) : {}) as Record<string, any>, text };
  });
const slugs = new Set(entries.map((entry) => entry.slug));

describe('taksonomi', () => {
  it('setiap kategori menunjuk kelompok yang ada dan slug-nya unik', () => {
    const groupIds = new Set(GROUPS.map((group) => group.id));
    expect(CATEGORIES.every((category) => groupIds.has(category.group))).toBe(true);
    expect(new Set(CATEGORY_SLUGS).size).toBe(CATEGORY_SLUGS.length);
  });
});

describe('konten ensiklopedia (src/content/istilah)', () => {
  it('memiliki entri', () => {
    expect(entries.length).toBeGreaterThan(100);
  });

  it('nama berkas sama dengan slug judulnya dan tidak memakai slug rute tetap', () => {
    for (const entry of entries) {
      expect(slugifyTerm(entry.data.title), entry.slug).toBe(entry.slug);
      expect(RESERVED_SLUGS as readonly string[], entry.slug).not.toContain(entry.slug);
    }
  });

  it('memakai kategori yang valid dan ringkasan yang layak', () => {
    for (const entry of entries) {
      expect(CATEGORY_SLUGS, entry.slug).toContain(entry.data.category);
      expect(String(entry.data.summary).length, entry.slug).toBeGreaterThanOrEqual(20);
      expect(String(entry.data.summary).length, entry.slug).toBeLessThanOrEqual(400);
    }
  });

  it('seluruh rujukan terkait menunjuk entri yang ada dan bukan dirinya sendiri', () => {
    for (const entry of entries) {
      for (const slug of entry.data.related ?? []) {
        expect(slugs.has(slug), `${entry.slug} → ${slug}`).toBe(true);
        expect(slug).not.toBe(entry.slug);
      }
    }
  });

  it('entri terverifikasi wajib memiliki sumber', () => {
    for (const entry of entries.filter((item) => item.data.status === 'terverifikasi')) {
      expect((entry.data.sources ?? []).length, entry.slug).toBeGreaterThan(0);
    }
  });

  it('tidak memuat penanda kredensial atau path lokal', () => {
    for (const entry of entries) expect(entry.text, entry.slug).not.toMatch(/[A-Za-z]:\\Users\\|\/Users\/|BEGIN [A-Z ]*PRIVATE KEY/);
  });
});
