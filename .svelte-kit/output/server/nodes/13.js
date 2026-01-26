import * as server from '../entries/pages/testimonials/_page.server.ts.js';

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/testimonials/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/testimonials/+page.server.ts";
export const imports = ["_app/immutable/nodes/13.CGyL-yx5.js","_app/immutable/chunks/CzN5fCK0.js","_app/immutable/chunks/IkLcW2bu.js","_app/immutable/chunks/CcqWtd-5.js","_app/immutable/chunks/D0uoG4B4.js","_app/immutable/chunks/CgimmyJW.js","_app/immutable/chunks/DZP_hiX8.js","_app/immutable/chunks/Dk7SHu2P.js","_app/immutable/chunks/BwtdFgBo.js","_app/immutable/chunks/CXMk79Yc.js","_app/immutable/chunks/DBuXyFtC.js","_app/immutable/chunks/DocIaeTk.js","_app/immutable/chunks/URdBUpre.js"];
export const stylesheets = [];
export const fonts = [];
