import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const NotFoundPage = () => {
  const t = useTranslations("notFound");

  return (
    <main className="page-layout flex flex-col items-center py-24 text-center">
      <p className="font-heading text-6xl font-semibold text-primary">404</p>
      <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight">
        {t("title")}
      </h1>
      <p className="mt-3 text-muted-foreground">{t("description")}</p>
      <Link
        href="/"
        className="mt-8 text-sm font-medium text-primary hover:underline"
      >
        {t("backHome")}
      </Link>
    </main>
  );
};

export default NotFoundPage;
