const PRIVATE_LINE = /(?:\bEnvironment variable\b|\brequired_environment_variables\b|\b[A-Z][A-Z0-9_]{2,}_(?:API_)?KEY\b|[A-Z]:\\Users\\|\/Users\/[^/]+\/|Documents[\\/]Yola)/i;
const FORBIDDEN_PUBLIC_MARKERS = [
  /\b(?:Yola|Reza(?: Syahputra)?)\b/i,
  /(?:[A-Z]:\\Users\\|\/Users\/[^/]+\/|Documents[\\/]Yola)/i,
  /(?:\bEnvironment variable\b|\brequired_environment_variables\b|\b[A-Z][A-Z0-9_]{2,}_(?:API_)?KEY\b)/i
] as const;

/**
 * Penanda privat khusus pemilik (nama skill pribadi, nama orang atau perusahaan).
 * Disimpan di berkas lokal yang tidak ikut repositori, bukan di kode publik.
 */
export interface PrivateMarkers {
  skills: string[];
  terms: string[];
}

export const NO_PRIVATE_MARKERS: PrivateMarkers = { skills: [], terms: [] };

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function skillMatcher(markers: PrivateMarkers): RegExp | null {
  const names = markers.skills.filter(Boolean).map(escapeRegExp);
  return names.length ? new RegExp(`^(?:${names.join('|')})$`, 'i') : null;
}

function termMatcher(markers: PrivateMarkers): RegExp | null {
  const terms = [...markers.terms, ...markers.skills].filter(Boolean).map(escapeRegExp);
  return terms.length ? new RegExp(`(?<![\\w-])(?:${terms.join('|')})(?![\\w-])`, 'i') : null;
}

export function sanitizePublicMarkdown(source: string, markers: PrivateMarkers = NO_PRIVATE_MARKERS): string {
  const privateSkill = skillMatcher(markers);
  const output: string[] = [];
  let skippedHeadingDepth = 0;
  let skipCliEntry = false;

  for (const originalLine of source.replace(/^﻿/, '').split(/\r?\n/)) {
    const heading = /^(#{1,6})\s+(.+?)\s*$/.exec(originalLine);
    const markdownSkill = /^####\s+`([^`]+)`\s*$/.exec(originalLine);
    const cliSkill = /^\s*\/([a-z0-9-]+)\b/i.exec(originalLine);

    if (skippedHeadingDepth) {
      if (!heading || heading[1].length > skippedHeadingDepth) continue;
      skippedHeadingDepth = 0;
    }
    if (skipCliEntry) {
      if (!cliSkill && !/^\s*─{2}/.test(originalLine)) continue;
      skipCliEntry = false;
    }
    if (heading && heading[1].length === 3 && /^Yola\b/i.test(heading[2])) {
      skippedHeadingDepth = 3;
      continue;
    }
    if (markdownSkill && privateSkill?.test(markdownSkill[1])) {
      skippedHeadingDepth = 4;
      continue;
    }
    if (cliSkill && privateSkill?.test(cliSkill[1])) {
      skipCliEntry = true;
      continue;
    }
    if (PRIVATE_LINE.test(originalLine)) continue;

    output.push(originalLine
      .replace(/\bYola\b/gi, 'asisten')
      .replace(/\bReza(?: Syahputra)?\b/gi, 'pengguna'));
  }

  return `${output.join('\n').replace(/\n{3,}/g, '\n\n').trim()}\n`;
}

export function assertPublicSafe(source: string, label: string, markers: PrivateMarkers = NO_PRIVATE_MARKERS): void {
  const extra = termMatcher(markers);
  const findings = FORBIDDEN_PUBLIC_MARKERS.filter((pattern) => pattern.test(source)).length + (extra?.test(source) ? 1 : 0);
  if (findings > 0) {
    throw new Error(`Konten publik tidak aman: ${label} (${findings} kategori temuan).`);
  }
}

export function normalizeHermesCliMarkdown(source: string, markers: PrivateMarkers = NO_PRIVATE_MARKERS): string {
  const output = ['# Referensi Perintah Hermes CLI', ''];
  let fenceOpen = false;

  for (const line of sanitizePublicMarkdown(source, markers).trimEnd().split(/\r?\n/)) {
    const section = /^\s*─{2}\s*(.+?)\s*─{2}\s*$/.exec(line);
    if (section) {
      if (fenceOpen) output.push('```', '');
      output.push(`## ${section[1].trim()}`, '', '```text');
      fenceOpen = true;
      continue;
    }
    if (!fenceOpen) {
      output.push('```text');
      fenceOpen = true;
    }
    output.push(line.trimStart());
  }

  if (fenceOpen) output.push('```');
  return `${output.join('\n').trim()}\n`;
}

export function preparePublicBook(sourceName: string, source: string, markers: PrivateMarkers = NO_PRIVATE_MARKERS): string {
  const output = sourceName === 'Hermes CLI Command.md'
    ? normalizeHermesCliMarkdown(source, markers)
    : sanitizePublicMarkdown(source, markers);
  assertPublicSafe(output, sourceName, markers);
  return output;
}
