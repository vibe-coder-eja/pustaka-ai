import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import {
  buildSkills, normalizeFalModels, normalizeNousModels, renderNousMarkdown, renderSkillsMarkdown,
  type SkillSource, type SnapshotInfo
} from '../src/lib/catalog';
import { assertPublicSafe } from '../src/lib/transform';
import { loadPrivateMarkers } from './private-markers';

const TARGETS = ['skills', 'nous', 'fal'] as const;
type Target = (typeof TARGETS)[number];

const arg = process.argv[2] ?? 'all';
if (arg !== 'all' && !TARGETS.includes(arg as Target)) {
  console.error('Penggunaan: npm run data:update -- [skills|nous|fal|all]');
  process.exit(1);
}
const targets = arg === 'all' ? [...TARGETS] : [arg as Target];

const projectDir = path.resolve(import.meta.dirname, '..');
const dataDir = path.join(projectDir, 'src', 'data');
const booksDir = path.join(projectDir, 'src', 'content', 'books');
const snapshotsFile = path.join(dataDir, 'snapshots.json');

const REPO = 'NousResearch/hermes-agent';
const NOUS_URL = 'https://inference-api.nousresearch.com/v1/models';
const FAL_URL = 'https://api.fal.ai/v1/models';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/** fetch dengan percobaan ulang untuk 429 dan 5xx; menghormati Retry-After. */
async function fetchRetry(url: string, init: RequestInit = {}): Promise<Response> {
  let last: Response | undefined;
  for (let attempt = 0; attempt < 8; attempt++) {
    last = await fetch(url, { ...init, signal: AbortSignal.timeout(60_000) });
    if (last.status !== 429 && last.status < 500) break;
    const wait = Number(last.headers.get('retry-after')) || 2 ** attempt * 2;
    console.warn(`  ${last.status} dari ${new URL(url).host}, mencoba lagi dalam ${wait} detik`);
    await sleep(wait * 1000);
  }
  if (!last?.ok) throw new Error(`Gagal mengambil ${new URL(url).host}${new URL(url).pathname}: HTTP ${last?.status}`);
  return last;
}

async function readSnapshots(): Promise<Record<string, SnapshotInfo>> {
  try { return JSON.parse(await readFile(snapshotsFile, 'utf8')); } catch { return {}; }
}

async function writeJson(name: string, value: unknown) {
  // Array besar ditulis satu rekaman per baris: ringkas, namun diff di PR tetap terbaca.
  const text = Array.isArray(value)
    ? `[\n${value.map((item) => `  ${JSON.stringify(item)}`).join(',\n')}\n]\n`
    : `${JSON.stringify(value, null, 2)}\n`;
  await writeFile(path.join(dataDir, name), text, 'utf8');
}

async function readJson<T>(name: string, fallback: T): Promise<T> {
  try { return JSON.parse(await readFile(path.join(dataDir, name), 'utf8')); } catch { return fallback; }
}

async function updateFal(snapshots: Record<string, SnapshotInfo>) {
  console.log('Fal AI: mengambil katalog model aktif…');
  const headers: Record<string, string> = process.env.FAL_KEY ? { Authorization: `Key ${process.env.FAL_KEY}` } : {};
  const raw: unknown[] = [];
  let cursor = '';
  for (;;) {
    const url = `${FAL_URL}?limit=100&status=active${cursor ? `&cursor=${encodeURIComponent(cursor)}` : ''}`;
    const body = await (await fetchRetry(url, { headers })).json() as { models?: unknown[]; has_more?: boolean; next_cursor?: string };
    raw.push(...(body.models ?? []));
    if (!body.has_more || !body.next_cursor) break;
    cursor = body.next_cursor;
    await sleep(1200);
  }
  const models = normalizeFalModels(raw);
  if (models.length < 500) throw new Error(`Katalog Fal hanya ${models.length} model; dibatalkan agar data lama tidak tertimpa.`);
  await writeJson('fal-models.json', models);
  snapshots.fal = { fetchedAt: new Date().toISOString(), source: FAL_URL, count: models.length };
  console.log(`  ${models.length} model Fal AI.`);
}

async function updateNous(snapshots: Record<string, SnapshotInfo>) {
  console.log('Nous Portal: mengambil daftar model…');
  const body = await (await fetchRetry(NOUS_URL)).json() as { data?: unknown[] };
  const models = normalizeNousModels(body.data ?? []);
  if (models.length < 50) throw new Error(`Nous Portal hanya ${models.length} model; dibatalkan.`);
  const snapshot: SnapshotInfo = {
    fetchedAt: new Date().toISOString(), source: 'inference-api.nousresearch.com/v1/models',
    count: models.length, companies: new Set(models.map((model) => model.company)).size
  };
  const markdown = renderNousMarkdown(models, snapshot);
  assertPublicSafe(markdown, 'nous-portal-models.md', await loadPrivateMarkers());
  await writeFile(path.join(booksDir, 'nous-portal-models.md'), markdown, 'utf8');
  snapshots.nous = snapshot;
  console.log(`  ${models.length} model dari ${snapshot.companies} perusahaan.`);
}

async function updateSkills(snapshots: Record<string, SnapshotInfo>) {
  console.log('Skills Hermes: mengambil dari repositori resmi…');
  const headers: Record<string, string> = { Accept: 'application/vnd.github+json', 'User-Agent': 'pustaka-ai-data-update' };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  const { sha } = await (await fetchRetry(`https://api.github.com/repos/${REPO}/commits/main`, { headers })).json() as { sha: string };
  const tree = await (await fetchRetry(`https://api.github.com/repos/${REPO}/git/trees/${sha}?recursive=1`, { headers })).json() as { tree: { path: string; type: string }[]; truncated?: boolean };
  if (tree.truncated) throw new Error('Daftar file repositori terpotong oleh GitHub API.');
  const files = tree.tree
    .filter((entry) => entry.type === 'blob' && /^(?:skills|optional-skills)\/.+\/SKILL\.md$/.test(entry.path))
    .map((entry) => entry.path);

  const sources: SkillSource[] = [];
  let next = 0;
  await Promise.all(Array.from({ length: 8 }, async () => {
    while (next < files.length) {
      const file = files[next++];
      const response = await fetchRetry(`https://raw.githubusercontent.com/${REPO}/${sha}/${file}`);
      sources.push({ path: file, text: await response.text() });
    }
  }));

  const denylist = await readJson<Record<string, string>>('skills-denylist.json', {});
  const translations = await readJson<Record<string, string>>('skills-id.json', {});
  const skills = buildSkills(sources, sha, Object.keys(denylist));
  const skipped = files.length - skills.length;
  if (skills.length < 50) throw new Error(`Hanya ${skills.length} skill terbaca; dibatalkan.`);
  const snapshot: SnapshotInfo = {
    fetchedAt: new Date().toISOString(), source: `github.com/${REPO}`, count: skills.length, commit: sha
  };
  const markdown = renderSkillsMarkdown(skills, snapshot, translations);
  assertPublicSafe(markdown, 'katalog-skills-hermes.md', await loadPrivateMarkers());
  await writeFile(path.join(booksDir, 'katalog-skills-hermes.md'), markdown, 'utf8');
  await writeJson('hermes-skills.json', skills);
  snapshots.skills = snapshot;
  const untranslated = skills.filter((skill) => !translations[skill.name]).length;
  console.log(`  ${skills.length} skill (commit ${sha.slice(0, 7)}), ${skipped} dikecualikan/dilewati, ${untranslated} belum diterjemahkan.`);
}

await mkdir(dataDir, { recursive: true });
await mkdir(booksDir, { recursive: true });
const snapshots = await readSnapshots();
for (const target of targets) {
  if (target === 'fal') await updateFal(snapshots);
  if (target === 'nous') await updateNous(snapshots);
  if (target === 'skills') await updateSkills(snapshots);
}
await writeJson('snapshots.json', snapshots);
console.log('Selesai.');
