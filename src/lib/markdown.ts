import matter from 'gray-matter';
import { marked } from 'marked';

export async function parseMarkdown(slug: string) {
  const content = await import(`$lib/content/${slug}.md?raw`);
  const { data, content: markdownContent } = matter(content.default);
  const html = await marked.parse(markdownContent, { headerIds: true });
  return {
    ...data,
    html,
  };
}
