import { useTranslations } from "next-intl";
import { FaApple, FaGooglePlay } from "react-icons/fa6";

type Props = {
  store: "appStore" | "playStore";
  href: string;
};

const StoreBadge = ({ store, href }: Props) => {
  const t = useTranslations("appDetail");
  const Icon = store === "appStore" ? FaApple : FaGooglePlay;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-13 items-center gap-2.5 rounded-xl bg-foreground px-4 text-background transition-opacity hover:opacity-85"
    >
      <Icon className="size-6" />
      <span className="flex flex-col text-left leading-tight">
        <span className="text-[0.65rem]">{t(`${store}.top`)}</span>
        <span className="text-base font-semibold">{t(`${store}.bottom`)}</span>
      </span>
    </a>
  );
};

export default StoreBadge;
