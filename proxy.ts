import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/monitoring`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  // `/monitoring` is the Sentry `tunnelRoute` (see next.config.ts) — it must be
  // excluded or next-intl rewrites it as a locale route and client-side Sentry
  // envelopes (metrics, logs, errors) never reach Sentry.
  matcher: "/((?!api|trpc|monitoring|_next|_vercel|.*\\..*).*)",
};
