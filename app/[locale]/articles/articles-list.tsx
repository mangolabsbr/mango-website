import { ArrowRight } from "lucide-react";
import { getFormatter, getTranslations } from "next-intl/server";
import BlurImage from "@/components/blur-image";
import JsonLd from "@/components/json-ld";
import Paginator from "@/components/paginator";
import { Card, CardContent } from "@/components/ui/card";
import type { Locale } from "@/i18n/config";
import { Link } from "@/i18n/navigation";
import {
  ARTICLES_PAGE_SIZE,
  getArticles,
  getArticlesPage,
  getArticlesPageCount,
} from "@/lib/articles";
import { absoluteUrl } from "@/lib/seo";

/** Page 1 lives at `/articles`; later pages at `/articles/page/<n>`. */
const pageHref = (page: number) =>
  page <= 1 ? "/articles" : `/articles/page/${page}`;

type Props = {
  locale: Locale;
  page: number;
};

/** Shared body for the articles root page and the paginated pages. */
const ArticlesList = async ({ locale, page }: Props) => {
  const t = await getTranslations({ locale, namespace: "articles" });
  const format = await getFormatter({ locale });

  const articles = getArticlesPage(locale, page);
  const totalPages = getArticlesPageCount(locale);
  const totalArticles = getArticles(locale).length;

  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: t("title"),
    description: t("meta.description"),
    url: absoluteUrl(locale, pageHref(page)),
    inLanguage: locale,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: articles.map((article, index) => ({
        "@type": "ListItem",
        position: (page - 1) * ARTICLES_PAGE_SIZE + index + 1,
        name: article.title,
        url: absoluteUrl(locale, `/articles/${article.slug}`),
      })),
    },
  };

  return (
    <main className="page-layout py-16">
      <JsonLd data={collectionLd} />
      <h1 className="mb-12 font-heading text-4xl font-semibold tracking-tight">
        {t("title")}
      </h1>

      {articles.length === 0 ? (
        <p className="text-muted-foreground">{t("empty")}</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group"
            >
              <Card className="h-full rounded-2xl pt-0 transition-shadow duration-300 group-hover:shadow-lg group-active:shadow-sm">
                <div className="aspect-video w-full overflow-hidden">
                  <div className="h-full w-full transition-transform duration-300 group-hover:scale-105 group-active:scale-103">
                    <BlurImage
                      src={article.thumbnail}
                      alt=""
                      width={1200}
                      height={630}
                      blurDataURL={article.thumbnailBlur}
                      className="h-full w-full"
                    />
                  </div>
                </div>
                <CardContent className="flex flex-1 flex-col gap-3">
                  <time
                    dateTime={article.date}
                    className="text-sm text-muted-foreground"
                  >
                    {format.dateTime(new Date(article.date), {
                      dateStyle: "long",
                    })}
                  </time>
                  <div className="flex-1 space-y-2">
                    <h2 className="font-heading text-xl font-semibold transition-colors group-hover:text-primary">
                      {article.title}
                    </h2>
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      {article.description}
                    </p>
                  </div>
                  <div className="border-t border-border/60 pt-4">
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:underline">
                      {t("readMore")}
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <Paginator
          className="mt-12"
          page={page}
          totalPages={totalPages}
          hrefForPage={pageHref}
          label={t("pagination.label")}
          previousLabel={t("pagination.previous")}
          nextLabel={t("pagination.next")}
          summary={t("pagination.showing", {
            shown: articles.length,
            total: totalArticles,
          })}
        />
      )}
    </main>
  );
};

export default ArticlesList;
