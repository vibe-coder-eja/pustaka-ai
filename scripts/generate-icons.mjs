// Membuat ikon raster dari public/favicon.svg: favicon.ico (16, 32, 48 px), icon-192.png, icon-512.png.
// Jalankan ulang setelah favicon.svg berubah: node scripts/generate-icons.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import sharp from 'sharp'; // ikut terpasang sebagai dependensi Astro

const publicDir = new URL('../public/', import.meta.url);
const svg = readFileSync(new URL('favicon.svg', publicDir));
const png = (size) => sharp(svg, { density: Math.ceil((72 * size) / 64) * 2 }).resize(size, size).png({ compressionLevel: 9 }).toBuffer();

for (const size of [192, 512]) writeFileSync(new URL(`icon-${size}.png`, publicDir), await png(size));

// ICO berisi gambar PNG (didukung semua browser modern dan Windows Vista ke atas).
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map(png));
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = 6 + 16 * sizes.length;
const entries = sizes.map((size, i) => {
  const entry = Buffer.alloc(16);
  entry.writeUInt8(size, 0);
  entry.writeUInt8(size, 1);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(images[i].length, 8);
  entry.writeUInt32LE(offset, 12);
  offset += images[i].length;
  return entry;
});
writeFileSync(new URL('favicon.ico', publicDir), Buffer.concat([header, ...entries, ...images]));
console.log('Ikon dibuat: favicon.ico, icon-192.png, icon-512.png');
