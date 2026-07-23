import type { ComponentProps, ReactNode } from "react";
import { Link } from "@/i18n/navigation";

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
};
