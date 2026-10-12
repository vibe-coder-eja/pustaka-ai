import { parse as parseYaml } from 'yaml';

/* ---------- Fal AI ---------- */

export interface FalModel {
  id: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  license: string;
  updated: string;
  url: string;
}

interface RawFalModel {
  endpoint_id?: unknown;
  metadata?: Record<string, unknown>;
}

const clean = (value: unknown): string => String(value ?? '').replace(/\s+/g, ' ').trim();

export function normalizeFalModels(raw: unknown[]): FalModel[] {
  const seen = new Set<string>();
  const models: FalModel[] = [];
  for (const item of raw as RawFalModel[]) {
    const id = clean(item?.endpoint_id);
    const meta = item?.metadata ?? {};
    if (!id || seen.has(id)) continue;
    if (meta.status && meta.status !== 'active') continue;
    const license = clean(meta.license_type);
    if (license === 'private') continue;
    seen.add(id);
    models.push({
      id,
      name: clean(meta.display_name) || id,
      category: clean(meta.category) === 'unknown' || !clean(meta.category) ? 'lainnya' : clean(meta.category),
      description: clean(meta.description),
      tags: Array.isArray(meta.tags) ? meta.tags.map(clean).filter(Boolean) : [],
      license,
      updated: clean(meta.updated_at).slice(0, 10),
      url: `https://fal.ai/models/${id}`
    });
  }
  return models.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name) || a.id.localeCompare(b.id));
}

/* ---------- Nous Portal ---------- */

export interface NousModel {
  id: string;
  name: string;
  company: string;
  context: number;
  modality: string;
  inputPerMillion: number | null;
  outputPerMillion: number | null;
  expires: string;
}

interface RawNousModel {
  id?: unknown;
  name?: unknown;
  context_length?: unknown;
  architecture?: { modality?: unknown };
  pricing?: { prompt?: unknown; completion?: unknown };
  expiration_date?: unknown;
}

function perMillion(value: unknown): number | null {
  if (value === null || value === undefined || value === '') return null;
  const perToken = Number(value);
  if (!Number.isFinite(perToken) || perToken < 0) return null;
  return Math.round(perToken * 1e6 * 1e6) / 1e6;
}

export function normalizeNousModels(raw: unknown[]): NousModel[] {
  const seen = new Set<string>();
  const models: NousModel[] = [];
  for (const item of raw as RawNousModel[]) {
    const id = clean(item?.id);
    if (!id || seen.has(id)) continue;
    seen.add(id);
    models.push({
      id,
      name: clean(item.name) || id,
      company: id.includes('/') ? id.split('/')[0] : 'lainnya',
      context: Number(item.context_length) || 0,
      modality: clean(item.architecture?.modality) || '—',
      inputPerMillion: perMillion(item.pricing?.prompt),
      outputPerMillion: perMillion(item.pricing?.completion),
      expires: clean(item.expiration_date).slice(0, 10)
    });
  }
  return models.sort((a, b) => a.company.localeCompare(b.company) || a.id.localeCompare(b.id));
}

/* ---------- Skills Hermes (repo resmi) ---------- */

export type SkillTier = 'bawaan' | 'resmi-opsional';

export interface HermesSkill {
  name: string;
  category: string;
  tier: SkillTier;
  description: string;
  tags: string[];
  platforms: string[];
  path: string;
  url: string;
}

export interface SkillSource {
  /** Path relatif terhadap akar repo, mis. `skills/devops/foo/SKILL.md`. */
  path: string;
  text: string;
}

export const SKILLS_REPO = 'https://github.com/NousResearch/hermes-agent';

export function parseSkillFrontmatter(text: string): Record<string, unknown> | null {
  const match = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text.replace(/^﻿/, ''));
  if (!match) return null;
  try {
    const value = parseYaml(match[1]);
    return value && typeof value === 'object' ? (value as Record<string, unknown>) : null;
  } catch {
    return null;
  }
}

const asList = (value: unknown): string[] =>
  Array.isArray(value) ? value.map(clean).filter(Boolean) : typeof value === 'string' ? [clean(value)].filter(Boolean) : [];

export function buildSkill(source: SkillSource, commit: string): HermesSkill | null {
  const parts = source.path.split('/');
  const root = parts[0];
  if (root !== 'skills' && root !== 'optional-skills') return null;
  const meta = parseSkillFrontmatter(source.text);
  const name = clean(meta?.name);
  const description = clean(meta?.description);
  if (!meta || !name || !description) return null;
  const category = parts.length >= 4 ? parts[1] : 'umum';
  const hermes = (meta.metadata as { hermes?: { tags?: unknown } } | undefined)?.hermes;
  return {
    name,
    category,
    tier: root === 'skills' ? 'bawaan' : 'resmi-opsional',
    description,
    tags: asList(hermes?.tags),
    platforms: asList(meta.platforms),
    path: source.path,
    url: `${SKILLS_REPO}/blob/${commit}/${source.path}`
  };
}

export function buildSkills(sources: SkillSource[], commit: string, denylist: string[] = []): HermesSkill[] {
  const blocked = new Set(denylist);
  const skills: HermesSkill[] = [];
  const seen = new Set<string>();
  for (const source of sources) {
    const skill = buildSkill(source, commit);
    if (!skill || blocked.has(skill.name) || blocked.has(skill.path) || seen.has(skill.path)) continue;
    seen.add(skill.path);
    skills.push(skill);
  }
  return skills.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
}

/* ---------- Snapshot & rendering ---------- */

export interface SnapshotInfo {
  fetchedAt: string;
  source: string;
  count: number;
  commit?: string;
  companies?: number;
}

export function formatDateId(iso: string): string {
  return new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(iso));
}

const escapeMd = (value: string): string => value.replace(/[\\`*_[\]<>|]/g, (char) => `\\${char}`);

export function formatPrice(value: number | null): string {
  if (value === null) return '—';
  if (value === 0) return 'gratis';
  return `$${Number(value.toPrecision(4)).toString()}`;
}

export function renderNousMarkdown(models: NousModel[], snapshot: SnapshotInfo): string {
  const groups = new Map<string, NousModel[]>();
  for (const model of models) groups.set(model.company, [...(groups.get(model.company) ?? []), model]);
  const lines = [
    '# Model AI di Nous Portal',
    '',
    `**Total:** ${models.length} model dari ${groups.size} perusahaan`,
    '',
    `**Diakses pada:** ${formatDateId(snapshot.fetchedAt)}`,
    '',
    `**Sumber:** daftar model publik Nous Portal Inference API (\`${snapshot.source}\`)`,
    '',
    'Harga dalam dolar AS per satu juta token (masukan / keluaran), sebagaimana dilaporkan API pada tanggal akses. Harga, ketersediaan, dan jadwal pensiun model dapat berubah; periksa Nous Portal sebelum memakainya. Model yang bertanda "pensiun" dijadwalkan berhenti tersedia pada tanggal tersebut.',
    '',
    '---',
    '',
    '## Daftar perusahaan',
    '',
    ...[...groups].map(([company, items], index) => `${index + 1}. [${company}](#${company.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}) (${items.length} model)`),
    '',
    '---',
    ''
  ];
  for (const [company, items] of groups) {
    lines.push(`## ${company}`, '', '| Nama model | ID model | Konteks | Modalitas | Masukan / keluaran |', '|---|---|---:|---|---|');
    for (const model of items) {
      const retire = model.expires ? ` (pensiun ${model.expires})` : '';
      lines.push(`| ${escapeMd(model.name)}${retire} | \`${model.id}\` | ${model.context.toLocaleString('en-US')} | ${escapeMd(model.modality)} | ${formatPrice(model.inputPerMillion)} / ${formatPrice(model.outputPerMillion)} |`);
    }
    lines.push('', '---', '');
  }
  return `${lines.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd()}\n`;
}

export function renderSkillsMarkdown(skills: HermesSkill[], snapshot: SnapshotInfo, translations: Record<string, string> = {}): string {
  const groups = new Map<string, HermesSkill[]>();
  for (const skill of skills) groups.set(skill.category, [...(groups.get(skill.category) ?? []), skill]);
  const builtin = skills.filter((skill) => skill.tier === 'bawaan').length;
  const lines = [
    '# Katalog Skills Hermes Agent',
    '',
    `> Snapshot katalog: ${formatDateId(snapshot.fetchedAt)}${snapshot.commit ? ` · versi kode \`${snapshot.commit.slice(0, 7)}\`` : ''}. Hanya skill resmi dari repositori Hermes Agent milik Nous Research: ${builtin} skill bawaan dan ${skills.length - builtin} skill opsional resmi. Skill komunitas pihak ketiga dan skill pribadi tidak dimuat.`,
    '',
    '## Cara membaca',
    '',
    'Skills dikelompokkan berdasarkan bidang penggunaan. **Bawaan** berarti ikut terpasang bersama Hermes Agent; **Resmi opsional** berarti dirawat oleh Nous Research tetapi harus dipasang sendiri. Setiap entri menautkan ke kode sumbernya di GitHub agar dapat diperiksa sebelum dipakai. Nama skill dibiarkan sesuai aslinya; deskripsi diterjemahkan ke bahasa Indonesia. Skill resmi yang dirancang untuk menembus pengaman model atau perlindungan anti-bot tidak dimuat. Periksa dokumentasi Hermes Agent terbaru karena isi repositori terus berubah.',
    '',
    '## Daftar lengkap',
    ''
  ];
  for (const [category, items] of groups) {
    lines.push(`### ${category}`, '');
    for (const skill of items) {
      lines.push(`#### \`${skill.name}\``, '', `- **Deskripsi:** ${escapeMd(translations[skill.name] ?? skill.description)}`, `- **Tingkat:** ${skill.tier === 'bawaan' ? 'Bawaan' : 'Resmi opsional'}`);
      if (skill.platforms.length) lines.push(`- **Platform:** ${skill.platforms.map(escapeMd).join(', ')}`);
      if (skill.tags.length) lines.push(`- **Tag:** ${skill.tags.map(escapeMd).join(', ')}`);
      lines.push(`- **Sumber:** [${escapeMd(skill.path)}](${skill.url})`, '');
    }
  }
  return `${lines.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd()}\n`;
}
