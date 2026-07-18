export interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

export interface Preferences {
  theme: 'light' | 'dark' | 'system';
  fontScale: number;
}

const DEFAULT_PREFERENCES: Preferences = { theme: 'system', fontScale: 1 };

export function loadPreferences(storage: StorageLike): Preferences {
  try {
    const value = JSON.parse(storage.getItem('pustaka:preferences') ?? 'null');
    const theme = ['light', 'dark', 'system'].includes(value?.theme) ? value.theme : 'system';
    const fontScale = Number.isFinite(value?.fontScale) ? Math.min(1.2, Math.max(0.9, value.fontScale)) : 1;
    return { theme, fontScale };
  } catch {
    return { ...DEFAULT_PREFERENCES };
  }
}

export function savePreferences(storage: StorageLike, preferences: Preferences): void {
  try {
    storage.setItem('pustaka:preferences', JSON.stringify(preferences));
  } catch {
    // Penyimpanan dapat ditolak oleh mode privat, kebijakan browser, atau kuota.
  }
}

export function saveReadingProgress(storage: StorageLike, slug: string, percent: number, chapterId: string): void {
  const safePercent = Math.min(100, Math.max(0, Math.round(percent)));
  try {
    storage.setItem(`pustaka:progress:${slug}`, JSON.stringify({ percent: safePercent, chapterId }));
  } catch {
    // Kemajuan baca tetap berfungsi di memori halaman saat persistensi ditolak.
  }
}

export interface ReadingProgress {
  percent: number;
  chapterId: string;
}

export function loadReadingProgress(storage: StorageLike, slug: string): ReadingProgress {
  try {
    const value = JSON.parse(storage.getItem(`pustaka:progress:${slug}`) ?? 'null');
    if (!Number.isFinite(value?.percent) || typeof value?.chapterId !== 'string') return { percent: 0, chapterId: '' };
    return { percent: Math.min(100, Math.max(0, Math.round(value.percent))), chapterId: value.chapterId };
  } catch {
    return { percent: 0, chapterId: '' };
  }
}
