import { parseMarkdown } from '$lib/markdown';

export const load = async () => {
  return {
    post: await parseMarkdown('resources'),
  };
};
