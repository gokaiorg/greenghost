"use client";

import { useEffect, useState } from 'react';
import { isLocationOpen, Hours } from '@/lib/utils/hours';

interface OpenStatusBadgeProps {
    hours: Hours;
    slug: string;
}

export default function OpenStatusBadge({ hours, slug }: OpenStatusBadgeProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setIsOpen(isLocationOpen(hours, slug));

        // Optional: Update status every minute
        const interval = setInterval(() => {
            setIsOpen(isLocationOpen(hours, slug));
        }, 60000);

        return () => clearInterval(interval);
    }, [hours, slug]);

    if (!mounted) {
        // Render a placeholder or skeleton to avoid hydration mismatch
        // For this specific badge, we might want to default to 'Closed' or just render nothing/loader
        // Rendering a static "checking" state might be better than flashing wrong info.
        // Given the design, a skeleton pulse or invisible block of same size is good.
        return (
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-800/90 rounded-sm min-w-[100px] h-[24px] animate-pulse">
            </div>
        );
    }

    return (
        <div className={`inline-flex items-center whitespace-nowrap gap-2 px-3 py-1 text-xs font-bold uppercase tracking-widest ${isOpen ? 'bg-[#13DE00]/90 text-black' : 'bg-red-500/90 text-white'}`}>
            <span className={`w-3 h-3 ${isOpen ? 'bg-black' : 'bg-white'} animate-pulse`}></span>
            {isOpen ? 'OPEN NOW' : 'CLOSED'}
        </div>
    );
}
