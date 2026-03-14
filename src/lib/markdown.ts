// Core of the Markdown CMS.
//
// parseMarkdown('slug') reads src/lib/content/<slug>.md and returns an object with:
//   - All YAML frontmatter fields spread as top-level properties (title, items, team, ...)
//   - An `html` property: the Markdown body (below the second ---) rendered to HTML
//
// gray-matter  — splits the file into frontmatter (structured data) + body (free text)
// marked       — converts the Markdown body to HTML
//
// Every +page.server.ts calls this function and returns the result as page data.

import matter from 'gray-matter';
import { marked } from 'marked';

export async function parseMarkdown(slug: string) {
  // ?raw imports the file as a plain string (Vite feature) instead of executing it
  const content = await import(`$lib/content/${slug}.md?raw`);

  // Split into frontmatter fields (data) and the text body below the second ---
  const { data, content: markdownContent } = matter(content.default);

  // Convert Markdown body to HTML
  const html = await marked.parse(markdownContent, { headerIds: true });

  return {
    ...data, // spread all frontmatter fields as top-level properties
    html,    // rendered HTML of the Markdown body
  };
}
