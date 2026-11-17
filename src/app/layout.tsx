
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
  title: {
    default:
      "India–Jordan Trade Intelligence | Bilateral Trade Research",
    template: "%s | India–Jordan Trade Intelligence",
  },

  description:
    "Independent research on India–Jordan bilateral trade, merchandise exports and imports, trade balance, commodity trends, sector insights, and official government trade statistics.",

  applicationName: "India–Jordan Trade Intelligence",

  keywords: [
    "India Jordan Trade",
    "India Jordan Bilateral Trade",
    "India Jordan Trade Relations",
    "India Jordan Exports",
    "India Jordan Imports",
    "India Jordan Trade Balance",
    "India Jordan Trade Statistics",
    "India Jordan Commodity Trade",
    "India Jordan Economic Relations",
    "Bilateral Trade Research",
    "Trade Intelligence",
    "DGCI&S",
    "International Trade Research",
    "India Jordan Market Intelligence",
  ],

  authors: [
    {
      name: "Akash Sharma",
    },
  ],

  creator: "Akash Sharma",
  publisher: "India–Jordan Trade Intelligence",

  category: "Research",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "India–Jordan Trade Intelligence",
    title:
      "India–Jordan Trade Intelligence | Independent Trade Research",
    description:
      "Explore historical India–Jordan trade data, bilateral trade balance, commodity statistics, and evidence-based sector research.",
  },

  twitter: {
    card: "summary",
    title:
      "India–Jordan Trade Intelligence",
    description:
      "Independent bilateral trade research, commodity intelligence, and market insights for India and Jordan.",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
