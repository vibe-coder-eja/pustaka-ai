import { existsSync, readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { describe, expect, it } from 'vitest';

const publicDir = new URL('../public/', import.meta.url);
const manifest = JSON.parse(readFileSync(new URL('site.webmanifest', publicDir), 'utf8'));
const layout = readFileSync(new URL('../src/layouts/BaseLayout.astro', import.meta.url), 'utf8');

// public/sw.js adalah skrip klasik (bukan modul), jadi dijalankan di sandbox dengan `self` tiruan.
const origin = 'https://pustakaai.xyz';
const sw = runInNewContext(
  `${readFileSync(new URL('sw.js', publicDir), 'utf8')}\n;({ routeFor, pageKey, assetsIn, SHELL_PAGES, SHELL_FILES, MAX_PAGES, OFFLINE_URL })`,
  { self: { location: { origin }, addEventListener: () => {} }, URL }
);
const request = (init: Partial<{ method: string; mode: string }> = {}) => ({ method: 'GET', mode: 'cors', ...init });
const route = (path: string, init?: Partial<{ method: string; mode: string }>) => sw.routeFor(new URL(path, origin), request(init));

describe('manifest aplikasi web', () => {
  it('dapat dipasang sebagai aplikasi berdiri sendiri', () => {
    expect(manifest.display).toBe('standalone');
    expect(manifest.id).toBe('/');
    expect(manifest.start_url.startsWith(manifest.scope)).toBe(true);
    expect(manifest.name).toBeTruthy();
    expect(manifest.short_name.length).toBeLessThanOrEqual(12);
  });

  it('memiliki ikon 192 dan 512 px untuk tujuan any dan maskable, dan berkasnya ada', () => {
    for (const purpose of ['any', 'maskable']) {
      for (const size of ['192x192', '512x512']) {
        expect(manifest.icons.some((icon: any) => icon.purpose === purpose && icon.sizes === size), `${purpose} ${size}`).toBe(true);
      }
    }
    for (const icon of manifest.icons) expect(existsSync(new URL(`.${icon.src}`, publicDir)), icon.src).toBe(true);
  });
});

describe('service worker', () => {
  it('mendaftarkan service worker hanya pada build produksi', () => {
    expect(layout).toContain("import.meta.env.PROD ? withBase(base, 'sw.js') : ''");
    expect(layout).toContain('navigator.serviceWorker.register(serviceWorkerUrl)');
  });

  it('memilih strategi sesuai jenis permintaan', () => {
    expect(route('/ensiklopedia/ai/', { mode: 'navigate' })).toBe('page');
    expect(route('/_astro/BaseLayout.abc123.css')).toBe('asset');
    expect(route('/icon-192.png')).toBe('asset');
    expect(route('/search-index.json')).toBe('data');
    expect(route('/data/graf-konsep.json')).toBe('data');
  });

  it('tidak menangani permintaan non-GET, lintas origin, atau berkas service worker sendiri', () => {
    expect(route('/search-index.json', { method: 'POST' })).toBeNull();
    expect(sw.routeFor(new URL('https://arxiv.org/abs/1706.03762'), request({ mode: 'navigate' }))).toBeNull();
    expect(route('/sw.js')).toBeNull();
  });

  it('menyimpan halaman tanpa query dan membaca aset halaman', () => {
    expect(sw.pageKey(new URL('/katalog-fal/?q=flux#hasil', origin))).toBe(`${origin}/katalog-fal/`);
    expect(sw.assetsIn('<link href="/_astro/a.css"><script src="/_astro/b.js?v=1"></script><link href="/_astro/a.css">')).toEqual(['/_astro/a.css', '/_astro/b.js']);
  });

  it('menyimpan halaman inti termasuk halaman offline, dengan batas halaman yang wajar', () => {
    expect(sw.SHELL_PAGES).toContain(sw.OFFLINE_URL);
    expect(sw.SHELL_PAGES).toContain('/');
    expect(sw.SHELL_FILES).toContain('/search-index.json');
    expect(sw.MAX_PAGES).toBeGreaterThan(0);
    expect(sw.MAX_PAGES).toBeLessThanOrEqual(500);
  });
});
