// Logs articles' title, description, date, and slug, most recent first.
// Reads frontmatter directly from content/articles/<slug>/en.mdx (English
// is the canonical/fallback locale — see lib/articles.ts), so this works
// without a content-collections build.
//
// Usage: node scripts/list-articles.mjs <count>
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const ARTICLES_DIR = "content/articles";

function parseFrontmatter(source) {
  const match = source.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;

  const data = {};
  for (const line of match[1].split("\n")) {
    const field = line.match(/^(\w+):\s*"(.*)"\s*$/);
    if (field) data[field[1]] = field[2];
  }
  return data;
}

function loadArticles() {
  return readdirSync(ARTICLES_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const slug = entry.name;
      const path = join(ARTICLES_DIR, slug, "en.mdx");

      let frontmatter;
      try {
        frontmatter = parseFrontmatter(readFileSync(path, "utf8"));
      } catch {
        frontmatter = null;
      }

      if (!frontmatter?.title || !frontmatter?.date) {
        console.error(`skipping "${slug}": missing or unreadable en.mdx`);
        return null;
      }

      return { slug, ...frontmatter };
    })
    .filter(Boolean)
    .sort((a, b) => b.date.localeCompare(a.date));
}

const [, , countArg] = process.argv;
const count = Number(countArg);

if (!countArg || !Number.isInteger(count) || count <= 0) {
  console.error("Usage: node scripts/list-articles.mjs <count>");
  process.exit(1);
}

const articles = loadArticles().slice(0, count);

if (articles.length === 0) {
  console.log("No articles found.");
} else {
  for (const { slug, title, description, date } of articles) {
    console.log(`${date}  ${title}`);
    console.log(`  slug:        ${slug}`);
    console.log(`  description: ${description}`);
    console.log("");
  }
  console.log(`Listed ${articles.length} article(s).`);
}
