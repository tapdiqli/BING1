import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import { AdvertorialBar } from "@/components/AdvertorialBar";
import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "bestcasinofinderuk.com — Premium UK Casino Finder",
    template: "%s | bestcasinofinderuk.com",
  },
  description:
    "Compare trusted UK-licensed online casinos, bonuses and safer-gambling resources on bestcasinofinderuk.com. 18+ only. Play responsibly.",
  metadataBase: new URL("https://bestcasinofinderuk.com"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${outfit.variable} ${syne.variable} h-full antialiased`}>
      <body className="site-bg flex min-h-full w-full max-w-[100vw] flex-col overflow-x-clip font-sans">
        <AdvertorialBar />
        <Navbar />
        <div className="w-full flex-1">{children}</div>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
