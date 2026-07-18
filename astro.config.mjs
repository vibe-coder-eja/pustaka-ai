import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vibe-coder-eja.github.io',
  base: '/pustaka-akal-imitasi/',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: {
    test: {
      environment: 'node',
      include: ['tests/**/*.test.ts']
    }
  }
});
