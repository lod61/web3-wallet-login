'use client'

import { useAccount } from 'wagmi'
import { useWeb3Modal } from '@web3modal/wagmi/react'

export function ConnectButton() {
  const { open } = useWeb3Modal()
  const { address, isConnecting } = useAccount()

  const displayAddress = address
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : 'Connect Wallet'

  return (
    <button
      onClick={() => open()}
      disabled={isConnecting}
      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isConnecting ? 'Connecting...' : displayAddress}
    </button>
  )
} 