import { a4 as head, $ as ensure_array_like, _ as attr } from "../../../chunks/index2.js";
import { marked } from "marked";
import { C as ContentCard } from "../../../chunks/ContentCard.js";
import { e as escape_html } from "../../../chunks/context.js";
import { h as html } from "../../../chunks/html.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    const meta = data.post;
    function parseMd(text) {
      if (!text) return "";
      return marked.parseInline(text);
    }
    head("1403ju0", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(meta.title)} | Bank Lab</title>`);
      });
    });
    $$renderer2.push(`<div class="space-y-12">`);
    ContentCard($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<h1 class="font-header text-4xl text-(--color-primary-dark) mb-8">${escape_html(meta.title)}</h1> `);
        if (meta.main_image) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<figure class="mb-8"><img${attr("src", meta.main_image)} alt="Bank Lab Team" class="w-full h-auto rounded-lg shadow-md"/> <figcaption class="text-sm text-gray-600 mt-2 text-center text-secondary"></figcaption></figure>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]-->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> <section class="max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8"><h2 class="font-header text-3xl text-(--color-primary-dark) mb-8 border-b border-gray-200 pb-2">Team(In chronological order of joining the group)</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">`);
    if (meta.team) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(meta.team);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let member = each_array[$$index];
        $$renderer2.push(`<div class="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">`);
        if (member.image) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="aspect-square w-full overflow-hidden bg-gray-100"><img${attr("src", member.image)}${attr("alt", member.name)} class="w-full h-full object-cover object-center"/></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<div class="aspect-square w-full bg-gray-100 flex items-center justify-center text-gray-300"><span class="text-4xl">?</span></div>`);
        }
        $$renderer2.push(`<!--]--> <div class="p-6 flex flex-col grow"><h3 class="font-header text-xl text-(--color-primary-dark) mb-1">${escape_html(member.name)}</h3> `);
        if (member.role) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p class="text-sm font-medium text-green-700 mb-4 uppercase tracking-wide">${escape_html(member.role)}</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> <div class="mt-auto space-y-3 text-sm text-secondary">`);
        if (member.contact) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p class="flex items-center gap-2"><span class="w-4 h-4 opacity-70">✉️</span> <span>${escape_html(member.contact)}</span></p>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (member.links) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="prose prose-sm prose-a:text-(--color-primary-dark) prose-a:underline hover:prose-a:text-[var(--color-primary-light)]">${html(parseMd(member.links))}</div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div></div></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></section> <section class="max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8"><h2 class="font-header text-3xl text-(--color-primary-dark) mb-8 border-b border-gray-200 pb-2">Associated Team Members</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">`);
    if (meta.associated) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!--[-->`);
      const each_array_1 = ensure_array_like(meta.associated);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let member = each_array_1[$$index_1];
        $$renderer2.push(`<div class="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">`);
        if (member.image) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="aspect-square w-full overflow-hidden bg-gray-100"><img${attr("src", member.image)}${attr("alt", member.name)} class="w-full h-full object-cover object-center"/></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> <div class="p-6 flex flex-col grow"><h3 class="font-header text-xl text-(--color-primary-dark) mb-1">${escape_html(member.name)}</h3> `);
        if (member.role) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="text-sm text-secondary mb-4 prose prose-sm">${html(parseMd(member.role))}</div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> <div class="mt-auto space-y-3 text-sm text-secondary">`);
        if (member.contact) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p>${escape_html(member.contact)}</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (member.links) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="prose prose-sm prose-a:text-(--color-primary-dark)">${html(parseMd(member.links))}</div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div></div></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></section> <section class="max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8 pb-12"><h2 class="font-header text-3xl text-(--color-primary-dark) mb-8 border-b border-gray-200 pb-2">Alumni</h2> <p class="text-sm text-secondary mb-6">(In reverse chronological order of leaving the group)</p> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">`);
    if (meta.alumni_groups) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!--[-->`);
      const each_array_2 = ensure_array_like(meta.alumni_groups);
      for (let $$index_3 = 0, $$length = each_array_2.length; $$index_3 < $$length; $$index_3++) {
        let group = each_array_2[$$index_3];
        $$renderer2.push(`<div><h3 class="font-header text-xl text-(--color-primary-dark) mb-4">${escape_html(group.title)}</h3> <ul class="space-y-2"><!--[-->`);
        const each_array_3 = ensure_array_like(group.members);
        for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
          let member = each_array_3[$$index_2];
          $$renderer2.push(`<li class="text-secondary text-sm pl-4 border-l-2 border-gray-100 hover:border-[var(--color-primary-light)] transition-colors"><div class="prose prose-sm prose-a:font-medium prose-a:text-(--color-primary-dark)">${html(parseMd(member))}</div></li>`);
        }
        $$renderer2.push(`<!--]--></ul></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></section></div>`);
  });
}
export {
  _page as default
};
