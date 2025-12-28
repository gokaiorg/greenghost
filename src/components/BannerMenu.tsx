'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface BannerMenuProps {
    imageSrc: string;
    alt?: string;
}

export default function BannerMenu({ imageSrc, alt = "Green Ghost Menu Banner" }: BannerMenuProps) {
    const [offsetY, setOffsetY] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const ticking = useRef(false);

    useEffect(() => {
        // Check if mobile on mount and resize
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();

        const onScroll = () => {
            if (!ticking.current && window.innerWidth >= 768) {
                window.requestAnimationFrame(() => {
                    setOffsetY(window.pageYOffset);
                    ticking.current = false;
                });
                ticking.current = true;
            }
        };

        window.addEventListener('scroll', onScroll);
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('scroll', onScroll);
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
                fetchPriority="high"
                className="object-cover"
                style={{
                    objectPosition: isMobile ? '50% 0' : `50% ${-offsetY * 0.1}px`,
                }}
                sizes="100vw"
            />
        </div>
    );
}
