import { describe, expect, it } from 'vitest';
import { assertPublicSafe, normalizeHermesCliMarkdown, preparePublicBook, sanitizePublicMarkdown, type PrivateMarkers } from '../src/lib/transform';

const markers: PrivateMarkers = { skills: ['skill-pribadi-contoh'], terms: ['Acme Rahasia'] };

describe('sanitizePublicMarkdown', () => {
  it('menghapus identitas, path lokal, metadata environment, dan workflow privat', () => {
    const source = `# Panduan
### Yola
Asisten milik Reza.
### Aman
Gunakan C:\\Users\\nama\\Documents\\Yola dan AIRTABLE_API_KEY.
#### \`skill-pribadi-contoh\`
- **Deskripsi:** Mencatat data Reza via OAuth.
#### \`maps\`
- **Deskripsi:** Peta umum.`;
    const result = sanitizePublicMarkdown(source, markers);
    expect(result).toContain('### Aman');
    expect(result).toContain('#### `maps`');
    expect(result).not.toMatch(/Yola|\bReza\b|C:\\Users|AIRTABLE_API_KEY|skill-pribadi-contoh|data pribadi/i);
  });
});

describe('assertPublicSafe', () => {
  it('gagal tertutup pada marker privat tanpa membocorkan nilai temuan', () => {
    expect(() => assertPublicSafe('Catatan Yola di C:\\Users\\rahasia', 'fixture.md')).toThrow('Konten publik tidak aman: fixture.md (2 kategori temuan).');
  });

  it('memakai penanda privat pemilik tanpa membocorkan nilainya', () => {
    expect(() => assertPublicSafe('Proyek Acme Rahasia selesai', 'x.md', markers)).toThrow('(1 kategori temuan)');
    expect(() => assertPublicSafe('Proyek Acme Rahasia selesai', 'x.md')).not.toThrow();
  });

  it('tidak salah menandai skill publik yang namanya mirip skill pribadi', () => {
    expect(() => assertPublicSafe('#### `skill-pribadi-contoh-pro`', 'x.md', markers)).not.toThrow();
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
