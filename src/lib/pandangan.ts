export type SourceKind = 'primer' | 'laporan';

export interface PandanganSource {
  title: string;
  url: string;
  jenis: SourceKind;
}

export type ForecastKind = 'titik' | 'rentang' | 'paling-cepat' | 'sebelum';

export interface Forecast {
  id: string;
  tokoh: string;
  lembaga: string;
  /** Tanggal pernyataan, sudah berupa teks yang siap tampil. */
  tanggal: string;
  /** Definisi yang dipakai pada pernyataan ini; angka tahun tidak sebanding tanpa definisi. */
  definisi: string;
  jenis: ForecastKind;
  dari?: number;
  sampai?: number;
  label: string;
  ringkasan: string;
  sumber: PandanganSource;
}

export interface NoDateStatement {
  tokoh: string;
  tanggal: string;
  ringkasan: string;
  sumber: PandanganSource;
}

export interface StanceEntry {
  nama: string;
  tanggal: string;
  pernyataan: string;
  sumber: PandanganSource;
}

export interface StanceGroup {
  id: string;
  judul: string;
  tokoh: StanceEntry[];
}

export type PolicyStance = 'mendukung' | 'menolak' | 'bersyarat';

export const POLICY_STANCE_LABELS: Record<PolicyStance, string> = {
  mendukung: 'Mendukung',
  menolak: 'Menolak',
  bersyarat: 'Bersyarat'
};

export interface PolicyPosition {
  tokoh: string;
  sikap: PolicyStance;
  ringkasan: string;
  sumber: PandanganSource;
}

export interface PolicyProposal {
  id: string;
  judul: string;
  penjelasan: string;
  posisi: PolicyPosition[];
}

export interface Pandangan {
  diperiksaPada: string;
  catatan: string;
  prakiraan: Forecast[];
  tanpaAngka: NoDateStatement[];
  sikap: { kriteria: string; kelompok: StanceGroup[]; belumDitempatkan: string };
  kebijakan: { catatan: string; kolom: string[]; usulan: PolicyProposal[] };
  survei: {
    judul: string;
    grace: { responden: number; terbit: string; ringkasan: { label: string; nilai: string }[]; sumber: PandanganSource };
    munk: {
      judul: string;
      waktu: string;
      pro: string[];
      kontra: string[];
      sebelum: { pro: number; kontra: number };
      sesudah: { pro: number; kontra: number };
      catatan: string;
      sumber: PandanganSource;
    };
  };
}

/** Sumbu tahun grafik perkiraan waktu. */
export const FORECAST_AXIS = { from: 2025, to: 2050, ticks: [2025, 2030, 2035, 2040, 2045, 2050] } as const;

export function yearToAxisPercent(year: number): number {
  const { from, to } = FORECAST_AXIS;
  return Math.min(100, Math.max(0, ((year - from) / (to - from)) * 100));
}

export interface ForecastBar {
  /** Posisi kiri dan kanan dalam persen sumbu. Untuk `titik`, keduanya sama. */
  start: number;
  end: number;
  /** Ujung terbuka: panah di sisi kiri atau kanan. */
  openStart: boolean;
  openEnd: boolean;
  /** Ujung kanan melampaui sumbu dan dipotong. */
  clipped: boolean;
}

export function forecastBar(item: Pick<Forecast, 'jenis' | 'dari' | 'sampai'>): ForecastBar {
  const { to } = FORECAST_AXIS;
  switch (item.jenis) {
    case 'titik': {
      const at = yearToAxisPercent(item.dari!);
      return { start: at, end: at, openStart: false, openEnd: false, clipped: false };
    }
    case 'rentang':
      return { start: yearToAxisPercent(item.dari!), end: yearToAxisPercent(item.sampai!), openStart: false, openEnd: false, clipped: item.sampai! > to };
    case 'paling-cepat':
      return { start: yearToAxisPercent(item.dari!), end: 100, openStart: false, openEnd: true, clipped: false };
    case 'sebelum':
      return { start: 0, end: yearToAxisPercent(item.sampai!), openStart: true, openEnd: false, clipped: false };
  }
}

export const SOURCE_KIND_LABELS: Record<SourceKind, string> = {
  primer: 'sumber primer',
  laporan: 'laporan media'
};
