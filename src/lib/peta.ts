export type TrackId = 'riset' | 'model' | 'keselamatan' | 'kebijakan';

export interface TrackDef {
  id: TrackId;
  label: string;
  description: string;
}

export const TRACKS: TrackDef[] = [
  { id: 'riset', label: 'Riset dan gagasan', description: 'Makalah, konsep, dan pengakuan ilmiah yang membentuk bidang ini.' },
  { id: 'model', label: 'Model dan kemampuan', description: 'Sistem AI yang menandai lonjakan kemampuan.' },
  { id: 'keselamatan', label: 'Keselamatan dan risiko', description: 'Gagasan tentang AI melampaui manusia, risiko, dan teknik penyelarasan.' },
  { id: 'kebijakan', label: 'Kebijakan dan tata kelola', description: 'Pernyataan lembaga, surat terbuka, kesepakatan, regulasi, dan standar.' }
];

export interface Source {
  title: string;
  url: string;
}

export interface Milestone {
  id: string;
  /** `YYYY`, `YYYY-MM`, atau `YYYY-MM-DD`. */
  date: string;
  track: TrackId;
  title: string;
  summary: string;
  /** Tokoh dan lembaga yang terlibat. */
  actors: string[];
  sources: Source[];
  /** Slug entri ensiklopedia yang terkait. */
  related: string[];
}

const DATE_PATTERN = /^(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?$/;

export function isValidDate(value: string): boolean {
  const match = DATE_PATTERN.exec(value);
  if (!match) return false;
  const month = match[2] ? Number(match[2]) : 1;
  const day = match[3] ? Number(match[3]) : 1;
  return month >= 1 && month <= 12 && day >= 1 && day <= 31;
}

/** Tahun desimal untuk penempatan di sumbu; tanggal yang kurang presisi jatuh di tengah rentangnya. */
export function dateToYear(value: string): number {
  const match = DATE_PATTERN.exec(value);
  if (!match) throw new Error(`Format tanggal tidak valid: ${value}`);
  const year = Number(match[1]);
  if (!match[2]) return year + 0.5;
  const month = Number(match[2]);
  if (!match[3]) return year + (month - 0.5) / 12;
  return year + (month - 1 + (Number(match[3]) - 0.5) / 31) / 12;
}

const MONTHS = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

export function formatMilestoneDate(value: string): string {
  const match = DATE_PATTERN.exec(value);
  if (!match) return value;
  if (!match[2]) return match[1];
  const month = MONTHS[Number(match[2]) - 1];
  return match[3] ? `${Number(match[3])} ${month} ${match[1]}` : `${month} ${match[1]}`;
}

/** Skala sumbu tidak linear: dekade awal dipadatkan, tahun-tahun terkini diperlebar. */
export const SCALE_STOPS: ReadonlyArray<readonly [year: number, percent: number]> = [
  [1950, 0], [1990, 9], [2010, 22], [2020, 50], [2027, 100]
];

export function yearToPercent(year: number, stops = SCALE_STOPS): number {
  if (year <= stops[0][0]) return stops[0][1];
  for (let i = 1; i < stops.length; i++) {
    const [y1, p1] = stops[i];
    if (year <= y1) {
      const [y0, p0] = stops[i - 1];
      return p0 + ((year - y0) / (y1 - y0)) * (p1 - p0);
    }
  }
  return stops[stops.length - 1][1];
}

export interface PlacedMilestone extends Milestone {
  percent: number;
  row: number;
}

/**
 * Menempatkan tonggak pada jalurnya masing-masing. Titik yang terlalu dekat
 * ditumpuk ke baris berikutnya agar tidak saling menutupi.
 */
export function placeMilestones(items: Milestone[], minGapPercent = 2.2): PlacedMilestone[] {
  const placed: PlacedMilestone[] = [];
  for (const track of TRACKS) {
    const lane = items
      .filter((item) => item.track === track.id)
      .map((item) => ({ item, year: dateToYear(item.date) }))
      .sort((a, b) => a.year - b.year);
    const rowEnds: number[] = [];
    for (const { item, year } of lane) {
      const percent = yearToPercent(year);
      let row = rowEnds.findIndex((end) => percent - end >= minGapPercent);
      if (row === -1) row = rowEnds.length;
      rowEnds[row] = percent;
      placed.push({ ...item, percent: Math.round(percent * 100) / 100, row });
    }
  }
  return placed.sort((a, b) => dateToYear(a.date) - dateToYear(b.date) || a.id.localeCompare(b.id));
}

export const AXIS_TICKS = [1950, 1970, 1990, 2000, 2010, 2015, 2020, 2025];
