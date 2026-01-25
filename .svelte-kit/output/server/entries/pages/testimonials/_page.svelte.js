import { a4 as head, $ as ensure_array_like } from "../../../chunks/index2.js";
import { C as ContentCard } from "../../../chunks/ContentCard.js";
import { T as TestimonialCard } from "../../../chunks/TestimonialCard.js";
import { e as escape_html } from "../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    head("1892cyx", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(data.post.metadata.title)} | Bank Lab</title>`);
      });
    });
    ContentCard($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<h1 class="text-4xl font-serif font-bold text-black mb-8">${escape_html(data.post.metadata.title)}</h1> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
        const each_array = ensure_array_like(data.post.metadata.items);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let item = each_array[$$index];
          TestimonialCard($$renderer3, {
            author: item.author,
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(item.quote)}`);
            },
            $$slots: { default: true }
          });
        }
        $$renderer3.push(`<!--]--></div>`);
      },
      $$slots: { default: true }
    });
  });
}
export {
  _page as default
};
