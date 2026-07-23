import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/config";
import { alternates } from "@/lib/seo";
import ArticlesList from "./articles-list";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "articles" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
    alternates: alternates(locale as Locale, "/articles"),
  };
}

export default async function ArticlesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ArticlesList locale={locale as Locale} page={1} />;
}
