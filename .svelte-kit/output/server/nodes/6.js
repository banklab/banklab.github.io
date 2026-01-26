import * as server from '../entries/pages/news/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/news/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/news/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.CdLqiyd3.js","_app/immutable/chunks/CzN5fCK0.js","_app/immutable/chunks/IkLcW2bu.js","_app/immutable/chunks/CcqWtd-5.js","_app/immutable/chunks/Do45u0hF.js","_app/immutable/chunks/D0uoG4B4.js","_app/immutable/chunks/B2BGI9IH.js","_app/immutable/chunks/CgimmyJW.js","_app/immutable/chunks/tK5WdFLp.js","_app/immutable/chunks/DajSjiQI.js","_app/immutable/chunks/DZP_hiX8.js","_app/immutable/chunks/Dk7SHu2P.js","_app/immutable/chunks/BwtdFgBo.js","_app/immutable/chunks/BAdySV6T.js","_app/immutable/chunks/DBuXyFtC.js","_app/immutable/chunks/DocIaeTk.js","_app/immutable/chunks/URdBUpre.js","_app/immutable/chunks/orNP_p9w.js"];
export const stylesheets = ["_app/immutable/assets/6.C4MsvddT.css"];
export const fonts = [];
