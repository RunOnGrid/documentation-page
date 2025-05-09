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
              <code>grid git [command] [options]</code>
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
              <p className="text-gray-300">Connect a Git repository to your Grid project.</p>
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
              <p className="text-gray-300">Disconnect a Git repository from your Grid project.</p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mt-2">
                <pre className="text-gray-300 font-mono text-sm p-2">
                  <code>grid git disconnect</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">
                <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">list</code>
              </h3>
              <p className="text-gray-300">List all Git repositories connected to your Grid projects.</p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mt-2">
                <pre className="text-gray-300 font-mono text-sm p-2">
                  <code>grid git list</code>
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
                <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">--repo</code>
              </h3>
              <p className="text-gray-300">Specify the Git repository URL.</p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mt-2">
                <pre className="text-gray-300 font-mono text-sm p-2">
                  <code>grid git connect --repo https://github.com/username/repo.git</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">
                <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">--branch</code>
              </h3>
              <p className="text-gray-300">Specify the Git branch to deploy from.</p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mt-2">
                <pre className="text-gray-300 font-mono text-sm p-2">
                  <code>grid git connect --branch main</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Examples</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Connect a GitHub repository</h3>
              <p className="text-gray-300 mb-2">Connect a GitHub repository to your Grid project:</p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-4">
                <pre className="text-gray-300 font-mono text-sm p-2">
                  <code>grid git connect --repo https://github.com/username/repo.git --branch main</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">List connected repositories</h3>
              <p className="text-gray-300 mb-2">List all Git repositories connected to your Grid projects:</p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-4">
                <pre className="text-gray-300 font-mono text-sm p-2">
                  <code>grid git list</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Disconnect a repository</h3>
              <p className="text-gray-300 mb-2">Disconnect a Git repository from your Grid project:</p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-4">
                <pre className="text-gray-300 font-mono text-sm p-2">
                  <code>grid git disconnect</code>
                </pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
