import * as universal from '../entries/pages/_layout.ts.js';
import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.CZlaKn_k.js","_app/immutable/chunks/CzN5fCK0.js","_app/immutable/chunks/IkLcW2bu.js","_app/immutable/chunks/orNP_p9w.js","_app/immutable/chunks/Do45u0hF.js","_app/immutable/chunks/Dk7SHu2P.js","_app/immutable/chunks/CcqWtd-5.js","_app/immutable/chunks/D0uoG4B4.js","_app/immutable/chunks/tK5WdFLp.js","_app/immutable/chunks/CNqVWJzP.js","_app/immutable/chunks/DocIaeTk.js","_app/immutable/chunks/URdBUpre.js","_app/immutable/chunks/BirH-aP5.js","_app/immutable/chunks/BcY-0ED0.js"];
export const stylesheets = ["_app/immutable/assets/0.BqXs_OfT.css"];
export const fonts = [];
