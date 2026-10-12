import { describe, expect, it } from 'vitest';
import {
  buildSkill, buildSkills, formatPrice, normalizeFalModels, normalizeNousModels, parseSkillFrontmatter,
  renderNousMarkdown, renderSkillsMarkdown, type SnapshotInfo
} from '../src/lib/catalog';

const snapshot: SnapshotInfo = { fetchedAt: '2026-10-12T15:00:00.000Z', source: 'contoh', count: 1, commit: 'abcdef1234567890' };

describe('normalizeFalModels', () => {
  const raw = [
    { endpoint_id: 'fal-ai/zeta', metadata: { display_name: 'Zeta', category: 'text-to-image', description: '  Buat   gambar ', status: 'active', tags: ['cepat'], license_type: 'commercial', updated_at: '2026-09-01T10:00:00Z' } },
    { endpoint_id: 'fal-ai/alpha', metadata: { display_name: 'Alpha', category: 'unknown', status: 'active' } },
    { endpoint_id: 'fal-ai/lama', metadata: { display_name: 'Lama', category: 'text-to-image', status: 'deprecated' } },
    { endpoint_id: 'fal-ai/pribadi', metadata: { display_name: 'Pribadi', category: 'text-to-image', status: 'active', license_type: 'private' } },
    { endpoint_id: 'fal-ai/zeta', metadata: { display_name: 'Duplikat', category: 'text-to-image', status: 'active' } },
    { metadata: { display_name: 'Tanpa ID' } }
  ];

  it('menyaring yang usang, privat, duplikat, dan tanpa ID, lalu mengurutkan', () => {
    const models = normalizeFalModels(raw);
    expect(models.map((model) => model.id)).toEqual(['fal-ai/alpha', 'fal-ai/zeta']);
  });

  it('merapikan teks, memetakan kategori tak dikenal, dan membentuk URL', () => {
    const [alpha, zeta] = normalizeFalModels(raw);
    expect(alpha.category).toBe('lainnya');
    expect(zeta).toMatchObject({ name: 'Zeta', description: 'Buat gambar', tags: ['cepat'], updated: '2026-09-01', url: 'https://fal.ai/models/fal-ai/zeta' });
  });
});

describe('normalizeNousModels', () => {
  it('mengubah harga per token menjadi per juta token dan mengelompokkan per perusahaan', () => {
    const [model] = normalizeNousModels([
      { id: 'anthropic/claude-x', name: 'Anthropic: X', context_length: 200000, architecture: { modality: 'text->text' }, pricing: { prompt: '0.0000001000', completion: '0.0000005' }, expiration_date: '2027-01-02T00:00:00Z' }
    ]);
    expect(model).toMatchObject({ company: 'anthropic', context: 200000, inputPerMillion: 0.1, outputPerMillion: 0.5, expires: '2027-01-02' });
  });

  it('menangani harga kosong atau tidak valid tanpa melempar galat', () => {
    const [model] = normalizeNousModels([{ id: 'x/y', pricing: { prompt: '-1', completion: null } }]);
    expect(model.inputPerMillion).toBeNull();
    expect(model.outputPerMillion).toBeNull();
    expect(formatPrice(null)).toBe('—');
    expect(formatPrice(0)).toBe('gratis');
    expect(formatPrice(0.1)).toBe('$0.1');
    expect(formatPrice(15)).toBe('$15');
  });
});

describe('skills resmi Hermes', () => {
  const doc = (name: string, description: string) => `---\nname: ${name}\ndescription: "${description}"\nplatforms: [linux, macos]\nmetadata:\n  hermes:\n    tags: [satu, dua]\n---\n# Isi`;

  it('membaca frontmatter YAML dan menolak dokumen tanpa frontmatter', () => {
    expect(parseSkillFrontmatter(doc('a', 'b'))).toMatchObject({ name: 'a', description: 'b' });
    expect(parseSkillFrontmatter('# tanpa frontmatter')).toBeNull();
    expect(parseSkillFrontmatter('---\n: [rusak\n---')).toBeNull();
  });

  it('menentukan tingkat dari folder dan kategori dari path', () => {
    const builtin = buildSkill({ path: 'skills/devops/docker/SKILL.md', text: doc('docker', 'Kelola Docker') }, 'abc');
    const optional = buildSkill({ path: 'optional-skills/mlops/peft/SKILL.md', text: doc('peft', 'Fine-tune') }, 'abc');
    expect(builtin).toMatchObject({ tier: 'bawaan', category: 'devops', tags: ['satu', 'dua'], platforms: ['linux', 'macos'] });
    expect(builtin?.url).toBe('https://github.com/NousResearch/hermes-agent/blob/abc/skills/devops/docker/SKILL.md');
    expect(optional?.tier).toBe('resmi-opsional');
  });

  it('hanya menerima skill dari dua folder resmi dan membuang yang tanpa nama atau deskripsi', () => {
    expect(buildSkill({ path: 'community/x/SKILL.md', text: doc('x', 'y') }, 'abc')).toBeNull();
    expect(buildSkill({ path: 'skills/a/b/SKILL.md', text: '---\nname: b\n---' }, 'abc')).toBeNull();
  });

  it('menghormati daftar tolak (nama atau path) dan tidak menggandakan entri', () => {
    const sources = [
      { path: 'skills/a/ok/SKILL.md', text: doc('ok', 'Aman') },
      { path: 'skills/a/ok/SKILL.md', text: doc('ok', 'Aman') },
      { path: 'skills/a/jahat/SKILL.md', text: doc('jahat', 'Ditolak') },
      { path: 'optional-skills/b/lain/SKILL.md', text: doc('lain', 'Ditolak lewat path') }
    ];
    expect(buildSkills(sources, 'abc', ['jahat', 'optional-skills/b/lain/SKILL.md']).map((skill) => skill.name)).toEqual(['ok']);
  });
});

describe('render katalog', () => {
  it('Nous: membuat tabel per perusahaan, menandai pensiun, dan meloloskan karakter tabel', () => {
    const models = normalizeNousModels([
      { id: 'a/m1', name: 'A | Satu', context_length: 1000, architecture: { modality: 'text->text' }, pricing: { prompt: '0.000001', completion: '0.000002' }, expiration_date: '2027-03-04T00:00:00Z' },
      { id: 'b/m2', name: 'B', context_length: 2000 }
    ]);
    const md = renderNousMarkdown(models, snapshot);
    expect(md).toContain('**Total:** 2 model dari 2 perusahaan');
    expect(md).toContain('12 Oktober 2026');
    expect(md).toContain('## a');
    expect(md).toContain('A \\| Satu (pensiun 2027-03-04)');
    expect(md).toContain('$1 / $2');
  });

  it('Skills: memakai terjemahan bila ada, mengelompokkan kategori, dan menautkan sumber', () => {
    const skills = buildSkills([{ path: 'skills/devops/docker/SKILL.md', text: '---\nname: docker\ndescription: Manage <containers>\n---' }], 'abcdef1234567890');
    const md = renderSkillsMarkdown(skills, snapshot, { docker: 'Kelola kontainer.' });
    expect(md).toContain('### devops');
    expect(md).toContain('#### `docker`');
    expect(md).toContain('- **Deskripsi:** Kelola kontainer.');
    expect(md).toContain('versi kode `abcdef1`');
    expect(md).toContain('[skills/devops/docker/SKILL.md](https://github.com/NousResearch/hermes-agent/blob/abcdef1234567890/skills/devops/docker/SKILL.md)');
    expect(renderSkillsMarkdown(skills, snapshot)).toContain('Manage \\<containers\\>');
  });
});
