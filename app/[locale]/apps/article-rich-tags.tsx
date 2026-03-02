import { Link } from "@/i18n/navigation";
import type { ReactNode } from "react";

/**
 * Rich text tag components for app legal pages (terms, privacy).
 * Maps semantic tags to HTML elements with classes from the app pages.
 */
export const appsArticleRichTags = {
  h1: (chunks: ReactNode) => (
    <h1 className="text-4xl font-serif font-medium text-black mb-4">
      {chunks}
    </h1>
  ),
  h2: (chunks: ReactNode) => (
    <h2 className="text-2xl font-serif font-medium mt-8 mb-4">{chunks}</h2>
  ),
  h3: (chunks: ReactNode) => (
    <h3 className="text-xl font-serif font-medium mt-6 mb-3">{chunks}</h3>
  ),
  section: (chunks: ReactNode) => <section>{chunks}</section>,
  p: (chunks: ReactNode) => <p>{chunks}</p>,
  pBold: (chunks: ReactNode) => (
    <span className="font-medium block">{chunks}</span>
  ),
  pBoldMt4: (chunks: ReactNode) => (
    <span className="font-medium mt-4 block">{chunks}</span>
  ),
  ul: (chunks: ReactNode) => (
    <ul className="markdown">{chunks}</ul>
  ),
  li: (chunks: ReactNode) => <li>{chunks}</li>,
  strong: (chunks: ReactNode) => <strong>{chunks}</strong>,
  footer: (chunks: ReactNode) => (
    <div className="mt-12 pt-8 border-t border-orange-300">
      <p className="text-center text-orange-900 font-medium">{chunks}</p>
    </div>
  ),
  br: () => <br />,
  // Links - hrefs are fixed per link type
  linkEmail: (chunks: ReactNode) => (
    <Link
      href="mailto:hello@mangolabs.com.br"
      className="text-orange-700 hover:text-orange-900 underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {chunks}
    </Link>
  ),
  linkWebsite: (chunks: ReactNode) => (
    <Link
      href="https://mangolabs.com.br"
      className="text-orange-700 hover:text-orange-900 underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {chunks}
    </Link>
  ),
  linkSentry: (chunks: ReactNode) => (
    <Link
      href="https://sentry.io/"
      className="text-orange-700 hover:text-orange-900 underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {chunks}
    </Link>
  ),
  linkSentryPrivacy: (chunks: ReactNode) => (
    <Link
      href="https://sentry.io/privacy/"
      className="text-orange-700 hover:text-orange-900 underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {chunks}
    </Link>
  ),
  linkRevenueCat: (chunks: ReactNode) => (
    <Link
      href="https://www.revenuecat.com/"
      className="text-orange-700 hover:text-orange-900 underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {chunks}
    </Link>
  ),
  linkRevenueCatPrivacy: (chunks: ReactNode) => (
    <Link
      href="https://www.revenuecat.com/privacy"
      className="text-orange-700 hover:text-orange-900 underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {chunks}
    </Link>
  ),
  linkApple: (chunks: ReactNode) => (
    <Link
      href="https://www.apple.com/privacy/"
      className="text-orange-700 hover:text-orange-900 underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {chunks}
    </Link>
  ),
  linkGoogle: (chunks: ReactNode) => (
    <Link
      href="https://policies.google.com/privacy"
      className="text-orange-700 hover:text-orange-900 underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {chunks}
    </Link>
  ),
  linkVexo: (chunks: ReactNode) => (
    <Link
      href="https://vexo.co/"
      className="text-orange-700 hover:text-orange-900 underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {chunks}
    </Link>
  ),
  linkVexoPrivacy: (chunks: ReactNode) => (
    <Link
      href="https://vexo.io/privacy"
      className="text-orange-700 hover:text-orange-900 underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {chunks}
    </Link>
  ),
} as const;
