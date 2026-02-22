import Button from "@/components/form/ui/button";
import PortfolioUpdate from "@/components/shapes/portfolio-update";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { FiMail } from "react-icons/fi";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("home");

  return (
    <main className="py-4 mb-20 page-layout">
      <div className="flex">
        <div className="pt-[120px] max-w-[500px]">
          <span className="font-serif text-5xl text-orange-900 text-shadow-orange-50 block">
            {t("title1")}
          </span>
          <span className="font-serif text-5xl text-orange-900 text-shadow-orange-50 block">
            {t("title2")}
          </span>
          <span className="font-serif text-5xl text-orange-900 text-shadow-orange-50 block">
            {t("title3")}
          </span>
          <span className="text-xl bg-orange-50 mt-10 block">
            {t("description")}
          </span>
        </div>
        <div className="grow lg:relative">
          <PortfolioUpdate
            width={600}
            height={600}
            className="hidden md:block opacity-20 lg:opacity-100 absolute top-[10px] lg:top-[-75px] right-0 -z-20"
          />
        </div>
      </div>
      <div className="mt-10 text-center">
        <Link href="/contact">
          <Button type="button">
            <FiMail className="inline mr-2" />
            {t("contact")}
          </Button>
        </Link>
      </div>
    </main>
  );
}
