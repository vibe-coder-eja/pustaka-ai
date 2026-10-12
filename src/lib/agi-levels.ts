export interface LevelCell {
  label: string;
  contoh: string[];
  /** Apakah sistem pada sel ini sudah ada, menurut tabel penulis. */
  tercapai: boolean;
}

export interface AgiLevel {
  level: number;
  nama: string;
  namaAsli: string;
  kriteria: string;
  sempit: LevelCell;
  umum: LevelCell;
}

export interface AutonomyLevel {
  level: number;
  nama: string;
  namaAsli: string;
  deskripsi: string;
  contoh: string[];
}

export interface AgiDefinition {
  id: string;
  nama: string;
  dikaitkan: string;
  gagasan: string;
  kritik: string;
}

export interface AgiFramework {
  sumber: { title: string; url: string };
  penilaianPenulis: string;
  levels: AgiLevel[];
  otonomi: AutonomyLevel[];
  prinsip: { judul: string; isi: string }[];
  definisi: AgiDefinition[];
}

export type Column = 'sempit' | 'umum';

export const COLUMN_LABELS: Record<Column, string> = {
  sempit: 'AI sempit (narrow)',
  umum: 'AI umum (general)'
};

/** Sel matriks yang dinilai penulis sebagai posisi model bahasa terdepan (per September 2023). */
export const FRONTIER_CELL = { level: 1, column: 'umum' as Column };

export function cellOf(level: AgiLevel, column: Column): LevelCell {
  return level[column];
}
