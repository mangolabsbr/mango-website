import { setRequestLocale } from "next-intl/server";
import AppDetailPage, { appDetailMetadata } from "@/components/app-detail";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return appDetailMetadata(locale, "sudoku-colors");
}

export default async function SudokuColorsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AppDetailPage slug="sudoku-colors" />;
}
