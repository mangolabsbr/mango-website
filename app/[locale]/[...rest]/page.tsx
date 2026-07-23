import { notFound } from "next/navigation";

/**
 * Catch-all for any path that no other route matched (including dynamic
 * routes rejected by `dynamicParams: false`, e.g. invalid article slugs).
 * Calling `notFound()` here renders `app/[locale]/not-found.tsx` inside the
 * locale layout — without this, unmatched URLs fall through to Next's bare
 * default 404 page.
 */
export default function CatchAllPage() {
  notFound();
}
