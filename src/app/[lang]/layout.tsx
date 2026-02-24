import type { Viewport } from "next";
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
import AgeModalSection from "@/components/AgeModalSection";
import { getOrganizationData } from "@/lib/organization-data";
import { getSocialsData, getSectionsData, getPagesData } from "@/lib/bigquery";
import { getLocalizedSection, getLocalizedValue } from "@/lib/i18n-db";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";

const MENU_ITEMS_DEF = [
  { path: "/menu", pageKey: "menu", defaultLabel: "Explore our menu", defaultLabelFr: "Notre menu" },
  { path: "/delivery", pageKey: "delivery", defaultLabel: "Get delivered", defaultLabelFr: "Livraison" },
  { path: "/wholesale", pageKey: "wholesale", defaultLabel: "Bulk ordering", defaultLabelFr: "Achat en gros" },
  { path: "/payment", pageKey: "payment", defaultLabel: "Make a payment", defaultLabelFr: "Paiement en ligne" },
  { path: "/strains", pageKey: "strains", defaultLabel: "All the strains", defaultLabelFr: "Toutes les variétés" },
  { path: "/weed", pageKey: "weed", defaultLabel: "Learn about weed", defaultLabelFr: "Tout savoir sur la beuh" },
  { path: "/about", pageKey: "about", defaultLabel: "Cannabis culture", defaultLabelFr: "La culture du cannabis" },
  { path: "/cannabis-club", pageKey: "cannabis-club", defaultLabel: "Join the club", defaultLabelFr: "Rejoignez le club" },
  { path: "/nft", pageKey: "nft", defaultLabel: "Mint your NFT", defaultLabelFr: "Créer un NFT" },
  { path: "/jobs", pageKey: "jobs", defaultLabel: "We are hiring", defaultLabelFr: "On recrute" },
  { path: "/locations", pageKey: "locations", defaultLabel: "Visit our locations", defaultLabelFr: "Nos dispensaires" },
  { path: "/contact", pageKey: "contact", defaultLabel: "Contact us now", defaultLabelFr: "Nous contacter" },
];

async function getMenuItems(locale: string) {
  const items = await Promise.all(
    MENU_ITEMS_DEF.map(async (item) => {
      // Use cache if possible or just concurrent request
      // We assume getPagesData handles caching/batching if optimized, 
      // or at least concurrent is better than serial.
      const pageData = await getPagesData(item.pageKey).catch(() => null);
      let label_en = item.defaultLabel;
      let label_fr = item.defaultLabelFr || item.defaultLabel;
      let label = locale === "fr" ? label_fr : label_en;

      if (pageData) {
        label_en = getLocalizedValue(pageData, "label", "en", false) || getLocalizedValue(pageData, "title", "en") || label_en;
        label_fr = getLocalizedValue(pageData, "label", "fr", false) || getLocalizedValue(pageData, "title", "fr") || label_fr;

        const localizedLabel = getLocalizedValue(pageData, "label", locale, false);
        if (localizedLabel) label = localizedLabel;
        else {
          const localizedTitle = getLocalizedValue(pageData, "title", locale);
          if (localizedTitle) label = localizedTitle;
        }
      } else {
        label = locale === "fr" ? label_fr : label_en;
      }
      return { path: item.path, label, label_en, label_fr };
    })
  );
  return items;
}
import FarcasterProvider from "@/components/FarcasterProvider";
import WalletProvider from "@/components/WalletProvider";
import ScrollToTop from "@/components/ScrollToTop";
import { LoaderProvider } from "@/contexts/LoaderContext";
import Loading from "@/components/Loading";

// ... existing fonts

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

// [DELETE] Silkscreen definition

export const viewport: Viewport = {
  // ... existing viewport
};

// ... existing metadata definition

// ... existing imports

import { i18n } from "@/i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const organizationData = await getOrganizationData();
  const socials = await getSocialsData();
  const sections = await getSectionsData();
  const ageModalContent = getLocalizedSection(sections, "AgeModalSection", lang);

  const ageModalTitle = ageModalContent.title || "ARE YOU 20 YEARS OR OLDER?";
  const ageModalDescription =
    ageModalContent.description ||
    "By entering this site, you agree to our terms and confirm you are of legal age.";
  const ageModalYesLabel =
    ageModalContent.links[0]?.label || (lang === "fr" ? "OUI" : "YES");
  const ageModalNoLabel =
    ageModalContent.links[1]?.label || (lang === "fr" ? "NON" : "NO");

  const menuItems = await getMenuItems(lang);

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          :root {
            --background: #000000;
            --foreground: #e2e8f0;
          }
          body {
            background: #000000;
            color: #e2e8f0;
            font-family: var(--font-pixel), monospace;
          }
          h1, h2, .font-cubic {
            font-family: var(--font-pixel), monospace; 
            text-transform: uppercase;
            font-weight: 700;
          }
        `,
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pressStart2P.variable} antialiased bg-black text-white min-h-screen flex flex-col`}
      >
        <GoogleTagManager />
        <GoogleAnalytics />
        <AgeModalSection
          title={ageModalTitle}
          description={ageModalDescription}
          yesLabel={ageModalYesLabel}
          noLabel={ageModalNoLabel}
        />
        <OrganizationStructuredData data={organizationData} />
        <LoaderProvider>
          <Loading />
          <FarcasterProvider>
            <WalletProvider>
              <CartProvider>
                <Header locale={lang} menuItems={menuItems} />
                <main id="main-content" className="flex-grow">
                  {children}
                </main>
                <Footer socials={socials} locale={lang} menuItems={menuItems} />
                <div className="fixed bottom-4 right-4 z-[60] flex flex-row space-x-4 items-end">
                  <ScrollToTop />
                  <WhatsAppButton />
                  <Chatbox />
                </div>
                <ServiceWorkerRegister />
              </CartProvider>
            </WalletProvider>
          </FarcasterProvider>
        </LoaderProvider>
      </body>
    </html>
  );
}
