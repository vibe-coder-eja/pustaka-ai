import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORY_SLUGS } from './lib/taxonomy';

const istilah = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/istilah' }),
  schema: z.object({
    title: z.string().min(1),
    /** Nama lain: padanan Indonesia, singkatan, atau istilah asing. Ikut dicari. */
    aliases: z.array(z.string()).default([]),
    /** Definisi singkat satu-dua kalimat; dipakai sebagai kalimat pembuka dan deskripsi meta. */
    summary: z.string().min(20).max(400),
    category: z.enum(CATEGORY_SLUGS),
    /** Slug istilah lain. */
    related: z.array(z.string()).default([]),
    sources: z.array(z.object({ title: z.string(), url: z.url() })).default([]),
    level: z.enum(['dasar', 'menengah', 'lanjut']).optional(),
    status: z.enum(['catatan', 'ditinjau', 'terverifikasi']).default('catatan'),
    updated: z.coerce.date()
  })
});

export const collections = { istilah };
