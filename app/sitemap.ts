import type { MetadataRoute } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { showcasedAppSlugs } from "@/lib/apps";
import { getArticles } from "@/lib/articles";

const BASE_URL = "https://mangolabs.com.br";

const legalAppSlugs = ["proportion", "splitte", "sunrouter", "xchanger"];

const hrefs = [
  "/",
  "/apps",
  "/articles",
  "/contact",
  ...getArticles(routing.defaultLocale).map(({ slug }) => `/articles/${slug}`),
  ...showcasedAppSlugs.map((slug) => `/apps/${slug}`),
  ...legalAppSlugs.flatMap((slug) => [
    `/apps/${slug}/privacy`,
    `/apps/${slug}/terms`,
  ]),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return hrefs.map((href) => ({
    url:
      BASE_URL +
      getPathname({ locale: routing.defaultLocale, href: href as "/" }),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [
          locale,
          BASE_URL + getPathname({ locale, href: href as "/" }),
        ]),
      ),
    },
  }));
}
