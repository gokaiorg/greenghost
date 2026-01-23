import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { toJsonLd } from "@/lib/utils/json-ld";
import { sanitizeUrl } from "@/lib/utils/url";
import {
  generateLocalBusinessSchema,
  generateFAQSchema,
} from "@/lib/utils/structuredData";
import { getLocations } from "@/lib/organization-data";
import { getLocationImages } from "@/lib/utils/images";
import { getCanonicalUrl } from "@/lib/utils/seo";

import BackButton from "@/components/BackButton";
import LocationsStatus from "@/components/LocationsStatus";
import ImageCarousel from "@/components/ImageCarousel";
import LocationFAQ from "@/components/LocationFAQ";
import NearbyLocations from "@/components/NearbyLocations";

export async function generateStaticParams() {
  const locations = await getLocations();
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locations = await getLocations();
  const location = locations.find((l) => l.slug === slug);
  const carouselImages = await getLocationImages(slug);

  if (!location) {
    notFound();
  }

  const localBusinessSchema = generateLocalBusinessSchema(location);
  const faqSchema = generateFAQSchema(location);
  const today = new Date()
    .toLocaleDateString("en-US", { weekday: "long", timeZone: "Asia/Bangkok" })
    .toLowerCase() as keyof typeof location.hours;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd([localBusinessSchema, faqSchema]),
        }}
      />

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <div className="relative py-4 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              {/* Left Side: Back Button & Title */}
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <BackButton />
                  <h1 className="text-xl md:text-2xl font-bold">
                    {location.name}
                  </h1>
                </div>
                <p className="text-[10px] md:text-xs lg:text-sm text-gray-400">
                  {location.descSeo}
                </p>
              </div>

              {/* Right Side: Status Badge */}
              <div className="mt-2 md:mt-0 ml-auto">
                <LocationsStatus hours={location.hours} slug={location.slug} />
              </div>
            </div>
          </div>
        </div>

        {/* Image Carousel - Moved to Top for LCP */}
        <ImageCarousel images={carouselImages} alt={location.name} />

        {/* Main Content */}
        <div className="container mx-auto px-4 pb-12">
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">
            {/* Left Column: Video & Description (Order 2 on Mobile, Order 1 on Desktop) */}
            <div className="lg:col-span-2 order-2 lg:order-1 space-y-6">
              {/* Video */}
              {location.videoLink && (
                <div className="aspect-video w-full overflow-hidden border border-[#13DE00]/21 bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src={sanitizeUrl(location.videoLink)}
                    title={`${location.name} Video Tour`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              )}

              {/* Description */}
              {location.description && (
                <section className="bg-gradient-to-br from-[#13DE00]/5 to-transparent border border-[#13DE00]/21 p-5">
                  <h2 className="text-xl font-bold text-[#13DE00] mb-6">
                    About This Location
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-xs lg:text-sm xl:text-base whitespace-pre-wrap">
                    {location.description.replace(/\\n/g, "\n")}
                  </p>
                </section>
              )}
            </div>

            {/* Right Column: Sidebar & Map (Order 1 on Mobile, Order 2 on Desktop) */}
            <div className="lg:col-span-1 order-1 lg:order-2 space-y-6">
              {/* Sidebar Content */}
              <div className="space-y-4">
                {/* Location Details */}
                <section className="bg-[#13DE00]/5 border border-[#13DE00]/21 p-5">
                  <h2 className="text-xl font-bold text-[#13DE00] mb-4 flex items-center gap-2">
                    Location Details
                  </h2>

                  <p className="text-sm mb-4">{location.details}</p>

                  <div className="space-y-4">
                    {/* Address */}
                    <div>
                      <h3 className="text-xs font-semibold text-gray-400 uppercase mb-1">
                        Address
                      </h3>
                      <p className="text-white text-sm">{location.address}</p>
                      {location.addressLink && (
                        <a
                          href={sanitizeUrl(location.addressLink)}
                          title="View on Maps"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#13DE00] hover:underline text-xs mt-1 inline-block"
                        >
                          View on Maps {">"}
                        </a>
                      )}
                    </div>

                    {/* Phone */}
                    {location.phone && (
                      <div>
                        <h3 className="text-xs font-semibold text-gray-400 uppercase mb-1">
                          Phone
                        </h3>
                        <a
                          href={`tel:${location.phone}`}
                          title="Call us"
                          className="text-white hover:text-[#13DE00] transition-colors text-sm"
                        >
                          +6687-420-1144
                        </a>
                      </div>
                    )}

                    {/* Hours */}
                    <div>
                      <h3 className="text-xs font-semibold text-gray-400 uppercase mb-2">
                        Hours
                      </h3>
                      <div className="space-y-1">
                        {Object.entries(location.hours).map(([day, hours]) => {
                          const isToday = day === today;
                          return (
                            <div
                              key={day}
                              className={`flex justify-between py-1.5 px-2 ${
                                isToday
                                  ? "bg-[#13DE00]/13 border border-[#13DE00]/30"
                                  : "bg-black/20"
                              }`}
                            >
                              <span
                                className={`capitalize text-xs font-medium ${isToday ? "text-[#13DE00]" : "text-gray-300"}`}
                              >
                                {day}
                              </span>
                              <span
                                className={`text-xs ${isToday ? "text-white" : "text-gray-400"}`}
                              >
                                {hours}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </section>

                {/* Map - Moved to Sidebar Column */}
                {location.mapLink && (
                  <div className="aspect-video w-full overflow-hidden border border-[#13DE00]/21 bg-[#13DE00]/5">
                    <iframe
                      src={sanitizeUrl(location.mapLink)}
                      title={`${location.name} Location Map`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    />
                  </div>
                )}

                {/* Quick Links */}
                <section className="bg-[#13DE00]/5 border border-[#13DE00]/21 p-5">
                  <h2 className="text-xl font-bold text-[#13DE00] mb-4 flex items-center gap-2">
                    Quick Links
                  </h2>

                  <div className="grid grid-cols-1 gap-2">
                    {location.reviewLink && location.reviewLink !== "#" && (
                      <a
                        href={sanitizeUrl(location.reviewLink)}
                        title="Leave a Review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 bg-black/30 hover:bg-black/69 border border-white/10 hover:border-[#13DE00]/50 transition-all group"
                      >
                        <span className="font-medium text-sm">
                          Leave a Review
                        </span>
                        <span className="text-[#13DE00] group-hover:translate-x-1 transition-transform">
                          {">"}
                        </span>
                      </a>
                    )}

                    {location.website && location.website !== "#" && (
                      <a
                        href={sanitizeUrl(location.website)}
                        title="Visit Website"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 bg-black/30 hover:bg-black/69 border border-white/10 hover:border-[#13DE00]/50 transition-all group"
                      >
                        <span className="font-medium text-sm">
                          Visit Website
                        </span>
                        <span className="text-[#13DE00] group-hover:translate-x-1 transition-transform">
                          {">"}
                        </span>
                      </a>
                    )}

                    {/* Social Links - Condensed */}
                    <div className="grid md:grid-cols-2 gap-2 mt-2">
                      {location.tripAdvisor && location.tripAdvisor !== "#" && (
                        <a
                          href={sanitizeUrl(location.tripAdvisor)}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="TripAdvisor"
                          className="text-xs text-left p-2 bg-black/30 hover:bg-[#13DE00]/13 border border-white/10 hover:border-[#13DE00] text-gray-300 hover:text-white transition-all"
                        >
                          TripAdvisor
                        </a>
                      )}
                      {location.weedTh && location.weedTh !== "#" && (
                        <a
                          href={sanitizeUrl(location.weedTh)}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="WEED.TH"
                          className="text-xs text-left p-2 bg-black/30 hover:bg-[#13DE00]/13 border border-white/10 hover:border-[#13DE00] text-gray-300 hover:text-white transition-all"
                        >
                          WEED.TH
                        </a>
                      )}
                      {location.wongnai && location.wongnai !== "#" && (
                        <a
                          href={sanitizeUrl(location.wongnai)}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Wongnai"
                          className="text-xs text-left p-2 bg-black/30 hover:bg-[#13DE00]/13 border border-white/10 hover:border-[#13DE00] text-gray-300 hover:text-white transition-all"
                        >
                          Wongnai
                        </a>
                      )}
                      {location.highThailand &&
                        location.highThailand !== "#" && (
                          <a
                            href={sanitizeUrl(location.highThailand)}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="High Thailand"
                            className="text-xs text-left p-2 bg-black/30 hover:bg-[#13DE00]/13 border border-white/10 hover:border-[#13DE00] text-gray-300 hover:text-white transition-all"
                          >
                            High Thailand
                          </a>
                        )}
                      {location.appleMap && location.appleMap !== "#" && (
                        <a
                          href={sanitizeUrl(location.appleMap)}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Apple Maps"
                          className="text-xs text-left p-2 bg-black/30 hover:bg-[#13DE00]/13 border border-white/10 hover:border-[#13DE00] text-gray-300 hover:text-white transition-all"
                        >
                          Apple Maps
                        </a>
                      )}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <LocationFAQ location={location} />

        {/* Nearby Locations */}
        <NearbyLocations currentSlug={location.slug} allLocations={locations} />
      </div>
    </>
  );
}

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

// Helper function to convert YouTube embed URL to watch URL
function convertYouTubeEmbedToWatch(embedUrl: string): string {
  // Extract video ID from embed URL
  // Format: https://www.youtube.com/embed/VIDEO_ID or https://www.youtube.com/embed/VIDEO_ID?si=...
  const match = embedUrl.match(/\/embed\/([^?]+)/);
  if (match && match[1]) {
    return `https://www.youtube.com/watch?v=${match[1]}`;
  }
  return embedUrl; // Return original if pattern doesn't match
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const locations = await getLocations();
  const location = locations.find((l) => l.slug === slug);

  if (!location) {
    return {
      title: "Location Not Found | Green Ghost",
      description: "The requested location could not be found.",
    };
  }

  const imagePath = `/images/banners/green-ghost-best-degen-weed-shop-delivery-${location.slug}-01.avif`;

  return {
    title: `${location.name} - Green Ghost 🌿👻`,
    description:
      location.descSeo ||
      `Visit Green Ghost at ${location.name}. Premium cannabis products available.`,
    keywords: `${toCapitalizeCase(location.slug)}, ${location.region}, Cannabis Dispensary, Weed Shop, Cannabis Store, Buy Weed, Weed Delivery`,
    openGraph: {
      title: `${location.name} - Green Ghost 🌿👻`,
      description:
        location.descSeo ||
        `Visit Green Ghost at ${location.name}. Premium cannabis products available.`,
      url: `/locations/${slug}`,
      images: [
        {
          url: imagePath,
          width: 1920,
          height: 1080,
          alt: location.name,
        },
      ],
      ...(location.videoLink && {
        videos: [
          {
            url: convertYouTubeEmbedToWatch(location.videoLink),
            type: "text/html",
            width: 1280,
            height: 720,
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      site: "@greenghostdegen",
      creator: "@greenghostdegen",
      title: `${location.name} - Green Ghost 🌿👻`,
      description: location.descSeo || location.description,
      images: [imagePath],
    },
    alternates: {
      canonical: getCanonicalUrl(`locations/${slug}`),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
      },
    },
  };
}

function toCapitalizeCase(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
