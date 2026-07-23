import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import type { Locale } from "@/i18n/config";
import { Link } from "@/i18n/navigation";
import { showcasedAppList } from "@/lib/apps";
import { getArticles } from "@/lib/articles";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/mangolabsbr",
    Icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/mangolabsbr",
    Icon: FaGithub,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Mango-Labs/61592320798007/",
    Icon: FaFacebook,
  },
  {
    label: "X",
    href: "https://x.com/mangolabsbr",
    Icon: FaXTwitter,
  },
];

const Footer = async () => {
  const t = await getTranslations("footer");
  const tCatalog = await getTranslations("catalog");
  const locale = (await getLocale()) as Locale;
  const latestArticles = getArticles(locale).slice(0, 3);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-muted/40">
      <div className="page-layout grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-6">
        <div className="space-y-3 lg:col-span-2">
          <Link
            href="/"
            className="flex items-center gap-2 font-heading text-lg font-semibold"
          >
            <Image
              src="/logo-transparent.png"
              alt="Mango Labs"
              width={32}
              height={32}
            />
            Mango Labs
          </Link>
          <p className="text-sm text-muted-foreground">{t("tagline")}</p>
          <div className="flex gap-3 pt-1">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-3 font-heading text-sm font-semibold">
            {t("sections.apps")}
          </h3>
          <ul className="space-y-2 text-sm">
            {showcasedAppList.map((app) => (
              <li key={app.slug}>
                <Link
                  href={`/apps/${app.slug}`}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {tCatalog(`${app.slug}.name`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-3 font-heading text-sm font-semibold">
            {t("sections.company")}
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/articles"
                className="text-muted-foreground hover:text-foreground"
              >
                {t("articles")}
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-foreground"
              >
                {t("contact")}
              </Link>
            </li>
          </ul>
        </div>
        {latestArticles.length > 0 && (
          <div className="lg:col-span-2">
            <h3 className="mb-3 font-heading text-sm font-semibold">
              {t("sections.latestArticles")}
            </h3>
            <ul className="space-y-2 text-sm">
              {latestArticles.map((article) => (
                <li key={article.slug}>
                  <Link
                    href={`/articles/${article.slug}`}
                    className="line-clamp-2 text-muted-foreground hover:text-foreground"
                  >
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="border-t border-border/60">
        <div className="page-layout py-5 text-sm text-muted-foreground">
          {t("copyright", { year })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
