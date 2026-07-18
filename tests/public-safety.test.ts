import { describe, expect, it } from 'vitest';
import { scanPublicText } from '../src/lib/public-safety';

describe('release gate privasi dan kredensial', () => {
  it('memblokir bentuk kredensial tanpa mengembalikan nilainya', () => {
    const token = `ghp_${'A'.repeat(36)}`;
    const findings = scanPublicText(`API_TOKEN=${token}\n-----BEGIN PRIVATE KEY-----\nrahasia`, 'fixture.txt');
    expect(findings.map((finding) => finding.rule)).toEqual(expect.arrayContaining(['credential-assignment', 'private-key']));
    expect(JSON.stringify(findings)).not.toContain(token);
  });

  it('memblokir marker workflow dan path privat', () => {
    const findings = scanPublicText('Documents/Yola\nC:\\Users\\someone\\project\nALLOWED_USERS=12345678', 'fixture.txt');
    expect(findings.map((finding) => finding.rule)).toEqual(expect.arrayContaining(['private-workflow', 'local-user-path', 'credential-assignment']));
  });

  it('mengizinkan istilah edukasional serta atribusi publik yang disetujui', () => {
    const text = 'Token dan password adalah istilah keamanan. Reza Syahputra · https://github.com/vibe-coder-eja · https://rezasyahputra.com';
    expect(scanPublicText(text, 'fixture.txt')).toEqual([]);
  });
});
