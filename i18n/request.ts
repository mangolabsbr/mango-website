import {
  type GetRequestConfigParams,
  getRequestConfig,
  type RequestConfig,
} from "next-intl/server";
import { locales } from "@/i18n/config";

const defaultLocale = "en";

export default getRequestConfig(
  async ({
    requestLocale,
    locale,
  }: GetRequestConfigParams): Promise<RequestConfig> => {
    // Use explicit locale if provided (e.g. from getTranslations({locale: 'en'}))
    // Otherwise await the request locale from the [locale] segment / middleware
    const requested = locale ?? (await requestLocale);
    // Use fallback instead of notFound() - notFound() cannot be called from root layout
    // when getMessages() triggers this config. The middleware ensures valid locales reach the app.
    const resolvedLocale =
      requested && locales.includes(requested as (typeof locales)[number])
        ? requested
        : defaultLocale;

    return {
      messages: (await import(`@/messages/${resolvedLocale}.json`)).default,
      locale: resolvedLocale,
    };
  },
);
