import Image from "next/image"

export default function DeployValkeyPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Deploy a Valkey</h1>
      
      <p className="text-gray-300 mb-8">
        This guide walks you through deploying a Valkey (Redis-compatible) database on Grid. We'll cover:
      </p>
      
      <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-8">
        <li>Creating a new Valkey instance</li>
        <li>Cluster configuration options</li>
        <li>Connecting to your database</li>
        <li>Monitoring your database</li>
      </ul>

      <div className="space-y-10">
        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">1</span>
            </div>
            Step 1: Configure Database
          </h2>

          <p className="text-gray-300 mb-4">Configure the following database settings:</p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <div className="w-6 h-6 bg-[#1e1e1e] border border-green-500 rounded-full flex items-center justify-center mr-2">
              </div>
              Instance type
            </h3>

            <p className="text-gray-300 mb-2">Configure your runtime environment:</p>

            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
              <li>CPU, RAM, and NVMe allocations</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <div className="w-6 h-6 bg-[#1e1e1e] border border-green-500 rounded-full flex items-center justify-center mr-2">
              </div>
              Max Memory Policy
            </h3>

            <p className="text-gray-300 mb-2">Configure the eviction policy for when memory limits are reached:</p>

            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
              <li><strong>noeviction:</strong> Returns errors when memory limit is reached</li>
              <li><strong>allkeys-lru:</strong> Evicts least recently used keys</li>
              <li><strong>volatile-lru:</strong> Evicts least recently used keys with expiration set</li>
              <li><strong>allkeys-random:</strong> Evicts random keys</li>
              <li><strong>volatile-random:</strong> Evicts random keys with expiration set</li>
              <li><strong>volatile-ttl:</strong> Evicts keys with shortest time-to-live</li>
            </ul>

            <div className="bg-[#2a2a2a] border-l-4 border-yellow-500 p-4 rounded">
              <p className="text-yellow-400 font-semibold mb-1">Note</p>
              <p className="text-gray-300">
                Choose the eviction policy that best fits your use case. <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">allkeys-lru</code> is recommended for most general-purpose applications.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">2</span>
            </div>
            Step 2: SSL CERTIFICATES (Optional)
          </h2>
          <div className="bg-[#2a2a2a] border-l-4 border-blue-500 p-4 rounded mt-4">
            <p className="text-blue-400 font-semibold mb-2">Need SSL Configuration?</p>
            <p className="text-gray-300 mb-3">
              To configure SSL certificates for secure database connections, see our detailed SSL setup guide.
            </p>
            <a 
              href="/build-deploy/grid-console/deploy-valkey/ssl-setup" 
              className="inline-block px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded transition-colors"
            >
              Set up SSL Certificate
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

