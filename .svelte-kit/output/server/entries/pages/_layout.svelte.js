import "clsx";
import { Z as store_get, _ as attr, $ as ensure_array_like, a0 as attr_class, a1 as unsubscribe_stores } from "../../chunks/index2.js";
import { g as getContext, e as escape_html } from "../../chunks/context.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function Header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let headerData, navLinks;
    let isMenuOpen = false;
    headerData = store_get($$store_subs ??= {}, "$page", page).data.header;
    navLinks = headerData?.nav_links || [];
    $$renderer2.push(`<header class="bg-[var(--color-primary-dark)] text-white py-4 sticky top-0 z-40"><div class="container mx-auto px-4 flex justify-between items-center"><div class="flex items-center"><a${attr("href", headerData?.full_title_link || "/")} class="text-xl md:text-2xl font-serif text-white hover:text-gray-300 transition-colors"><span class="font-bold">${escape_html(headerData?.title || "The Bank Lab")}</span> <span class="text-lg italic font-normal">${escape_html(headerData?.subtitle || "@")}${escape_html(headerData?.university || "Universität Bern")}</span></a></div> <nav class="hidden md:flex space-x-8"><!--[-->`);
    const each_array = ensure_array_like(navLinks);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer2.push(`<a${attr("href", link.href)}${attr_class("text-xs font-semibold tracking-wider text-gray-300 hover:text-white transition-colors uppercase", void 0, {
        "text-white": store_get($$store_subs ??= {}, "$page", page).url.pathname === link.href
      })}${attr("aria-current", store_get($$store_subs ??= {}, "$page", page).url.pathname === link.href ? "page" : void 0)}>${escape_html(link.text)}</a>`);
    }
    $$renderer2.push(`<!--]--></nav> <button class="md:hidden p-2 rounded-md hover:bg-white/10 focus:outline-none" aria-label="Toggle menu"${attr("aria-expanded", isMenuOpen)}>`);
    {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>`);
    }
    $$renderer2.push(`<!--]--></button></div> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></header>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let footerData;
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    footerData = store_get($$store_subs ??= {}, "$page", page).data.footer;
    $$renderer2.push(`<footer class="bg-[var(--color-primary-dark)] text-white pt-16 pb-8"><div class="container mx-auto px-4"><div class="mb-12"><h2 class="text-2xl font-serif font-bold mb-8">The Bank Lab @Universität Bern</h2> <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm font-semibold uppercase tracking-wider">`);
    if (footerData?.sections) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(footerData.sections);
      for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
        let section = each_array[$$index_1];
        $$renderer2.push(`<div class="flex flex-col space-y-3"><!--[-->`);
        const each_array_1 = ensure_array_like(section.links);
        for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
          let link = each_array_1[$$index];
          $$renderer2.push(`<a${attr("href", link.href)} class="hover:text-gray-300 transition-colors">${escape_html(link.text)}</a>`);
        }
        $$renderer2.push(`<!--]--></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div> <div class="border-t border-white/20 mb-8"></div> <div class="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400"><div class="flex items-center space-x-4"><span>${escape_html(footerData?.copyright || `© ${currentYear} Banklab. All rights reserved.`)}</span> <span>|</span> <span>${escape_html(footerData?.extra_text || "xxxxxx")}</span></div></div></div></footer>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _layout($$renderer, $$props) {
  let { children } = $$props;
  $$renderer.push(`<div class="flex flex-col min-h-screen bg-background text-content">`);
  Header($$renderer);
  $$renderer.push(`<!----> <main class="flex-grow">`);
  children($$renderer);
  $$renderer.push(`<!----></main> `);
  Footer($$renderer);
  $$renderer.push(`<!----></div>`);
}
export {
  _layout as default
};
