<script lang="ts">
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  
  $: footerData = $page.data.footer;
  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-[var(--color-primary-dark)] text-white pt-16 pb-8">
  <div class="container mx-auto px-4">
    <!-- Top Section -->
    <div class="mb-12">
      <h2 class="text-2xl font-serif font-bold mb-8">The Bank Lab @Universität Bern</h2>
      
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm font-semibold uppercase tracking-wider">
        {#if footerData?.sections}
          {#each footerData.sections as section}
             <div class="flex flex-col space-y-3">
               {#each section.links as link}
                 <a href={base + link.href} class="hover:text-gray-300 transition-colors">{link.text}</a>
               {/each}
             </div>
          {/each}
        {/if}
      </div>
    </div>
    
    <!-- Divider -->
    <div class="border-t border-white/20 mb-8"></div>
    
    <!-- Bottom Section -->
    <div class="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
      <div class="flex items-center space-x-4">
        <span>{footerData?.copyright || `© ${currentYear} Banklab. All rights reserved.`}</span>
        <span>|</span>
        <span>{footerData?.extra_text || 'xxxxxx'}</span>
      </div>
    </div>
  </div>
</footer>
