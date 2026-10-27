import type { Metadata, Viewport } from "next";
import "./globals.css";
import { marka } from "@/data/tresc";

export const metadata: Metadata = {
  metadataBase: new URL(marka.domena),
  title: { default: "YPE Media · Ad templates and AI prompts for e-commerce", template: "%s · YPE Media" },
  description: marka.opis,
  openGraph: {
    type: "website",
    siteName: marka.nazwa,
    url: "/",
    title: "YPE Media · Less guesswork. More good ads.",
    description: marka.opis,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: [{ url: "/icon-v1.svg", type: "image/svg+xml" }, { url: "/icon-v1.png", type: "image/png" }], apple: "/apple-icon-v1.png" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#f5f1e9" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="font" type="font/ttf" crossOrigin="" href="/fonts/InstrumentSerif-Regular.ttf" />
      </head>
      <body>{children}</body>
    </html>
  );
}
