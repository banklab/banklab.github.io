import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

export const load = async () => {
    const file_path = path.resolve('src/lib/content', 'news.md');
    const markdown = fs.readFileSync(file_path, 'utf-8');
    const { data } = matter(markdown);
    return {
        post: {
            metadata: data
        }
    };
};


