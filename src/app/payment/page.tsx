import { Metadata } from 'next';
import Banner from '@/components/Banner';
import PaymentList from '@/components/PaymentList';
import { getBannerData } from '@/lib/utils/bannerUtils';
import { getPagesServerSide as getPages } from '@/lib/pages-server';
import { getPayments } from '@/lib/payment-data';

export const metadata: Metadata = {
  title: 'Make a payment for your cannabis order - Green Ghost 🌿👻',
  description: 'Pay easily with Scan QR, Crypto, Wise, or PayPal. Secure, fast options for your weed orders at our shops!',
  openGraph: {
    title: 'Make a payment for your cannabis order - Green Ghost 🌿👻',
    description: 'Pay easily with Scan QR, Crypto, Wise, or PayPal. Secure, fast options for your weed orders at our shops!',
    type: 'website',
    locale: 'en_US',
    url: '/payment',
    siteName: 'Green Ghost',
    images: [
      {
        url: '/images/banners/green-ghost-best-degen-weed-shop-payment.avif',
        width: 1920,
        height: 1080,
        alt: 'Green Ghost Secure Payment Options',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Make a payment for your cannabis order - Green Ghost 🌿👻',
    description: 'Pay easily with Scan QR, Crypto, Wise, or PayPal. Secure, fast options for your weed orders at our shops!',
    images: ['/images/banners/green-ghost-best-degen-weed-shop-payment.avif'],
  },
  alternates: {
    canonical: '/payment',
  },
};

export default async function PaymentPage() {
  const allPages = await getPages();
  const paymentPage = allPages.find(page => page.slug === 'payment');
  const payments = await getPayments();

  const bannerData = await getBannerData('payment', {
    iconSrc: "/images/icons/payment-green-ghost.avif",
    iconAlt: paymentPage?.title || "Payment",
    description: paymentPage?.subtitle || 'Secure Payment Options',
    bgSrc: paymentPage?.image || "/banners/green-ghost-best-degen-weed-shop-payment.avif"
  });

  return (
    <>
      <Banner {...bannerData} />

      <div className="container mx-auto px-4 bg-black text-white">
        <p className="text-xs md:text-sm lg:text-base text-gray-200 text-center w-full mb-4 md:mb-8 max-w-3xl mx-auto">
          Pay easily with Scan QR, Crypto, Wise, or PayPal. Secure, fast options for your weed orders at our shops!
        </p>

        <PaymentList payments={payments} />
      </div>
    </>
  );
}
