export default function LogsCommandPage() {
    return (
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Grid CLI: logs</h1>
  
        <p className="text-gray-300 mb-8">
          The <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">logs</code> command allows you to view logs from your deployed applications
          across different providers.
        </p>
  
        <div className="space-y-10">
          <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Usage</h2>
            <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mb-4">
              <pre className="text-gray-300 font-mono text-sm p-2">
                <code>grid logs [provider]</code>
              </pre>
            </div>
            <p className="text-gray-300 text-sm">
              Specify a provider to view logs from applications deployed on that platform.
            </p>
          </section>
  
          <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Providers</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">
                  <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">akash</code>
                </h3>
                <p className="text-gray-300 mb-2">View logs from applications deployed on Akash Network.</p>
                <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mb-2">
                  <pre className="text-gray-300 font-mono text-sm p-2">
                    <code>grid logs akash</code>
                  </pre>
                </div>
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3">
                  <p className="text-blue-300 text-sm">
                    <strong>Protocol:</strong> WebSocket - Real-time log streaming with persistent connection
                  </p>
                </div>
              </div>
  
              <div>
                <h3 className="text-lg font-medium mb-2">
                  <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">flux</code>
                </h3>
                <p className="text-gray-300 mb-2">View logs from applications deployed on Flux CD.</p>
                <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mb-2">
                  <pre className="text-gray-300 font-mono text-sm p-2">
                    <code>grid logs flux</code>
                  </pre>
                </div>
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3">
                  <p className="text-green-300 text-sm">
                    <strong>Protocol:</strong> HTTP - RESTful API calls for log retrieval
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Examples</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">View Akash logs</h3>
                <div className="bg-[#121212] border border-[#333] rounded-lg p-4">
                  <pre className="text-gray-300 font-mono text-sm p-2">
                    <code>grid logs akash</code>
                  </pre>
                </div>
                <p className="text-gray-300 text-sm mt-2">
                  Opens a WebSocket connection to stream real-time logs from your Akash deployments.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">View Flux logs</h3>
                <div className="bg-[#121212] border border-[#333] rounded-lg p-4">
                  <pre className="text-gray-300 font-mono text-sm p-2">
                    <code>grid logs flux</code>
                  </pre>
                </div>
                <p className="text-gray-300 text-sm mt-2">
                  Makes HTTP requests to retrieve logs from your Flux CD deployments.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
  