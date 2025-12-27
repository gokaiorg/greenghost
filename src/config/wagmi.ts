import { http, createConfig } from 'wagmi';
import { baseSepolia } from 'wagmi/chains';
import { farcasterMiniApp } from '@farcaster/miniapp-wagmi-connector';
import { injected } from 'wagmi/connectors';

export const config = createConfig({
    chains: [baseSepolia],
    connectors: [
        farcasterMiniApp(),
        injected(),
    ],
    transports: {
        [baseSepolia.id]: http(),
    },
});
