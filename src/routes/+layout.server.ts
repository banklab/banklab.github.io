// Layout server load — runs once and makes its data available to EVERY page on the site.
//
// SvelteKit merges data returned here into page.data automatically, so Header.svelte
// and Footer.svelte can read it without each individual page having to load it.
//
// header.md → nav links, site title, subtitle
// footer.md → footer link columns, copyright text

import { parseMarkdown } from '$lib/markdown';

export const prerender = true;

export async function load() {
  const header = await parseMarkdown('header');
  const footer = await parseMarkdown('footer');

  return {
    header,
    footer
  };
}
