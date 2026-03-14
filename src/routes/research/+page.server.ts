import { parseMarkdown } from '$lib/markdown';

export const load = async () => {
  const post = await parseMarkdown('research');
  const testimonials = await parseMarkdown('testimonials');
  return {
    post,
    testimonials,
  };
};
