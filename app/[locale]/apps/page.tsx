import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FaApple, FaGooglePlay } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { showcasedAppList } from "@/lib/apps";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "appsPage" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function AppsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("appsPage");
  const tCatalog = await getTranslations("catalog");
  const tDetail = await getTranslations("appDetail");

  return (
    <main className="page-layout py-16">
      <div className="mb-12 max-w-2xl">
        <h1 className="font-heading text-4xl font-semibold tracking-tight">
          {t("title")}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">{t("subtitle")}</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {showcasedAppList.map((app) => (
          <Card key={app.slug} className="rounded-2xl">
            <CardContent className="flex h-full flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <Image
                  src={app.icon}
                  alt=""
                  width={72}
                  height={72}
                  className="rounded-2xl border border-border/60"
                />
                <div className="flex flex-wrap justify-end gap-1.5">
                  {app.kind === "mobile" ? (
                    <>
                      <Badge variant="outline">{tDetail("platform.ios")}</Badge>
                      <Badge variant="outline">
                        {tDetail("platform.android")}
                      </Badge>
                    </>
                  ) : (
                    <Badge variant="outline">{tDetail("platform.web")}</Badge>
                  )}
                </div>
              </div>
              <div className="flex-1 space-y-2">
                <h2 className="font-heading text-xl font-semibold">
                  {tCatalog(`${app.slug}.name`)}
                </h2>
                <p className="text-sm font-medium text-primary">
                  {tCatalog(`${app.slug}.tagline`)}
                </p>
                <p className="line-clamp-3 text-sm text-muted-foreground">
                  {tCatalog(`${app.slug}.description`)}
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-border/60 pt-4">
                <Link
                  href={`/apps/${app.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  {t("learnMore")}
                  <ArrowRight className="size-4" />
                </Link>
                <div className="flex items-center gap-3 text-muted-foreground">
                  {app.appStoreUrl && (
                    <a
                      href={app.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground"
                      aria-label={`${tCatalog(`${app.slug}.name`)} — App Store`}
                    >
                      <FaApple className="size-5" />
                    </a>
                  )}
                  {app.playStoreUrl && (
                    <a
                      href={app.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground"
                      aria-label={`${tCatalog(`${app.slug}.name`)} — Google Play`}
                    >
                      <FaGooglePlay className="size-4.5" />
                    </a>
                  )}
                  {app.websiteUrl && (
                    <a
                      href={app.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground"
                      aria-label={`${tCatalog(`${app.slug}.name`)} — ${tDetail("visitWebsite")}`}
                    >
                      <ExternalLink className="size-5" />
                    </a>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
