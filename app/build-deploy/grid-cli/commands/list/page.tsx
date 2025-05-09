export default function ListCommandPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Grid CLI: list</h1>

      <p className="text-gray-300 mb-8">
        The <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">list</code> command allows you to list your
        deployments and resources on Grid.
      </p>

      <div className="space-y-10">
        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Usage</h2>
          <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mb-4">
            <pre className="text-gray-300 font-mono text-sm p-2">
              <code>grid list [resource] [options]</code>
            </pre>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Resources</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">
                <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">deployments</code>
              </h3>
              <p className="text-gray-300">List all your deployments.</p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mt-2">
                <pre className="text-gray-300 font-mono text-sm p-2">
                  <code>grid list deployments</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">
                <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">providers</code>
              </h3>
              <p className="text-gray-300">List available cloud providers.</p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mt-2">
                <pre className="text-gray-300 font-mono text-sm p-2">
                  <code>grid list providers</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">
                <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">regions</code>
              </h3>
              <p className="text-gray-300">List available deployment regions.</p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mt-2">
                <pre className="text-gray-300 font-mono text-sm p-2">
                  <code>grid list regions</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Options</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">
                <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">--provider</code>
              </h3>
              <p className="text-gray-300">Filter by cloud provider.</p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mt-2">
                <pre className="text-gray-300 font-mono text-sm p-2">
                  <code>grid list deployments --provider akash</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">
                <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">--format</code>
              </h3>
              <p className="text-gray-300">Output format (json, table, yaml).</p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mt-2">
                <pre className="text-gray-300 font-mono text-sm p-2">
                  <code>grid list deployments --format json</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">
                <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">--limit</code>
              </h3>
              <p className="text-gray-300">Limit the number of results.</p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mt-2">
                <pre className="text-gray-300 font-mono text-sm p-2">
                  <code>grid list deployments --limit 10</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Examples</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">List all deployments</h3>
              <p className="text-gray-300 mb-2">List all your deployments on Grid:</p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-4">
                <pre className="text-gray-300 font-mono text-sm p-2">
                  <code>grid list deployments</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">List deployments with JSON output</h3>
              <p className="text-gray-300 mb-2">List deployments and output in JSON format:</p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-4">
                <pre className="text-gray-300 font-mono text-sm p-2">
                  <code>grid list deployments --format json</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">List deployments on a specific provider</h3>
              <p className="text-gray-300 mb-2">List deployments on a specific cloud provider:</p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-4">
                <pre className="text-gray-300 font-mono text-sm p-2">
                  <code>grid list deployments --provider akash</code>
                </pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
