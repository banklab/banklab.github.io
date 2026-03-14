import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html'
    }),
    paths: {
      base: ''
    },
    prerender: {
      entries: ['*'],
      handleMissingId: 'ignore',
      handleHttpError: ({ status, message }) => {
        if (status === 404) return;
        throw new Error(message);
      }
    }
  }
};

export default config;
