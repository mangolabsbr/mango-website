import type { MetadataRoute } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { showcasedAppSlugs } from "@/lib/apps";
import { getArticles } from "@/lib/articles";
import { SITE_URL } from "@/lib/seo";

const legalAppSlugs = ["proportion", "splitte", "sunrouter", "xchanger"];

type Entry = { href: string; lastModified?: string };

const entries: Entry[] = [
  { href: "/" },
  { href: "/apps" },
  { href: "/articles" },
  { href: "/contact" },
  ...getArticles(routing.defaultLocale).map(({ slug, date }) => ({
    href: `/articles/${slug}`,
    lastModified: date,
  })),
  ...showcasedAppSlugs.map((slug) => ({ href: `/apps/${slug}` })),
  ...legalAppSlugs.flatMap((slug) => [
    { href: `/apps/${slug}/privacy` },
    { href: `/apps/${slug}/terms` },
  ]),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return entries.map(({ href, lastModified }) => ({
    url:
      SITE_URL +
      getPathname({ locale: routing.defaultLocale, href: href as "/" }),
    ...(lastModified && { lastModified }),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [
          locale,
          SITE_URL + getPathname({ locale, href: href as "/" }),
        ]),
      ),
    },
  }));
}
