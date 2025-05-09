import Image from "next/image"
import Link from "next/link"

export default function DocumentationPage() {
  return (
    <main className="flex-1 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 flex justify-center">
          <div className="w-24 h-24 relative">
            <Image src="/images/grid-logo.png" alt="Grid Logo" width={96} height={96} className="object-contain" />
          </div>
        </div>

        <h1 className="text-5xl font-bold mb-4 text-center md:text-left">Grid Documentation</h1>

        <p className="text-gray-400 mb-12 text-lg">
          Grid is a platform as a service for developers to build and deploy containerized applications on decentralized
          clouds.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6">Getting Started</h2>
            <div className="grid md:grid-cols-1 gap-6">
              <Link href="/getting-started/how-to-use">
                <div className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6 hover:border-green-500 transition-colors">
                  <h3 className="text-xl font-semibold mb-2">How to use Grid?</h3>
                  <p className="text-gray-400 mt-4">Learn how to create an account and get started with Grid.</p>
                </div>
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Grid CLI</h2>
            <div className="grid md:grid-cols-1 gap-6">
              <Link href="/build-deploy/grid-cli">
                <div className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6 hover:border-green-500 transition-colors">
                  <h3 className="text-xl font-semibold mb-2">Grid CLI</h3>
                  <p className="text-gray-400 mt-4">
                    Learn how to deploy and manage applications using the Grid command-line interface.
                  </p>
                </div>
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Grid Console</h2>
            <div className="grid md:grid-cols-1 gap-6">
              <Link href="/build-deploy/grid-console">
                <div className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6 hover:border-green-500 transition-colors">
                  <h3 className="text-xl font-semibold mb-2">Grid Console</h3>
                  <p className="text-gray-400 mt-4">
                    Learn how to deploy and manage applications using the Grid web console.
                  </p>
                </div>
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Deployment Options</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/build-deploy/grid-console/deploy-from-github">
                <div className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6 hover:border-green-500 transition-colors h-full">
                  <h3 className="text-xl font-semibold mb-2">Deploy from GitHub</h3>
                  <p className="text-gray-400 mt-4">
                    Learn how to deploy applications directly from your GitHub repositories.
                  </p>
                </div>
              </Link>

              <Link href="/build-deploy/grid-console/deploy-from-container">
                <div className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6 hover:border-green-500 transition-colors h-full">
                  <h3 className="text-xl font-semibold mb-2">Deploy from Container Registry</h3>
                  <p className="text-gray-400 mt-4">
                    Learn how to deploy pre-built container images from Docker Hub and GitHub Container Registry.
                  </p>
                </div>
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Payments</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/build-deploy/payments/akash">
                <div className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6 hover:border-green-500 transition-colors h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-xl font-semibold">Akash Network</h3>
                  </div>
                  <p className="text-gray-400">
                    Deploy on Akash with per-second billing and pay-as-you-go pricing model.
                  </p>
                </div>
              </Link>

              <Link href="/build-deploy/payments/flux">
                <div className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6 hover:border-green-500 transition-colors h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-xl font-semibold">Flux</h3>
                  </div>
                  <p className="text-gray-400">Deploy on Flux with prepaid model and duration-based deployments.</p>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
