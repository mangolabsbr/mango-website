import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { notFound } from "next/navigation";
import sharp from "sharp";
import type { Locale } from "@/i18n/config";
import { routing } from "@/i18n/routing";
import { getArticle, getArticles } from "@/lib/articles";

export const size = { width: 1200, height: 630 };
export const contentType = "image/jpeg";
export const alt = "Mango Labs";

// Prerender every article's OG image at build time — sharp and the fs read
// then only run during the build, so the deployed route is a static file
// (no serverless bundling of thumbnails/sharp binaries required).
export const dynamic = "force-static";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getArticles(locale).map(({ slug }) => ({ locale, slug })),
  );
}

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

/**
 * OG image: the article thumbnail center-cropped to 1200×630 and re-encoded
 * as a bounded-size JPEG. Crawlers fetch this instead of the raw `/public`
 * asset, so authors can drop in thumbnails of any size without breaking
 * WhatsApp's ~600KB og:image limit.
 */
export default async function OpenGraphImage({ params }: Props) {
  const { locale, slug } = await params;
  const article = getArticle(locale as Locale, slug);

  if (!article) {
    notFound();
  }

  const source = await readFile(
    join(process.cwd(), "public", article.thumbnail),
  );

  const image = await sharp(source)
    .resize(size.width, size.height, { fit: "cover" })
    .jpeg({ quality: 80, mozjpeg: true })
    .toBuffer();

  return new Response(new Uint8Array(image), {
    headers: { "Content-Type": contentType },
  });
}
