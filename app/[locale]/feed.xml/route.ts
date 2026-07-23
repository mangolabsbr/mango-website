import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { buildArticlesFeed, FEED_HEADERS } from "@/lib/feed";

export const dynamic = "force-static";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string }> },
) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    return new Response("Not found", { status: 404 });
  }

  const xml = await buildArticlesFeed(locale);
  return new Response(xml, { headers: FEED_HEADERS });
}
