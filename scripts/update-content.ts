import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { preparePublicBook } from '../src/lib/transform';
import { loadPrivateMarkers } from './private-markers';

// Hanya untuk dua naskah yang berasal dari catatan lokal (glosarium dan Hermes CLI).
// Katalog Skills, model Nous Portal, dan Fal AI diambil dari sumber publik: lihat `npm run data:update`.
const args = process.argv.slice(2);
const sourceFlag = args.indexOf('--source-dir');
if (sourceFlag < 0 || !args[sourceFlag + 1]) {
  console.error('Penggunaan: npm run content:update -- --source-dir <folder-sumber>');
  process.exit(1);
}

const sourceDir = path.resolve(args[sourceFlag + 1]);
const projectDir = path.resolve(import.meta.dirname, '..');
const booksDir = path.join(projectDir, 'src', 'content', 'books');
const bookCopies = [
  ['glosarium-agentic-ai-website-modern.md', 'glosarium-agentic-ai.md'],
  ['Hermes CLI Command.md', 'hermes-cli.md']
] as const;

const markers = await loadPrivateMarkers();
const publicBooks = await Promise.all(bookCopies.map(async ([sourceName, targetName]) => {
  const text = await readFile(path.join(sourceDir, sourceName), 'utf8');
  return { targetName, content: preparePublicBook(sourceName, text, markers) };
}));

await mkdir(booksDir, { recursive: true });
for (const book of publicBooks) {
  await writeFile(path.join(booksDir, book.targetName), book.content, 'utf8');
}
console.log(`Konten diperbarui: ${publicBooks.length} naskah.`);
