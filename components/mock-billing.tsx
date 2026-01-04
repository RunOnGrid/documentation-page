"use client"

import { Copy } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function MockBilling() {
  // Fake values
  const akashAddress = "akash1a7y8fq4v2qj5k3m9n0p1r2s3t4u5v6w7x8y9z0"
  const balanceUSD = 3592.00
  const aktAmount = 1250.50

  const [copied, setCopied] = useState(false)

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleWithdrawClick = () => {
    // Mock withdraw functionality
    console.log("Withdraw clicked")
  }

  return (
    <section className="w-full mt-5 flex justify-center px-4">
      <div
        className="
          w-full 
          rounded-[32px] p-4 md:p-6
          bg-[#1e1e1e] text-gray-200
          border border-[#333]
          shadow-[0_8px_30px_rgba(0,0,0,0.12)]
          min-w-md lg:min-w-xl xl:min-w-3xl
        "
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
          {/* Logo */}
          <Image
            src="https://imagedelivery.net/EXhaUxjEp-0lLrNJjhM2AA/a1957f28-d510-41b8-254a-2188ea92de00/public"
            alt="Akash"
            width={32}
            height={32}
            className="h-[28px] md:h-[32px] w-auto"
          />

          {/* Address + Withdraw */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Address chip */}
            <div
              className="
                inline-flex items-center gap-2
                rounded-full px-3 py-1.5
                bg-[#252525] text-gray-200
                border border-[#333]
                text-[11px] md:text-xs
              "
              title={akashAddress || ""}
            >
              <span className="font-medium">
                {akashAddress
                  ? `${akashAddress.slice(0, 6)}...${akashAddress.slice(-4)}`
                  : "Loading..."}
              </span>
              <button
                type="button"
                onClick={() => handleCopy(akashAddress)}
                className="transition hover:opacity-80"
                aria-label="Copy address"
              >
                <Copy className="w-4 h-4" />
              </button>
              {copied && (
                <span className="text-xs text-green-500 ml-1">Copied!</span>
              )}
            </div>

            {/* Withdraw button */}
            <button
              onClick={handleWithdrawClick}
              className="
                inline-flex items-center justify-center
                rounded-full border-2
                border-green-500 text-green-500
                px-4 py-1.5 text-sm font-semibold
                transition hover:bg-green-500/10
              "
            >
              Withdraw
            </button>
          </div>
        </div>

        {/* Balance row */}
        <div
          className="
            mt-4 md:mt-6
            flex items-center justify-between
            rounded-2xl
            px-4 md:px-6 h-12 md:h-14
            bg-black/50
          "
        >
          <span className="text-base md:text-lg font-semibold tracking-wide">
            AKASH
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-lg md:text-xl font-extrabold">
              ${balanceUSD.toFixed(2)}
            </span>
            <span className="text-xs md:text-sm opacity-90">
              ({aktAmount.toFixed(2)} AKT)
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

