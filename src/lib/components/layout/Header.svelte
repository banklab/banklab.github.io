<script lang="ts">
  import { page } from '$app/stores';
  import { base } from '$app/paths';

  // Get data from page store (passed from +layout.server.ts)
  $: headerData = $page.data.header;
  $: navLinks = headerData?.nav_links || [];

  // Function to toggle mobile menu
  let isMenuOpen = false;
  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };
</script>

<header class="bg-[var(--color-primary-dark)] text-white py-4 sticky top-0 z-40">
  <div class="container mx-auto px-4 flex justify-between items-center">
    <!-- Logo -->
    <div class="flex items-center">
      <a href={base + (headerData?.full_title_link || '/')} class="text-xl md:text-2xl font-serif text-white hover:text-gray-300 transition-colors">
        <span class="font-bold">{headerData?.title || 'The Bank Lab'}</span> <span class="text-lg italic font-normal">{headerData?.subtitle || '@'}{headerData?.university || 'Universität Bern'}</span>
      </a>
    </div>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex space-x-8">
      {#each navLinks as link (link.href)}
        <a
          href={base + link.href}
          class="text-xs font-semibold tracking-wider text-gray-300 hover:text-white transition-colors uppercase"
          aria-current={$page.url.pathname === link.href ? 'page' : undefined}
          class:text-white={$page.url.pathname === link.href}
        >
          {link.text}
        </a>
      {/each}
    </nav>

    <!-- Mobile Menu Button -->
    <button
      class="md:hidden p-2 rounded-md hover:bg-white/10 focus:outline-none"
      aria-label="Toggle menu"
      aria-expanded={isMenuOpen}
      on:click={toggleMenu}
    >
      {#if isMenuOpen}
        <!-- X icon -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      {:else}
        <!-- Menu icon -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      {/if}
    </button>
  </div>

  <!-- Mobile Menu -->
  {#if isMenuOpen}
    <div class="md:hidden absolute top-full left-0 right-0 bg-[var(--color-primary-dark)] border-t border-white/10 shadow-lg pb-4">
      <div class="container mx-auto px-4 py-4 flex flex-col space-y-4">
        {#each navLinks as link (link.href)}
          <a
            href={base + link.href}
            class="block py-2 text-center text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-white hover:bg-white/10 rounded transition-colors"
            aria-current={$page.url.pathname === link.href ? 'page' : undefined}
            class:text-white={$page.url.pathname === link.href}
            class:bg-white-10={$page.url.pathname === link.href}
            on:click={() => isMenuOpen = false}
          >
            {link.text}
          </a>
        {/each}
      </div>
    </div>
  {/if}
</header>
