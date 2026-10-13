export const SITE = {
  name: 'Pustaka AI',
  tagline: 'Pahami AI, selangkah demi selangkah',
  author: 'Reza Syahputra',
  description: 'Ensiklopedia mini berbahasa Indonesia tentang kecerdasan buatan (AI, atau akal imitasi) dan superintelligence (SI), dilengkapi referensi Hermes Agent dan katalog model.',
  github: 'https://github.com/vibe-coder-eja',
  repo: 'https://github.com/vibe-coder-eja/pustaka-ai',
  website: 'https://rezasyahputra.com',
  discussions: 'https://github.com/vibe-coder-eja/pustaka-ai/discussions'
} as const;

export function withBase(base: string, path = ''): string {
  const segments = base.split('/').filter(Boolean);
  const cleanBase = segments.length ? `/${segments.join('/')}/` : '/';
  const cleanPath = path.replace(/^\/+/, '');
  return `${cleanBase}${cleanPath}`;
}
