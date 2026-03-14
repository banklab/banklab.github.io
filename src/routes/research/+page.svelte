<script lang="ts">
  import ContentCard from '$lib/components/layout/ContentCard.svelte';
  import TestimonialCard from '$lib/components/cards/TestimonialCard.svelte';
  let { data } = $props();
</script>

<svelte:head>
  <title>Research | Bank Lab</title>
</svelte:head>

<ContentCard>
  {@html data.post.html}
</ContentCard>

<!-- Testimonials -->
<section class="py-20">
  <div class="container max-w-4xl mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="text-3xl font-serif font-bold text-black mb-4">{data.testimonials.title}</h2>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#if data.testimonials.items}
        {#each data.testimonials.items as testimonial}
          <TestimonialCard author={testimonial.author}>
            {testimonial.quote}
          </TestimonialCard>
        {/each}
      {/if}
    </div>
  </div>
</section>
