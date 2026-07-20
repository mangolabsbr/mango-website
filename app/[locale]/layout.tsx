import { Mulish, Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import Footer from "@/components/footer";
import Header from "@/components/header";
import JsonLd from "@/components/json-ld";
import PageViewTracker from "@/components/page-view-tracker";
import "../globals.css";
import { routing } from "@/i18n/routing";
import { Analytics } from "@vercel/analytics/next";

const SITE_URL = "https://mangolabs.com.br";
const SOCIAL_LINKS = [
  "https://www.linkedin.com/company/mangolabsbr",
  "https://github.com/mangolabsbr",
];

const poppins = Poppins({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const mulish = Mulish({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-mulish",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "layout" });

  return {
    metadataBase: new URL("https://mangolabs.com.br"),
    title: {
      default: t("title"),
      template: `%s | ${t("title")}`,
    },
    description: t("description"),
    applicationName: t("title"),
    authors: [{ name: t("title"), url: "https://mangolabs.com.br" }],
    creator: t("title"),
    publisher: t("title"),
    openGraph: {
      siteName: t("title"),
      type: "website",
      locale,
      title: t("title"),
      description: t("description"),
      url: "/",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
  };
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "layout" });

  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: t("title"),
    url: SITE_URL,
    logo: `${SITE_URL}/logo-transparent.png`,
    description: t("description"),
    sameAs: SOCIAL_LINKS,
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: t("title"),
    url: SITE_URL,
    inLanguage: routing.locales,
  };

  return (
    <html lang={locale}>
      <Analytics />
      <body
        className={`${poppins.variable} ${mulish.variable} flex min-h-screen flex-col font-sans antialiased`}
      >
        <JsonLd data={organizationLd} />
        <JsonLd data={websiteLd} />
        <NextIntlClientProvider messages={messages}>
          <PageViewTracker />
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
