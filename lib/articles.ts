import { type Article, allArticles } from "content-collections";
import type { Locale } from "@/i18n/config";

export const ARTICLES_PAGE_SIZE = 6;

/** All articles for a locale, most recent first. */
export function getArticles(locale: Locale): Article[] {
  return allArticles
    .filter((article) => article.locale === locale)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getArticlesPageCount(locale: Locale): number {
  return Math.max(
    1,
    Math.ceil(getArticles(locale).length / ARTICLES_PAGE_SIZE),
  );
}

/** One page of articles (1-indexed), most recent first. */
export function getArticlesPage(locale: Locale, page: number): Article[] {
  const start = (page - 1) * ARTICLES_PAGE_SIZE;
  return getArticles(locale).slice(start, start + ARTICLES_PAGE_SIZE);
}

/** Unique slugs across every locale (for prerendering fallback routes). */
export function getArticleSlugs(): string[] {
  return [...new Set(allArticles.map((article) => article.slug))];
}

/**
 * Finds an article by slug, falling back to the `en` version when the
 * requested locale is missing — same strategy as `i18n/request.ts`.
 */
export function getArticle(locale: Locale, slug: string): Article | undefined {
  return (
    allArticles.find(
      (article) => article.locale === locale && article.slug === slug,
    ) ??
    allArticles.find(
      (article) => article.locale === "en" && article.slug === slug,
    )
  );
}
