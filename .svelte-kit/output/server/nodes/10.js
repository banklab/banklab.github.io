import * as server from '../entries/pages/publications/_page.server.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/publications/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/publications/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.Cu3hNMy-.js","_app/immutable/chunks/CzN5fCK0.js","_app/immutable/chunks/IkLcW2bu.js","_app/immutable/chunks/B2BGI9IH.js","_app/immutable/chunks/CgimmyJW.js","_app/immutable/chunks/DZP_hiX8.js","_app/immutable/chunks/Dk7SHu2P.js","_app/immutable/chunks/BwtdFgBo.js"];
export const stylesheets = [];
export const fonts = [];
