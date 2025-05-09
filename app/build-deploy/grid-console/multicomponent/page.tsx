export default function MulticomponentPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Multicomponent Deployments</h1>

      <p className="text-gray-300 mb-8">
        Grid allows you to create complex applications with multiple interconnected components, each with its own
        configuration and resources.
      </p>

      <div className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">What are Multicomponent Deployments?</h2>
        <p className="text-gray-300 mb-4">
          Multicomponent deployments allow you to create complex applications with multiple services that work together.
          This is ideal for microservices architectures, frontend/backend setups, or any application that requires
          multiple containers.
        </p>
        <p className="text-gray-300">
          Each component can have its own source (GitHub repository or container image), resource configuration,
          environment variables, and networking settings.
        </p>
      </div>

      <div className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Benefits of Multicomponent Deployments</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>Deploy complex applications with a single workflow</li>
          <li>Mix and match GitHub repositories and container images</li>
        </ul>
      </div>
    </div>
  )
}
