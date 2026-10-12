import { readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { FRONTIER_CELL, type AgiFramework } from '../src/lib/agi-levels';

const framework: AgiFramework = JSON.parse(readFileSync(path.resolve(import.meta.dirname, '../src/data/peta/levels.json'), 'utf8'));

describe('kerangka Levels of AGI (src/data/peta/levels.json)', () => {
  it('mencantumkan sumber https', () => {
    expect(framework.sumber.url).toMatch(/^https:\/\/arxiv\.org\/abs\/2311\.02462$/);
    expect(framework.sumber.title).toContain('Levels of AGI');
  });

  it('memiliki tingkat kinerja 0–5 berurutan dengan dua kolom lengkap', () => {
    expect(framework.levels.map((level) => level.level)).toEqual([0, 1, 2, 3, 4, 5]);
    for (const level of framework.levels) {
      expect(level.nama.length, `level ${level.level}`).toBeGreaterThan(2);
      expect(level.kriteria.length, `level ${level.level}`).toBeGreaterThan(10);
      for (const column of ['sempit', 'umum'] as const) {
        const cell = level[column];
        expect(cell.label.length).toBeGreaterThan(5);
        expect(typeof cell.tercapai).toBe('boolean');
        if (cell.tercapai) expect(cell.contoh.length, `${level.level}/${column}`).toBeGreaterThan(0);
        else expect(cell.contoh, `${level.level}/${column}`).toEqual([]);
      }
    }
  });

  it('AI umum tingkat 2 ke atas belum tercapai menurut tabel, dan sel terdepan ada di tingkat 1', () => {
    for (const level of framework.levels.filter((item) => item.level >= 2)) expect(level.umum.tercapai, `level ${level.level}`).toBe(false);
    expect(framework.levels[FRONTIER_CELL.level][FRONTIER_CELL.column].tercapai).toBe(true);
    expect(framework.levels[5].umum.label).toContain('Superintelligence');
  });

  it('penilaian penulis menyebut tanggal agar tidak dibaca sebagai penilaian terkini', () => {
    expect(framework.penilaianPenulis).toMatch(/September 2023/);
  });

  it('tingkat otonomi 0–5, enam prinsip, dan sembilan definisi', () => {
    expect(framework.otonomi.map((item) => item.level)).toEqual([0, 1, 2, 3, 4, 5]);
    expect(framework.prinsip).toHaveLength(6);
    expect(framework.definisi).toHaveLength(9);
    const ids = framework.definisi.map((item) => item.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const item of framework.definisi) {
      expect(item.dikaitkan.length, item.id).toBeGreaterThan(3);
      expect(item.gagasan.length, item.id).toBeGreaterThan(20);
      expect(item.kritik.length, item.id).toBeGreaterThan(10);
    }
  });

  it('tidak memuat penanda privat', () => {
    expect(JSON.stringify(framework)).not.toMatch(/[A-Za-z]:\\Users\\|\bYola\b/);
  });
});
