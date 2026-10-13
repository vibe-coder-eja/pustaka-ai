import { readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { FORECAST_AXIS, forecastBar, yearToAxisPercent, type Pandangan, type PandanganSource } from '../src/lib/pandangan';

const data: Pandangan = JSON.parse(readFileSync(path.resolve(import.meta.dirname, '../src/data/peta/pandangan.json'), 'utf8'));

function allSources(): PandanganSource[] {
  return [
    ...data.prakiraan.map((item) => item.sumber),
    ...data.tanpaAngka.map((item) => item.sumber),
    ...data.sikap.kelompok.flatMap((group) => group.tokoh.map((item) => item.sumber)),
    ...data.kebijakan.usulan.flatMap((item) => item.posisi.map((position) => position.sumber)),
    data.survei.grace.sumber,
    data.survei.munk.sumber
  ];
}

describe('skala grafik perkiraan waktu', () => {
  it('memetakan tahun ke persen dan memotong di luar sumbu', () => {
    expect(yearToAxisPercent(FORECAST_AXIS.from)).toBe(0);
    expect(yearToAxisPercent(FORECAST_AXIS.to)).toBe(100);
    expect(yearToAxisPercent(2037.5)).toBe(50);
    expect(yearToAxisPercent(2116)).toBe(100);
    expect(yearToAxisPercent(2000)).toBe(0);
  });

  it('membentuk batang sesuai jenis perkiraan', () => {
    expect(forecastBar({ jenis: 'titik', dari: 2030 })).toMatchObject({ start: 20, end: 20, openStart: false, openEnd: false });
    expect(forecastBar({ jenis: 'rentang', dari: 2030, sampai: 2035 })).toMatchObject({ start: 20, end: 40, clipped: false });
    expect(forecastBar({ jenis: 'paling-cepat', dari: 2030 })).toMatchObject({ start: 20, end: 100, openEnd: true });
    expect(forecastBar({ jenis: 'sebelum', sampai: 2035 })).toMatchObject({ start: 0, end: 40, openStart: true });
    expect(forecastBar({ jenis: 'rentang', dari: 2037, sampai: 2116 }).clipped).toBe(true);
  });
});

describe('data peta pandangan (src/data/peta/pandangan.json)', () => {
  it('setiap perkiraan punya tanggal, definisi, sumber https, dan kolom tahun yang sesuai jenisnya', () => {
    const ids = data.prakiraan.map((item) => item.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const item of data.prakiraan) {
      expect(item.tanggal.length, item.id).toBeGreaterThan(3);
      expect(item.definisi.length, item.id).toBeGreaterThan(15);
      expect(item.label.length, item.id).toBeGreaterThan(3);
      expect(item.ringkasan.length, item.id).toBeGreaterThan(30);
      if (item.jenis === 'titik' || item.jenis === 'paling-cepat') expect(item.dari, item.id).toBeTypeOf('number');
      if (item.jenis === 'sebelum') expect(item.sampai, item.id).toBeTypeOf('number');
      if (item.jenis === 'rentang') expect(item.sampai!, item.id).toBeGreaterThan(item.dari!);
    }
  });

  it('mencakup tokoh yang disetujui untuk peta pandangan', () => {
    const names = JSON.stringify(data);
    for (const name of ['Amodei', 'Altman', 'Hassabis', 'Hinton', 'Kurzweil', 'Bengio', 'LeCun', 'Yudkowsky', 'Narayanan', 'Kapoor', '2.778', 'Munk']) {
      expect(names, name).toContain(name);
    }
  });

  it('semua sumber memakai https dan menandai jenisnya', () => {
    for (const source of allSources()) {
      expect(source.url, source.title).toMatch(/^https:\/\//);
      expect(source.title.length).toBeGreaterThan(5);
      expect(['primer', 'laporan']).toContain(source.jenis);
    }
  });

  it('spektrum sikap: kelompok tidak kosong dan tiap pernyataan bertanggal', () => {
    expect(data.sikap.kelompok.length).toBeGreaterThanOrEqual(4);
    for (const group of data.sikap.kelompok) {
      expect(group.tokoh.length, group.id).toBeGreaterThan(0);
      for (const entry of group.tokoh) {
        expect(entry.tanggal.length, entry.nama).toBeGreaterThan(3);
        expect(entry.pernyataan.length, entry.nama).toBeGreaterThan(40);
      }
    }
  });

  it('matriks kebijakan hanya memuat tokoh pada kolom dan sikap yang dikenal, tanpa duplikat', () => {
    expect(data.kebijakan.usulan.length).toBeGreaterThanOrEqual(5);
    for (const proposal of data.kebijakan.usulan) {
      const seen = new Set<string>();
      for (const position of proposal.posisi) {
        expect(data.kebijakan.kolom, `${proposal.id}/${position.tokoh}`).toContain(position.tokoh);
        expect(['mendukung', 'menolak', 'bersyarat']).toContain(position.sikap);
        expect(seen.has(position.tokoh), `${proposal.id}/${position.tokoh}`).toBe(false);
        seen.add(position.tokoh);
      }
    }
  });

  it('angka survei dan Munk Debate konsisten', () => {
    expect(data.survei.grace.responden).toBe(2778);
    const { sebelum, sesudah } = data.survei.munk;
    expect(sebelum.pro + sebelum.kontra).toBe(100);
    expect(sesudah.pro + sesudah.kontra).toBe(100);
    expect(data.survei.munk.catatan).toMatch(/resmi/);
  });

  it('tidak memuat penanda privat', () => {
    expect(JSON.stringify(data)).not.toMatch(/[A-Za-z]:\Users\|\bYola\b/);
  });
});
