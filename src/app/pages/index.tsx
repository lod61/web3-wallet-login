import Head from 'next/head'
import WalletConnectButton from '../components/WalletConnectButton'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wallet Connection</title>
        <meta name="description" content="Connect to your wallet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center items-center h-screen">
        <WalletConnectButton />
      </main>
    </div>
  )
}