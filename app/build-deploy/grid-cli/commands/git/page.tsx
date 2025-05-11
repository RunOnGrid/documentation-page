export default function GitCommandPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Grid CLI: git</h1>

      <p className="text-gray-300 mb-8">
        The <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">git</code> command allows you to manage Git
        integrations and deployments for your Grid projects.
      </p>

      <div className="space-y-10">
        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Usage</h2>
          <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mb-4">
            <pre className="text-gray-300 font-mono text-sm p-2">
              <code>grid git [command]</code>
            </pre>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Commands</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">
                <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">connect</code>
              </h3>
              <p className="text-gray-300">Connect to Grid github app.</p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mt-2">
                <pre className="text-gray-300 font-mono text-sm p-2">
                  <code>grid git connect</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">
                <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">disconnect</code>
              </h3>
              <p className="text-gray-300">Disconnect Grid github app.</p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mt-2">
                <pre className="text-gray-300 font-mono text-sm p-2">
                  <code>grid git disconnect</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">
                <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">repos</code>
              </h3>
              <p className="text-gray-300">List all Github repositories connected to Grid github app.</p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mt-2">
                <pre className="text-gray-300 font-mono text-sm p-2">
                  <code>grid git repos</code>
                </pre>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">
                <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">build</code>
              </h3>
              <p className="text-gray-300">Build a github repository to a runnable container image.</p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mt-2">
                <pre className="text-gray-300 font-mono text-sm p-2">
                  <code>grid git build</code>
                </pre>
                <p className="text-gray-300 text-sm">
                  Using the <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">build</code> command will trigger github actions on the selected repository.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
