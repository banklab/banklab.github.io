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
