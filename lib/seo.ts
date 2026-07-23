import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/config";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export const SITE_URL = "https://mangolabs.com.br";

/** `og:locale` values expect the `language_TERRITORY` format. */
const OG_LOCALES: Record<Locale, string> = {
  en: "en_US",
  es: "es_ES",
  pt: "pt_BR",
};

export const ogLocale = (locale: Locale) => OG_LOCALES[locale];

/** Absolute URL for an internal href in the given locale. */
export const absoluteUrl = (locale: Locale, href: string) =>
  SITE_URL + getPathname({ locale, href: href as "/" });

/**
 * Builds `canonical` + `hreflang` alternates for a page. Paths are relative;
 * Next resolves them against `metadataBase` (set in the root layout). The
 * `as-needed` prefix strategy means the default locale has no prefix, which
 * `getPathname` handles for us.
 */
export function alternates(
  locale: Locale,
  href: string,
): Metadata["alternates"] {
  const path = (l: Locale) => getPathname({ locale: l, href: href as "/" });

  return {
    canonical: path(locale),
    languages: {
      ...Object.fromEntries(routing.locales.map((l) => [l, path(l)])),
      "x-default": path(routing.defaultLocale),
    },
  };
}

type LegalKind = "privacy" | "terms";

/** Title + alternates for an app's privacy/terms page. */
export async function legalMetadata(
  locale: Locale,
  slug: string,
  kind: LegalKind,
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "appDetail" });
  const appName = slug.charAt(0).toUpperCase() + slug.slice(1);
  const label = kind === "privacy" ? t("privacyPolicy") : t("termsOfUse");

  return {
    title: `${appName} — ${label}`,
    alternates: alternates(locale, `/apps/${slug}/${kind}`),
  };
}
