import { describe, expect, it } from 'vitest';
import { extractChapters, renderBookMarkdown, slugifyHeading } from '../src/lib/content';

describe('slugifyHeading', () => {
  it('membuat slug stabil dari heading beraksen dan tanda baca', () => {
    expect(slugifyHeading('  Arsitektur & Étika AI: Dasar  ')).toBe('arsitektur-etika-ai-dasar');
  });
});

describe('extractChapters', () => {
  it('membuat ID unik dan mengabaikan heading di dalam pagar kode', () => {
    const markdown = '# Judul\n\n## Dasar AI\nTeks\n\n```md\n## Bukan Bab\n```\n\n## Dasar AI';
    expect(extractChapters(markdown)).toEqual([
      { depth: 2, title: 'Dasar AI', id: 'dasar-ai' },
      { depth: 2, title: 'Dasar AI', id: 'dasar-ai-2' }
    ]);
  });
});

describe('renderBookMarkdown', () => {
  it('menautkan heading ke ID bab stabil serta mempertahankan tabel', async () => {
    const html = await renderBookMarkdown('## Etika AI\n\n| A | B |\n|---|---|\n| 1 | 2 |');
    expect(html).toContain('<h2 id="etika-ai" tabindex="-1">Etika AI</h2>');
    expect(html).toContain('<table>');
  });

  it('membuang HTML mentah dan atribut event berbahaya', async () => {
    const html = await renderBookMarkdown('<script>alert(1)</script><img src="x" onerror="alert(2)"><svg onload="alert(3)"></svg>');
    expect(html).not.toMatch(/<script|<img|<svg|onerror|onload/i);
    expect(html).not.toContain('alert(1)');
  });

  it('menolak protokol URL berbahaya dan event pada tag yang diizinkan', async () => {
    const html = await renderBookMarkdown('[JS](javascript:alert(1))\n\n[Data](data:text/html,<script>alert(2)</script>)\n\n<a href="https://example.com" onclick="alert(3)">Aman</a>');
    expect(html).not.toMatch(/javascript:|data:|onclick|<script/i);
    expect(html).toContain('<a href="https://example.com">Aman</a>');
  });

  it('mempertahankan heading, tabel, code fence, dan tautan aman', async () => {
    const html = await renderBookMarkdown('## Bab\n\n| A |\n|---|\n| B |\n\n```ts\nconst aman = true;\n```\n\n[Relatif](/panduan) [HTTPS](https://example.com)');
    expect(html).toContain('<h2 id="bab" tabindex="-1">Bab</h2>');
    expect(html).toContain('<table>');
    expect(html).toContain('<code class="language-ts">');
    expect(html).toContain('<a href="/panduan">Relatif</a>');
    expect(html).toContain('<a href="https://example.com">HTTPS</a>');
  });
});
