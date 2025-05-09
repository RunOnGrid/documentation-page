export default function PullCommandPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Grid CLI: pull</h1>

      <p className="text-gray-300 mb-8">
        The <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">pull</code> command allows you to download
        configuration files and resources from your Grid deployments.
      </p>

      <div className="space-y-10">
        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Usage</h2>
          <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mb-4">
            <pre className="text-gray-300 font-mono text-sm p-2">
              <code>grid pull [deployment-id] [options]</code>
            </pre>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Options</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">
                <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">--output</code>
              </h3>
              <p className="text-gray-300">Specify the output directory for downloaded files.</p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mt-2">
                <pre className="text-gray-300 font-mono text-sm p-2">
                  <code>grid pull deployment-123 --output ./configs</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">
                <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">--config-only</code>
              </h3>
              <p className="text-gray-300">Download only configuration files, not application code.</p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mt-2">
                <pre className="text-gray-300 font-mono text-sm p-2">
                  <code>grid pull deployment-123 --config-only</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">
                <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">--env</code>
              </h3>
              <p className="text-gray-300">Include environment variables in the downloaded configuration.</p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mt-2">
                <pre className="text-gray-300 font-mono text-sm p-2">
                  <code>grid pull deployment-123 --env</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Description</h2>
          <p className="text-gray-300">
            The pull command allows you to download configuration files, environment variables, and other resources from
            your Grid deployments. This is useful for backing up configurations, replicating deployments, or
            troubleshooting issues.
          </p>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Examples</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Pull deployment configuration</h3>
              <p className="text-gray-300 mb-2">Download configuration files for a specific deployment:</p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-4">
                <pre className="text-gray-300 font-mono text-sm p-2">
                  <code>grid pull deployment-123</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Pull with environment variables</h3>
              <p className="text-gray-300 mb-2">Download configuration including environment variables:</p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-4">
                <pre className="text-gray-300 font-mono text-sm p-2">
                  <code>grid pull deployment-123 --env</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Pull to a specific directory</h3>
              <p className="text-gray-300 mb-2">Download configuration to a specific directory:</p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-4">
                <pre className="text-gray-300 font-mono text-sm p-2">
                  <code>grid pull deployment-123 --output ./backup-configs</code>
                </pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
