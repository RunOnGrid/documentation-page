import Link from "next/link"
import Image from "next/image"

export default function HowToUsePage() {
  return (
    <main className="flex-1 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">How to use Grid?</h1>

        <div className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Before you begin</h2>

          <p className="text-gray-300 mb-4">To get started, create an account with Grid. You can either:</p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-[#252525] border border-[#333] rounded-lg p-6">
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Sign up</h3>
              </div>
              <p className="text-gray-300 text-sm">
                If you have never used Grid before, sign up for a new Grid account
              </p>
            </div>

            <div className="bg-[#252525] border border-[#333] rounded-lg p-6">
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
                <h3 className="text-lg font-semibold">Log in</h3>
              </div>
              <p className="text-gray-300 text-sm">If you already have a Grid account, log in to get started</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Deployment Options</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Command Line Interface</h3>
              <p className="text-gray-300 mb-2">
                The Grid CLI provides a powerful command-line tool for developers who prefer terminal-based workflows.
              </p>
              <Link href="/build-deploy/grid-cli" className="text-green-500 hover:underline">
                Learn more about Grid CLI →
              </Link>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Web Console</h3>
              <p className="text-gray-300 mb-2">
                The Grid web console offers a user-friendly interface for deploying and managing your applications.
              </p>
              <Link href="/build-deploy/grid-console" className="text-green-500 hover:underline">
                Learn more about Grid Console →
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Deployment Sources</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">GitHub Repository</h3>
              <p className="text-gray-300 mb-2">
                Deploy directly from your GitHub repositories. Grid will automatically build and deploy your
                application.
              </p>
              <Link href="/build-deploy/grid-console/deploy-from-github" className="text-green-500 hover:underline">
                Learn how to deploy from GitHub →
              </Link>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Container Registry</h3>
              <p className="text-gray-300 mb-2">
                Deploy container images from Docker Hub and GitHub Container Registry.
              </p>
              <Link href="/build-deploy/grid-console/deploy-from-container" className="text-green-500 hover:underline">
                Learn how to deploy from container registry →
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Payments</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Cloud Provider Payments</h3>
              <p className="text-gray-300 mb-2">
                Grid supports payments for both Akash and Flux deployments allowing you to choose the most suitable
                payment method for your needs.
              </p>
              <div className="flex flex-col gap-4 mt-4">
                <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Image
                      src="/images/akash-logo.png"
                      alt="Akash Logo"
                      width={20}
                      height={20}
                      className="rounded-sm"
                    />
                    <span className="font-medium">Akash</span>
                  </div>
                  <p className="text-gray-300 text-sm">Per-Second Billing and Pay-as-You-Go</p>
                </div>
                <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Image src="/images/flux-logo.jpeg" alt="Flux Logo" width={20} height={20} className="rounded-sm" />
                    <span className="font-medium">Flux</span>
                  </div>
                  <p className="text-gray-300 text-sm">Prepaid Model and Duration-Based Deployments</p>
                </div>
              </div>
              <Link href="/build-deploy/payments" className="text-green-500 hover:underline mt-4 inline-block">
                Learn more about payment options →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
