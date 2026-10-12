import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { NO_PRIVATE_MARKERS, type PrivateMarkers } from '../src/lib/transform';

export const PRIVATE_MARKERS_FILE = path.resolve(import.meta.dirname, '..', '.private-markers.json');

/**
 * Membaca penanda privat pemilik dari `.private-markers.json` (di-gitignore).
 * Bentuk: { "skills": ["nama-skill"], "terms": ["nama orang atau perusahaan"] }.
 * Bila berkas tidak ada (mis. di CI), hanya aturan generik yang berlaku.
 */
export async function loadPrivateMarkers(): Promise<PrivateMarkers> {
  try {
    const value = JSON.parse(await readFile(PRIVATE_MARKERS_FILE, 'utf8'));
    const list = (input: unknown) => (Array.isArray(input) ? input.map(String).filter(Boolean) : []);
    return { skills: list(value.skills), terms: list(value.terms) };
  } catch {
    return NO_PRIVATE_MARKERS;
  }
}
