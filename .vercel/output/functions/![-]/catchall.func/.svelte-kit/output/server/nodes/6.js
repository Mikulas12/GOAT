import * as server from '../entries/pages/contact/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/contact/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.ClOFcmmk.js","_app/immutable/chunks/Hz4EThx8.js","_app/immutable/chunks/BFqQpsmr.js"];
export const stylesheets = [];
export const fonts = [];
