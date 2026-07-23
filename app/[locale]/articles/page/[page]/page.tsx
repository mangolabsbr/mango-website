import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/config";
import { getArticlesPageCount } from "@/lib/articles";
import { alternates } from "@/lib/seo";
import ArticlesList from "../../articles-list";

type Props = {
  params: Promise<{ locale: string; page: string }>;
};

/** Pages ≥ 2 only — page 1 is the `/articles` root. */
export function generateStaticParams({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const totalPages = getArticlesPageCount(locale as Locale);

  return Array.from({ length: Math.max(0, totalPages - 1) }, (_, index) => ({
    page: String(index + 2),
  }));
}

export async function generateMetadata({ params }: Props) {
  const { locale, page } = await params;
  const t = await getTranslations({ locale, namespace: "articles" });

  return {
    title: `${t("meta.title")} — ${t("pagination.pageOf", { page, total: getArticlesPageCount(locale as Locale) })}`,
    description: t("meta.description"),
    alternates: alternates(locale as Locale, `/articles/page/${page}`),
  };
}

export default async function ArticlesPaginatedPage({ params }: Props) {
  const { locale, page: pageParam } = await params;
  setRequestLocale(locale);

  const page = Number(pageParam);
  const totalPages = getArticlesPageCount(locale as Locale);

  if (!Number.isInteger(page) || page < 2 || page > totalPages) {
    notFound();
  }

  return <ArticlesList locale={locale as Locale} page={page} />;
}
