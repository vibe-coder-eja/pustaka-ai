import type { APIRoute } from 'astro';
import { getConceptGraph } from '../../lib/concept-graph';

/** Data interaktif grafik konsep di peta-si. Dimuat browser saat bagian grafik mendekati layar. */
export const GET: APIRoute = async () => {
  const { clientData } = await getConceptGraph();
  return new Response(JSON.stringify(clientData), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
};
