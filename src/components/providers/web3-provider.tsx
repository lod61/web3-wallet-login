'use client'

import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { WagmiProvider, http } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const projectId = 'd7248d871eb41a03cd55648847175797'

const metadata = {
  name: 'My Wallet App',
  description: 'My Wallet App Description',
  url: 'https://my-wallet-app.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const queryClient = new QueryClient()

const config = defaultWagmiConfig({
  chains: [mainnet],
  projectId,
  metadata,
  transports: {
    [mainnet.id]: http()
  }
})

createWeb3Modal({ wagmiConfig: config, projectId })

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  )
} 