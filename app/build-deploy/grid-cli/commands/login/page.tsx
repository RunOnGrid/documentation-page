export default function LoginCommandPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Grid CLI: login</h1>

      <p className="text-gray-300 mb-4">
        After successful authentication, the JWT token is securely stored in your system's keychain and will expire after one hour.
      </p>

      <p className="text-gray-300 mb-8">
        The <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">login</code> command allows you to delete a deployment
        from your Grid account.
      </p>

      <div className="space-y-10">
        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Usage</h2>
          <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mb-4">
            <pre className="text-gray-300 font-mono text-sm p-2">
              <code>grid login [options]</code>
            </pre>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Options</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">
                <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">--github</code>
              </h3>
              <p className="text-gray-300">Login using GitHub authentication.</p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mt-2">
                <pre className="text-gray-300 font-mono text-sm p-2">
                  <code>grid login --github</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">
                <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">--google</code>
              </h3>
              <p className="text-gray-300">Login using Google authentication.</p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mt-2">
                <pre className="text-gray-300 font-mono text-sm p-2">
                  <code>grid login --google</code>
                </pre>
              </div>
            </div>

            {/* Token authentication feature commented out for future use
            <div>
              <h3 className="text-lg font-medium mb-2">
                <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">--token</code>
              </h3>
              <p className="text-gray-300">Login using an API token.</p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mt-2">
                <pre className="text-gray-300 font-mono text-sm p-2">
                  <code>grid login --token YOUR_API_TOKEN</code>
                </pre>
              </div>
            </div>
            */}
          </div>
        </section>
      </div>
    </div>
  )
}
