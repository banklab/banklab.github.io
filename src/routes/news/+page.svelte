<script lang="ts">
  import { marked } from 'marked';
  import ContentCard from '$lib/components/layout/ContentCard.svelte';
  import NewsCard from '$lib/components/cards/NewsCard.svelte';
  import Modal from '$lib/components/cards/Modal.svelte';
  // ... other imports

  let showModal = $state(false);
  let selectedNews = $state(null);

  function openModal(event: MouseEvent, item: any) {
    event.preventDefault();
    event.stopPropagation();
    selectedNews = item;
    showModal = true;
  }

  function closeModal() {
    showModal = false;
    selectedNews = null;
  }


  let { data } = $props();
  let meta = $derived(data.post.metadata);

  // Helper to parse markdown inline safely
  function parseMd(text: string | undefined) {
    if (!text) return '';
    return marked.parseInline(text);
  }

  // Helper to format date for display (e.g. "Dec 08, 2025")
  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
  }

  // Sort items by date (newest first)
  let sortedItems = $derived([...(meta.items || [])].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));

  // Split into Upcoming and Past
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let upcoming = $derived(sortedItems.filter(item => new Date(item.date) >= today).reverse()); // Upcoming: closest date first
  let past = $derived(sortedItems.filter(item => new Date(item.date) < today));
</script>

<svelte:head>
  <title>{meta.title} | Bank Lab</title>
</svelte:head>

<div class="space-y-12">
  <!-- Header -->
  <ContentCard>
    <h1 class="font-header text-4xl text-(--color-primary-dark) mb-4">{meta.title}</h1>
    <p class="text-gray-600">Here you can follow the latest lab news.</p>
  </ContentCard>

  <!-- Upcoming Events -->
  {#if upcoming.length > 0}
    <section class="max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="font-header text-3xl text-(--color-primary-dark) mb-8 border-b border-gray-200 pb-2">Upcoming events</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each upcoming as item}
          <NewsCard date={formatDate(item.date)} title={item.title} image={item.image}>
            {@html parseMd(item.content)}
            <button class="block mt-4 text-sm font-bold text-[var(--color-primary-dark)] hover:underline cursor-pointer" onclick={(e) => openModal(e, item)}>
              Read more &rarr;
            </button>
          </NewsCard>
        {/each}
      </div>
    </section>
  {/if}

  <!-- Past Events -->
  <section class="max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8 pb-12">
    <h2 class="font-header text-3xl text-(--color-primary-dark) mb-8 border-b border-gray-200 pb-2">Past events</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each past as item}
        <NewsCard date={formatDate(item.date)} title={item.title} image={item.image}>
          {@html parseMd(item.content)}
          <button class="block mt-4 text-sm font-bold text-[var(--color-primary-dark)] hover:underline cursor-pointer" onclick={(e) => openModal(e, item)}>
            Read more &rarr;
          </button>
        </NewsCard>
      {/each}
    </div>
  </section>
</div>

<Modal show={showModal} onclose={closeModal}>
  {#if selectedNews}
    <h2 class="text-2xl font-serif font-bold mb-2">{selectedNews.title}</h2>
    <p class="text-gray-500 text-sm mb-4">{formatDate(selectedNews.date)}</p>
    {#if selectedNews.image}
      <img src={selectedNews.image} alt={selectedNews.title} class="w-full h-64 object-cover rounded-lg mb-6" />
    {/if}
    <div class="prose prose-sm max-w-none text-gray-700">
      {@html parseMd(selectedNews.content)}
    </div>
  {/if}
</Modal>
