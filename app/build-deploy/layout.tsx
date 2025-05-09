import type React from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function BuildDeployLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <div className="border-b border-[#333] py-4 px-8 mt-16">
        <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>
      </div>
      <main className="p-8">{children}</main>
    </div>
  )
}
