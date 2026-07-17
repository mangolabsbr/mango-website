import { ArrowLeft, ExternalLink } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import StoreBadge from "@/components/store-badge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { type ShowcasedAppSlug, showcasedApps } from "@/lib/apps";
import MobileMockup from "../mobile-mockup";

type Props = {
  slug: ShowcasedAppSlug;
};

const featureKeys = ["0", "1", "2", "3"] as const;

export async function appDetailMetadata(
  locale: string,
  slug: ShowcasedAppSlug,
) {
  const t = await getTranslations({ locale, namespace: "catalog" });

  return {
    title: t(`${slug}.meta.title`),
    description: t(`${slug}.meta.description`),
  };
}

const AppDetailPage = async ({ slug }: Props) => {
  const app = showcasedApps[slug];
  const t = await getTranslations("appDetail");
  const tCatalog = await getTranslations("catalog");

  return (
    <main className="page-layout py-12">
      <Link
        href="/apps"
        className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        {t("backToApps")}
      </Link>

      {/* Hero / About */}
      <div className="flex gap-6">
        <div className="grow-2">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <Image
              src={app.icon}
              alt={tCatalog(`${slug}.name`)}
              width={112}
              height={112}
              priority
              className="rounded-3xl border border-border/60 shadow-sm"
            />
            <div className="flex-1 space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="font-heading text-4xl font-semibold tracking-tight">
                  {tCatalog(`${slug}.name`)}
                </h1>
                <div className="flex gap-1.5">
                  {app.kind === "mobile" ? (
                    <>
                      <Badge variant="outline">{t("platform.ios")}</Badge>
                      <Badge variant="outline">{t("platform.android")}</Badge>
                    </>
                  ) : (
                    <Badge variant="outline">{t("platform.web")}</Badge>
                  )}
                </div>
              </div>
              <p className="text-lg font-medium text-primary">
                {tCatalog(`${slug}.tagline`)}
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {app.appStoreUrl && (
                  <StoreBadge store="appStore" href={app.appStoreUrl} />
                )}
                {app.playStoreUrl && (
                  <StoreBadge store="playStore" href={app.playStoreUrl} />
                )}
                {app.websiteUrl && (
                  <Button asChild size="lg" className="h-11 rounded-xl px-5">
                    <a
                      href={app.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("visitWebsite")}
                      <ExternalLink data-icon="inline-end" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* About */}
          <section className="mt-12 max-w-3xl">
            <h2 className="mb-3 font-heading text-2xl font-semibold tracking-tight">
              {t("aboutTitle")}
            </h2>
            <p className="text-muted-foreground">
              {tCatalog(`${slug}.description`)}
            </p>
          </section>
        </div>
        {app.screenshot && (
          <div className="grow-1 hidden items-center justify-center lg:flex">
            <MobileMockup src={app.screenshot} />
          </div>
        )}
      </div>

      {/* Features */}
      <section className="mt-12">
        <h2 className="mb-5 font-heading text-2xl font-semibold tracking-tight">
          {t("featuresTitle")}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {featureKeys.map((key, index) => {
            const Icon = app.featureIcons[index];
            return (
              <Card key={key} className="rounded-2xl">
                <CardContent className="space-y-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-heading font-semibold">
                    {tCatalog(`${slug}.features.${key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {tCatalog(`${slug}.features.${key}.description`)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Legal */}
      {app.hasLegalPages && (
        <section className="mt-12 border-t border-border/60 pt-8">
          <h2 className="mb-3 font-heading text-lg font-semibold">
            {t("legalTitle")}
          </h2>
          <div className="flex flex-wrap gap-6 text-sm">
            <Link
              href={`/apps/${slug}/privacy`}
              className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              {t("privacyPolicy")}
            </Link>
            <Link
              href={`/apps/${slug}/terms`}
              className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              {t("termsOfUse")}
            </Link>
          </div>
        </section>
      )}
    </main>
  );
};

export default AppDetailPage;
