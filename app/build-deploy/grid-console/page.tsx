import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function GridConsolePage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Grid Console</h1>

      <p className="text-gray-300 mb-8">
        The Grid Console provides a user-friendly web interface for deploying and managing your applications on
        decentralized clouds.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <Link href="/build-deploy/grid-console/deploy-from-github">
          <div className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6 hover:border-green-500 transition-colors h-full">
            <h2 className="text-xl font-semibold mb-4 flex items-center justify-between">
              Deploy from GitHub Repository
              <ArrowRight size={20} className="text-green-500" />
            </h2>
            <p className="text-gray-400">
              Learn how to deploy applications directly from your GitHub repositories using Grid's continious
              integration tools for automated building.
            </p>
          </div>
        </Link>

        <Link href="/build-deploy/grid-console/deploy-from-container">
          <div className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6 hover:border-green-500 transition-colors h-full">
            <h2 className="text-xl font-semibold mb-4 flex items-center justify-between">
              Deploy from Container Registry
              <ArrowRight size={20} className="text-green-500" />
            </h2>
            <p className="text-gray-400">
              Learn how to deploy pre-built container images from Docker Hub and GitHub Container Registry
            </p>
          </div>
        </Link>

        {/* Multicomponent card commented out
        <Link href="/build-deploy/grid-console/multicomponent">
          <div className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6 hover:border-green-500 transition-colors h-full">
            <h2 className="text-xl font-semibold mb-4 flex items-center justify-between">
              Multicomponent Deployments
              <ArrowRight size={20} className="text-green-500" />
            </h2>
            <p className="text-gray-400">
              Learn how to create complex applications with multiple interconnected components, each with its own
              configuration and resources.
            </p>
          </div>
        </Link>
        */}
      </div>
    </div>
  )
}
