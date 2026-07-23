import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

/**
 * Pages to display: first, last, and a window around the current page.
 * Gaps are returned as `"gap-<page>"` strings (the page that follows the
 * gap, so keys stay stable) and rendered as an ellipsis.
 */
function pageItems(current: number, total: number): (number | string)[] {
  const pages = [
    ...new Set(
      [1, current - 1, current, current + 1, total].filter(
        (page) => page >= 1 && page <= total,
      ),
    ),
  ].sort((a, b) => a - b);

  const items: (number | string)[] = [];
  let previous = 0;
  for (const page of pages) {
    if (page - previous === 2) {
      // A gap of exactly one page — show the page itself, not an ellipsis.
      items.push(previous + 1);
    } else if (page - previous > 2) {
      items.push(`gap-${page}`);
    }
    items.push(page);
    previous = page;
  }
  return items;
}

type Props = {
  page: number;
  totalPages: number;
  hrefForPage: (page: number) => string;
  /** Accessible label for the nav landmark. */
  label: string;
  previousLabel: string;
  nextLabel: string;
  /** Optional trailing text, e.g. "Showing 6 of 8 articles". */
  summary?: string;
  className?: string;
};

const Paginator = ({
  page,
  totalPages,
  hrefForPage,
  label,
  previousLabel,
  nextLabel,
  summary,
  className,
}: Props) => {
  const previousControl = (
    <>
      <ChevronLeft className="size-5" />
      {previousLabel}
    </>
  );
  const nextControl = (
    <>
      {nextLabel}
      <ChevronRight className="size-5" />
    </>
  );

  return (
    <nav aria-label={label} className={cn("flex justify-center", className)}>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 rounded-full bg-card px-8 py-3 shadow-sm ring-1 ring-foreground/10">
        {page > 1 ? (
          <Link
            href={hrefForPage(page - 1)}
            className="flex items-center gap-1.5 font-medium transition-colors hover:text-primary"
          >
            {previousControl}
          </Link>
        ) : (
          <span
            aria-disabled="true"
            className="flex items-center gap-1.5 font-medium text-muted-foreground/50"
          >
            {previousControl}
          </span>
        )}

        <div className="flex items-center gap-1.5">
          {pageItems(page, totalPages).map((item) =>
            typeof item !== "number" ? (
              <span
                key={item}
                aria-hidden="true"
                className="flex size-10 items-end justify-center text-muted-foreground"
              >
                …
              </span>
            ) : item === page ? (
              <span
                key={item}
                aria-current="page"
                className="flex size-10 items-center justify-center rounded-full bg-primary font-medium text-primary-foreground ring-4 ring-primary/25"
              >
                {item}
              </span>
            ) : (
              <Link
                key={item}
                href={hrefForPage(item)}
                className="flex size-10 items-center justify-center rounded-full font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {item}
              </Link>
            ),
          )}
        </div>

        {page < totalPages ? (
          <Link
            href={hrefForPage(page + 1)}
            className="flex items-center gap-1.5 font-medium transition-colors hover:text-primary"
          >
            {nextControl}
          </Link>
        ) : (
          <span
            aria-disabled="true"
            className="flex items-center gap-1.5 font-medium text-muted-foreground/50"
          >
            {nextControl}
          </span>
        )}

        {summary && (
          <span className="text-sm text-muted-foreground">{summary}</span>
        )}
      </div>
    </nav>
  );
};

export default Paginator;
