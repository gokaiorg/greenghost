import { http, createConfig } from 'wagmi';
import { baseSepolia } from 'wagmi/chains';
import { farcasterMiniApp } from '@farcaster/miniapp-wagmi-connector';
import { coinbaseWallet, injected } from 'wagmi/connectors';

export const config = createConfig({
    chains: [baseSepolia],
    transports: {
        [baseSepolia.id]: http(),
    },
    connectors: [
        coinbaseWallet({ appName: 'Green Ghost' }),
        farcasterMiniApp(),
        injected(),
    ],
});
