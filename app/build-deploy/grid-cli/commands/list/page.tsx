export default function ListCommandPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Grid CLI: deployment</h1>

      <p className="text-gray-300 mb-8">
        The <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">list</code> command allows you to list your
        deployments and resources on Grid.
      </p>

      <div className="space-y-10">
        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Usage</h2>
          <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mb-4">
            <pre className="text-gray-300 font-mono text-sm p-2">
              <code>grid deployment [options]</code>
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
                  <code>grid deployment list</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">
                <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">providers</code>
              </h3>
              <p className="text-gray-300">List deployments by id</p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mt-2">
                <pre className="text-gray-300 font-mono text-sm p-2">
                  <code>grid list [id]</code>
                </pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
