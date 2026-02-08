<script lang="ts">
  import WelcomeCard from '$lib/components/cards/WelcomeCard.svelte';
  import NewsCard from '$lib/components/cards/NewsCard.svelte';
  import { base } from '$app/paths';
  import { marked } from 'marked';
  
  export let data;

  // Placeholder data to match mockup content
  const heroImage = "/assets/img/misc/bright-forrest-artsy-bg.jpg"; // Forest texture
  
  let welcomeCards = [];
  if (data.main_welcome && data.main_welcome.html) {
    const sections = data.main_welcome.html.split('<hr>');
    const icons = [
      `<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
             <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
           </svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
           </svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
             <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
           </svg>`
    ];
    const links = ['/people', '/research', '/publications'];

    welcomeCards = sections.map((section, index) => {
      const titleMatch = section.match(/<h3>(.*?)<\/h3>/);
      const title = titleMatch ? titleMatch[1] : '';
      
      const contentMatch = section.match(/<p>(.*?)<\/p>/);
      const content = contentMatch ? contentMatch[1] : '';

      return {
        title,
        content,
        link: links[index],
        icon: icons[index]
      };
    });
  }

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-CH', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }
</script>

<svelte:head>
  <title>Theoretical Ecology and Evolution | The Bank Lab</title>
</svelte:head>

<!-- Hero Section -->
<section class="bg-[var(--color-primary-light)] py-16 md:py-24">
  <div class="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
    <!-- Left Text -->
    <div class="md:w-1/2 space-y-6">
      <h1 class="text-5xl md:text-6xl font-serif font-bold text-black leading-tight">
        Theoretical <br/>
        Ecology <br/>
        and Evolution
      </h1>
      <p class="text-lg text-gray-600">The Bank Lab @Universität Bern</p>
      
      <div class="flex gap-4 pt-4">
        <a href={base + "/news"} class="btn btn-primary">News</a>
        <a href={base + "/about"} class="btn btn-outline">About Us</a>
      </div>
    </div>
    
    <!-- Right Image -->
    <div class="md:w-1/2">
      <div class="rounded-3xl overflow-hidden shadow-xl">
        <img src={base + heroImage} alt="Forest texture" class="w-full h-80 md:h-96 object-cover" />
      </div>
    </div>
  </div>
</section>

<!-- Welcome Section -->
<section class="bg-white py-20 pb-10">
  <div class="container mx-auto px-4">
    <!-- Intro -->
    <div class="text-center max-w-4xl mx-auto mb-16 space-y-4">
      <h2 class="text-3xl font-serif font-bold text-black">Welcome!</h2>
      <p class="text-gray-600 leading-relaxed">
        {@html data.home.html}
      </p>
    </div>

    <!-- Cards Grid -->
    <div class="grid md:grid-cols-3 gap-8 mb-20">
      {#each welcomeCards as card}
      <a href="{base + card.link}" class="block card-zoom">
        <WelcomeCard title={card.title}>
          <span slot="icon">
            {@html card.icon}
          </span>
          {card.content}
        </WelcomeCard>
      </a>
      {/each}
    </div>
  </div>
</section>

<!-- News Feed -->
<section class="bg-[var(--color-primary-light)] py-20">
  <div class="container mx-auto px-4">
    <div class="flex justify-between items-end mb-8">
      <div>
        <h2 class="text-3xl font-serif font-bold text-black mb-2">Lab News Feed</h2>
        <p class="text-gray-600">Here you can follow the latest lab news.</p>
      </div>
      <a href={"/news"} class="hidden md:inline-block font-medium text-black hover:underline group">
        View all news <span class="group-hover:translate-x-1 inline-block transition-transform">→</span>
      </a>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each data.news.items as item}
        <NewsCard date={formatDate(item.date)} title={item.title} image={base + item.image}>
          {@html marked.parse(item.content)}
        </NewsCard>
      {/each}
    </div>
    
    <div class="mt-8 text-center md:hidden">
      <a href={"/news"} class="font-medium text-black hover:underline">View all news →</a>
    </div>
  </div>
</section>
