import { _ as attr, a2 as slot, a3 as bind_props } from "./index2.js";
import { f as fallback, e as escape_html } from "./context.js";
function NewsCard($$renderer, $$props) {
  let date = $$props["date"];
  let title = fallback($$props["title"], void 0);
  let image = fallback($$props["image"], void 0);
  $$renderer.push(`<div class="bg-white rounded-lg border border-gray-200 overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">`);
  if (image) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<div class="h-48 overflow-hidden bg-gray-100"><img${attr("src", image)}${attr("alt", title || "News")} class="w-full h-full object-cover"/></div>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--> <div class="p-6 flex-1 flex flex-col"><p class="text-xs text-gray-500 mb-2 uppercase tracking-wide">${escape_html(date)}</p> `);
  if (title) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<h3 class="font-serif font-bold text-xl text-black mb-3 leading-tight">${escape_html(title)}</h3>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--> <div class="text-sm text-gray-600 mb-6 flex-1 line-clamp-4"><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></div> <div class="text-right mt-auto"><a href="/news" class="text-sm font-bold text-black hover:underline inline-flex items-center">Read More <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></a></div></div></div>`);
  bind_props($$props, { date, title, image });
}
export {
  NewsCard as N
};
