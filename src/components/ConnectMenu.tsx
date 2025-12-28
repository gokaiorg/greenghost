"use client";

import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { useFarcaster } from '@/components/FarcasterProvider';
import { useState, useRef, useEffect } from 'react';

export default function ConnectMenu() {
    const { address, isConnected } = useAccount();
    const { connectors, connect } = useConnect();
    const { disconnect } = useDisconnect();
    const { context } = useFarcaster();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    if (isConnected) {
        return (
            <div className="flex gap-2 items-center ">
                <span className="hidden md:inline text-xs font-mono text-[#13DE00]">
                    {address?.slice(0, 6)}...{address?.slice(-4)}
                </span>
                <button
                    onClick={() => disconnect()}
                    className="px-2 py-1 text-xs bg-red-900/50 hover:bg-red-900 text-red-200 border border-red-700 transition-colors"
                >
                    Log Out
                </button>
            </div>
        );
    }

    // Hide manual connect button if we are in the Mini App
    if (context?.client) {
        return null;
    }

    // Filter available connectors (use all connectors in the order defined in wagmi config)
    const availableConnectors = connectors;

    return (
        <div className="relative" ref={menuRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer px-3 py-1 bg-[#13DE00]/20 hover:bg-[#13DE00]/40 text-[#13DE00] border border-[#13DE00]/50 font-pixel text-xs transition-transform active:scale-95 whitespace-nowrap"
            >
                Connect
            </button>

            {isOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-black border border-[#13DE00] shadow-lg z-50 py-1">
                    {availableConnectors.map((connector) => (
                        <button
                            key={connector.uid}
                            onClick={() => {
                                connect({ connector });
                                setIsOpen(false);
                            }}
                            className="w-full text-left px-4 py-2 text-xs cursor-pointer text-gray-300 hover:bg-[#13DE00]/20 hover:text-[#13DE00] transition-colors"
                        >
                            {connector.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
