# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Uses pnpm as the package manager.

- `pnpm dev` — start dev server (http://localhost:3000)
- `pnpm build` — production build
- `pnpm lint` — lint with Biome (`biome check`)
- `pnpm format` — format with Biome (`biome format --write`)

There is no test suite. Linting/formatting is Biome (not ESLint/Prettier), configured in `biome.json` with the Next.js and React rule domains enabled.

## Architecture

Marketing/legal website for Mango Labs apps. Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 3. Fully internationalized with `next-intl` — this is the core architectural concern.

### i18n (next-intl)

- Locales: `en` (default), `es`, `pt`, defined in `i18n/config.ts`. `localePrefix: "as-needed"` — the default locale has no URL prefix.
- `proxy.ts` is the middleware (Next 16 naming) — it runs next-intl's locale detection on all non-API, non-asset routes.
- `i18n/request.ts` loads `messages/<locale>.json`; it falls back to `en` rather than calling `notFound()` (intentional — see comment there).
- All translated copy lives in `messages/{en,es,pt}.json` under namespaces `header`, `layout`, `home`, `contact`, `apps`. Any user-facing string change must be made in all three files.
- For internal links and navigation, import `Link`/`useRouter`/`usePathname` from `i18n/navigation.ts`, not from `next/link`/`next/navigation`, so locale prefixes are handled.

### Pages

- Every page lives under `app/[locale]/` and follows the same pattern: await `params` to get `locale`, call `setRequestLocale(locale)` (required for static rendering), then `getTranslations(...)`.
- `app/[locale]/layout.tsx` validates the locale, sets up `NextIntlClientProvider`, and loads Google fonts (Bitter, Lato) as CSS variables consumed by Tailwind.
- Per-app legal pages follow the pattern `app/[locale]/apps/<app-name>/{privacy,terms}/page.tsx` (apps: proportion, xchanger, sunrouter, splitte). The entire page body is a single rich-text message rendered with `t.rich("content", appsArticleRichTags)` — `appsArticleRichTags` (`app/[locale]/apps/article-rich-tags.tsx`) maps tags like `<h2>`, `<p>`, `<ul>` used inside the JSON messages to styled elements. To add a new app's legal pages, copy an existing pair and add the message content to all three locale files.

### Articles (content-collections)

- Articles are MDX files managed by `content-collections` (config in `content-collections.ts`, build wired via `withContentCollections` in `next.config.ts` — it is async, so it must stay the outermost config wrapper). Generated output lives in `.content-collections/` (gitignored) and is imported via the `content-collections` alias in `tsconfig.json`.
- One article = `content/articles/<slug>/{en,es,pt}.mdx`. Frontmatter: `title`, `description`, quoted `date` ("YYYY-MM-DD"), and `thumbnail` (a `/public` path, 1200×630). All three locales must exist; `lib/articles.ts` falls back to `en` if one is missing.
- Routes: `/articles` (page 1), `/articles/page/<n>` (pagination, `ARTICLES_PAGE_SIZE` in `lib/articles.ts`), `/articles/<slug>`. Sorting is most-recent-first. MDX body styling lives in `app/[locale]/articles/mdx-components.tsx`; new article slugs are picked up by `app/sitemap.ts` automatically.
- Social previews (og:image/twitter:image) are generated per article by `app/[locale]/articles/[slug]/opengraph-image.tsx` (branded card via `ImageResponse`, Poppins TTF in `assets/fonts/`, traced into the serverless bundle via `outputFileTracingIncludes`). The frontmatter `thumbnail` is only used for on-site rendering, so its file size doesn't affect link previews.

### Other

- The contact form (`components/form/send-email-form/`, react-hook-form + zod) posts to `app/api/send-email/route.ts`, which forwards to EmailJS using `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, `EMAILJS_PUBLIC_KEY`, and `EMAILJS_PRIVATE_KEY` env vars.
- Components live in `components/<name>/index.tsx`; form primitives (input, textarea, button, form-element) are under `components/form/ui/`.
