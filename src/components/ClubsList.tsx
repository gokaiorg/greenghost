import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Club {
    name: string;
    description: string;
    link: string;
}

interface ClubsListProps {
    clubs: Club[];
}

export default function ClubsList({ clubs }: ClubsListProps) {
    return (
        <section className="container mx-auto px-4 py-8">
            <h2 className="text-xl md:text-2xl font-bold mb-6">Join Our <span className="text-[#13DE00]">Cannabis Clubs</span></h2>
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" aria-label="Cannabis Clubs List">
                {clubs.map((club, index) => {
                    // Generate image path based on club name
                    // Convert name to lowercase and replace spaces with hyphens
                    const imageName = club.name.toLowerCase().replace(/\s+/g, '-');
                    const imagePath = `/images/banners/green-ghost-cannabis-club-${imageName}-community.avif`;

                    // Determine if link is internal or external
                    const isExternal = club.link.startsWith('http');

                    return (
                        <li key={index} className="bg-[#13DE00]/5 border border-[#13DE00]/20 overflow-hidden hover:border-[#13DE00]/50 transition-all group list-none">
                            {/* Image */}
                            <div className="relative w-full h-48 bg-black">
                                <Image
                                    src={imagePath}
                                    alt={`${club.name} Community`}
                                    fill
                                    className="object-cover group-hover:opacity-80 transition-opacity"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3">{club.name}</h3>
                                <p className="text-gray-300 mb-4 text-sm">{club.description}</p>

                                {/* Link */}
                                {isExternal ? (
                                    <a
                                        href={club.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#13DE00] text-black font-medium hover:bg-[#13DE00]/80 transition-colors"
                                    >
                                        Learn More
                                        <span>{'>'}</span>
                                    </a>
                                ) : (
                                    <Link
                                        href={club.link}
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#13DE00] text-black font-medium hover:bg-[#13DE00]/80 transition-colors"
                                    >
                                        Learn More
                                        <span>{'>'}</span>
                                    </Link>
                                )}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
