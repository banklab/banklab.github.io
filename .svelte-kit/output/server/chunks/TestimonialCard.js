import { a2 as slot, a3 as bind_props } from "./index2.js";
import { e as escape_html } from "./context.js";
function TestimonialCard($$renderer, $$props) {
  let author = $$props["author"];
  $$renderer.push(`<div class="bg-[var(--color-accent-green)] p-8 rounded-lg text-[var(--color-text-main)] h-full flex flex-col justify-between"><div><svg class="w-8 h-8 text-black mb-4 opacity-80" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M10.722 6.422c-5.041 2.47-8.691 7.260-8.691 12.573 0 3.394 1.532 5.457 4.335 5.457 2.559 0 4.381-1.957 4.381-4.908 0-2.865-1.718-4.689-4.335-4.689-0.468 0-1.093 0.088-1.405 0.176 0.968-3.482 3.878-6.739 7.096-8.343l-1.381-0.266zM24.453 6.422c-5.041 2.47-8.691 7.260-8.691 12.573 0 3.394 1.532 5.457 4.335 5.457 2.559 0 4.381-1.957 4.381-4.908 0-2.865-1.718-4.689-4.335-4.689-0.468 0-1.093 0.088-1.405 0.176 0.968-3.482 3.878-6.739 7.096-8.343l-1.381-0.266z"></path></svg> <div class="mb-6 font-serif text-lg font-bold leading-tight"><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></div></div> <p class="text-sm text-right text-gray-600 uppercase tracking-wide">— ${escape_html(author)}</p></div>`);
  bind_props($$props, { author });
}
export {
  TestimonialCard as T
};
