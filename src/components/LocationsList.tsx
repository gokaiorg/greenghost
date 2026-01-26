import Link from "next/link";
import LocationsStatus from "@/components/LocationsStatus";

import { Hours } from "@/lib/utils/hours";
import { sanitizeUrl } from "@/lib/utils/url";

interface Location {
  id: string;
  name: string;
  slug: string;
  gmapLink: string;
  hours: Hours;
  addressLink?: string;
  address: string;
}

interface LocationsListProps {
  locations: Location[];
}

export default function LocationsList({ locations }: LocationsListProps) {
  const today = new Date()
    .toLocaleDateString("en-US", { weekday: "long", timeZone: "Asia/Bangkok" })
    .toLowerCase() as keyof (typeof locations)[0]["hours"];

  return (
    <ul
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16"
      aria-label="Store Locations List"
    >
      {locations.map((location) => {
        return (
          <li
            key={location.id}
            className="bg-gradient-to-br from-[#13DE00]/10 to-transparent border border-[#13DE00]/30 overflow-hidden hover:border-[#13DE00]/60 transition-all duration-300 group list-none"
          >
            {/* Map Preview */}
            <div className="relative h-56 w-full overflow-hidden">
              <iframe
                src={sanitizeUrl(location.gmapLink)}
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
                <LocationsStatus hours={location.hours} slug={location.slug} />
              </div>
            </div>

            <div className="p-6 space-y-4">
              {/* Location Name */}
              <Link
                href={`/locations/${location.slug}`}
                className="block group-hover:opacity-80 transition-opacity"
                title={location.name}
              >
                <h2 className="text-xl font-bold text-white group-hover:text-[#13DE00] transition-colors line-clamp-2">
                  {location.name}
                </h2>
              </Link>

              {/* Hours */}
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-300">
                  {location.hours[today] || "Hours vary"}
                </span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2 text-sm">
                <a
                  href={sanitizeUrl(location.addressLink || location.gmapLink)}
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
  );
}
