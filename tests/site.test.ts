import { describe, expect, it } from 'vitest';
import { SITE, withBase } from '../src/lib/site';

describe('withBase', () => {
  it('base akar tidak menghasilkan URL protokol-relatif', () => {
    expect(withBase('/')).toBe('/');
    expect(withBase('/', 'favicon.svg')).toBe('/favicon.svg');
    expect(withBase('/', '/ensiklopedia/')).toBe('/ensiklopedia/');
    expect(withBase('', 'tentang/')).toBe('/tentang/');
  });

  it('base subfolder dinormalisasi', () => {
    expect(withBase('/pustaka')).toBe('/pustaka/');
    expect(withBase('pustaka/', 'tentang/')).toBe('/pustaka/tentang/');
  });
});

describe('SITE', () => {
  it('memakai nama dan tagline merek Pustaka AI', () => {
    expect(SITE.name).toBe('Pustaka AI');
    expect(SITE.tagline).toBe('Pahami AI, selangkah demi selangkah');
  });
});
