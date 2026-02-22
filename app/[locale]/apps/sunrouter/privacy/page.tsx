import { getTranslations, setRequestLocale } from "next-intl/server";
import { appsArticleRichTags } from "@/app/[locale]/apps/article-rich-tags";

export default async function SunRouterPrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("apps.sunrouter.privacy");

  return (
    <main className="page-layout pt-20 pb-20">
      <article className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none text-black space-y-6">
          {t.rich("content", appsArticleRichTags)}
        </div>
      </article>
    </main>
  );
}
