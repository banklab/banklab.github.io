<script lang="ts">
  import { base } from '$app/paths';
  export let date: string;
  export let title: string | undefined = undefined;
  export let image: string | undefined = undefined;
</script>

<div class="bg-white rounded-lg border border-gray-200 overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
  {#if image}
    <div class="h-48 overflow-hidden bg-gray-100">
      <img src={base + image} alt={title || 'News'} class="w-full h-full object-cover" />
    </div>
  {/if}
  
  <div class="p-6 flex-1 flex flex-col">
    <p class="text-xs text-gray-500 mb-2 uppercase tracking-wide">{date}</p>
    {#if title}
      <h3 class="font-serif font-bold text-xl text-black mb-3 leading-tight">{title}</h3>
    {/if}
    <div class="text-sm text-gray-600 mb-6 flex-1 line-clamp-4">
      <slot />
    </div>
    <div class="text-right mt-auto">
      <a href={base + "/news"} class="text-sm font-bold text-black hover:underline inline-flex items-center">
        Read More 
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  </div>
</div>
