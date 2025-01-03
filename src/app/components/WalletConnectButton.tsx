import { useEffect, useState } from 'react'
import { initializeConnector, useWeb3React } from '@reown/appkit'

// 初始化钱包连接器
const [connector, hooks] = initializeConnector()

const WalletConnectButton = () => {
  const { activate, active, account } = useWeb3React()

  const handleConnect = async () => {
    try {
      await activate(connector)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={handleConnect}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {active ? `Connected: ${account}` : 'Connect Wallet'}
      </button>
    </div>
  )
}

export default WalletConnectButton