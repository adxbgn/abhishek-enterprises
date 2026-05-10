import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "@/components/ConditionalLayout";
import StructuredData from "@/components/StructuredData";
import { SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Abhishek Enterprises - Steel & Alloy Manufacturing Excellence",
    template: "%s | Abhishek Enterprises",
  },
  description:
    "Abhishek Enterprises is an India-based metal manufacturing company specializing in steel and alloy products for international industrial markets. Integrated production with sister concerns delivers consistent quality, competitive pricing, and reliable global delivery.",
  keywords: [
    "steel manufacturing",
    "metal manufacturing India",
    "alloy products",
    "industrial steel",
    "steel fabrication",
    "steel products",
    "alloy manufacturing",
    "industrial metals",
    "precision metal components",
    "die casting",
    "sheet metal fabrication",
    "Ludhiana manufacturing",
    "OEM metal parts",
  ],
  authors: [{ name: "Abhishek Enterprises" }],
  creator: "Abhishek Enterprises",
  publisher: "Abhishek Enterprises",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Abhishek Enterprises",
    title: "Abhishek Enterprises - Steel & Alloy Manufacturing Excellence",
    description:
      "India-based metal manufacturing company specializing in steel and alloy products for international industrial markets.",
    images: [
      {
        url: "/abhient.jpeg",
        width: 1200,
        height: 630,
        alt: "Abhishek Enterprises Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Enterprises - Steel & Alloy Manufacturing Excellence",
    description:
      "India-based metal manufacturing company specializing in steel and alloy products for international industrial markets.",
    images: ["/abhient.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/abhient.jpeg",
    shortcut: "/abhient.jpeg",
    apple: "/abhient.jpeg",
  },
  applicationName: "Abhishek Enterprises",
  other: {
    "geo.region": "IN-PB",
    "geo.placename": "Ludhiana",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
