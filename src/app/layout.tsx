import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://og-image-generator-ruddy-three.vercel.app";
const OG_IMAGE = "/api/og?title=OG+Image+Generator&subtitle=Generate+dynamic+OG+images+live&template=terminal";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "OG Image Generator",
  description:
    "Generate dynamic Open Graph images with custom templates. Live editor, copy URL, download PNG.",
  openGraph: {
    title: "OG Image Generator",
    description:
      "Generate dynamic Open Graph images with custom templates. Live editor, copy URL, download PNG.",
    url: SITE_URL,
    siteName: "OG Image Generator",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "OG Image Generator preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OG Image Generator",
    description:
      "Generate dynamic Open Graph images with custom templates. Live editor, copy URL, download PNG.",
    images: [OG_IMAGE],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100">
        {children}
      </body>
    </html>
  );
}
