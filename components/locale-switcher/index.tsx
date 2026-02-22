import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./locale-swicher-select";
import { Locale } from "@/i18n/config";

const LocaleSwitcher = () => {
  const t = useTranslations("header");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale as Locale}
      label={t("localeSwitcher.label")}
    />
  );
};

export default LocaleSwitcher;
