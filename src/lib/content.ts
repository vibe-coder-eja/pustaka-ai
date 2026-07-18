import { Marked, Renderer } from 'marked';
import sanitizeHtml from 'sanitize-html';

const BOOK_HTML_POLICY: sanitizeHtml.IOptions = {
  allowedTags: [
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'br', 'hr',
    'strong', 'em', 'del', 'blockquote', 'ul', 'ol', 'li',
    'pre', 'code', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'a'
  ],
  allowedAttributes: {
    a: ['href', 'title'],
    code: ['class'],
    h1: ['id', 'tabindex'],
    h2: ['id', 'tabindex'],
    h3: ['id', 'tabindex'],
    h4: ['id', 'tabindex'],
    h5: ['id', 'tabindex'],
    h6: ['id', 'tabindex'],
    th: ['align'],
    td: ['align']
  },
  allowedClasses: { code: [/^language-[a-z0-9_-]+$/i] },
  allowedSchemes: ['http', 'https', 'mailto'],
  allowedSchemesAppliedToAttributes: ['href'],
  allowProtocolRelative: false
};

export interface Chapter {
  depth: number;
  title: string;
  id: string;
}

export function slugifyHeading(value: string): string {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/&/g, ' ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function extractChapters(markdown: string): Chapter[] {
  const chapters: Chapter[] = [];
  const seen = new Map<string, number>();
  let inFence = false;

  for (const line of markdown.split(/\r?\n/)) {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const match = /^(#{2,4})\s+(.+?)\s*#*\s*$/.exec(line);
    if (!match) continue;
    const title = match[2].replace(/[`*_~]/g, '').trim();
    const base = slugifyHeading(title) || 'bagian';
    const count = (seen.get(base) ?? 0) + 1;
    seen.set(base, count);
    chapters.push({ depth: match[1].length, title, id: count === 1 ? base : `${base}-${count}` });
  }
  return chapters;
}

export async function renderBookMarkdown(markdown: string): Promise<string> {
  const seen = new Map<string, number>();
  const renderer = new Renderer();
  renderer.heading = function ({ tokens, depth }) {
    const text = this.parser.parseInline(tokens);
    const plainText = text.replace(/<[^>]+>/g, '');
    const base = slugifyHeading(plainText) || 'bagian';
    const count = (seen.get(base) ?? 0) + 1;
    seen.set(base, count);
    const id = count === 1 ? base : `${base}-${count}`;
    return `<h${depth} id="${id}" tabindex="-1">${text}</h${depth}>`;
  };
  const parser = new Marked({ gfm: true, renderer });
  const rendered = await parser.parse(markdown);
  return sanitizeHtml(rendered, BOOK_HTML_POLICY);
}
