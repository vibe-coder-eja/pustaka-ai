import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vibe-coder-eja.github.io',
  base: '/pustaka-akal-imitasi/',
  output: 'static',
  trailingSlash: 'always',
  // Glosarium lama dipecah menjadi entri ensiklopedia; tautan lama diarahkan ke beranda ensiklopedia.
  redirects: { '/buku/glosarium-agentic-ai': '/pustaka-akal-imitasi/ensiklopedia/' },
  integrations: [sitemap()],
  vite: {
    test: {
      environment: 'node',
      include: ['tests/**/*.test.ts']
    }
  }
});
