import React from 'react';
import Link from 'next/link';
import { Location } from '@/lib/types/location';

interface NearbyLocationsProps {
    currentSlug: string;
    allLocations: Location[];
}

export default function NearbyLocations({ currentSlug, allLocations }: NearbyLocationsProps) {
    const currentLocation = allLocations.find(l => l.slug === currentSlug);

    if (!currentLocation) return null;

    // Filter locations: same country, not current location
    const nearbyLocations = allLocations.filter(loc =>
        loc.slug !== currentSlug &&
        (loc.country === currentLocation.country || loc.region === currentLocation.region)
    );

    if (nearbyLocations.length === 0) return null;

    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-xl font-bold text-[#13DE00] mb-4">Explore Nearby Locations</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {nearbyLocations.map(loc => (
                        <Link
                            key={loc.slug}
                            href={`/locations/${loc.slug}`}
                            title={loc.name}
                            className="block p-4 bg-[#13DE00]/5 border border-[#13DE00]/20 hover:bg-[#13DE00]/10 hover:border-[#13DE00]/50 transition-all text-center group"
                        >
                            <span className="text-white font-medium group-hover:text-[#13DE00] transition-colors capitalize">
                                {loc.slug}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
