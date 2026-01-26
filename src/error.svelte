<script lang="ts">
  import { page } from '$app/stores';
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Page Not Found | {$page.status}</title>
  <meta name="description" content="The page you were looking for could not be found." />
</svelte:head>

<div class="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-4 py-16"> 
  <h1 class="text-6xl md:text-8xl font-bold text-primary mb-4">{$page.status}</h1>
  <h2 class="text-2xl md:text-3xl font-semibold mb-6">Oops! Page Not Found</h2>
  
  <p class="text-lg text-content-secondary max-w-md mb-8">
    {#if $page.error?.message && $page.status !== 404}
      <!-- Display specific error message if not a standard 404 -->
      {$page.error.message}
    {:else}
      <!-- Standard 404 message -->
      We couldn't find the page you were looking for. It might have been moved, deleted, or maybe you just mistyped the URL.
    {/if}
  </p>
  
  <a href={base + "/"} class="btn btn-primary">
    Go Back Home
  </a>
</div>

<style>
  /* Add any specific styles if needed */
</style>
