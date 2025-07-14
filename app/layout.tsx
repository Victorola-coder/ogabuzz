import "./global.css";
import { Toaster } from "sonner";
import { AOS } from "./components/global";
import { Open_Sans } from "next/font/google";
import type { Metadata, Viewport } from "next";

const opensans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ogabuzz.com"),
  icons: {
    icon: "/icon.png",
  },
  title: "OgaBuzz - Stay Informed, Stay Ahead",
  description:
    "The First News App Built For You. Personalized Headlines And Real-Time Local Reporting, Powered By AI And Your Location. Cover Sports, Politics, Entertainment and more.",
  applicationName: "OgaBuzz News App",
  authors: [{ name: "OgaBuzz Team", url: "https://ogabuzz.com" }],
  keywords: [
    "news",
    "headlines",
    "local news",
    "sports",
    "politics",
    "entertainment",
    "AI powered",
    "real-time",
    "community updates",
  ],
  creator: "OgaBuzz Team",
  publisher: "OgaBuzz",
  generator: "Next.js",
  referrer: "origin",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://ogabuzz.com",
    title: "OgaBuzz - The First News App Built For You",
    siteName: "OgaBuzz",
    locale: "en_US",
    images: [
      {
        url: "https://ogabuzz.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OgaBuzz - Stay Informed, Stay Ahead",
      },
    ],
  },
  twitter: {
    site: "@ogabuzz",
    creator: "@ogabuzz",
    title: "OgaBuzz - Stay Informed, Stay Ahead With Personalized News",
    description:
      "The First News App Built For You. Personalized Headlines And Real-Time Local Reporting, Powered By AI And Your Location.",
    card: "summary_large_image",
    images: ["https://ogabuzz.com/og-image.jpg"],
  },
  appleWebApp: {
    capable: true,
    title: "OgaBuzz",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  abstract:
    "OgaBuzz is the first news app built for you, featuring personalized headlines and real-time local reporting powered by AI and your location. Stay informed with daily headlines from 100+ sources, community updates, and earn from your posts.",
  category: "News",
  classification: "News & Media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${opensans.className} antialiased`}>
        <Toaster richColors />
        <AOS />
        {children}
      </body>
    </html>
  );
}
