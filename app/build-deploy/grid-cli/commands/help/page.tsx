export default function HelpCommandPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Grid CLI: help</h1>

      <p className="text-gray-300 mb-8">
        The <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">help</code> command displays help information for
        Grid CLI commands.
      </p>

      <div className="space-y-10">
        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Usage</h2>
          <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mb-4">
            <pre className="text-gray-300 font-mono text-sm p-2">
              <code>grid help [command]</code>
            </pre>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Description</h2>
          <p className="text-gray-300">
            The help command provides detailed information about how to use Grid CLI commands. You can use it to get
            general help about the CLI or specific help for a particular command.
          </p>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Examples</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Get general help</h3>
              <p className="text-gray-300 mb-2">Display general help information about Grid CLI:</p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-4">
                <pre className="text-gray-300 font-mono text-sm p-2">
                  <code>grid help</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Get help for a specific command</h3>
              <p className="text-gray-300 mb-2">Display help information for the deploy command:</p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-4">
                <pre className="text-gray-300 font-mono text-sm p-2">
                  <code>grid help deploy</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Alternative syntax</h3>
              <p className="text-gray-300 mb-2">You can also use the --help flag with any command:</p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-4">
                <pre className="text-gray-300 font-mono text-sm p-2">
                  <code>grid deploy --help</code>
                </pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
