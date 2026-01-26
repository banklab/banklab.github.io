import { a4 as head } from "../../../chunks/index2.js";
import { C as ContentCard } from "../../../chunks/ContentCard.js";
import { h as html } from "../../../chunks/html.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    head("1seozpa", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Research | Bank Lab</title>`);
      });
    });
    ContentCard($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`${html(data.post.html)}`);
      },
      $$slots: { default: true }
    });
  });
}
export {
  _page as default
};
