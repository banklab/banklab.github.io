import { a4 as head, $ as ensure_array_like } from "../../../chunks/index2.js";
import { marked } from "marked";
import { C as ContentCard } from "../../../chunks/ContentCard.js";
import { N as NewsCard } from "../../../chunks/NewsCard.js";
import "clsx";
import { e as escape_html } from "../../../chunks/context.js";
import { h as html } from "../../../chunks/html.js";
function Modal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { show = false, children } = $$props;
    if (show) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="modal-backdrop svelte-lxjmcl"><div class="modal-content svelte-lxjmcl"><button class="close-button svelte-lxjmcl" aria-label="Close modal">×</button> <div class="modal-body">`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></div></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let showModal = false;
    let { data } = $$props;
    let meta = data.post.metadata;
    function parseMd(text) {
      if (!text) return "";
      return marked.parseInline(text);
    }
    function formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
    }
    let sortedItems = [...meta.items || []].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    let upcoming = sortedItems.filter((item) => new Date(item.date) >= today).reverse();
    let past = sortedItems.filter((item) => new Date(item.date) < today);
    head("1gc460s", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(meta.title)} | Bank Lab</title>`);
      });
    });
    $$renderer2.push(`<div class="space-y-12">`);
    ContentCard($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<h1 class="font-header text-4xl text-(--color-primary-dark) mb-4">${escape_html(meta.title)}</h1> <p class="text-gray-600">Here you can follow the latest lab news.</p>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    if (upcoming.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<section class="max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8"><h2 class="font-header text-3xl text-(--color-primary-dark) mb-8 border-b border-gray-200 pb-2">Upcoming events</h2> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      const each_array = ensure_array_like(upcoming);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let item = each_array[$$index];
        NewsCard($$renderer2, {
          date: formatDate(item.date),
          title: item.title,
          image: item.image,
          children: ($$renderer3) => {
            $$renderer3.push(`${html(parseMd(item.content))} <button class="block mt-4 text-sm font-bold text-[var(--color-primary-dark)] hover:underline cursor-pointer">Read more →</button>`);
          },
          $$slots: { default: true }
        });
      }
      $$renderer2.push(`<!--]--></div></section>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <section class="max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8 pb-12"><h2 class="font-header text-3xl text-(--color-primary-dark) mb-8 border-b border-gray-200 pb-2">Past events</h2> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
    const each_array_1 = ensure_array_like(past);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let item = each_array_1[$$index_1];
      NewsCard($$renderer2, {
        date: formatDate(item.date),
        title: item.title,
        image: item.image,
        children: ($$renderer3) => {
          $$renderer3.push(`${html(parseMd(item.content))} <button class="block mt-4 text-sm font-bold text-[var(--color-primary-dark)] hover:underline cursor-pointer">Read more →</button>`);
        },
        $$slots: { default: true }
      });
    }
    $$renderer2.push(`<!--]--></div></section></div> `);
    Modal($$renderer2, {
      show: showModal,
      children: ($$renderer3) => {
        {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]-->`);
      }
    });
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
