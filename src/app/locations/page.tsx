import Link from 'next/link';
import { isLocationOpen } from '@/lib/utils/hours';
import Banner from '@/components/Banner';
import { getBannerData } from '@/lib/utils/bannerUtils';
import { getPagesServerSide as getPages } from '@/lib/pages-server';
import { getLocations } from '@/lib/organization-data';

export default async function LocationsPage() {
  const allPages = await getPages();
  const locationsPage = allPages.find(page => page.slug === 'locations');
  const locations = await getLocations();

  const bannerData = await getBannerData('locations', {
    iconSrc: "/images/icons/locations-green-ghost.avif",
    iconAlt: locationsPage?.title || "Locations",
    description: locationsPage?.subtitle || 'Visit us at one of our premium locations',
    bgSrc: locationsPage?.image || "/banners/green-ghost-best-degen-weed-shop-locations.avif"
  });

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', timeZone: 'Asia/Bangkok' }).toLowerCase() as keyof typeof locations[0]['hours'];

  return (
    <>
      <Banner {...bannerData} />

      <div className="container mx-auto px-4 py-16">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" aria-label="Store Locations List">
          {locations.map((location) => {
            const isOpen = isLocationOpen(location.hours, location.slug);

            return (
              <li
                key={location.id}
                className="bg-gradient-to-br from-[#13DE00]/10 to-transparent border border-[#13DE00]/30 overflow-hidden hover:border-[#13DE00]/60 transition-all duration-300 group list-none"
              >
                {/* Map Preview */}
                <div className="relative h-56 w-full overflow-hidden">
                  <iframe
                    src={location.gmapLink}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${location.name} on Google Maps`}
                    className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-bold uppercase tracking-widest ${isOpen ? 'bg-[#13DE00]/90 text-black' : 'bg-red-500/90 text-white'}`}>
                      <span className={`w-3 h-3 ${isOpen ? 'bg-black' : 'bg-white'} animate-pulse`}></span>
                      {isOpen ? 'OPEN NOW' : 'CLOSED'}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  {/* Location Name */}
                  <Link href={`/locations/${location.slug}`} className="block group-hover:opacity-80 transition-opacity" title={location.name}>
                    <h2 className="text-xl font-bold text-white group-hover:text-[#13DE00] transition-colors line-clamp-2">
                      {location.name}
                    </h2>
                  </Link>

                  {/* Hours */}
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-300">
                      {location.hours[today] || 'Hours vary'}
                    </span>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-2 text-sm">
                    <a
                      href={location.addressLink || location.gmapLink}
                      title={location.address}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-[#13DE00] transition-colors line-clamp-2"
                    >
                      {location.address}
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export const metadata = {
  title: 'Best Degen Weed Shop Near Me - Green Ghost 🌿👻',
  description: 'Visit Green Ghost Weed Shop near me today for the best selection of locally sourced organic cannabis products. With multiple locations in Phuket, Thailand, we offer fast and convenient delivery options as well. Browse our menu and order online now!',
  openGraph: {
    title: 'Best Degen Weed Shop Near Me - Green Ghost 🌿👻',
    description: 'Visit Green Ghost Weed Shop near me today for the best selection of locally sourced organic cannabis products. With multiple locations in Phuket, Thailand, we offer fast and convenient delivery options as well. Browse our menu and order online now!',
    type: 'website',
    locale: 'en_US',
    url: '/locations',
    siteName: 'Green Ghost',
    images: [
      {
        url: '/images/banners/green-ghost-best-degen-weed-shop-locations.avif',
        width: 1920,
        height: 1080,
        alt: 'Green Ghost Weed Shop Locations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Degen Weed Shop Near Me - Green Ghost 🌿👻',
    description: 'Visit Green Ghost Weed Shop near me today for the best selection of locally sourced organic cannabis products. With multiple locations in Phuket, Thailand, we offer fast and convenient delivery options as well. Browse our menu and order online now!',
    images: ['/images/banners/green-ghost-best-degen-weed-shop-locations.avif'],
  },
};
