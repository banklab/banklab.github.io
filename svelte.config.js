// SvelteKit configuration.
//
// adapter-static: outputs the entire site as plain HTML/CSS/JS files in build/
//   — no Node.js server needed at runtime, perfect for GitHub Pages.
//
// paths.base: the sub-path where the site lives on GitHub Pages.
//   MUST match the GitHub repository name exactly.
//   If the repo is renamed, update this value and redeploy.
//
// prerender.entries: ['*'] tells SvelteKit to discover and prerender all routes
//   automatically rather than listing them manually.
//
// handleHttpError: 404s during prerender are suppressed — they can occur when
//   the base path isn't set up yet at build time and are harmless.

import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const config = {
  preprocess: preprocess(),
  kit: {
    // Output plain HTML files to build/ (uploaded to GitHub Pages)
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      // fallback: GitHub Pages serves 404.html for any URL it doesn't recognise.
      // Setting this generates a 404.html that loads the SvelteKit client router,
      // which then renders +error.svelte for the unmatched route.
      fallback: '404.html'
    }),
    paths: {
      // ⚠️ This must match the GitHub repository name exactly.
      // Current repo: github.com/<user>/banklab-mvp → base: '/banklab.github.io'
      base: ''
    },
    prerender: {
      entries: ['*'], // auto-discover and render all routes
      handleMissingId: 'ignore',
      handleHttpError: ({ status, path, referrer, message }) => {
        if (status === 404) {
          return; // 404s during prerender are expected with a base path; ignore them
        }
        throw new Error(message);
      }
    }
  }
};

export default config;
