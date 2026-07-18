import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const css = readFileSync(new URL('../src/styles/global.css', import.meta.url), 'utf8');
const layout = readFileSync(new URL('../src/layouts/BaseLayout.astro', import.meta.url), 'utf8');
const reader = readFileSync(new URL('../src/pages/buku/[slug].astro', import.meta.url), 'utf8');

describe('navigasi dan reader pada viewport sempit', () => {
  it('menyediakan kontrol tema di menu mobile dan menutup menu dengan Escape', () => {
    expect(layout).toContain('id="theme-toggle-mobile"');
    expect(layout).toContain("querySelectorAll('[data-theme-toggle]')");
    expect(layout).toMatch(/event\.key === 'Escape'[\s\S]*closeMenu\(\)/);
  });

  it('mencegah header memaksa lebar minimum di viewport 320px', () => {
    expect(css).toContain('.header-actions #theme-toggle{display:none}');
    expect(css).toContain('.brand strong{font-size:.95rem}');
    expect(css).toContain('@media (max-width: 360px)');
    expect(css).toContain('.brand span{display:none}');
  });

  it('menempatkan kontrol baca sebelum artikel dan tidak membuatnya fixed di mobile', () => {
    expect(reader.indexOf('class="reader-tools"')).toBeLessThan(reader.indexOf('id="book-content"'));
    expect(css).toContain('.reader-tools{position:static');
    expect(css).not.toContain('.reader-tools{position:fixed');
  });

  it('membuat penyimpanan inline reader fail-soft saat localStorage ditolak', () => {
    expect(reader).toMatch(/function saveProgress\(\)[\s\S]*try \{ localStorage\.setItem/);
    expect(reader).toMatch(/const setScale = \(delta\) => \{ try \{/);
  });
});
