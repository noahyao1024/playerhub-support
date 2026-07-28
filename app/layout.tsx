import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Playerhub for Apple TV",
    template: "%s | Playerhub",
  },
  description:
    "Play your own movie and TV library directly from your NAS or computer on Apple TV.",
  openGraph: {
    title: "Playerhub for Apple TV",
    description: "The cinema you already own.",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "Playerhub: The cinema you already own.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Playerhub for Apple TV",
    description: "The cinema you already own.",
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
