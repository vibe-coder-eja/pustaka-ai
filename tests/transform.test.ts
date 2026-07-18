import { describe, expect, it } from 'vitest';
import { assertPublicSafe, normalizeCatalogRows, normalizeHermesCliMarkdown, preparePublicBook, sanitizePublicMarkdown, sanitizeSkillsCatalog } from '../src/lib/transform';

describe('sanitizeSkillsCatalog', () => {
  it('menghapus snapshot mesin dan prasyarat rahasia sambil mempertahankan katalog per kategori', () => {
    const source = `# Glosarium Skills Hermes Agent

> Profil Hermes: \`default\`
> Total terdeteksi: **1 skills**

## Ringkasan status
- Aktif/enabled di konfigurasi profil saat ini: **1**
- \`AIRTABLE_API_KEY\` wajib

## Daftar lengkap
### productivity
#### \`airtable\`
- **Deskripsi:** Kelola data Airtable.
- **Status:** Enabled
- **Readiness:** \`available\`
- **Sumber:** \`local\`
- **Lokasi SKILL.md:** \`C:\\Users\\nama\\skills\\airtable\\SKILL.md\`
`;
    const result = sanitizeSkillsCatalog(source, '17 Juli 2026');
    expect(result).toContain('Snapshot katalog: 17 Juli 2026');
    expect(result).toContain('### productivity');
    expect(result).toContain('#### `airtable`');
    expect(result).toContain('Kelola data Airtable.');
    expect(result).not.toMatch(/default|Enabled|Readiness|AIRTABLE_API_KEY|C:\\Users|Lokasi SKILL/i);
  });
});

describe('sanitizePublicMarkdown', () => {
  it('menghapus identitas, path lokal, metadata environment, dan workflow privat', () => {
    const source = `# Panduan
### Yola
Asisten milik Reza.
### Aman
Gunakan C:\\Users\\nama\\Documents\\Yola dan AIRTABLE_API_KEY.
#### \`personal-finance-tracking\`
- **Deskripsi:** Track Reza's personal expenses via WhatsApp OAuth.
#### \`maps\`
- **Deskripsi:** Peta umum.`;
    const result = sanitizePublicMarkdown(source);
    expect(result).toContain('### Aman');
    expect(result).toContain('#### `maps`');
    expect(result).not.toMatch(/Yola|\bReza\b|C:\\Users|AIRTABLE_API_KEY|personal-finance-tracking|personal expenses/i);
  });
});

describe('assertPublicSafe', () => {
  it('gagal tertutup pada marker privat tanpa membocorkan nilai temuan', () => {
    expect(() => assertPublicSafe('Catatan Yola di C:\\Users\\rahasia', 'fixture.md')).toThrow('Konten publik tidak aman: fixture.md (2 kategori temuan).');
  });

  it('mengizinkan kata edukasional token dan password tanpa nilai kredensial', () => {
    expect(() => assertPublicSafe('Token dan password harus disimpan secara aman.', 'aman.md')).not.toThrow();
  });
});

describe('preparePublicBook', () => {
  it('menormalisasi marker CLI dan menyaring setiap buku sebelum publikasi', () => {
    const cli = preparePublicBook('Hermes CLI Command.md', '── Session ──\n  /handoff <platform>');
    expect(cli).toContain('## Session');
    expect(cli).toContain('```text\n/handoff <platform>\n```');

    const glossary = preparePublicBook('glosarium-agentic-ai-website-modern.md', '# Glosarium\n### Yola\nMilik Reza.\n### Agent\nDefinisi.');
    expect(glossary).toContain('### Agent');
    expect(glossary).not.toMatch(/Yola|Reza/);
  });
});

describe('normalizeCatalogRows', () => {
  it('memetakan kolom Excel dan membuang hanya baris kosong', () => {
    const rows = [
      [30, '3d-to-3d', 'hunyuan/v3', 'https://fal.ai/models/a', 'Deskripsi', 'tag-a,tag-b'],
      [null, null, null, null, null, null]
    ];
    expect(normalizeCatalogRows(rows)).toEqual([
      { page: 30, category: '3d-to-3d', model: 'hunyuan/v3', url: 'https://fal.ai/models/a', description: 'Deskripsi', tags: 'tag-a,tag-b' }
    ]);
  });
});

describe('normalizeHermesCliMarkdown', () => {
  it('mengubah pemisah bagian menjadi heading tanpa membuang perintah', () => {
    const source = '── Session ──\n    /new - Start\n  ── Info ──\n    /help - Help';
    const result = normalizeHermesCliMarkdown(source);
    expect(result).toContain('# Referensi Perintah Hermes CLI');
    expect(result).toContain('## Session');
    expect(result).toContain('/new - Start');
    expect(result).toContain('## Info');
  });

  it('membungkus perintah sebagai teks literal agar placeholder sudut tidak menjadi HTML', () => {
    const result = normalizeHermesCliMarkdown('── Session ──\n  /handoff <platform>');
    expect(result).toContain('```text\n/handoff <platform>\n```');
  });
});
