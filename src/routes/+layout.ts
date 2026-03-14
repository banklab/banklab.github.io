// Marks the entire site as prerendered.
//
// adapter-static requires all pages to be prerenderable — meaning SvelteKit
// visits every route at build time and saves the output as a static HTML file.
// Without this, the build would fail when it encounters server-only code.

export const prerender = true;
