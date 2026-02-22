"use client";

import { Locale, locales } from "@/i18n/config";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { Fragment, PropsWithChildren, useTransition } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuSeparator,
} from "@headlessui/react";
import { useTranslations } from "next-intl";
import classNames from "classnames";

type Props = {
  defaultValue: Locale;
  label: string;
};

const LocaleSwitcherSelect = ({ label }: PropsWithChildren<Props>) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const t = useTranslations("header");

  function onSelectChange(nextLocale: Locale) {
    startTransition(() => {
      router.replace(
        // @ts-ignore
        { pathname, params },
        { locale: nextLocale },
      );
    });
  }

  return (
    <Menu>
      <MenuButton
        as="button"
        className={classNames(
          "p-1 focus-visible:outline-none focus-visible:border-orange-700",
          {
            "transition-opacity opacity-50 pointer-events-none": isPending,
          },
        )}
      >
        {label}
      </MenuButton>
      <MenuItems
        anchor="bottom end"
        className="origin-top-right rounded-xl border-2 border-black bg-white p-1 transition duration-100 ease-out focus:outline-none data-closed:scale-95 data-closed:opacity-0"
      >
        {locales.map((locale, index) => (
          <Fragment key={locale}>
            <MenuItem key={locale}>
              <button
                className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-orange-900 hover:text-orange-900 focus-visible:outline-none focus-visible:border-orange-700"
                onClick={() => onSelectChange(locale)}
              >
                {t(`localeSwitcher.options.${locale}`)}
              </button>
            </MenuItem>
            {index < locales.length - 1 && (
              <MenuSeparator className="border-b border-gray-300 -mx-1" />
            )}
          </Fragment>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default LocaleSwitcherSelect;
