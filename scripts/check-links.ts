import { readFile } from 'node:fs/promises';
import path from 'node:path';

// Memeriksa semua URL sumber di data peta. Situs yang menolak pembaca otomatis (403/429) atau timeout
// dilaporkan sebagai "perlu cek manual", bukan kegagalan. Dijalankan manual: `npm run check:links`.
const file = path.resolve(import.meta.dirname, '..', 'src', 'data', 'peta', 'tonggak.json');
const items = JSON.parse(await readFile(file, 'utf8')) as { id: string; sources: { url: string }[] }[];
const urls = [...new Set(items.flatMap((item) => item.sources.map((source) => source.url)))];

let failed = 0;
const manual: string[] = [];
await Promise.all(urls.map(async (url) => {
  try {
    const response = await fetch(url, { redirect: 'follow', signal: AbortSignal.timeout(25_000), headers: { 'User-Agent': 'Mozilla/5.0 (pustaka-akal-imitasi link check)' } });
    if (response.status === 403 || response.status === 429) manual.push(`${response.status} ${url}`);
    else if (!response.ok && response.status !== 202) { failed++; console.error(`GAGAL ${response.status} ${url}`); }
  } catch (error) {
    // Timeout atau galat jaringan bersifat ambigu: laporkan untuk dicek ulang, bukan gagal.
    manual.push(`${(error as Error).name} ${url}`);
  }
}));

console.log(`${urls.length} URL diperiksa, ${failed} gagal, ${manual.length} perlu cek manual (situs menolak pembaca otomatis).`);
for (const line of manual) console.log(`  ? ${line}`);
process.exit(failed ? 1 : 0);
