import Image from "next/image"

export default function DeployFromContainerPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Deploy from Container Registry</h1>

      <p className="text-gray-300 mb-8">
        This guide walks you through the process of deploying an application from a container registry to Grid.
      </p>

      <div className="space-y-10">
        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">1</span>
            </div>
            Step 1: Select a Cloud Provider
          </h2>

          <p className="text-gray-300 mb-4">At the top of the "Deploy Application" screen:</p>

          <p className="text-gray-300 mb-4">Choose your target cloud environment:</p>

          <div className="mb-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-L4J0imeZ4hfTDgPeyhoBVqwL0jTmrI.png"
              alt="Cloud Provider Selection"
              width={500}
              height={100}
              className="rounded-md"
            />
          </div>

          <p className="text-gray-300">
            This determines where your application will be deployed once built and configured.
          </p>

          <div className="bg-[#2a2a2a] border-l-4 border-blue-500 p-4 rounded mt-4">
            <p className="text-blue-400 font-semibold mb-1">📢 Important Payment Information</p>
            <p className="text-gray-300">
              Each cloud provider implements a unique payment methodology. Akash uses a per-second billing model, while
              Flux follows a prepaid approach. For comprehensive details on payment requirements and processes, please
              refer to the{" "}
              <a href="/build-deploy/payments" className="text-green-500 hover:underline">
                Payment Information
              </a>{" "}
              section.
            </p>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">2</span>
            </div>
            Step 2: Configure Application
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
            <li>
              Choose <strong>Container registry</strong> as the source.
            </li>
          </ul>

          <p className="text-gray-300 mb-4">Configure the following:</p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <div className="w-6 h-6 bg-[#1e1e1e] border border-green-500 rounded-full flex items-center justify-center mr-2">
                <span className="text-green-500 text-xs">🔧</span>
              </div>
              Container Image Settings
            </h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
              <li>
                <strong>Service name:</strong> Unique name for your service.
              </li>
              <li>
                <strong>Docker image</strong> (e.g., gridcloud/hello-app:2.0)
              </li>
            </ul>

            <p className="text-gray-300 mb-2">Choose between:</p>

            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
              <li>
                <strong>Public:</strong> No authentication needed.
              </li>
              <li>
                <strong>Private:</strong> Requires registry credentials.
              </li>
            </ul>

            <p className="text-gray-300 mb-2">If using a private image:</p>

            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
              <li>Select registry provider (DockerHub, GitHub, etc.)</li>
              <li>Enter username and personal access token.</li>
            </ul>

            {/* Multicomponent content commented out
            <div className="bg-[#2a2a2a] border-l-4 border-blue-500 p-4 rounded">
              <p className="text-gray-300">
                <span className="text-blue-400 font-semibold">🔁</span> You can add multiple container components for
                multicomponent deployments.
              </p>
            </div>
            */}
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <div className="w-6 h-6 bg-[#1e1e1e] border border-green-500 rounded-full flex items-center justify-center mr-2">
                <span className="text-green-500 text-xs">💻</span>
              </div>
              Instance Settings
            </h3>

            <p className="text-gray-300 mb-2">Configure your runtime environment:</p>

            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
              <li>Number of instances</li>
              <li>CPU, RAM, and SSD allocations</li>
            </ul>

            <p className="text-gray-300 mb-2">You can either:</p>

            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
              <li>Use recommended configuration, or</li>
              <li>Customize manually.</li>
            </ul>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">3</span>
            </div>
            Step 3: Add Environment Variables (Optional)
          </h2>

          <p className="text-gray-300 mb-4">Each component supports custom environment variables.</p>

          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
            <li>Scroll to the Environment Variables section.</li>
            <li>Add key-value pairs as needed.</li>
            <li>Values are masked for security and only available to the specific component.</li>
          </ul>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">4</span>
            </div>
            Step 4: Networking Settings (Optional)
          </h2>

          <p className="text-gray-300 mb-4">You can expose ports for your service using the Networking section:</p>

          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
            <li>Choose the protocol (HTTP or TCP)</li>
            <li>Select the port</li>
            <li>Optionally assign a virtual host for routing</li>
          </ul>

          <p className="text-gray-300">Each rule added appears in the list and can be edited or removed.</p>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">5</span>
            </div>
            Step 5: Payments
          </h2>

          <p className="text-gray-300 mb-4">
            Before your deployment goes live, you'll need to handle payments based on your selected cloud provider:
          </p>

          <div className="space-y-6">
            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 flex items-center">
                <Image
                  src="/images/akash-logo.png"
                  alt="Akash Logo"
                  width={20}
                  height={20}
                  className="rounded-sm mr-2"
                />
                Akash: Per-Second Billing
              </h3>
              <p className="text-gray-300 mb-2">
                With Akash, you'll be charged on a per-second basis. Credits are continuously deducted from your account
                based on resource usage.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300">
                <li>Pay only for what you use</li>
                <li>No upfront commitment</li>
                <li>Unused credits are refundable if deployment is cancelled</li>
              </ul>
            </div>

            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 flex items-center">
                <Image
                  src="/images/flux-logo.jpeg"
                  alt="Flux Logo"
                  width={20}
                  height={20}
                  className="rounded-sm mr-2"
                />
                Flux: Prepaid Model
              </h3>
              <p className="text-gray-300 mb-2">
                With Flux, you'll pay upfront for the total cost of resources for a specified duration (minimum 1 week).
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300">
                <li>Clear upfront costs</li>
                <li>Duration-based pricing</li>
                <li>Simplified billing process</li>
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-gray-300">
              For more detailed information about payment options, visit the{" "}
              <a href="/build-deploy/payments" className="text-green-500 hover:underline">
                Payments documentation
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
