import Link from "next/link"
import Image from "next/image"
import { Key } from "lucide-react";

export default function HowToUsePage() {
  return (
    <main className="flex-1 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">How to use Grid?</h1>

        <div className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Before you begin</h2>

          <p className="text-gray-300 mb-4">To get started, create an account with Grid. You can either:</p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <Link href="/getting-started/wallet-setup">
              <div className="bg-[#252525] border border-[#333] rounded-lg p-6 hover:border-green-500 transition-colors cursor-pointer">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 flex items-center justify-center mr-2 text-gray-300">
                    <Key></Key>
                  </div>
                  <h3 className="text-lg font-semibold">Create</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  If you have never used Grid before, you first need to create a wallet
                </p>
              </div>
            </Link>

            <Link href="/getting-started/wallet-setup">
              <div className="bg-[#252525] border border-[#333] rounded-lg p-6 hover:border-green-500 transition-colors cursor-pointer">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 flex items-center justify-center mr-2 text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                      <polyline points="10 17 15 12 10 7"></polyline>
                      <line x1="15" y1="12" x2="3" y2="12"></line>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Import</h3>
                </div>
                <p className="text-gray-300 text-sm">If you already have a wallet, import your wallet to get started</p>
              </div>
            </Link>
          </div>
          <div className="mt-4">
            <Link href="/getting-started/wallet-setup" className="text-green-500 hover:underline">
              Learn more about wallet setup →
            </Link>
          </div>
        </div>

        {/* <div className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Web Console</h2>

          <div className="space-y-6">
            <div>
              <Link href="/build-deploy/grid-console" className="text-green-500 hover:underline">
                Learn more about Grid Console →
              </Link>
            </div>
          </div>
        </div> */}

        <div className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Payments</h2>

          <div className="space-y-6">
            <div>
              <p className="text-gray-300 mb-2">
                Grid supports payments via AKT(Native coin of Akash network).
              </p>
              <div className="flex flex-col gap-4 mt-4">
                <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
                  <p className="text-gray-300 text-sm">Per-Second Billing</p>
                </div>
              </div>
              <Link href="/payments" className="text-green-500 hover:underline mt-4 inline-block">
                Learn more about payment options →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
