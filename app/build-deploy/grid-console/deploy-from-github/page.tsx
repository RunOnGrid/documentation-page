import Image from "next/image"

export default function DeployFromGitHubPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Deploy from GitHub Repository</h1>

      <p className="text-gray-300 mb-8">
        This guide walks you through the process of deploying an application from a GitHub repository to Grid.
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
            Step 2: Select a GitHub Repository and Source Branch
          </h2>

          <p className="text-gray-300 mb-4">
            Before deploying, you must install the Grid GitHub App to grant access to your repositories.
          </p>

          <div className="mb-6 border border-[#333] rounded-lg overflow-hidden">
            <Image
              src="/images/github-repo-selection.png"
              alt="GitHub Repository Selection Interface"
              width={900}
              height={400}
              className="w-full"
            />
          </div>

          <p className="text-gray-300 mb-4">
            In the "Deploy Application" screen, select <strong>Git repository</strong> as your component source.
          </p>

          <p className="text-gray-300 mb-4">
            Click the <strong>Install GitHub App</strong> button if you haven't already.
          </p>

          <p className="text-gray-300 mb-4">Once installed, you will get redirect to the Grid github app</p>

          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
            <li>Select your GitHub username or organization.</li>
            <li>Choose the repository you want to deploy from.</li>
            <li>Pick the branch (e.g., main) to build your application from.</li>
          </ul>

          <div className="bg-[#2a2a2a] border-l-4 border-yellow-500 p-4 rounded">
            <p className="text-yellow-400 font-semibold mb-1">⚠️ Note</p>
            <p className="text-gray-300">
              If your desired repository is not listed, go to Account Settings(Github) in the top-right corner and
              update the permissions of your GitHub App installation.
            </p>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">3</span>
            </div>
            Step 3: Trigger GitHub Actions Workflow
          </h2>

          <p className="text-gray-300 mb-4">Configure your repository settings and resources:</p>

          <div className="mb-6 border border-[#333] rounded-lg overflow-hidden">
            <Image
              src="/images/github-workflow-config.png"
              alt="GitHub Workflow Configuration Interface"
              width={1200}
              height={600}
              className="w-full"
            />
          </div>

          <p className="text-gray-300 mb-4">
            After configuring your repository settings and resources, click the <strong>Run Workflow</strong> button to
            trigger the GitHub Actions workflow.
          </p>

          <p className="text-gray-300 mb-4">Grid will:</p>

          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
            <li>Automatically push a grid-ci.yml file into your GitHub repository.</li>
            <li>Trigger the corresponding GitHub Actions workflow for your application.</li>
            <li>Configure the deployment with the specified resources (CPU, RAM, SSD).</li>
          </ul>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">4</span>
            </div>
            Step 4: Payments
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
