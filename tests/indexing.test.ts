import { describe, expect, it } from 'vitest';
import { NOINDEX_STATUSES, isIndexable, readNoindexSlugs } from '../src/lib/indexing.mjs';

describe('pengindeksan entri', () => {
  it('entri catatan tidak diindeks', () => {
    expect(NOINDEX_STATUSES).toEqual(['catatan']);
    expect(isIndexable('catatan')).toBe(false);
  });

  it('status kosong mengikuti default catatan', () => {
    expect(isIndexable(undefined)).toBe(false);
    expect(isIndexable('')).toBe(false);
  });

  it('entri ditinjau dan terverifikasi diindeks', () => {
    expect(isIndexable('ditinjau')).toBe(true);
    expect(isIndexable('terverifikasi')).toBe(true);
  });

  it('membaca slug noindex dari konten nyata', () => {
    const slugs = readNoindexSlugs('src/content/istilah');
    expect(slugs.has('cdn')).toBe(true);
    expect(slugs.has('agi')).toBe(false);
  });
});
