export const SITE = {
  name: 'Pustaka Akal Imitasi',
  tagline: 'Ensiklopedia mini kecerdasan buatan dan superintelligence, dalam bahasa Indonesia.',
  author: 'Reza Syahputra',
  description: 'Ensiklopedia mini berbahasa Indonesia tentang kecerdasan buatan (AI, atau akal imitasi) dan superintelligence (SI), dilengkapi referensi Hermes Agent dan katalog model.',
  github: 'https://github.com/vibe-coder-eja',
  repo: 'https://github.com/vibe-coder-eja/pustaka-akal-imitasi',
  website: 'https://rezasyahputra.com',
  discussions: 'https://github.com/vibe-coder-eja/pustaka-akal-imitasi/discussions'
} as const;

export function withBase(base: string, path = ''): string {
  const cleanBase = `/${base.split('/').filter(Boolean).join('/')}/`;
  const cleanPath = path.replace(/^\/+/, '');
  return `${cleanBase}${cleanPath}`;
}
