import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LocaleSwitcher from "../locale-switcher";
import MobileNav from "./mobile-nav";
import NavLink from "./nav-link";

const Header = () => {
  const t = useTranslations("header");

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="page-layout flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-heading text-lg font-semibold text-foreground"
        >
          <Image
            src="/logo-transparent.png"
            alt="Mango Labs"
            width={36}
            height={36}
          />
          Mango Labs
        </Link>
        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-6 md:flex">
            <NavLink href="/">{t("home")}</NavLink>
            <NavLink href="/apps">{t("apps")}</NavLink>
            <NavLink href="/articles">{t("articles")}</NavLink>
            <NavLink href="/contact">{t("contact")}</NavLink>
          </nav>
          <div className="ml-4 flex items-center gap-1">
            <LocaleSwitcher />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
