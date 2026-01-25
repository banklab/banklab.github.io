import { p as parseMarkdown } from "../../chunks/markdown.js";
const prerender = true;
async function load() {
  const header = await parseMarkdown("header");
  const footer = await parseMarkdown("footer");
  return {
    header,
    footer
  };
}
export {
  load,
  prerender
};
