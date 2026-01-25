import { a2 as slot, a3 as bind_props, a4 as head, _ as attr, $ as ensure_array_like } from "../../chunks/index2.js";
import { e as escape_html } from "../../chunks/context.js";
import { N as NewsCard } from "../../chunks/NewsCard.js";
import { T as TestimonialCard } from "../../chunks/TestimonialCard.js";
function WelcomeCard($$renderer, $$props) {
  let title = $$props["title"];
  $$renderer.push(`<div class="bg-[var(--color-accent-green)] p-8 rounded-lg text-[var(--color-text-main)] h-full"><div class="mb-4"><!--[-->`);
  slot($$renderer, $$props, "icon", {});
  $$renderer.push(`<!--]--></div> <h3 class="font-bold text-xl mb-3 font-serif">${escape_html(title)}</h3> <div class="text-sm leading-relaxed"><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></div></div>`);
  bind_props($$props, { title });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    const heroImage = "/assets/img/misc/bright-forrest-artsy-bg.jpg";
    const newsItems = [
      {
        date: "Dec 08, 2025",
        title: "Gene expression, variable dominance and their impact on molecular diversity",
        content: "We are hosting Isabel Alves, Assistant Professor at Strasbourg University, France, as an invited speaker for our lab meeting.",
        image: "/assets/img/random images for placeholders/Bliss.jpg"
        // random placeholder image
      },
      {
        date: "Dec 03, 2025",
        title: "Plant-insect chemical communication in ecological communities: an information theory perspective",
        content: "We are hosting Pengjuan Zu, Assistant Professor of Information Theory, to discuss ecological networks.",
        image: "/assets/img/random images for placeholders/Tulips.jpg"
        // random placeholder image
      },
      {
        date: "Dec 08, 2025",
        title: "Gene expression, variable dominance and their impact on molecular diversity",
        content: "We are hosting Isabel Alves, Assistant Professor at Strasbourg University, France, as an invited speaker for our lab meeting",
        image: "/assets/img/random images for placeholders/Desert.jpg"
        // random placeholder image
      }
    ];
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Theoretical Ecology and Evolution | The Bank Lab</title>`);
      });
    });
    $$renderer2.push(`<section class="bg-[var(--color-primary-light)] py-16 md:py-24"><div class="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12"><div class="md:w-1/2 space-y-6"><h1 class="text-5xl md:text-6xl font-serif font-bold text-black leading-tight">Theoretical <br/> Ecology <br/> and Evolution</h1> <p class="text-lg text-gray-600">The Bank Lab @Universität Bern</p> <div class="flex gap-4 pt-4"><a href="/news" class="btn btn-primary">News</a> <a href="/about" class="btn btn-outline">About Us</a></div></div> <div class="md:w-1/2"><div class="rounded-3xl overflow-hidden shadow-xl"><img${attr("src", heroImage)} alt="Forest texture" class="w-full h-80 md:h-96 object-cover"/></div></div></div></section> <section class="bg-white py-20 pb-10"><div class="container mx-auto px-4"><div class="text-center max-w-4xl mx-auto mb-16 space-y-4"><h2 class="text-3xl font-serif font-bold text-black">Welcome!</h2> <p class="text-gray-600 leading-relaxed">Welcome to the web page of the Division Theoretical Ecology and Evolution at the <a href="https://www.unibe.ch/index_eng.html" class="underline text-black">University of Bern</a>. 
        Here you can follow the latest lab news (below) or learn more about our <a href="/people" class="underline text-black">team members</a>, <a href="/research" class="underline text-black">research</a>, <a href="/publications" class="underline text-black">publications</a> and more!</p></div> <div class="grid md:grid-cols-3 gap-8 mb-20">`);
    WelcomeCard($$renderer2, {
      title: "Welcome!",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation`);
      },
      $$slots: {
        default: true,
        icon: ($$renderer3) => {
          $$renderer3.push(`<span slot="icon"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg></span>`);
        }
      }
    });
    $$renderer2.push(`<!----> `);
    WelcomeCard($$renderer2, {
      title: "Lorem ipsum",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation`);
      },
      $$slots: {
        default: true,
        icon: ($$renderer3) => {
          $$renderer3.push(`<span slot="icon"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path></svg></span>`);
        }
      }
    });
    $$renderer2.push(`<!----> `);
    WelcomeCard($$renderer2, {
      title: "Dolor Sit",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation`);
      },
      $$slots: {
        default: true,
        icon: ($$renderer3) => {
          $$renderer3.push(`<span slot="icon"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.001 6.001 0 00-4.5-10.29m9.001 10.29a6 6 0 00-4.5-10.29m-4.5 10.29v-5.25m4.5 5.25v-5.25"></path><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 18h4.5m-3.75 3h2.25"></path></svg></span>`);
        }
      }
    });
    $$renderer2.push(`<!----></div></div></section> <section class="bg-[var(--color-primary-light)] py-20"><div class="container mx-auto px-4"><div class="flex justify-between items-end mb-8"><div><h2 class="text-3xl font-serif font-bold text-black mb-2">Lab News Feed</h2> <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eium</p></div> <a href="/news" class="hidden md:inline-block font-medium text-black hover:underline group">View all news <span class="group-hover:translate-x-1 inline-block transition-transform">→</span></a></div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
    const each_array = ensure_array_like(newsItems);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      NewsCard($$renderer2, {
        date: item.date,
        title: item.title,
        image: item.image,
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->${escape_html(item.content)}`);
        },
        $$slots: { default: true }
      });
    }
    $$renderer2.push(`<!--]--></div> <div class="mt-8 text-center md:hidden"><a href="/news" class="font-medium text-black hover:underline">View all news →</a></div></div></section> <section class="bg-white py-20"><div class="container mx-auto px-4"><div class="text-center mb-16"><h2 class="text-3xl font-serif font-bold text-black mb-4">What do our lab members say?</h2> <p class="text-gray-600 max-w-3xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <a href="/testimonials" class="underline text-black">testimonials</a></p></div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
    const each_array_1 = ensure_array_like(data.Testimonials);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let Testimonials = each_array_1[$$index_1];
      TestimonialCard($$renderer2, {
        author: Testimonials.author,
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->${escape_html(Testimonials.quote)}`);
        },
        $$slots: { default: true }
      });
    }
    $$renderer2.push(`<!--]--></div></div></section>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
