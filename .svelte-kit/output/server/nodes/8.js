import * as server from '../entries/pages/positions/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/positions/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/positions/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.BMPhN6qI.js","_app/immutable/chunks/CzN5fCK0.js","_app/immutable/chunks/IkLcW2bu.js","_app/immutable/chunks/B2BGI9IH.js","_app/immutable/chunks/CgimmyJW.js","_app/immutable/chunks/DZP_hiX8.js","_app/immutable/chunks/Dk7SHu2P.js","_app/immutable/chunks/BwtdFgBo.js"];
export const stylesheets = [];
export const fonts = [];
