import Header from "@/components/header";
import { Bitter, Lato } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Cesar Lima",
  description: "Welcome to my portolio website",
};

const bitter = Bitter({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-bitter",
});
const lato = Lato({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={[bitter.variable, lato.variable, "font-sans"].join(" ")}>
        <Header />
        {children}
      </body>
    </html>
  );
}
