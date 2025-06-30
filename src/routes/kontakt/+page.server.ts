// src/routes/kontakt/+page.server.ts
import type { PageServerLoad } from './$types';

// Vypne statický prerender pro tuto stránku
export const prerender = false;

// Žádné volání na Prismic, vracíme prázdný objekt
export const load: PageServerLoad = async () => {
  return {};
};
