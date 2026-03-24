import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Marekh Private Ltd — Polymer & Rubber Distribution",
  description:
    "Established 1989. Pakistan-based B2B distributor of synthetic rubber, plastics, and chemical additives. Manufacturer of Ve-prene thermoplastic rubber for the footwear industry.",
  openGraph: {
    title: "Marekh Private Ltd",
    description: "Est. 1989 · Lahore, Pakistan · Polymer Industry",
    locale: "en_PK",
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
      className={`${geistSans.variable} ${instrumentSerif.variable} h-full`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
