<!-- Error / Under Development page.

     SvelteKit renders this file for two situations:
       1. A route exists but something went wrong loading it (e.g. missing data)
       2. A URL doesn't match any route (404) — only works if fallback: '404.html'
          is set in svelte.config.js AND GitHub Pages is configured to use it.

     To reuse this page for a route that isn't built yet, simply don't create
     the +page.svelte for that route — visitors will land here automatically. -->

<script lang="ts">
  import { page } from '$app/stores';
  import { base } from '$app/paths';

  const is404 = $page.status === 404;
</script>

<svelte:head>
  <title>{is404 ? 'Page Not Found' : 'Something Went Wrong'} | Bank Lab</title>
</svelte:head>

<div class="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-4 py-24">
  <p class="text-8xl mb-6" aria-hidden="true">🔬</p>

  <h1 class="text-4xl font-serif font-bold text-black mb-4">
    {is404 ? 'Still under development' : 'Something went wrong'}
  </h1>

  <p class="text-gray-500 max-w-md mb-10 leading-relaxed">
    {#if is404}
      This page is being worked on. Check back soon, or head back to the home page.
    {:else}
      {$page.error?.message ?? 'An unexpected error occurred.'}
    {/if}
  </p>

  <a href={base + '/'} class="btn btn-primary">
    Back to home
  </a>
</div>
