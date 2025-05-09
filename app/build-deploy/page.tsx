import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function BuildAndDeployPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Build & Deploy</h1>

      <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>

        <p className="text-gray-300 mb-4">
          Once you have created a grid account, you can start to deploy your first application. With this example you
          will learn how to deploy a simple NodeJS application to ensure that your deployment is successful.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        <Link href="/build-deploy/grid-cli">
          <div className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6 hover:border-green-500 transition-colors h-full">
            <h2 className="text-xl font-semibold mb-4 flex items-center justify-between">
              Grid CLI
              <ArrowRight size={20} className="text-green-500" />
            </h2>
            <p className="text-gray-400">Deploy and manage applications using the Grid command-line interface.</p>
          </div>
        </Link>

        <Link href="/build-deploy/grid-console">
          <div className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6 hover:border-green-500 transition-colors h-full">
            <h2 className="text-xl font-semibold mb-4 flex items-center justify-between">
              Grid Console
              <ArrowRight size={20} className="text-green-500" />
            </h2>
            <p className="text-gray-400">Deploy and manage applications using the Grid web console.</p>
          </div>
        </Link>

        <Link href="/build-deploy/payments">
          <div className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6 hover:border-green-500 transition-colors h-full">
            <h2 className="text-xl font-semibold mb-4 flex items-center justify-between">
              Payments
              <ArrowRight size={20} className="text-green-500" />
            </h2>
            <p className="text-gray-400">
              Learn about payment options for
              <span className="inline-flex items-center mx-1">
                <Image src="/images/akash-logo.png" alt="Akash Logo" width={16} height={16} />
                Akash
              </span>
              and
              <span className="inline-flex items-center mx-1">
                <Image src="/images/flux-logo.jpeg" alt="Flux Logo" width={16} height={16} />
                Flux
              </span>
              deployments.
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}
