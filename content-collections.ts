import { join } from "node:path";
import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import sharp from "sharp";
import { z } from "zod";
import { locales } from "./i18n/config";

/**
 * Tiny (16px-wide) base64 preview of the thumbnail, used as next/image's
 * `blurDataURL`. Generated at build time, so it also fails the build early
 * when a frontmatter thumbnail points to a file that doesn't exist.
 */
async function thumbnailBlurDataUrl(thumbnail: string): Promise<string> {
  const buffer = await sharp(join(process.cwd(), "public", thumbnail))
    .resize(16)
    .jpeg({ quality: 60 })
    .toBuffer();

  return `data:image/jpeg;base64,${buffer.toString("base64")}`;
}

/**
 * Articles live in `content/articles/<slug>/<locale>.mdx` — one file per
 * locale, mirroring how `messages/{en,es,pt}.json` keeps every user-facing
 * string in all three languages.
 */
const articles = defineCollection({
  name: "articles",
  directory: "content/articles",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Quoted "YYYY-MM-DD" in the frontmatter (unquoted dates become Date
    // objects in YAML and fail validation).
    date: z.iso.date(),
    // Public path to the thumbnail image, e.g. "/articles/<slug>.png".
    thumbnail: z.string().startsWith("/"),
  }),
  transform: async (document, context) => {
    const slug = document._meta.directory;
    const locale = document._meta.fileName.replace(/\.mdx$/, "");

    if (!(locales as readonly string[]).includes(locale)) {
      throw new Error(
        `Unexpected locale "${locale}" for article "${slug}" — expected one of: ${locales.join(", ")}`,
      );
    }

    const body = await compileMDX(context, document);
    const thumbnailBlur = await thumbnailBlurDataUrl(document.thumbnail);

    return {
      ...document,
      slug,
      locale,
      body,
      thumbnailBlur,
    };
  },
});

export default defineConfig({
  collections: [articles],
});
