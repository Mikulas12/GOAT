import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.B0YrN1lM.js","_app/immutable/chunks/Hz4EThx8.js","_app/immutable/chunks/BFqQpsmr.js","_app/immutable/chunks/BDPlx2mt.js","_app/immutable/chunks/DyMacgXJ.js","_app/immutable/chunks/QZ3j2OEz.js","_app/immutable/chunks/w0026mnD.js","_app/immutable/chunks/BUBNY4Yy.js"];
export const stylesheets = ["_app/immutable/assets/0.PN-PEO2i.css"];
export const fonts = ["_app/immutable/assets/urbanist-latin-ext-wght-normal.CikX8QxC.woff2","_app/immutable/assets/urbanist-latin-wght-normal.S2b5Uui_.woff2"];
