<script lang="ts">
  import WelcomeCard from '$lib/components/cards/WelcomeCard.svelte';
  import NewsCard from '$lib/components/cards/NewsCard.svelte';
  import TestimonialCard from '$lib/components/cards/TestimonialCard.svelte';
  import { base } from '$app/paths';
  
  export let data;

  // Placeholder data to match mockup content
  const heroImage = "/assets/img/misc/bright-forrest-artsy-bg.jpg"; // Forest texture
  
  const newsItems = [
    {
      date: "Dec 08, 2025",
      title: "Gene expression, variable dominance and their impact on molecular diversity",
      content: "We are hosting Isabel Alves, Assistant Professor at Strasbourg University, France, as an invited speaker for our lab meeting.",
      image: "/assets/img/random images for placeholders/Bliss.jpg" // random placeholder image
    },
    {
      date: "Dec 03, 2025",
      title: "Plant-insect chemical communication in ecological communities: an information theory perspective",
      content: "We are hosting Pengjuan Zu, Assistant Professor of Information Theory, to discuss ecological networks.",
      image: "/assets/img/random images for placeholders/Tulips.jpg" // random placeholder image
    },
    {
      date: "Dec 08, 2025",
      title: "Gene expression, variable dominance and their impact on molecular diversity",
      content: "We are hosting Isabel Alves, Assistant Professor at Strasbourg University, France, as an invited speaker for our lab meeting",
      image: "/assets/img/random images for placeholders/Desert.jpg" // random placeholder image
    }
  ];

  const Testimonials = [
    { quote: "Reading is one form of escape. Running for your life is another.", author: "lab member x" },
    { quote: "I suppose I'll have to add the force of gravity to my list of enemies.", author: "lab member y" },
    { quote: "The sad truth is the truth is sad.", author: "lab member z" },
    { quote: "The moral of Snow White is never eat apples.", author: "lab member a" },
    { quote: "All nights are dark days, because night is simply a badly lit version of day.", author: "lab member b" },
    { quote: "Do the scary thing first, and get scared later.", author: "lab member c" }
  ];
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
        Welcome to the web page of the Division Theoretical Ecology and Evolution at the <a href="https://www.unibe.ch/index_eng.html" class="underline text-black">University of Bern</a>. 
        Here you can follow the latest lab news (below) or learn more about our <a href={base + "/people"} class="underline text-black">team members</a>, 
        <a href={base + "/research"} class="underline text-black">research</a>, <a href={base + "/publications"} class="underline text-black">publications</a> and more!
      </p>
    </div>

    <!-- Cards Grid -->
    <div class="grid md:grid-cols-3 gap-8 mb-20">
      <!-- Card 1 -->
      <WelcomeCard title="Welcome!">
         <span slot="icon">
           <!-- Book Icon -->
           <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
             <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
           </svg>
         </span>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      </WelcomeCard>
      
      <!-- Card 2 -->
      <WelcomeCard title="Lorem ipsum">
         <span slot="icon">
           <!-- User Icon -->
           <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
             <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
           </svg>
         </span>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      </WelcomeCard>
      
      <!-- Card 3 -->
      <WelcomeCard title="Dolor Sit">
         <span slot="icon">
           <!-- Bulb Icon -->
           <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
             <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.001 6.001 0 00-4.5-10.29m9.001 10.29a6 6 0 00-4.5-10.29m-4.5 10.29v-5.25m4.5 5.25v-5.25" />
             <!-- Simple bulb approximation -->
             <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 18h4.5m-3.75 3h2.25" />
           </svg>
         </span>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      </WelcomeCard>
    </div>
  </div>
</section>

<!-- News Feed -->
<section class="bg-[var(--color-primary-light)] py-20">
  <div class="container mx-auto px-4">
    <div class="flex justify-between items-end mb-8">
      <div>
        <h2 class="text-3xl font-serif font-bold text-black mb-2">Lab News Feed</h2>
        <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eium</p>
      </div>
      <a href={base + "/news"} class="hidden md:inline-block font-medium text-black hover:underline group">
        View all news <span class="group-hover:translate-x-1 inline-block transition-transform">→</span>
      </a>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each newsItems as item}
        <NewsCard date={item.date} title={item.title} image={base + item.image}>
          {item.content}
        </NewsCard>
      {/each}
    </div>
    
    <div class="mt-8 text-center md:hidden">
      <a href={base + "/news"} class="font-medium text-black hover:underline">View all news →</a>
    </div>
  </div>
</section>

<!-- Testimonials -->
<section class="bg-white py-20">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="text-3xl font-serif font-bold text-black mb-4">What do our lab members say?</h2>
      <p class="text-gray-600 max-w-3xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <a href={base + "/testimonials"} class="underline text-black">testimonials</a>
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each data.Testimonials as Testimonials}
        <TestimonialCard author={Testimonials.author}>
          {Testimonials.quote}
        </TestimonialCard>
      {/each}
    </div>
  </div>
</section>