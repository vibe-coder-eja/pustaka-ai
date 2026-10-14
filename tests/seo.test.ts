import { describe, expect, it } from 'vitest';
import { HOME_TITLE, TITLE_MAX, pageTitle, termTitle } from '../src/lib/seo';

describe('judul halaman', () => {
  it('beranda memakai judul berkata kunci', () => {
    expect(pageTitle()).toBe(HOME_TITLE);
    expect(HOME_TITLE.length).toBeLessThanOrEqual(TITLE_MAX);
  });

  it('kata kunci di depan, merek di belakang', () => {
    expect(pageTitle('Tentang, lisensi, dan disclaimer')).toBe('Tentang, lisensi, dan disclaimer | Pustaka AI');
  });

  it('memilih kandidat terlengkap yang masih muat', () => {
    expect(pageTitle(...termTitle('AI'))).toBe('Apa itu AI? Pengertian dan penjelasan | Pustaka AI');
    const long = 'Retrieval-augmented generation (RAG)';
    expect(pageTitle(...termTitle(long))).toBe(`Apa itu ${long}? | Pustaka AI`);
  });

  it('memakai kandidat terakhir bila tidak ada yang muat', () => {
    const veryLong = 'Judul yang sangat panjang sekali sehingga melewati batas enam puluh karakter';
    expect(pageTitle(...termTitle(veryLong))).toBe(`${veryLong} | Pustaka AI`);
  });
});
