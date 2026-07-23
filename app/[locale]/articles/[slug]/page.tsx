import { MDXContent } from "@content-collections/mdx/react";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import {
  getFormatter,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import BlurImage from "@/components/blur-image";
import JsonLd from "@/components/json-ld";
import type { Locale } from "@/i18n/config";
import { Link } from "@/i18n/navigation";
import { getArticle, getArticleSlugs } from "@/lib/articles";
import { absoluteUrl, alternates, ogLocale, SITE_URL } from "@/lib/seo";
import { articleMdxComponents } from "../mdx-components";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

// Every article is prerendered (all slugs for all locales — missing locale
// files fall back to `en` via `getArticle`). Unknown slugs must 404 from the
// routing layer instead of invoking a serverless render: this segment's
// module graph pulls in sharp (via `opengraph-image.tsx`), which is not
// loadable in the deployed function and turns on-demand renders into 500s.
export const dynamicParams = false;

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const article = getArticle(locale as Locale, slug);

  if (!article) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "layout" });

  return {
    title: article.title,
    description: article.description,
    alternates: alternates(locale as Locale, `/articles/${slug}`),
    // og:image / twitter:image come from the colocated `opengraph-image.tsx`
    // (file-based metadata overrides config-based `images`). Defining
    // `openGraph`/`twitter` here fully replaces the layout's versions, so
    // site-wide fields (siteName, locale, url) must be repeated.
    openGraph: {
      type: "article",
      siteName: t("title"),
      locale: ogLocale(locale as Locale),
      url: absoluteUrl(locale as Locale, `/articles/${slug}`),
      title: article.title,
      description: article.description,
      publishedTime: article.date,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const article = getArticle(locale as Locale, slug);

  if (!article) {
    notFound();
  }

  const t = await getTranslations("articles");
  const tHeader = await getTranslations("header");
  const tLayout = await getTranslations("layout");
  const format = await getFormatter({ locale });

  const organization = {
    "@type": "Organization",
    name: tLayout("title"),
    url: SITE_URL,
  };

  const blogPostingLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    image: [`${SITE_URL}${article.thumbnail}`],
    datePublished: article.date,
    inLanguage: locale,
    mainEntityOfPage: absoluteUrl(locale as Locale, `/articles/${slug}`),
    author: organization,
    publisher: {
      ...organization,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo-transparent.png`,
      },
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: tHeader("home"),
        item: absoluteUrl(locale as Locale, "/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: t("title"),
        item: absoluteUrl(locale as Locale, "/articles"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
      },
    ],
  };

  return (
    <main className="page-layout py-16">
      <JsonLd data={blogPostingLd} />
      <JsonLd data={breadcrumbLd} />
      <article className="mx-auto max-w-3xl">
        <Link
          href="/articles"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          <ArrowLeft className="size-4" />
          {t("backToList")}
        </Link>
        <header className="mt-6 mb-10">
          <time
            dateTime={article.date}
            className="text-sm text-muted-foreground"
          >
            {format.dateTime(new Date(article.date), { dateStyle: "long" })}
          </time>
          <h1 className="mt-2 font-heading text-4xl font-semibold tracking-tight">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {article.description}
          </p>
        </header>
        <div className="mb-10 aspect-video w-full overflow-hidden rounded-2xl border border-border/60">
          <BlurImage
            src={article.thumbnail}
            alt=""
            width={1200}
            height={630}
            priority
            blurDataURL={article.thumbnailBlur}
            className="h-full w-full"
          />
        </div>
        <div className="text-base">
          <MDXContent code={article.body} components={articleMdxComponents} />
        </div>
      </article>
    </main>
  );
}
