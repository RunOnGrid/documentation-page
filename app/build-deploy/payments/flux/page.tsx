import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

export default function FluxPaymentsPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Flux Payments</h1>

      <div className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Before You Deploy</h2>
        <p className="text-gray-300 mb-6">
          To get started, charge credits on your Grid account. Credits are used to pay for your deployments on Flux.
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
          <Image src="/images/flux-logo.jpeg" alt="Flux Logo" width={24} height={24} className="rounded-sm" />
          <h3 className="text-lg font-medium">Prepaid Model and Duration-Based Deployments</h3>
        </div>

        <div className="space-y-4 text-gray-300">
          <p>
            In Flux, the payment system follows a prepaid model. This means you pay for the total cost of the resources
            at the time of deployment. The payment can be made using credits already loaded into your account, or
            directly at the time of deployment.
          </p>

          <p>
            Flux also allows you to choose the duration of your deployment, with a minimum of 1 week. The total cost is
            automatically calculated based on the resources selected (CPU, RAM, storage) and the duration chosen.
          </p>

          <p>This gives you a clear upfront cost, making budgeting and expense management easier.</p>
        </div>

        <div className="mt-8 bg-[#252525] border border-[#333] rounded-lg p-4">
          <h4 className="text-md font-medium mb-2 text-green-500">Benefits of Prepaid Model</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Clear upfront costs for better budgeting</li>
            <li>Duration-based pricing with minimum 1-week commitment</li>
            <li>Simplified billing process</li>
            <li>Ideal for stable, long-running applications</li>
            <li>No need to monitor ongoing costs</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
