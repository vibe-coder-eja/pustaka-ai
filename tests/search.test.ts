import { describe, expect, it } from 'vitest';
import { filterCatalog, paginate, searchAll } from '../src/lib/search';

const rows = [
  { model: 'Crème Voice', category: 'audio-to-audio', description: 'Clone a voice', url: '/a', page: 1, tags: '' },
  { model: 'Aurora Image', category: 'text-to-image', description: 'Generate an image', url: '/b', page: 2, tags: 'fast' },
  { model: 'Echo', category: 'audio-to-audio', description: '', url: '/c', page: 3, tags: '' }
];

describe('filterCatalog', () => {
  it('mencari tanpa peka aksen/huruf besar dan menerapkan filter kategori', () => {
    expect(filterCatalog(rows, 'CREME', 'audio-to-audio').map((row) => row.model)).toEqual(['Crème Voice']);
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
