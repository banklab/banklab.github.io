<script lang="ts">
  import { marked } from 'marked';
  import ContentCard from '$lib/components/layout/ContentCard.svelte';
  
  let { data } = $props();
  const meta = data.post;
  
  // Helper to parse markdown inline safely
  function parseMd(text: string | undefined) {
    if (!text) return '';
    return marked.parseInline(text);
  }
</script>

<svelte:head>
  <title>{meta.title} | Bank Lab</title>
</svelte:head>

<div class="space-y-12">
  
  <!-- Header -->
  <ContentCard>
    <h1 class="font-header text-4xl text-(--color-primary-dark) mb-8">{meta.title}</h1>
    
    {#if meta.main_image}
      <figure class="mb-8">
        <img 
          src={meta.main_image} 
          alt="Bank Lab Team" 
          class="w-full h-auto rounded-lg shadow-md"
        />
        <figcaption class="text-sm text-gray-600 mt-2 text-center text-secondary"></figcaption>
      </figure>
    {/if}
  </ContentCard>

  <!-- Team Grid -->
  <section class="max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="font-header text-3xl text-(--color-primary-dark) mb-8 border-b border-gray-200 pb-2">Team(In chronological order of joining the group)</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#if meta.team}
        {#each meta.team as member}
          <div class="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
            {#if member.image}
              <div class="aspect-square w-full overflow-hidden bg-gray-100">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  class="w-full h-full object-cover object-center"
                />
              </div>
            {:else}
              <div class="aspect-square w-full bg-gray-100 flex items-center justify-center text-gray-300">
                 <span class="text-4xl">?</span>
              </div>
            {/if}
            
            <div class="p-6 flex flex-col grow">
              <h3 class="font-header text-xl text-(--color-primary-dark) mb-1">{member.name}</h3>
              {#if member.role}
                <p class="text-sm font-medium text-green-700 mb-4 uppercase tracking-wide">{member.role}</p>
              {/if}
              
              <div class="mt-auto space-y-3 text-sm text-secondary">
                {#if member.contact}
                   <p class="flex items-center gap-2">
                     <span class="w-4 h-4 opacity-70">✉️</span>
                     <span>{member.contact}</span>
                   </p>
                {/if}
                
                {#if member.links}
                  <div class="prose prose-sm prose-a:text-(--color-primary-dark) prose-a:underline hover:prose-a:text-[var(--color-primary-light)]">
                    {@html parseMd(member.links)}
                  </div>
                {/if}
              </div>
            </div>
          </div>
        {/each}
      {/if}
    </div>
  </section>

  <!-- Associated Team -->
  <section class="max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
     <h2 class="font-header text-3xl text-(--color-primary-dark) mb-8 border-b border-gray-200 pb-2">Associated Team Members</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       {#if meta.associated}
        {#each meta.associated as member}
          <div class="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
             {#if member.image}
              <div class="aspect-square w-full overflow-hidden bg-gray-100">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  class="w-full h-full object-cover object-center"
                />
              </div>
            {/if}
             <div class="p-6 flex flex-col grow">
              <h3 class="font-header text-xl text-(--color-primary-dark) mb-1">{member.name}</h3>
              {#if member.role}
                 <div class="text-sm text-secondary mb-4 prose prose-sm">
                    {@html parseMd(member.role)}
                 </div>
              {/if}
              
              <div class="mt-auto space-y-3 text-sm text-secondary">
                {#if member.contact}
                   <p>{member.contact}</p>
                {/if}
                {#if member.links}
                  <div class="prose prose-sm prose-a:text-(--color-primary-dark)">
                    {@html parseMd(member.links)}
                  </div>
                {/if}
              </div>
            </div>
          </div>
        {/each}
       {/if}
      </div>
  </section>

  <!-- Alumni -->
  <section class="max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8 pb-12">
    <h2 class="font-header text-3xl text-(--color-primary-dark) mb-8 border-b border-gray-200 pb-2">Alumni</h2>
    <p class="text-sm text-secondary mb-6">(In reverse chronological order of leaving the group)</p>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {#if meta.alumni_groups}
        {#each meta.alumni_groups as group}
          <div>
            <h3 class="font-header text-xl text-(--color-primary-dark) mb-4">{group.title}</h3>
            <ul class="space-y-2">
              {#each group.members as member}
                 <li class="text-secondary text-sm pl-4 border-l-2 border-gray-100 hover:border-[var(--color-primary-light)] transition-colors">
                    <div class="prose prose-sm prose-a:font-medium prose-a:text-(--color-primary-dark)">
                      {@html parseMd(member)}
                    </div>
                 </li>
              {/each}
            </ul>
          </div>
        {/each}
      {/if}
    </div>
  </section>

</div>
