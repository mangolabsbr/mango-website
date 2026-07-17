import { getTranslations, setRequestLocale } from "next-intl/server";
import SendEmailForm from "@/components/form/send-email-form";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("contact");

  return (
    <main className="page-layout py-16">
      <div className="mx-auto max-w-xl">
        <div className="mb-10 text-center">
          <h1 className="font-heading text-4xl font-semibold tracking-tight">
            {t("title")}
          </h1>
          <p className="mt-3 text-muted-foreground">{t("subtitle")}</p>
        </div>
        <Card className="rounded-2xl">
          <CardContent className="pt-2">
            <SendEmailForm />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
