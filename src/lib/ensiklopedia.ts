import { withBase } from './site';

const base = import.meta.env.BASE_URL;

export const ENSIKLOPEDIA_NAME = 'Ensiklopedia AI dan SI';
export const termUrl = (slug: string) => withBase(base, `ensiklopedia/${slug}/`);
export const categoryUrl = (slug: string) => withBase(base, `ensiklopedia/kategori/${slug}/`);
export const indexUrl = () => withBase(base, 'ensiklopedia/');
export const alphabetUrl = () => withBase(base, 'ensiklopedia/abjad/');
export const petaUrl = () => withBase(base, 'ensiklopedia/peta-si/');
export const tanggaUrl = () => withBase(base, 'ensiklopedia/tangga-evolusi/');
