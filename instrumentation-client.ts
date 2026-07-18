// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://11e1afc7bf4b496350c4c6156a1771ae@o4510490918387712.ingest.us.sentry.io/4511756425232384",
  // Disable Sentry when running locally — only send events in production.
  enabled: process.env.NODE_ENV === "production",
  // Enable logs to be sent to Sentry
  enableLogs: true,

  // Capture a pageload/navigation transaction for every visit so we can see
  // per-page visit counts in Sentry's Insights dashboard. 1.0 = sample 100%
  // (fine for a low-traffic marketing site; lower it if traffic grows).
  tracesSampleRate: 1.0,

  dataCollection: {
    // To disable sending user data and HTTP bodies, uncomment the lines below. For more info visit:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#dataCollection
    // userInfo: false,
    // httpBodies: [],
  },
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
