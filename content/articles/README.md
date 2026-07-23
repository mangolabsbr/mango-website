# Writing a new article

Step-by-step guide and conventions for adding an article to the site.

## 1. Create the files

```
content/articles/<slug>/
├── en.mdx   ← required (also the fallback for missing locales)
├── es.mdx   ← required
└── pt.mdx   ← required
public/articles/<slug>.<jpg|webp|png>   ← thumbnail
```

- **Slug**: kebab-case, English, descriptive (`how-xchanger-keeps-exchange-rates-fresh`). The slug is the public URL — never rename it after publishing.
- The slug is shared by all three locale files; only the file *content* is translated.
- All three locales are mandatory (site-wide rule: every user-facing string ships in en/es/pt). If a locale file is missing, the English version is served as fallback — treat that as a temporary state, not a pattern.

## 2. Frontmatter

Every locale file starts with the same frontmatter shape:

```yaml
---
title: "How Xchanger keeps exchange rates fresh"
description: "A look at how our currency converter balances rate freshness, offline support, and battery life."
date: "2026-06-28"
thumbnail: "/articles/how-xchanger-keeps-exchange-rates-fresh.jpg"
---
```

Rules:

- **`title`** — translated per locale. Keep it under ~60 characters when possible (it's the SEO `<title>` and the OG headline).
- **`description`** — translated per locale, ~110–160 characters. It's the meta description, the card excerpt, the RSS item body, and the text under link previews. Write it as a hook, not a summary of headings.
- **`date`** — **must be quoted** (`"2026-06-28"`). Unquoted, YAML parses it as a Date object and the build fails validation. Same value in all three locale files. Articles are ordered by this field, newest first.
- **`thumbnail`** — absolute path under `/public`, identical in all three locale files. The build **fails if the file doesn't exist**, so typos surface immediately.

## 3. Thumbnail

- Drop the image in `public/articles/`, named after the slug.
- **Any file size is fine.** On-site rendering goes through `next/image` optimization, and social crawlers get a build-time re-encode (center-cropped to 1200×630 JPEG) — nobody ever downloads the original.
- **Format**: JPEG or WebP for photos (WebP keeps the repo lighter; delivery is identical either way since visitors get optimizer output, not the source). PNG only for flat/graphic images — it's 2–5× heavier for photos with no benefit.
- Prefer landscape images around **16:9**; cards and the article hero crop to that ratio (`object-cover`), and the OG crop is 1.91:1 — compose with the center safe.
- A tiny blurred placeholder is generated from it at build time automatically.

## 4. Body (MDX)

Start with a paragraph, not a heading — the `h1` comes from the frontmatter `title`.

Supported elements (styled in `app/[locale]/articles/mdx-components.tsx`):

| Element | Usage |
|---|---|
| `##` / `###` | Section / subsection headings (never `#`) |
| paragraphs, `**bold**`, `*italic*` | Body copy |
| `-` / `1.` lists | Bulleted / numbered lists |
| `>` | Blockquote |
| `` `code` `` / fenced blocks | Inline code / code blocks |
| `---` | Horizontal rule |
| `[text](/contact)` | Internal link — root-relative; the locale prefix is added automatically |
| `[text](https://…)` | External link — opens in a new tab automatically |

Adding a new element? Style it in `mdx-components.tsx` first, or it renders unstyled.

### Voice & structure patterns

- Open with the problem or a concrete claim in 1–2 short paragraphs — no throat-clearing.
- 2–3 `##` sections with short, assertive headings ("Caching with honesty", "Boring is the goal").
- Short paragraphs (2–4 sentences). Bold the lead-in of list items when listing benefits.
- Close with a takeaway line, optionally linking to [/contact](/contact) or an app page.
- 150–450 words is the sweet spot for this blog; go longer only when the content earns it.
- Translations are real translations, not transliterations — idioms should read naturally in each language (e.g. "dinner-table test" → "prueba de la sobremesa" / "teste da mesa de jantar").

## 5. Verify

```bash
pnpm dev      # preview at /articles and /articles/<slug> (+ /es/…, /pt/…)
pnpm build    # validates frontmatter schema, date format, thumbnail existence
pnpm lint
```

## What you do NOT need to touch

Everything below derives from the files above at build time:

- Listing page + pagination (`/articles`, `/articles/page/<n>`)
- Sitemap entry with `lastModified`
- RSS feeds (`/feed.xml`, `/<locale>/feed.xml`)
- OG/Twitter preview image (1200×630 re-encode of the thumbnail)
- JSON-LD (`BlogPosting`, breadcrumbs, listing `ItemList`)
- "Latest articles" column in the footer
- Blur-up placeholder for the thumbnail

## Checklist

- [ ] `content/articles/<slug>/{en,es,pt}.mdx` all created
- [ ] Frontmatter: translated `title` + `description`; identical quoted `date` + `thumbnail`
- [ ] Thumbnail exists in `public/articles/`
- [ ] Body starts with a paragraph, sections use `##`
- [ ] `pnpm build` passes
