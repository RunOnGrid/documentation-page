export default function RefundCommandPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Grid CLI: refund</h1>

      <p className="text-gray-300 mb-8">
        The <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">refund</code> command allows you to request
        refunds for unused credits from running deployments.
      </p>

      <div className="space-y-10">
        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Usage</h2>
          <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mb-4">
            <pre className="text-gray-300 font-mono text-sm p-2">
              <code>grid refund [deployment-id]</code>
            </pre>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Description</h2>
          <p className="text-gray-300 mb-4">
            The refund command is used to request refunds for unused credits from cancelled deployments. This is
            primarily applicable to Akash deployments, which use a per-second billing model.
          </p>
          <p className="text-gray-300">
            When you cancel a deployment on Akash, any unused credits allocated to that deployment can be refunded to
            your account. This command helps you initiate that refund process.
          </p>
        </section>

      </div>
    </div>
  )
}
