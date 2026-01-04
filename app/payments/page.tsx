import Image from "next/image"
import Link from "next/link"

export default function PaymentsPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">akt tokens</h1>

      <p className="text-gray-300 mb-8">
        Grid uses AKT (Akash Network's native token) for all payments. Learn how to acquire AKT and deposit it to your Grid wallet.
      </p>

      <div className="space-y-12">
        {/* Finding AKT Section */}
        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Finding AKT on Exchanges</h2>
          <p className="text-gray-300 mb-6">
            AKT (Akash Network Token) is available on various centralized exchanges (CEX) and decentralized exchanges (DEX). Here are some popular options:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3">Centralized Exchanges (CEX)</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-300 text-sm">
                <li>Osmosis</li>
                <li>Kraken</li>
                <li>Gate.io</li>
                <li>KuCoin</li>
                <li>MEXC</li>
                <li>Other major exchanges</li>
              </ul>
              <p className="text-gray-400 text-xs mt-4">
                Check each exchange for current AKT trading pairs and availability.
              </p>
            </div>

            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3">Decentralized Exchanges (DEX)</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-300 text-sm">
                <li>Osmosis DEX</li>
                <li>Keplr Swap</li>
                <li>Other Cosmos-based DEXs</li>
              </ul>
              <p className="text-gray-400 text-xs mt-4">
                DEXs allow you to swap tokens directly from your wallet without a centralized intermediary.
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-[#252525] border border-[#333] rounded-lg">
            <p className="text-gray-300 text-sm">
              <strong className="text-green-500">Note:</strong> Always verify the official contract address and use reputable exchanges. 
              Check the official Akash Network website for the most up-to-date list of supported exchanges.
            </p>
          </div>
        </section>

        {/* Deposit AKT Section */}
        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Deposit AKT to Grid Wallet</h2>
          <p className="text-gray-300 mb-6">
            Once you have AKT, follow these steps to deposit it into your Grid wallet for use with Grid services.
          </p>

          <div className="space-y-8">
            {/* Step 1 */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
                  <span className="text-green-500 font-mono">1</span>
                </div>
                <h3 className="text-xl font-semibold">Navigate to the billing view</h3>
              </div>
              <p className="text-gray-300 mb-4 ml-11">
                Log into your Grid account and navigate to the billing section. This is where you can view your current balance and manage your AKT deposits.
              </p>
              <div className="ml-11 mb-4">
                <Image
                  src="https://imagedelivery.net/EXhaUxjEp-0lLrNJjhM2AA/07ae4771-5c2b-4419-e2a6-d1159ffe3e00/public"
                  alt="Navigate to billing view"
                  width={800}
                  height={600}
                  className="rounded-lg border border-[#333]"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
                  <span className="text-green-500 font-mono">2</span>
                </div>
                <h3 className="text-xl font-semibold">Press on the copy button</h3>
              </div>
              <p className="text-gray-300 mb-4 ml-11">
                In the billing view, you'll see your Grid wallet address. Click the copy button next to the address to copy it to your clipboard. This is the address you'll use to receive AKT deposits.
              </p>
              <div className="ml-11 mb-4">
                <Image
                  src="https://imagedelivery.net/EXhaUxjEp-0lLrNJjhM2AA/aa56fa22-24d9-41f5-ad34-5b4ff9db8e00/public"
                  alt="Copy wallet address"
                  width={800}
                  height={600}
                  className="rounded-lg border border-[#333]"
                />
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
                  <span className="text-green-500 font-mono">3</span>
                </div>
                <h3 className="text-xl font-semibold">Use this address to receive AKT</h3>
              </div>
              <p className="text-gray-300 mb-4 ml-11">
                Use the copied wallet address to receive AKT from any method - whether you're withdrawing from an exchange, receiving from another wallet, or using any other method to send AKT. Simply paste the address as the recipient address when sending AKT. Your deposit will appear in your Grid wallet once the transaction is confirmed on the Akash Network.
              </p>
              <div className="ml-11 p-4 bg-[#252525] border border-[#333] rounded-lg">
                <p className="text-gray-300 text-sm">
                  <strong className="text-green-500">Important:</strong> Always double-check the address before sending. 
                  Transactions on the blockchain are irreversible, so ensure you're sending to the correct address.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Information Section */}
        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Payment Model</h2>
          <div className="space-y-4">
            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">Per-Second Billing</h3>
              <p className="text-gray-300 text-sm">
                Grid uses a per-second billing model, meaning you only pay for the exact time your resources are running. 
                This provides cost efficiency and flexibility, as you're charged precisely for what you use.
              </p>
            </div>
            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">Pay-as-you-go</h3>
              <p className="text-gray-300 text-sm">
                With Grid's pay-as-you-go pricing, there are no upfront commitments or long-term contracts. 
                Simply deposit AKT into your wallet and start using Grid services immediately.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

