const PRIVATE_METADATA_LINE = /^- \*\*(Status|Readiness|Sumber|Lokasi SKILL\.md):\*\*/i;
const PRIVATE_SKILL = /^(?:google-maps-leads-output-standard|instagram-meta-media-download|instagram-public-link-download|personal-finance-tracking|portfolio-website-workflow|property-listing-description-copywriter|property-listing-title-strategist|property-master-data-listing|property-project-workflow|whatsapp-url-summarizer-excel)$/i;
const PRIVATE_LINE = /(?:\bEnvironment variable\b|\brequired_environment_variables\b|\b[A-Z][A-Z0-9_]{2,}_(?:API_)?KEY\b|[A-Z]:\\Users\\|\/Users\/[^/]+\/|Documents[\\/]Yola)/i;
const FORBIDDEN_PUBLIC_MARKERS = [
  /\b(?:Yola|Reza(?: Syahputra)?)\b/i,
  /(?:[A-Z]:\\Users\\|\/Users\/[^/]+\/|Documents[\\/]Yola)/i,
  /(?:\bEnvironment variable\b|\brequired_environment_variables\b|\b[A-Z][A-Z0-9_]{2,}_(?:API_)?KEY\b)/i,
  /(?:google-maps-leads-output-standard|instagram-meta-media-download|instagram-public-link-download|personal-finance-tracking|portfolio-website-workflow|property-(?:listing|master|project)|whatsapp-url-summarizer-excel|personal expenses|Yola Meta connector)/i
] as const;

export interface NormalizedCatalogRow {
  page: number;
  category: string;
  model: string;
  url: string;
  description: string;
  tags: string;
}

export function sanitizePublicMarkdown(source: string): string {
  const output: string[] = [];
  let skippedHeadingDepth = 0;
  let skipCliEntry = false;

  for (const originalLine of source.replace(/^\uFEFF/, '').split(/\r?\n/)) {
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
    if (markdownSkill && PRIVATE_SKILL.test(markdownSkill[1])) {
      skippedHeadingDepth = 4;
      continue;
    }
    if (cliSkill && PRIVATE_SKILL.test(cliSkill[1])) {
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

export function assertPublicSafe(source: string, label: string): void {
  const findings = FORBIDDEN_PUBLIC_MARKERS.filter((pattern) => pattern.test(source)).length;
  if (findings > 0) {
    throw new Error(`Konten publik tidak aman: ${label} (${findings} kategori temuan).`);
  }
}

export function normalizeHermesCliMarkdown(source: string): string {
  const output = ['# Referensi Perintah Hermes CLI', ''];
  let fenceOpen = false;

  for (const line of sanitizePublicMarkdown(source).trimEnd().split(/\r?\n/)) {
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

export function preparePublicBook(sourceName: string, source: string): string {
  const output = sourceName === 'Hermes CLI Command.md'
    ? normalizeHermesCliMarkdown(source)
    : sanitizePublicMarkdown(source);
  assertPublicSafe(output, sourceName);
  return output;
}

export function normalizeCatalogRows(rows: unknown[][]): NormalizedCatalogRow[] {
  return rows
    .filter((row) => row.some((value) => value !== null && value !== undefined && value !== ''))
    .map(([page, category, model, url, description, tags]) => ({
      page: Number(page) || 0,
      category: String(category ?? ''),
      model: String(model ?? ''),
      url: String(url ?? ''),
      description: String(description ?? ''),
      tags: String(tags ?? '')
    }));
}

export function sanitizeSkillsCatalog(source: string, snapshotLabel: string): string {
  const sanitizedSource = sanitizePublicMarkdown(source);
  const marker = '## Daftar lengkap';
  const start = sanitizedSource.indexOf(marker);
  if (start < 0) throw new Error('Bagian "Daftar lengkap" tidak ditemukan.');

  const catalog = sanitizedSource
    .slice(start + marker.length)
    .split(/\r?\n/)
    .filter((line) => !PRIVATE_METADATA_LINE.test(line.trim()))
    .join('\n')
    .replace(/\bReza\b/g, 'pengguna')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  return `# Katalog Skills Hermes Agent\n\n> Snapshot katalog: ${snapshotLabel}. Ketersediaan tiap skill bergantung pada versi, platform, layanan, dan izin yang digunakan. Dokumen ini bukan potret konfigurasi mesin tertentu.\n\n## Cara membaca\n\nSkills dikelompokkan berdasarkan bidang penggunaan. Setiap entri menjelaskan tujuan umum skill; periksa dokumentasi Hermes Agent terbaru sebelum menggunakannya.\n\n## Daftar lengkap\n\n${catalog}\n`;
}
