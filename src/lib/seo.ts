import { SITE } from './site';

/** Batas panjang judul agar tidak terpotong di hasil pencarian (sekitar 60 karakter). */
export const TITLE_MAX = 60;
export const HOME_TITLE = `${SITE.name}: Ensiklopedia AI dan Superintelligence`;

const BRAND_SUFFIX = ` | ${SITE.name}`;

/**
 * Judul halaman: kata kunci di depan, merek di belakang.
 * Pilihan dicoba berurutan; yang pertama muat dalam TITLE_MAX dipakai,
 * dan pilihan terakhir selalu dipakai bila tidak ada yang muat.
 */
export function pageTitle(...candidates: Array<string | undefined>): string {
  const options = candidates.filter((value): value is string => Boolean(value?.trim())).map((value) => value.trim());
  if (!options.length) return HOME_TITLE;
  const fits = options.find((option) => option.length + BRAND_SUFFIX.length <= TITLE_MAX);
  return `${fits ?? options[options.length - 1]}${BRAND_SUFFIX}`;
}

/** Judul entri ensiklopedia, dirumuskan seperti pertanyaan yang biasa dicari pembaca. */
export function termTitle(term: string): string[] {
  return [`Apa itu ${term}? Pengertian dan penjelasan`, `Apa itu ${term}?`, term];
}
