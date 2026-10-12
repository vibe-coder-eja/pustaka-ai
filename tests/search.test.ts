import { describe, expect, it } from 'vitest';
import { filterCatalog, paginate, searchAll } from '../src/lib/search';

const rows = [
  { id: 'fal-ai/creme-voice', name: 'Crème Voice', category: 'audio-to-audio', description: 'Clone a voice', tags: [] },
  { id: 'fal-ai/aurora', name: 'Aurora Image', category: 'text-to-image', description: 'Generate an image', tags: ['fast'] },
  { id: 'fal-ai/echo', name: 'Echo', category: 'audio-to-audio', description: '', tags: [] }
];

describe('filterCatalog', () => {
  it('mencari tanpa peka aksen/huruf besar dan menerapkan filter kategori', () => {
    expect(filterCatalog(rows, 'CREME', 'audio-to-audio').map((row) => row.name)).toEqual(['Crème Voice']);
  });

  it('mencocokkan ID endpoint dan tag', () => {
    expect(filterCatalog(rows, 'fal-ai/echo', '').map((row) => row.name)).toEqual(['Echo']);
    expect(filterCatalog(rows, 'fast', '').map((row) => row.name)).toEqual(['Aurora Image']);
  });

  it('mengembalikan semua kategori ketika filter bernilai kosong', () => {
    expect(filterCatalog(rows, 'image', '')).toHaveLength(1);
  });
});

describe('paginate', () => {
  it('membatasi halaman ke rentang valid dan mengembalikan metadata', () => {
    expect(paginate(rows, 99, 2)).toEqual({ items: [rows[2]], page: 2, pageSize: 2, totalItems: 3, totalPages: 2 });
  });
});

describe('searchAll', () => {
  it('mencari indeks buku dan katalog serta memprioritaskan judul yang diawali kueri', () => {
    const index = [
      { type: 'buku' as const, title: 'Etika dan AI', text: 'prinsip', href: '/buku/etika/' },
      { type: 'model' as const, title: 'AI Etika Helper', text: 'eksperimen etika', href: '/katalog/#ai' }
    ];
    expect(searchAll(index, 'etika', 10).map((item) => item.title)).toEqual(['Etika dan AI', 'AI Etika Helper']);
  });
});
