import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readNoindexSlugs } from './src/lib/indexing.mjs';

// Entri berstatus catatan (belum berisi) dikeluarkan dari sitemap; halaman tetap dibangun dengan noindex.
// Halaman offline (cadangan service worker) juga noindex dan tidak masuk sitemap.
const noindexPaths = new Set([
  ...[...readNoindexSlugs(new URL('./src/content/istilah/', import.meta.url))].map((slug) => `/ensiklopedia/${slug}/`),
  '/offline/'
]);

export default defineConfig({
  site: 'https://pustakaai.xyz',
  base: '/',
  output: 'static',
  trailingSlash: 'always',
  // Glosarium lama dipecah menjadi entri ensiklopedia; tautan lama diarahkan ke beranda ensiklopedia.
  redirects: { '/buku/glosarium-agentic-ai': '/ensiklopedia/' },
  integrations: [sitemap({ filter: (page) => !noindexPaths.has(new URL(page).pathname) })],
  vite: {
    test: {
      environment: 'node',
      include: ['tests/**/*.test.ts']
    }
  }
});
