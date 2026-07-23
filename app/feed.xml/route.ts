import { routing } from "@/i18n/routing";
import { buildArticlesFeed, FEED_HEADERS } from "@/lib/feed";

// The default locale's feed lives unprefixed (matching `localePrefix:
// "as-needed"`); other locales are served by `app/[locale]/feed.xml`.
// This must be a real route: `proxy.ts` excludes dotted paths, so the
// middleware never locale-rewrites `/feed.xml`.
export const dynamic = "force-static";

export async function GET() {
  const xml = await buildArticlesFeed(routing.defaultLocale);
  return new Response(xml, { headers: FEED_HEADERS });
}
