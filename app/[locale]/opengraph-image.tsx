import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Mango Labs";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function OpengraphImage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "layout" });

  const logo = await readFile(
    join(process.cwd(), "public/logo-transparent.png"),
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "90px",
        background: "linear-gradient(135deg, #fffdf7 0%, #fdf1e3 100%)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "36px" }}>
        {/* biome-ignore lint/performance/noImgElement: satori/ImageResponse only supports <img> */}
        <img src={logoSrc} width={168} height={168} alt="" />
        <div
          style={{
            display: "flex",
            fontSize: "88px",
            fontWeight: 700,
            color: "#1c1917",
            letterSpacing: "-0.02em",
          }}
        >
          Mango Labs
        </div>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "44px",
          maxWidth: "980px",
          fontSize: "40px",
          lineHeight: 1.35,
          color: "#57534e",
        }}
      >
        {t("description")}
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "56px",
          height: "12px",
          width: "180px",
          borderRadius: "9999px",
          background: "#e2680f",
        }}
      />
    </div>,
    size,
  );
}
