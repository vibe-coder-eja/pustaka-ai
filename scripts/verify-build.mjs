import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const dist = new URL('../dist/', import.meta.url);
const root = dist.pathname.replace(/^\/(?:[A-Za-z]:)/, (value) => value.slice(1));
const base = '/';
const required = [
  'index.html', '404.html', 'katalog-fal/index.html', 'tentang/index.html',
  'ensiklopedia/index.html', 'ensiklopedia/abjad/index.html', 'ensiklopedia/peta-si/index.html', 'ensiklopedia/tangga-evolusi/index.html', 'referensi/index.html',
  'ensiklopedia/ai/index.html', 'buku/glosarium-agentic-ai/index.html', 'buku/hermes-cli/index.html',
  'buku/katalog-skills-hermes/index.html', 'buku/nous-portal-models/index.html',
  'robots.txt', 'sitemap-index.xml', 'search-index.json', 'data/fal-models.json', 'data/graf-konsep.json'
];
const MAX_HTML_BYTES = 400_000;
const failures = [];
for (const path of required) if (!statSafe(join(root, path))) failures.push(`Artefak wajib hilang: ${path}`);

const htmlFiles = walk(root).filter((path) => path.endsWith('.html'));
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  if (/http-equiv="refresh"/i.test(html)) { // halaman redirect statis tidak memerlukan metadata penuh
    const target = /http-equiv="refresh"[^>]*url=([^"]+)"/i.exec(html)?.[1] ?? '';
    if (!target.startsWith(base)) failures.push(`Redirect keluar base pada ${relative(root, file)}: ${target}`);
    else if (!statSafe(join(root, target.slice(base.length), 'index.html'))) failures.push(`Redirect menuju halaman yang tidak ada pada ${relative(root, file)}: ${target}`);
    continue;
  }
  if (statSync(file).size > MAX_HTML_BYTES) failures.push(`HTML terlalu besar (${statSync(file).size} byte, batas ${MAX_HTML_BYTES}): ${relative(root, file)}`);
  if (!/<html lang="id"/.test(html)) failures.push(`Bahasa dokumen tidak ada: ${relative(root, file)}`);
  if (!/<meta name="description"/.test(html)) failures.push(`Meta description tidak ada: ${relative(root, file)}`);
  if (!/<link rel="canonical"/.test(html)) failures.push(`Canonical tidak ada: ${relative(root, file)}`);
  if (/<a\b[^>]*\bdownload(?:\s|=|>)/i.test(html)) failures.push(`UI download terdeteksi: ${relative(root, file)}`);
  for (const match of html.matchAll(/(?:href|src)="([^"#?]+)(?:[?#][^"]*)?"/g)) {
    const url = match[1];
    if (/^(?:https?:|mailto:|tel:|data:|javascript:)/.test(url)) continue;
    if (url.startsWith('/') && !url.startsWith(base)) { failures.push(`URL keluar base pada ${relative(root, file)}: ${url}`); continue; }
    if (!url.startsWith(base)) continue;
    const target = decodeURIComponent(url.slice(base.length));
    const candidates = target.endsWith('/') ? [join(root, target, 'index.html')] : [join(root, target), join(root, target, 'index.html')];
    if (!candidates.some(statSafe)) failures.push(`Tautan internal rusak pada ${relative(root, file)}: ${url}`);
  }
}
const posix = (file) => relative(root, file).split(/[\\/]/).join('/');
const termPages = htmlFiles.filter((file) => /^ensiklopedia\/[^/]+\/index\.html$/.test(posix(file)) && !['ensiklopedia/abjad/index.html', 'ensiklopedia/peta-si/index.html', 'ensiklopedia/tangga-evolusi/index.html'].includes(posix(file)));
if (termPages.length < 100) failures.push(`Halaman istilah terlalu sedikit: ${termPages.length}`);
for (const file of termPages) {
  if (!readFileSync(file, 'utf8').includes('application/ld+json')) failures.push(`JSON-LD tidak ada: ${relative(root, file)}`);
}
// Data grafik konsep disajikan terpisah dari HTML peta-si; keduanya harus memuat simpul yang sama.
try {
  const graphData = JSON.parse(readFileSync(join(root, 'data/graf-konsep.json'), 'utf8'));
  const petaHtml = readFileSync(join(root, 'ensiklopedia/peta-si/index.html'), 'utf8');
  const svgIds = [...petaHtml.matchAll(/class="g-node[^"]*" data-id="([^"]+)"/g)].map((match) => match[1]).sort();
  const dataIds = graphData.nodes.map((node) => node.id).sort();
  if (svgIds.length < 100) failures.push(`Simpul grafik konsep terlalu sedikit: ${svgIds.length}`);
  if (svgIds.join() !== dataIds.join()) failures.push(`Simpul SVG peta-si (${svgIds.length}) tidak sama dengan data/graf-konsep.json (${dataIds.length})`);
} catch (error) {
  failures.push(`data/graf-konsep.json tidak valid: ${error.message}`);
}
const catalogHtml = readFileSync(join(root, 'katalog-fal/index.html'), 'utf8');
const staticRows = (catalogHtml.match(/class="model-card"/g) || []).length;
if (staticRows > 24) failures.push(`DOM katalog awal tidak bounded: ${staticRows} kartu`);
if (!statSafe(join(root, 'sitemap-0.xml'))) failures.push('Sitemap konten tidak dibuat.');

if (failures.length) {
  console.error(`Verifikasi build gagal (${failures.length}):\n- ${failures.join('\n- ')}`);
  process.exit(1);
}
console.log(`Verifikasi build lulus: ${htmlFiles.length} HTML (${termPages.length} halaman istilah), ${required.length} artefak wajib, ${staticRows} baris katalog awal, seluruh URL internal memakai base ${base}.`);

function statSafe(path) { try { return statSync(path).isFile(); } catch { return false; } }
function walk(dir) { return readdirSync(dir).flatMap((name) => { const path = join(dir, name); return statSync(path).isDirectory() ? walk(path) : [path]; }); }
