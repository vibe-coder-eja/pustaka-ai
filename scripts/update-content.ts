import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import ExcelJS from 'exceljs';
import { assertPublicSafe, normalizeCatalogRows, preparePublicBook, sanitizeSkillsCatalog } from '../src/lib/transform';

const args = process.argv.slice(2);
const sourceFlag = args.indexOf('--source-dir');
if (sourceFlag < 0 || !args[sourceFlag + 1]) {
  console.error('Penggunaan: npm run content:update -- --source-dir <folder-sumber>');
  process.exit(1);
}

const sourceDir = path.resolve(args[sourceFlag + 1]);
const projectDir = path.resolve(import.meta.dirname, '..');
const booksDir = path.join(projectDir, 'src', 'content', 'books');
const dataDir = path.join(projectDir, 'src', 'data');
const bookCopies = [
  ['glosarium-agentic-ai-website-modern.md', 'glosarium-agentic-ai.md'],
  ['Hermes CLI Command.md', 'hermes-cli.md'],
  ['nous-portal-models.md', 'nous-portal-models.md']
] as const;

const publicBooks = await Promise.all(bookCopies.map(async ([sourceName, targetName]) => {
  const text = await readFile(path.join(sourceDir, sourceName), 'utf8');
  return { targetName, content: preparePublicBook(sourceName, text) };
}));

const skillsSource = await readFile(path.join(sourceDir, 'glosarium-skills-hermes.md'), 'utf8');
const skillsContent = sanitizeSkillsCatalog(skillsSource, '17 Juli 2026');
assertPublicSafe(skillsContent, 'katalog-skills-hermes.md');

const workbook = new ExcelJS.Workbook();
await workbook.xlsx.readFile(path.join(sourceDir, 'Daftar AI Models dari Fal AI.xlsx'));
const sheet = workbook.worksheets[0];
if (!sheet) throw new Error('Workbook tidak memiliki sheet.');
const rawRows: unknown[][] = [];
sheet.eachRow((row, rowNumber) => {
  if (rowNumber === 1) return;
  rawRows.push(Array.from({ length: 6 }, (_, index) => row.getCell(index + 1).value));
});
const catalog = normalizeCatalogRows(rawRows);

await mkdir(booksDir, { recursive: true });
await mkdir(dataDir, { recursive: true });
for (const book of publicBooks) {
  await writeFile(path.join(booksDir, book.targetName), book.content, 'utf8');
}
await writeFile(path.join(booksDir, 'katalog-skills-hermes.md'), skillsContent, 'utf8');
await writeFile(path.join(dataDir, 'fal-models.json'), `${JSON.stringify(catalog, null, 2)}\n`, 'utf8');
console.log(`Konten diperbarui: 4 buku dan ${catalog.length} model Fal AI.`);
