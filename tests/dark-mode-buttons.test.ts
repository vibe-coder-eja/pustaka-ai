import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const css = readFileSync(new URL('../src/styles/global.css', import.meta.url), 'utf8');

describe('kontras tombol pada dark mode', () => {
  it('membatasi warna teks tombol utama agar tidak menimpa tombol secondary', () => {
    expect(css).toContain(":root[data-theme='dark'] .button:not(.secondary)");
    expect(css).not.toContain(":root[data-theme='dark'] .button {");
  });
});
