import path from "node:path";
import Image from "next/image";
import type { ComponentProps, ReactNode } from "react";
import sharp from "sharp";
import { Link } from "@/i18n/navigation";

const IMAGE_CLASS = "my-6 w-full rounded-xl border border-border/60";

/**
 * Markdown images carry no dimensions, so we read them off the file in
 * `/public` at build time (every article page is prerendered). That gives
 * `next/image` what it needs to reserve the space and serve a responsive,
 * re-encoded version. Anything it can't measure falls back to a plain `img`.
 */
const ArticleImage = async ({ src, alt, ...props }: ComponentProps<"img">) => {
  const source = typeof src === "string" ? src : "";
  const size = source.startsWith("/")
    ? await sharp(path.join(process.cwd(), "public", source))
        .metadata()
        .catch(() => null)
    : null;

  if (!size?.width || !size.height) {
    return (
      // biome-ignore lint/performance/noImgElement: unmeasurable source, so next/image can't size it.
      <img src={source} alt={alt ?? ""} className={IMAGE_CLASS} {...props} />
    );
  }

  return (
    <Image
      src={source}
      alt={alt ?? ""}
      width={size.width}
      height={size.height}
      sizes="(min-width: 768px) 768px, 100vw"
      className={IMAGE_CLASS}
    />
  );
};

const ExternalOrInternalLink = ({
  href = "",
  children,
  ...props
}: ComponentProps<"a">) => {
  const className =
    "text-primary underline underline-offset-2 hover:text-primary/80";

  // Internal links go through the i18n Link so locale prefixes are handled.
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
};

/**
 * Tag components for article MDX bodies, styled to match the rest of the
 * site (see `apps/article-rich-tags.tsx` for the legal-page equivalent).
 */
export const articleMdxComponents = {
  h2: ({ children }: { children?: ReactNode }) => (
    <h2 className="mt-10 mb-4 font-heading text-2xl font-semibold tracking-tight">
      {children}
    </h2>
  ),
  h3: ({ children }: { children?: ReactNode }) => (
    <h3 className="mt-8 mb-3 font-heading text-xl font-semibold tracking-tight">
      {children}
    </h3>
  ),
  p: ({ children }: { children?: ReactNode }) => (
    <p className="my-4 leading-relaxed">{children}</p>
  ),
  ul: ({ children }: { children?: ReactNode }) => (
    <ul className="my-4 list-disc space-y-2 pl-6">{children}</ul>
  ),
  ol: ({ children }: { children?: ReactNode }) => (
    <ol className="my-4 list-decimal space-y-2 pl-6">{children}</ol>
  ),
  li: ({ children }: { children?: ReactNode }) => (
    <li className="leading-relaxed">{children}</li>
  ),
  blockquote: ({ children }: { children?: ReactNode }) => (
    <blockquote className="my-6 border-l-4 border-primary/40 pl-4 text-muted-foreground italic">
      {children}
    </blockquote>
  ),
  code: ({ children }: { children?: ReactNode }) => (
    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
      {children}
    </code>
  ),
  pre: ({ children }: { children?: ReactNode }) => (
    <pre className="my-6 overflow-x-auto rounded-xl bg-muted p-4 text-sm [&_code]:bg-transparent [&_code]:p-0">
      {children}
    </pre>
  ),
  hr: () => <hr className="my-8 border-border/60" />,
  a: ExternalOrInternalLink,
  img: ArticleImage,
};
