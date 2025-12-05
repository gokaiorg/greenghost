'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface BannerMenuProps {
    imageSrc: string;
    alt?: string;
}

export default function BannerMenu({ imageSrc, alt = "Green Ghost Menu Banner" }: BannerMenuProps) {
    const [offsetY, setOffsetY] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if mobile on mount and resize
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();

        const handleScroll = () => {
            if (window.innerWidth >= 768) {
                setOffsetY(window.pageYOffset);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    return (
        <div className="relative w-full h-[250px] md:h-[450px] overflow-hidden mt-8 md:mt-12">
            <Image
                src={imageSrc}
                alt={alt}
                fill
                priority
                className="object-cover"
                style={{
                    objectPosition: isMobile ? '50% 0' : `50% ${-offsetY * 0.1}px`,
                }}
                sizes="100vw"
            />
        </div>
    );
}
