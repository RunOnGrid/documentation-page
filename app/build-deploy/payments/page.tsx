import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function PaymentsPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Payments</h1>

      <p className="text-gray-300 mb-8">
        Grid supports different payment models for each cloud provider. Choose the payment model that best fits your
        deployment needs.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <Link href="/build-deploy/payments/akash">
          <div className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6 hover:border-green-500 transition-colors h-full">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/images/akash-logo.png" alt="Akash Logo" width={24} height={24} className="rounded-sm" />
              <h2 className="text-xl font-semibold">Akash</h2>
            </div>
            <p className="text-gray-400 mb-2">Per-Second Billing and Pay-as-You-Go</p>
            <p className="text-gray-400 mb-4">
              Pay only for what you use, with per-second billing and no upfront commitment.
            </p>
            <div className="flex justify-end">
              <ArrowRight size={20} className="text-green-500" />
            </div>
          </div>
        </Link>

        <Link href="/build-deploy/payments/flux">
          <div className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6 hover:border-green-500 transition-colors h-full">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/images/flux-logo.jpeg" alt="Flux Logo" width={24} height={24} className="rounded-sm" />
              <h2 className="text-xl font-semibold">Flux</h2>
            </div>
            <p className="text-gray-400 mb-2">Prepaid Model and Duration-Based Deployments</p>
            <p className="text-gray-400 mb-4">
              Clear upfront costs with duration-based pricing, starting from 1-week minimum.
            </p>
            <div className="flex justify-end">
              <ArrowRight size={20} className="text-green-500" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
