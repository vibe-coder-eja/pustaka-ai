import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import {
  TRACKS, dateToYear, formatMilestoneDate, isValidDate, placeMilestones, yearToPercent, type Milestone
} from '../src/lib/peta';

const root = path.resolve(import.meta.dirname, '..');
const milestones: Milestone[] = JSON.parse(readFileSync(path.join(root, 'src/data/peta/tonggak.json'), 'utf8'));
const trackIds = TRACKS.map((track) => track.id) as string[];

describe('tanggal dan skala', () => {
  it('memvalidasi tiga tingkat presisi tanggal', () => {
    for (const ok of ['1950', '1950-10', '2022-11-30']) expect(isValidDate(ok), ok).toBe(true);
    for (const bad of ['', '50', '1950-13', '1950-00', '2022-11-32', '2022/11/30', 'Oktober 1950']) expect(isValidDate(bad), bad).toBe(false);
  });

  it('mengonversi tanggal ke tahun desimal yang urut', () => {
    expect(dateToYear('2020')).toBe(2020.5);
    expect(dateToYear('2020-01')).toBeLessThan(dateToYear('2020-07'));
    expect(dateToYear('2020-07')).toBeLessThan(dateToYear('2021'));
    expect(dateToYear('2022-11-30')).toBeGreaterThan(dateToYear('2022-11'));
    expect(() => dateToYear('x')).toThrow();
  });

  it('memformat tanggal dalam bahasa Indonesia', () => {
    expect(formatMilestoneDate('1950')).toBe('1950');
    expect(formatMilestoneDate('1950-10')).toBe('Oktober 1950');
    expect(formatMilestoneDate('2022-11-30')).toBe('30 November 2022');
  });

  it('skala monoton, terjepit di 0–100, dan memperlebar tahun terkini', () => {
    expect(yearToPercent(1900)).toBe(0);
    expect(yearToPercent(2100)).toBe(100);
    let previous = -1;
    for (let year = 1950; year <= 2027; year += 0.5) {
      const percent = yearToPercent(year);
      expect(percent).toBeGreaterThanOrEqual(previous);
      previous = percent;
    }
    expect(yearToPercent(2026) - yearToPercent(2020)).toBeGreaterThan(yearToPercent(1990) - yearToPercent(1950));
  });
});

describe('placeMilestones', () => {
  const item = (id: string, date: string, track: Milestone['track'] = 'model'): Milestone => ({ id, date, track, title: id, summary: id, actors: [], sources: [], related: [] });

  it('menumpuk titik yang berdekatan pada satu jalur ke baris berbeda', () => {
    const placed = placeMilestones([item('a', '2023-01'), item('b', '2023-02'), item('c', '2023-03')]);
    expect(placed.map((p) => p.row).sort()).toEqual([0, 1, 2]);
  });

  it('memakai ulang baris bila jaraknya cukup dan tidak mencampur jalur', () => {
    const placed = placeMilestones([item('a', '1960'), item('b', '2020'), item('c', '2020', 'riset')]);
    expect(placed.find((p) => p.id === 'b')!.row).toBe(0);
    expect(placed.find((p) => p.id === 'c')!.row).toBe(0);
  });

  it('mengurutkan hasil menurut waktu', () => {
    const placed = placeMilestones([item('z', '2020'), item('a', '1999'), item('m', '2020-03', 'riset')]);
    expect(placed.map((p) => p.id)).toEqual(['a', 'm', 'z']);
  });
});

describe('data tonggak (src/data/peta/tonggak.json)', () => {
  it('memiliki cukup tonggak dan setiap jalur terwakili', () => {
    expect(milestones.length).toBeGreaterThanOrEqual(25);
    for (const track of TRACKS) expect(milestones.some((m) => m.track === track.id), track.id).toBe(true);
  });

  it('id unik berbentuk slug, tanggal valid, jalur valid', () => {
    const ids = new Set<string>();
    for (const m of milestones) {
      expect(m.id, m.id).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
      expect(ids.has(m.id), `id ganda: ${m.id}`).toBe(false);
      ids.add(m.id);
      expect(isValidDate(m.date), `${m.id}: ${m.date}`).toBe(true);
      expect(trackIds, m.id).toContain(m.track);
    }
  });

  it('setiap tonggak punya judul, ringkasan, pelaku, dan minimal satu sumber https', () => {
    for (const m of milestones) {
      expect(m.title.length, m.id).toBeGreaterThan(8);
      expect(m.summary.length, m.id).toBeGreaterThanOrEqual(60);
      expect(m.actors.length, m.id).toBeGreaterThan(0);
      expect(m.sources.length, m.id).toBeGreaterThan(0);
      for (const source of m.sources) {
        expect(source.title.length, m.id).toBeGreaterThan(5);
        expect(source.url, m.id).toMatch(/^https:\/\/[^\s]+$/);
      }
    }
  });

  it('seluruh entri terkait menunjuk istilah yang ada', () => {
    for (const m of milestones) {
      for (const slug of m.related) expect(existsSync(path.join(root, 'src/content/istilah', `${slug}.md`)), `${m.id} → ${slug}`).toBe(true);
    }
  });

  it('tidak memuat penanda privat atau path lokal', () => {
    const text = readFileSync(path.join(root, 'src/data/peta/tonggak.json'), 'utf8');
    expect(text).not.toMatch(/[A-Za-z]:\\Users\\|\/Users\/|\bYola\b|BEGIN [A-Z ]*PRIVATE KEY/);
  });
});
