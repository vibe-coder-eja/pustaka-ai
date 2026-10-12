import type { APIRoute } from 'astro';
import catalog from '../../data/fal-models.json';

/** Data katalog Fal AI untuk halaman katalog; dimuat sesudah halaman tampil. */
export const GET: APIRoute = () =>
  new Response(JSON.stringify(catalog), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
