import { parseMarkdown } from '$lib/markdown';

export const load = async () => {
    const home = await parseMarkdown('home');
    const main_welcome = await parseMarkdown('main-welcome');
    const news = await parseMarkdown('news');

    return {
        home,
        main_welcome,
        news: {
            ...news,
            items: news.items.slice(0, 3),
        }
    };
};
