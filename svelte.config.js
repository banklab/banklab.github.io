import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: null
    }),
    paths: {
      base: '/banlklab-poc'
    },
    prerender: {
      entries: ['*'],
      handleMissingId: 'ignore',
      handleHttpError: ({ status, path, referrer, message }) => {
        if (status === 404) {
          // This is a known issue with the base path
          return;
        }
        throw new Error(message);
      }
    }
  }
};

export default config;
