import { describe, expect, it } from 'vitest';
import { loadPreferences, loadReadingProgress, savePreferences, saveReadingProgress } from '../src/lib/state';

class MemoryStorage {
  values = new Map<string, string>();
  getItem(key: string) { return this.values.get(key) ?? null; }
  setItem(key: string, value: string) { this.values.set(key, value); }
}

class ThrowingStorage {
  getItem(): string | null { throw new Error('storage blocked'); }
  setItem(): void { throw new Error('storage blocked'); }
}

describe('loadPreferences', () => {
  it('memulihkan nilai aman saat penyimpanan rusak', () => {
    const storage = new MemoryStorage();
    storage.setItem('pustaka:preferences', '{rusak');
    expect(loadPreferences(storage)).toEqual({ theme: 'system', fontScale: 1 });
  });
});

describe('savePreferences', () => {
  it('tidak melempar saat penyimpanan tidak tersedia', () => {
    expect(() => savePreferences(new ThrowingStorage(), { theme: 'dark', fontScale: 1 })).not.toThrow();
  });
});

describe('saveReadingProgress', () => {
  it('membatasi kemajuan ke 0–100 dan menyimpan bab terakhir', () => {
    const storage = new MemoryStorage();
    saveReadingProgress(storage, 'buku-ai', 120, 'etika-ai');
    expect(JSON.parse(storage.getItem('pustaka:progress:buku-ai')!)).toEqual({ percent: 100, chapterId: 'etika-ai' });
  });

  it('tidak melempar saat penyimpanan tidak tersedia', () => {
    expect(() => saveReadingProgress(new ThrowingStorage(), 'buku-ai', 50, 'bab')).not.toThrow();
  });
});

describe('loadReadingProgress', () => {
  it('mengembalikan progres aman dan menolak payload penyimpanan yang rusak', () => {
    const storage = new MemoryStorage();
    storage.setItem('pustaka:progress:buku-ai', JSON.stringify({ percent: -20, chapterId: 42 }));
    expect(loadReadingProgress(storage, 'buku-ai')).toEqual({ percent: 0, chapterId: '' });
    storage.setItem('pustaka:progress:buku-ai', '{rusak');
    expect(loadReadingProgress(storage, 'buku-ai')).toEqual({ percent: 0, chapterId: '' });
  });
});
