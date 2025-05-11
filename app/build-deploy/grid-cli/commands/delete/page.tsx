export default function LogoutCommandPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Grid CLI: logout</h1>

      <p className="text-gray-300 mb-8">
        The <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">delete</code> command allows you to delete deployments from
        your Grid account.
      </p>

      <div className="space-y-10">
        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Usage</h2>
          <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mb-4">
            <pre className="text-gray-300 font-mono text-sm p-2">
              <code>grid deployment delete [deployment-id]</code>
            </pre>
          </div>
        </section>
        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Description</h2>
          <p className="text-gray-300">
          The <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">delete</code> command allows you to delete a deployment
          from your Grid account.
          </p>
        </section>
      </div>
     
    </div>
  )
}
