import matter from "gray-matter";
import { marked } from "marked";
const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
async function parseMarkdown(slug) {
  const content = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./content/about.md": () => import("./about.js"), "./content/about_backup.md": () => import("./about_backup.js"), "./content/archive.md": () => import("./archive.js"), "./content/contact.md": () => import("./contact.js"), "./content/footer.md": () => import("./footer.js"), "./content/header.md": () => import("./header.js"), "./content/home.md": () => import("./home.js"), "./content/news.md": () => import("./news.js"), "./content/people.md": () => import("./people.js"), "./content/positions.md": () => import("./positions.js"), "./content/publications.md": () => import("./publications.js"), "./content/research.md": () => import("./research.js"), "./content/resources.md": () => import("./resources.js"), "./content/testimonials.md": () => import("./testimonials.js") }), `./content/${slug}.md`, 3);
  const { data, content: markdownContent } = matter(content.default);
  const html = await marked.parse(markdownContent, { headerIds: true });
  return {
    ...data,
    html
  };
}
export {
  parseMarkdown as p
};
