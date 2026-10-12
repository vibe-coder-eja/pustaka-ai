import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { scanPublicText, type PublicSafetyFinding } from '../src/lib/public-safety';
import { loadPrivateMarkers } from './private-markers';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceRoots = ['src', 'public', '.github', 'scripts'];
const rootFiles = ['package.json', 'package-lock.json', 'astro.config.mjs', 'README.md', 'DESIGN.md', 'LICENSE', 'LICENSE-CONTENT'];
const allowedExtensions = new Set(['.ts', '.astro', '.css', '.md', '.json', '.mjs', '.yml', '.yaml', '.txt', '.svg', '.xml', '.html']);
const policyFiles = new Set([
  'src/lib/public-safety.ts',
  'src/lib/transform.ts',
  'scripts/verify-public-safety.ts',
  'scripts/private-markers.ts'
]);

const sourceFiles: string[] = [];
for (const root of sourceRoots) sourceFiles.push(...await walk(path.join(projectRoot, root)));
for (const file of rootFiles) {
  const absolute = path.join(projectRoot, file);
  if (await isFile(absolute)) sourceFiles.push(absolute);
}

const markers = await loadPrivateMarkers();
const ownerTerms = [...markers.terms, ...markers.skills];
const distRoot = path.join(projectRoot, 'dist');
if (!(await isDirectory(distRoot))) throw new Error('Folder dist belum tersedia; jalankan build sebelum security gate.');
const distFiles = await walk(distRoot);
const findings = [
  ...await scanFiles(sourceFiles, 'source'),
  ...await scanFiles(distFiles, 'dist')
];

if (findings.length) {
  console.error(`Security gate gagal (${findings.length} temuan; nilai dirahasiakan):`);
  for (const finding of findings) console.error(`- ${finding.rule} · ${finding.file}:${finding.line}`);
  process.exit(1);
}

console.log(`Security gate lulus: ${sourceFiles.length} file source/release dan ${distFiles.length} file dist, 0 temuan kredensial atau marker privat.`);

async function scanFiles(files: string[], phase: string): Promise<PublicSafetyFinding[]> {
  const findings: PublicSafetyFinding[] = [];
  for (const absolute of files) {
    const relative = path.relative(projectRoot, absolute).split(path.sep).join('/');
    if (policyFiles.has(relative) || !allowedExtensions.has(path.extname(absolute).toLowerCase())) continue;
    const text = await readFile(absolute, 'utf8');
    findings.push(...scanPublicText(text, `${phase}:${relative}`, ownerTerms));
  }
  return findings;
}

async function walk(root: string): Promise<string[]> {
  if (!(await isDirectory(root))) return [];
  const files: string[] = [];
  for (const entry of await readdir(root, { withFileTypes: true })) {
    const absolute = path.join(root, entry.name);
    if (entry.isDirectory()) files.push(...await walk(absolute));
    else if (entry.isFile()) files.push(absolute);
  }
  return files;
}

async function isFile(file: string) { try { return (await stat(file)).isFile(); } catch { return false; } }
async function isDirectory(dir: string) { try { return (await stat(dir)).isDirectory(); } catch { return false; } }
