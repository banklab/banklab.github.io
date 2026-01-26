<script lang="ts">
  import ContentCard from '$lib/components/layout/ContentCard.svelte';
  import TestimonialCard from '$lib/components/cards/TestimonialCard.svelte';
  let { data } = $props();
</script>

<svelte:head>
  <title>{data.post.metadata.title} | Bank Lab</title>
</svelte:head>

<ContentCard>
  <h1 class="text-4xl font-serif font-bold text-black mb-8">{data.post.metadata.title}</h1>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each data.post.metadata.items as item}
      <TestimonialCard author={item.author}>{item.quote}</TestimonialCard>
    {/each}
  </div>
</ContentCard>