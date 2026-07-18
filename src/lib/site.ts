export const SITE = {
  name: 'Pustaka Akal Imitasi',
  tagline: 'Catatan belajar teknologi, disusun untuk dibaca kembali.',
  author: 'Reza Syahputra',
  description: 'Pustaka terbuka berisi glosarium AI, referensi Hermes Agent, dan katalog model untuk belajar teknologi secara bertahap.',
  github: 'https://github.com/vibe-coder-eja',
  website: 'https://rezasyahputra.com',
  discussions: 'https://github.com/vibe-coder-eja/pustaka-akal-imitasi/discussions'
} as const;

export function withBase(base: string, path = ''): string {
  const cleanBase = `/${base.split('/').filter(Boolean).join('/')}/`;
  const cleanPath = path.replace(/^\/+/, '');
  return `${cleanBase}${cleanPath}`;
}
