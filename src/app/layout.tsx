import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbox from "@/components/Chatbox";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CartProvider } from "@/contexts/CartContext";
import OrganizationStructuredData from "@/components/OrganizationStructuredData";
import GoogleTagManager from "@/components/GoogleTagManager";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import AgeVerification from "@/components/AgeVerification";
import { getOrganizationData, getSocials } from "@/lib/organization-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pressStart2P = Press_Start_2P({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: "400",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#13DE00',
  colorScheme: 'dark',
};

// Determine if we are in production based on environment variables
const isProduction = process.env.NEXT_PUBLIC_SITE_URL === 'https://green.gd' || process.env.CONTEXT === 'production';

export const metadata: Metadata = {
  title: 'Green Ghost 🌿👻',
  description: 'Premium cannabis products in Thailand. Fast, discreet delivery.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://green.gd'),
  keywords: ['cannabis', 'weed', 'buds', 'pre-rolls', 'concentrates', 'edibles', 'gadgets', 'Thailand', 'online shop'],
  authors: [{ name: 'Green Ghost' }],
  creator: 'Green Ghost',
  publisher: 'Green Ghost',
  robots: isProduction
    ? {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    }
    : {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Green Ghost',
    title: 'Green Ghost 🌿👻',
    description: 'Premium cannabis products in Thailand. Fast, discreet delivery.',
    images: [
      {
        url: '/images/logo-green-ghost-degen-weed-shop.png',
        width: 2000,
        height: 2000,
        alt: 'Green Ghost Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@greenghostdegen',
    creator: '@greenghostdegen',
    title: 'Green Ghost 🌿👻',
    description: 'Premium cannabis products in Thailand. Fast, discreet delivery.',
    images: ['/images/logo-green-ghost-degen-weed-shop.png'],
  },
  icons: {
    icon: [
      { url: '/images/favicon.ico', sizes: 'any' },
      { url: '/images/logo48.png', type: 'image/png', sizes: '48x48' },
    ],
    apple: [
      { url: '/images/logo512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  other: {
    'msapplication-TileColor': '#13DE00',
    'apple-mobile-web-app-title': 'Green Ghost 🌿👻',
    'application-name': 'Green Ghost 🌿👻',
    'format-detection': 'telephone=no',
    'theme-color': '#13DE00',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationData = await getOrganizationData();
  const socials = await getSocials();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/fonts/cubicfive12.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${pressStart2P.variable} antialiased bg-black text-white min-h-screen flex flex-col`}>
        <GoogleTagManager />
        <GoogleAnalytics />
        <AgeVerification />
        <OrganizationStructuredData data={organizationData} />
        <CartProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer socials={socials} />
          <div className="fixed bottom-4 right-4 z-30 flex flex-row space-x-4">
            <WhatsAppButton />
            <Chatbox />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}

