// Service worker Pustaka AI: dukungan offline tingkat sedang.
// - Beranda, indeks ensiklopedia, A–Z, halaman offline, dan indeks pencarian disimpan saat dipasang.
// - Halaman yang pernah dibuka disimpan (maksimal MAX_PAGES) agar bisa dibaca ulang tanpa internet.
// - Halaman selalu diambil dari jaringan lebih dulu, jadi pembaca daring selalu melihat versi terbaru.
// Semua data hanya disimpan di Cache Storage browser pembaca; tidak ada yang dikirim ke server.
// Naikkan VERSION bila logika berkas ini berubah, agar cache lama dibersihkan.
const VERSION = 'v1';
const SHELL_CACHE = `pustaka-shell-${VERSION}`;
const PAGES_CACHE = `pustaka-pages-${VERSION}`;
const ASSETS_CACHE = `pustaka-assets-${VERSION}`;
const CACHES = [SHELL_CACHE, PAGES_CACHE, ASSETS_CACHE];
const MAX_PAGES = 200;
const OFFLINE_URL = '/offline/';
const SHELL_PAGES = ['/', '/ensiklopedia/', '/ensiklopedia/abjad/', OFFLINE_URL];
const SHELL_FILES = ['/search-index.json', '/site.webmanifest', '/favicon.svg', '/icon-192.png'];

/** Menentukan strategi untuk sebuah permintaan: 'page', 'asset', 'data', atau null (biarkan ke jaringan). */
function routeFor(url, request) {
  if (request.method !== 'GET' || url.origin !== self.location.origin) return null;
  if (url.pathname === '/sw.js') return null;
  if (request.mode === 'navigate') return 'page';
  if (url.pathname.startsWith('/_astro/')) return 'asset';
  if (/\.(?:png|svg|ico|webp|jpe?g|woff2?|webmanifest)$/.test(url.pathname)) return 'asset';
  if (url.pathname.endsWith('.json')) return 'data';
  return null;
}

/** Kunci cache halaman: tanpa query dan hash, agar satu halaman tersimpan sekali. */
function pageKey(url) {
  return `${url.origin}${url.pathname}`;
}

/** Aset /_astro/ (CSS dan JS berhash) yang dirujuk sebuah halaman HTML. */
function assetsIn(html) {
  return [...new Set([...html.matchAll(/(?:href|src)="(\/_astro\/[^"?#]+)[^"]*"/g)].map((match) => match[1]))];
}

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const shell = await caches.open(SHELL_CACHE);
    const assets = await caches.open(ASSETS_CACHE);
    await shell.addAll([...SHELL_PAGES, ...SHELL_FILES]);
    // Aset halaman inti ikut disimpan agar tampilannya utuh saat offline.
    for (const path of SHELL_PAGES) {
      const response = await shell.match(path);
      if (response) await assets.addAll(assetsIn(await response.text())).catch(() => {});
    }
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    for (const name of await caches.keys()) if (name.startsWith('pustaka-') && !CACHES.includes(name)) await caches.delete(name);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  const route = routeFor(url, event.request);
  if (route === 'page') event.respondWith(networkFirstPage(event.request, url));
  else if (route === 'asset') event.respondWith(cacheFirst(event.request));
  else if (route === 'data') event.respondWith(staleWhileRevalidate(event, url));
});

async function networkFirstPage(request, url) {
  try {
    const response = await fetch(request);
    if (response.ok && response.type === 'basic') {
      const cache = await caches.open(SHELL_PAGES.includes(url.pathname) ? SHELL_CACHE : PAGES_CACHE);
      await cache.put(pageKey(url), response.clone());
      if (!SHELL_PAGES.includes(url.pathname)) await trimPages(cache);
    }
    return response;
  } catch {
    return (await caches.match(pageKey(url), { ignoreSearch: true }))
      || (await caches.match(OFFLINE_URL))
      || new Response('Anda sedang offline.', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
  }
}

async function trimPages(cache) {
  const keys = await cache.keys();
  for (const key of keys.slice(0, Math.max(0, keys.length - MAX_PAGES))) await cache.delete(key);
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok && response.type === 'basic') (await caches.open(ASSETS_CACHE)).put(request, response.clone());
  return response;
}

async function staleWhileRevalidate(event, url) {
  const cache = await caches.open(SHELL_FILES.includes(url.pathname) ? SHELL_CACHE : ASSETS_CACHE);
  const cached = await cache.match(event.request);
  const refresh = fetch(event.request).then((response) => {
    if (response.ok && response.type === 'basic') return cache.put(event.request, response.clone()).then(() => response);
    return response;
  });
  if (cached) {
    event.waitUntil(refresh.catch(() => {}));
    return cached;
  }
  return refresh;
}
