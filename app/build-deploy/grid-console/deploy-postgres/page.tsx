import Image from "next/image"

export default function DeployFromContainerPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Deploy a PostgreSQL</h1>
      
      <p className="text-gray-300 mb-8">
        This guide walks you through deploying a PostgreSQL database on Grid. We'll cover:
      </p>
      
      <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-8">
        <li>Creating a new Postgres database</li>
        <li>Cluster configuration options</li>
        <li>Connecting to your database</li>
        <li>Monitoring your database</li>
      </ul>

      <div className="space-y-10">

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">1</span>
            </div>
            Step 1: Configure Database
          </h2>

          <p className="text-gray-300 mb-4">Configure the following database settings:</p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <div className="w-6 h-6 bg-[#1e1e1e] border border-green-500 rounded-full flex items-center justify-center mr-2">
              </div>
              Instance type
            </h3>

            <p className="text-gray-300 mb-2">Configure your runtime environment:</p>

            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
              <li>CPU, RAM, and NVMe allocations</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <div className="w-6 h-6 bg-[#1e1e1e] border border-green-500 rounded-full flex items-center justify-center mr-2">
              </div>
              Version
            </h3>

            <p className="text-gray-300 mb-2">Select the PostgreSQL version for your deployment:</p>

            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
              <li>PostgreSQL 17</li>
              <li>PostgreSQL 16</li>
              <li>PostgreSQL 15</li>
              <li>PostgreSQL 14</li>
            </ul>
          </div>

          <div className="bg-[#2a2a2a] border-l-4 border-green-500 p-4 rounded mt-6">
            <p className="text-green-400 font-semibold mb-1">Security: SCRAM-SHA-256 Authentication</p>
            <p className="text-gray-300">
              All PostgreSQL instances deployed on Grid are automatically configured with <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">scram-sha-256</code> password encryption. This is PostgreSQL's most secure password authentication method and is enabled by default, providing strong protection for your database credentials.
            </p>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">2</span>
            </div>
            Step 2: Enable S3 Backup (Optional)
          </h2>

          <p className="text-gray-300 mb-4">
            If you want to automatically back up your PostgreSQL database to AWS S3, you can enable the S3 Backup option during deployment. This feature cannot be enabled on existing deployments.
          </p>

          <div className="space-y-4 mb-4">
            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-200">Enable S3 Backup</h3>
              <p className="text-gray-300 text-sm mb-2">
                In the deployment form, find the <strong>"S3 Backup"</strong> section:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
                <li>Look for the toggle switch labeled <strong>"Enabled"</strong></li>
                <li>Turn on the toggle to enable S3 backup functionality</li>
                <li>A description will appear: <em>"A Node.js application that automatically backs up your PostgreSQL database to S3 via a cron job."</em></li>
              </ul>
            </div>

            <div className="bg-[#2a2a2a] border-l-4 border-red-500 p-4 rounded mb-4">
              <p className="text-red-400 font-semibold mb-1">⚠️ Important Requirement</p>
              <p className="text-gray-300 text-sm">
                You <strong>must</strong> enable S3 Backup during PostgreSQL deployment if you want to use this feature. This option cannot be enabled on existing deployments. If you need S3 backups but forgot to enable this option, you'll need to create a new deployment with S3 Backup enabled.
              </p>
            </div>

            <div className="bg-[#2a2a2a] border-l-4 border-blue-500 p-4 rounded">
              <p className="text-blue-400 font-semibold mb-1">Setup Required After Deployment</p>
              <p className="text-gray-300 text-sm mb-2">
                After enabling S3 Backup and creating your deployment, you'll need to:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-xs">
                <li>Set up an AWS account, S3 bucket, and IAM credentials (see <a href="/aws/account-setup" className="text-green-500 hover:underline">AWS documentation</a>)</li>
                <li>Configure AWS credentials in the Variables tab of your deployment</li>
                <li>Set up backup schedule and configuration options</li>
              </ul>
              <p className="text-gray-300 text-sm mt-2">
                For detailed instructions on configuring S3 backups in Grid, see our <a href="/aws/configure-s3-backups" className="text-green-500 hover:underline">Configure S3 Backups in Grid</a> guide.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">3</span>
            </div>
            Step 3: SSL CERTIFICATES (Optional)
          </h2>
          <div className="bg-[#2a2a2a] border-l-4 border-blue-500 p-4 rounded mt-4">
            <p className="text-blue-400 font-semibold mb-2">Need SSL Configuration?</p>
            <p className="text-gray-300 mb-3">
              To configure SSL certificates for secure database connections, see our detailed SSL setup guide.
            </p>
            <a 
              href="/build-deploy/grid-console/deploy-postgres/ssl-setup" 
              className="inline-block px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded transition-colors"
            >
              Set up SSL Certificate
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

