import { ArrowRight, Heart, Rocket, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Locale } from "@/i18n/config";
import { Link } from "@/i18n/navigation";
import { showcasedAppList } from "@/lib/apps";
import { metrics, techStack } from "@/lib/metrics";
import { alternates } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
};

const serviceIcons = {
  craft: Heart,
  speed: Rocket,
  trust: ShieldCheck,
} as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return { alternates: alternates(locale as Locale, "/") };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("home");
  const tCatalog = await getTranslations("catalog");
  const tDetail = await getTranslations("appDetail");

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-40 left-1/2 -z-10 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,--alpha(var(--color-primary)/14%),transparent_65%)]"
        />
        <div className="page-layout flex flex-col items-center gap-8 py-20 text-center md:py-28">
          <Badge variant="secondary" className="rounded-full px-4 py-1.5">
            {t("hero.badge")}
          </Badge>
          <h1 className="max-w-3xl font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground text-pretty">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="h-11 rounded-full px-6 text-base"
            >
              <Link href="/apps">
                {t("hero.ctaApps")}
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 rounded-full px-6 text-base"
            >
              <Link href="/contact">{t("hero.ctaContact")}</Link>
            </Button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-6">
            {showcasedAppList.map((app, index) => (
              <Link
                key={app.slug}
                href={`/apps/${app.slug}`}
                className={
                  index % 2 === 0
                    ? "-rotate-3 transition-transform hover:rotate-0 hover:scale-105"
                    : "rotate-3 transition-transform hover:rotate-0 hover:scale-105"
                }
              >
                <Image
                  src={app.icon}
                  alt={tCatalog(`${app.slug}.name`)}
                  width={72}
                  height={72}
                  className="rounded-2xl border border-border/60 shadow-lg"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="border-y border-border/60 bg-muted/40">
        <div className="page-layout py-16">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-3xl font-semibold tracking-tight">
              {t("metrics.title")}
            </h2>
            <p className="mt-2 text-muted-foreground">
              {t("metrics.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.key} className="text-center">
                <div className="font-heading text-4xl font-semibold text-primary sm:text-5xl">
                  {metric.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {t(`metrics.items.${metric.key}`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apps showcase */}
      <section className="page-layout py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight">
              {t("showcase.title")}
            </h2>
            <p className="mt-2 text-muted-foreground">
              {t("showcase.subtitle")}
            </p>
          </div>
          <Button asChild variant="ghost" className="text-primary">
            <Link href="/apps">
              {t("showcase.viewAll")}
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {showcasedAppList.map((app) => (
            <Link key={app.slug} href={`/apps/${app.slug}`} className="group">
              <Card className="h-full rounded-2xl transition-shadow group-hover:shadow-md">
                <CardContent className="flex h-full flex-col gap-4">
                  <Image
                    src={app.icon}
                    alt=""
                    width={56}
                    height={56}
                    className="rounded-xl border border-border/60"
                  />
                  <div className="flex-1 space-y-1">
                    <h3 className="font-heading font-semibold">
                      {tCatalog(`${app.slug}.name`)}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {tCatalog(`${app.slug}.tagline`)}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {app.kind === "mobile" ? (
                      <>
                        <Badge variant="outline">
                          {tDetail("platform.ios")}
                        </Badge>
                        <Badge variant="outline">
                          {tDetail("platform.android")}
                        </Badge>
                      </>
                    ) : (
                      <Badge variant="outline">{tDetail("platform.web")}</Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-border/60 bg-muted/40">
        <div className="page-layout py-20">
          <h2 className="mb-10 text-center font-heading text-3xl font-semibold tracking-tight">
            {t("services.title")}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {(["craft", "speed", "trust"] as const).map((key) => {
              const Icon = serviceIcons[key];
              return (
                <Card key={key} className="rounded-2xl">
                  <CardContent className="space-y-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-heading font-semibold">
                      {t(`services.items.${key}.title`)}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t(`services.items.${key}.description`)}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="page-layout py-16">
        <h2 className="mb-8 text-center font-heading text-xl font-semibold text-muted-foreground">
          {t("techStack.title")}
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="font-heading text-lg font-medium text-muted-foreground/70"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="page-layout pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-primary to-orange-700 px-8 py-14 text-center text-primary-foreground md:px-16">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            {t("cta.title")}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-primary-foreground/85 text-pretty">
            {t("cta.subtitle")}
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="mt-8 h-11 rounded-full px-6 text-base"
          >
            <Link href="/contact">{t("cta.button")}</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
