import {
  Banknote,
  Bell,
  Bookmark,
  Braces,
  Car,
  Coins,
  Gauge,
  KeyRound,
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

export const showcasedAppSlugs = [
  "xchanger",
  "sunrouter",
  "splitte",
  "xchanger-api",
] as const;

export type ShowcasedAppSlug = (typeof showcasedAppSlugs)[number];

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
