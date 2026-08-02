import {
  ArrowLeftRight,
  Banknote,
  Bell,
  Bookmark,
  Braces,
  Car,
  Coins,
  Copy,
  Divide,
  Gauge,
  KeyRound,
  Languages,
  type LucideIcon,
  Receipt,
  RefreshCw,
  Route,
  ScanLine,
  Sigma,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

/** Ordered by prominence — the home page showcases the first few. */
export const showcasedAppSlugs = [
  "xchanger",
  "sunrouter",
  "splitte",
  "xchanger-api",
  "proportion",
] as const;

export type ShowcasedAppSlug = (typeof showcasedAppSlugs)[number];

export type Platform = "ios" | "android" | "web";

export type ShowcasedApp = {
  slug: ShowcasedAppSlug;
  kind: "mobile" | "web";
  icon: string;
  screenshot?: string;
  featureIcons: LucideIcon[];
  appStoreUrl?: string;
  playStoreUrl?: string;
  websiteUrl?: string;
  hasLegalPages: boolean;
};

/** Platform badges an app is listed under, derived from where it ships. */
export const appPlatforms = (app: ShowcasedApp): Platform[] =>
  [
    app.appStoreUrl && "ios",
    app.playStoreUrl && "android",
    app.websiteUrl && "web",
  ].filter(Boolean) as Platform[];

export const showcasedApps: Record<ShowcasedAppSlug, ShowcasedApp> = {
  xchanger: {
    slug: "xchanger",
    kind: "mobile",
    icon: "/apps/xchanger/icon.png",
    screenshot: "/apps/xchanger/xchanger.png",
    featureIcons: [Coins, RefreshCw, Bell, Sparkles],
    appStoreUrl: "https://apps.apple.com/app/id6757408534",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.mangolabs.xchanger",
    hasLegalPages: true,
  },
  sunrouter: {
    slug: "sunrouter",
    kind: "mobile",
    icon: "/apps/sunrouter/icon.png",
    screenshot: "/apps/sunrouter/sunrouter-screenshot.png",
    featureIcons: [Route, Car, Gauge, Bookmark],
    appStoreUrl: "https://apps.apple.com/app/id6758227443",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.mangolabs.sunrouter",
    hasLegalPages: true,
  },
  splitte: {
    slug: "splitte",
    kind: "mobile",
    icon: "/apps/splitte/icon.png",
    screenshot: "/apps/splitte/splitte-screenshot.png",
    featureIcons: [Receipt, ScanLine, Sigma, Users],
    appStoreUrl: "https://apps.apple.com/app/id6760258397",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.mangolabs.splitte",
    hasLegalPages: true,
  },
  proportion: {
    slug: "proportion",
    kind: "mobile",
    icon: "/apps/proportion/icon.png",
    featureIcons: [Divide, ArrowLeftRight, Copy, Languages],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.mangolabs.proportion",
    hasLegalPages: true,
  },
  "xchanger-api": {
    slug: "xchanger-api",
    kind: "web",
    icon: "/apps/xchanger-api/icon.png",
    featureIcons: [Zap, Banknote, Braces, KeyRound],
    websiteUrl: "https://www.xchangerapi.com/",
    hasLegalPages: false,
  },
};

export const showcasedAppList = showcasedAppSlugs.map(
  (slug) => showcasedApps[slug],
);

/** The home page showcase grid is laid out for exactly four cards. */
export const homeShowcaseAppList = showcasedAppList.slice(0, 4);
