import { a2 as slot } from "./index2.js";
function ContentCard($$renderer, $$props) {
  $$renderer.push(`<div class="container mx-auto px-4"><div class="prose max-w-4xl mx-auto py-8 bg-white p-8 rounded-lg shadow-md font-serif"><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></div></div>`);
}
export {
  ContentCard as C
};
