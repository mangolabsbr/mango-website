"use client";

import * as Sentry from "@sentry/nextjs";
import { useLocale } from "next-intl";
import { useEffect } from "react";
import { usePathname } from "@/i18n/navigation";

/**
 * Emits a `page_view` Sentry metric on every page load and client-side
 * navigation, so per-page visit counts show up in Sentry's Metrics dashboard.
 * `usePathname` from i18n/navigation returns the locale-stripped path, so all
 * locales of a page group under one `page` attribute; `locale` is kept as a
 * separate attribute for breaking the count down by language.
 */
export default function PageViewTracker() {
  const pathname = usePathname();
  const locale = useLocale();

  useEffect(() => {
    Sentry.metrics.count("page_view", 1, {
      attributes: { page: pathname, locale },
    });
  }, [pathname, locale]);

  return null;
}
