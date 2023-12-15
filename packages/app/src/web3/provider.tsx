import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createConfig, http, WagmiProvider } from 'wagmi'
import { goerli, baseGoerli, optimismGoerli } from 'wagmi/chains'

const queryClient = new QueryClient()

const config = createConfig({
    chains: [goerli, baseGoerli, optimismGoerli],
    transports: {
        [goerli.id]: http(),
        [baseGoerli.id]: http(),
        [optimismGoerli.id]: http(),
    },
})

interface Web3ProviderProps {
    children: React.ReactNode
}

export default function Web3Provider({ children }: Web3ProviderProps) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </WagmiProvider>
    )
}