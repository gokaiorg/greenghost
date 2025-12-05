'use client';

import Image from 'next/image';
import { useRef } from 'react';

interface ImageCarouselProps {
    images: string[];
    alt: string;
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    if (!images || images.length === 0) return null;

    return (
        <div className="w-full overflow-hidden py-4">
            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 px-4 no-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {images.map((src, index) => (
                    <div
                        key={src}
                        className="flex-none w-[80vw] md:w-[60vw] lg:w-[40vw] aspect-video relative snap-center border border-[#13DE00]/21 bg-[#13DE00]/5"
                    >
                        <Image
                            src={src}
                            alt={`${alt} - Image ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 60vw, 40vw"
                            priority={index === 0}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
