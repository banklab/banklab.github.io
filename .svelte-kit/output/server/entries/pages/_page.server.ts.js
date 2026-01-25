import matter from "gray-matter";
import fs from "fs";
import path from "path";
const load = async () => {
  const file_path = path.resolve("src/lib/content", "home.md");
  const markdown = fs.readFileSync(file_path, "utf-8");
  const { data } = matter(markdown);
  return {
    ...data
  };
};
export {
  load
};
