import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "TechKey Solutions — AI Automation & Business Optimization",
  description:
    "TechKey Solutions helps small and mid-sized businesses implement practical AI solutions that reduce manual work, improve customer response times, and drive measurable results.",
  metadataBase: new URL("https://thetks.com"),
  openGraph: {
    title: "TechKey Solutions",
    description:
      "Practical AI automation for small and mid-sized businesses. Real operational outcomes — not experimental AI projects.",
    url: "https://thetks.com",
    siteName: "TechKey Solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
