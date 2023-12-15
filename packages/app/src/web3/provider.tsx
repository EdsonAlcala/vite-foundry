import React from 'react';
import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { base, baseGoerli, localhost } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

import { getDefaultWallets, RainbowKitProvider, connectorsForWallets } from '@rainbow-me/rainbowkit';
import { injectedWallet, argentWallet } from '@rainbow-me/rainbowkit/wallets';

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [baseGoerli, base, { ...localhost, chainId: import.meta.env.VITE_APP_CHAIN_ID || 31337 }],
    [alchemyProvider({ apiKey: import.meta.env.VITE_APP_ALCHEMY_API_KEY || "" }), publicProvider()],
)

const PROJECT_ID = import.meta.env.VITE_APP_WALLET_CONNECT_ID || "";
const APP_NAME = "My App";

const { wallets } = getDefaultWallets({
    appName: APP_NAME,
    projectId: PROJECT_ID,
    chains
});

const connectors = connectorsForWallets([
    ...wallets,
    {
        groupName: 'Other',
        wallets: [
            injectedWallet({ chains }),
            argentWallet({ projectId: PROJECT_ID, chains }),
        ],
    },
]);

const config = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
    webSocketPublicClient,
})

interface Web3ProviderProps {
    children: React.ReactNode
}

export default function Web3Provider({ children }: Web3ProviderProps) {
    return (
        <WagmiConfig config={config}>
            <RainbowKitProvider chains={chains}>
                {children}
            </RainbowKitProvider>
        </WagmiConfig>
    )
}