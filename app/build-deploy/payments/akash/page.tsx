import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

export default function AkashPaymentsPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Akash Payments</h1>

      <div className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Before You Deploy</h2>
        <p className="text-gray-300 mb-6">
          To get started, charge credits on your Grid account. Credits are used to pay for your deployments on Akash.
        </p>

        <div className="bg-[#1A1E21] rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-medium text-gray-200">Total Balance</h3>
              <Eye size={20} className="text-gray-400" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-4xl font-bold">$3,592.00</div>
            <Button className="bg-green-500 hover:bg-green-600 text-white px-6">Charge credits</Button>
          </div>
        </div>

        <p className="text-gray-300">
          On the billing interface, a "Charge credits" button is available to pay via Stripe.
        </p>
      </div>

      <div className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Payment Methodology</h2>

        <div className="flex items-center gap-2 mb-4">
          <Image src="/images/akash-logo.png" alt="Akash Logo" width={24} height={24} className="rounded-sm" />
          <h3 className="text-lg font-medium">Per-Second Billing and Pay-as-You-Go</h3>
        </div>

        <div className="space-y-4 text-gray-300">
          <p>
            In Akash, the payment system follows a per-second billing model. This means that credits are continuously
            deducted from your account every second, based on the cost of the resources you've deployed (CPU, RAM,
            storage, etc.).
          </p>

          <p>
            Instead of charging upfront, Akash allows you to pay as you go, giving you precise control over your
            spending. You can stop or pause deployments at any moment, and you'll only be charged for the exact time
            your deployment was running.
          </p>

          <p>
            Additionally, any unused credits allocated to a deployment are refundable if the deployment is cancelled.
            These credits will be returned to your account and made available for future use.
          </p>

          <p>
            This per-second billing model is ideal for dynamic, short-term, or scalable workloads — you only pay for
            what you actually use, down to the second.
          </p>
        </div>

        <div className="mt-8 bg-[#252525] border border-[#333] rounded-lg p-4">
          <h4 className="text-md font-medium mb-2 text-green-500">Benefits of Per-Second Billing</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Pay only for what you use, down to the second</li>
            <li>No upfront commitment required</li>
            <li>Easily scale resources up or down as needed</li>
            <li>Refundable credits for cancelled deployments</li>
            <li>Ideal for testing, development, and variable workloads</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
