import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pustakaai.xyz',
  base: '/',
  output: 'static',
  trailingSlash: 'always',
  // Glosarium lama dipecah menjadi entri ensiklopedia; tautan lama diarahkan ke beranda ensiklopedia.
  redirects: { '/buku/glosarium-agentic-ai': '/ensiklopedia/' },
  integrations: [sitemap()],
  vite: {
    test: {
      environment: 'node',
      include: ['tests/**/*.test.ts']
    }
  }
});
