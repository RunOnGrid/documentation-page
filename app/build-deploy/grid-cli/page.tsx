import Link from "next/link"

export default function GridCliPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Grid CLI Overview</h1>

      <p className="text-gray-300 mb-8">
        Learn how to use the Grid command-line interface (CLI) to manage and configure your Grid deployments from the
        command line.
      </p>

      <div className="space-y-10">
        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-300 mb-4">
            Grid gives you multiple ways to interact with and configure your Grid deployments. With the command-line
            interface (CLI) you can interact with the Grid platform using a terminal, or through an automated system,
            enabling you to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
            <li>Deploy applications directly from your local environment</li>
            <li>Manage your deployments and configurations</li>
            <li>Automate deployment workflows</li>
            <li>Access logs and monitor your applications</li>
          </ul>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Installing Grid CLI</h2>
          <p className="text-gray-300 mb-4">To download and install Grid CLI, run the following command:</p>

          <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs text-gray-400 px-2 py-1 bg-[#1e1e1e] rounded">npm</span>
              <span className="text-xs text-gray-400 px-2 py-1 bg-[#1e1e1e] rounded">yarn</span>
              <span className="text-xs text-gray-400 px-2 py-1 bg-[#1e1e1e] rounded">pnpm</span>
            </div>
            <pre className="text-gray-300 font-mono text-sm p-2">
              <code>npm install -g @grid/cli</code>
            </pre>
          </div>

          <p className="text-gray-300">
            This will install the Grid CLI globally on your system, making it available from any terminal.
          </p>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Updating Grid CLI</h2>
          <p className="text-gray-300 mb-4">
            When there is a new release of Grid CLI, running any command will show you a message letting you know that
            an update is available.
          </p>

          <p className="text-gray-300 mb-4">
            If you have installed our command-line interface through npm or Yarn, the easiest way to update it is by
            running the installation command yet again:
          </p>

          <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs text-gray-400 px-2 py-1 bg-[#1e1e1e] rounded">npm</span>
              <span className="text-xs text-gray-400 px-2 py-1 bg-[#1e1e1e] rounded">yarn</span>
              <span className="text-xs text-gray-400 px-2 py-1 bg-[#1e1e1e] rounded">pnpm</span>
            </div>
            <pre className="text-gray-300 font-mono text-sm p-2">
              <code>npm install -g @grid/cli@latest</code>
            </pre>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Checking the version</h2>
          <p className="text-gray-300 mb-4">
            The <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">--version</code> option can be used to verify
            the version of Grid CLI currently being used:
          </p>

          <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs text-gray-400 px-2 py-1 bg-[#1e1e1e] rounded">terminal</span>
            </div>
            <pre className="text-gray-300 font-mono text-sm p-2">
              <code>grid --version</code>
            </pre>
          </div>

          <p className="text-gray-300 text-sm">
            Using the <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">grid</code> command with the{" "}
            <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">--version</code> option.
          </p>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Using in a CI/CD environment</h2>
          <p className="text-gray-300 mb-4">
            Grid CLI requires you to log in and authenticate before accessing resources or performing administrative
            tasks. In a terminal environment, you can use{" "}
            <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">grid login --google/--github</code>
            {/* Token authentication feature commented out for future use
            In a CI/CD environment where manual input is not possible, you can create a token on your{" "}
            <span className="text-green-500">tokens page</span> and then use the{" "}
            <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">--token</code> option to authenticate.
            */}
          </p>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Available Commands</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/build-deploy/grid-cli/commands/deploy" className="text-green-500 hover:underline">
              - deploy
            </Link>
            <Link href="/build-deploy/grid-cli/commands/git" className="text-green-500 hover:underline">
              - git
            </Link>
            <Link href="/build-deploy/grid-cli/commands/list" className="text-green-500 hover:underline">
              - list
            </Link>
            <Link href="/build-deploy/grid-cli/commands/login" className="text-green-500 hover:underline">
              - login
            </Link>
            <Link href="/build-deploy/grid-cli/commands/logout" className="text-green-500 hover:underline">
              - logout
            </Link>
            <Link href="/build-deploy/grid-cli/commands/refund" className="text-green-500 hover:underline">
              - refund
            </Link>
            <Link href="/build-deploy/grid-cli/commands/help" className="text-green-500 hover:underline">
              - help
            </Link>
            <Link href="/build-deploy/grid-cli/commands/delete" className="text-green-500 hover:underline">
              - delete
            </Link>
            {/* <Link href="/build-deploy/grid-cli/commands/pull" className="text-green-500 hover:underline">
              - pull
            </Link> */}
          </div>
        </section>
      </div>
    </div>
  )
}
