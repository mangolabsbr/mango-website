import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/config";
import { getArticles } from "@/lib/articles";
import { absoluteUrl } from "@/lib/seo";

export const FEED_HEADERS = {
  "Content-Type": "application/rss+xml; charset=utf-8",
};

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

/** RSS 2.0 feed of the locale's articles, most recent first. */
export async function buildArticlesFeed(locale: Locale): Promise<string> {
  const t = await getTranslations({ locale, namespace: "articles" });
  const tLayout = await getTranslations({ locale, namespace: "layout" });
  const articles = getArticles(locale);

  const items = articles
    .map((article) => {
      const url = absoluteUrl(locale, `/articles/${article.slug}`);
      return `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(article.description)}</description>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
    </item>`;
    })
    .join("\n");

  const lastBuildDate = articles[0]
    ? `\n    <lastBuildDate>${new Date(articles[0].date).toUTCString()}</lastBuildDate>`
    : "";

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${tLayout("title")} — ${t("title")}`)}</title>
    <link>${absoluteUrl(locale, "/articles")}</link>
    <atom:link href="${absoluteUrl(locale, "/feed.xml")}" rel="self" type="application/rss+xml"/>
    <description>${escapeXml(t("meta.description"))}</description>
    <language>${locale}</language>${lastBuildDate}
${items}
  </channel>
</rss>
`;
}
