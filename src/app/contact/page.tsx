import { Metadata } from 'next';
import { getBannerData } from '@/lib/utils/bannerUtils';
import { getPagesServerSide as getPages } from '@/lib/pages-server';
import Banner from '@/components/Banner';
import ContactList from '@/components/ContactList';
import LocationsHome from '@/components/LocationsHome';
import ContactForm from '@/components/ContactForm';
import ListingsList from '@/components/ListingsList';

export const metadata: Metadata = {
  title: 'Contact Our Weed Shop Team To Order - Green Ghost 🌿👻',
  description: 'Get in touch with the Green Ghost team 🌿👻 for all your weed shop inquiries and orders. We\'re here to assist with your cannabis needs and provide exceptional service.',
  openGraph: {
    title: 'Contact Our Weed Shop Team To Order - Green Ghost 🌿👻',
    description: 'Get in touch with the Green Ghost team 🌿👻 for all your weed shop inquiries and orders. We\'re here to assist with your cannabis needs and provide exceptional service.',
    type: 'website',
    locale: 'en_US',
    url: '/contact',
    siteName: 'Green Ghost',
    images: [
      {
        url: '/images/banners/green-ghost-best-degen-weed-shop-contact.avif',
        width: 1920,
        height: 1080,
        alt: 'Contact Green Ghost Weed Shop',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Our Weed Shop Team To Order - Green Ghost 🌿👻',
    description: 'Get in touch with the Green Ghost team 🌿👻 for all your weed shop inquiries and orders. We\'re here to assist with your cannabis needs and provide exceptional service.',
    images: ['/images/banners/green-ghost-best-degen-weed-shop-contact.avif'],
  },
};

export default async function ContactPage() {
  const allPages = await getPages();
  const contactPage = allPages.find(page => page.slug === 'contact');

  const bannerData = await getBannerData('contact', {
    iconSrc: "/images/icons/contact-green-ghost.avif",
    iconAlt: contactPage?.title || "Contact Us",
    description: contactPage?.subtitle || 'Get in touch with us',
    bgSrc: contactPage?.image || "/banners/green-ghost-best-degen-weed-shop-contact.avif"
  });

  return (
    <>
      <Banner {...bannerData} />
      <div className="container mx-auto px-4 bg-black text-white">
        {contactPage?.description && (
          <div
            className="text-xs md:text-sm lg:text-base text-gray-200 text-center w-full mb-4 md:mb-8"
            dangerouslySetInnerHTML={{ __html: contactPage.description }}
          />
        )}
        {contactPage?.section_title && (
          <h2 className="text-2xl font-bold mt-8 mb-4">
            {contactPage.section_title}
          </h2>
        )}
        {contactPage?.section_description && (
          <div
            className="text-base text-gray-200 text-center"
            dangerouslySetInnerHTML={{ __html: contactPage.section_description }}
          />
        )}

        <ContactList />
        <ContactForm />
        <LocationsHome />
        <ListingsList />
      </div>
    </>
  );
}