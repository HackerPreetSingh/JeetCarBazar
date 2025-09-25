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

export const metadata: Metadata = {
  title: "Jeet Car Bazar | Buy & Sell Used Cars on Commission",
  description:
    "Jeet Car Bazar is your trusted marketplace for buying and selling used cars on commission basis. Explore a wide range of pre-owned vehicles, get the best deals, and enjoy transparent service. Finance facility available.",
  keywords: [
    "Jeet Car Bazar",
    "used cars",
    "buy used car",
    "buy used cars",
    "sell used car",
    "sell used cars",
    "car commission",
    "second hand cars",
    "pre-owned cars",
    "car finance",
    "Bareilly car bazar",
    "Bareilly used cars",
    "Bareilly car market",
    "Uttar Pradesh car bazar",
    "Uttar Pradesh used cars",
    "UP car bazar",
    "UP used cars",
    "Uttar Pradesh car market"
  ],
  authors: [{ name: "Hempreet Singh" }],
  creator: "Jeet Car Bazar",
  openGraph: {
    title: "Jeet Car Bazar | Buy & Sell Used Cars on Commission",
    description:
      "Buy and sell used cars on commission basis with Jeet Car Bazar. Trusted, transparent, and reliable service. Finance facility available.",
    url: "https://jeet-car-bazar.vercel.app",
    siteName: "Jeet Car Bazar",
    images: [
      {
        url: "/card.jpg", // Place a good image in public/
        width: 1200,
        height: 630,
        alt: "Jeet Car Bazar - Buy & Sell Used Cars",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-snippet': -1,
      'max-image-preview': "large",
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
