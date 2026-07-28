import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");

  return {
    metadataBase: new URL(`${protocol}://${host}`),
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
          url: "/og.png",
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
      images: ["/og.png"],
    },
  };
}

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
