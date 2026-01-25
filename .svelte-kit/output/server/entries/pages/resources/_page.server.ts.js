import { p as parseMarkdown } from "../../../chunks/markdown.js";
const load = async () => {
  return {
    post: await parseMarkdown("resources")
  };
};
export {
  load
};
