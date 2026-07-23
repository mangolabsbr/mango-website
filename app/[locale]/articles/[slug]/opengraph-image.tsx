import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import type { Locale } from "@/i18n/config";
import { getArticle } from "@/lib/articles";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Mango Labs";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

/**
 * Branded OG card generated at build time from the article frontmatter —
 * lightweight PNG, so previews work everywhere (WhatsApp caps og:image at
 * ~600KB) regardless of the size of the article's thumbnail asset.
 */
export default async function OpenGraphImage({ params }: Props) {
  const { locale, slug } = await params;
  const article = getArticle(locale as Locale, slug);

  const [poppins, logo] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/Poppins-SemiBold.ttf")),
    readFile(join(process.cwd(), "public/logo-transparent.png")),
  ]);

  const title = article?.title ?? "Mango Labs";
  const description = article?.description ?? "";

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        backgroundImage: "linear-gradient(135deg, #fb923c 0%, #c2410c 100%)",
        color: "#fff",
        fontFamily: "Poppins",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        {/** biome-ignore lint/performance/noImgElement: satori only renders plain img tags */}
        <img
          src={`data:image/png;base64,${logo.toString("base64")}`}
          width={72}
          height={72}
          alt=""
        />
        <div style={{ display: "flex", fontSize: 36 }}>Mango Labs</div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
          maxWidth: 1000,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: title.length > 55 ? 54 : 64,
            lineHeight: 1.15,
            letterSpacing: -1,
          }}
        >
          {title}
        </div>
        {description && (
          <div
            style={{
              display: "flex",
              fontSize: 28,
              lineHeight: 1.4,
              color: "rgba(255, 255, 255, 0.85)",
            }}
          >
            {description.length > 140
              ? `${description.slice(0, 140)}…`
              : description}
          </div>
        )}
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 26,
          color: "rgba(255, 255, 255, 0.85)",
        }}
      >
        mangolabs.com.br
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Poppins",
          data: poppins,
          weight: 600,
          style: "normal",
        },
      ],
    },
  );
}
