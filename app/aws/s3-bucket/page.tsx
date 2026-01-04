import Link from "next/link"

export default function CreateS3BucketPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create S3 Bucket</h1>

      <p className="text-gray-300 mb-8">
        This guide walks you through creating a private S3 bucket in AWS to store your PostgreSQL backups from Grid. A private bucket ensures that only authorized access keys can read and write backup data.
      </p>

      <div className="bg-[#2a2a2a] border-l-4 border-blue-500 p-4 rounded mb-8">
        <p className="text-blue-400 font-semibold mb-1">Prerequisites</p>
        <p className="text-gray-300">
          Before you begin, make sure you have completed the <Link href="/aws/account-setup" className="text-green-500 hover:underline">AWS Account Setup</Link> and can sign in to the AWS Management Console.
        </p>
      </div>

      <div className="space-y-10">
        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">1</span>
            </div>
            Step 1: Navigate to S3 Service
          </h2>

          <p className="text-gray-300 mb-4">
            Sign in to the AWS Management Console and navigate to the S3 service:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
            <li>Go to <a href="https://console.aws.amazon.com" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">AWS Management Console</a></li>
            <li>Sign in with your root user email address and password</li>
            <li>In the search bar at the top, type <code className="bg-[#2a2a2a] px-2 py-1 rounded text-green-400">S3</code></li>
            <li>Click on <strong>"S3"</strong> from the search results</li>
          </ul>

          <p className="text-gray-300 mb-4">
            Alternatively, you can navigate to S3 directly by going to: <a href="https://s3.console.aws.amazon.com" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">https://s3.console.aws.amazon.com</a>
          </p>

          <div className="bg-[#2a2a2a] border-l-4 border-purple-500 p-4 rounded">
            <p className="text-purple-400 font-semibold mb-1">Note</p>
            <p className="text-gray-300">
              The S3 console will display a list of your existing buckets (if any). If this is your first time using S3, the list will be empty.
            </p>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">2</span>
            </div>
            Step 2: Create a New Bucket
          </h2>

          <p className="text-gray-300 mb-4">
            Click on the <strong>"Create bucket"</strong> button in the S3 console. This will open the bucket creation wizard.
          </p>

          <div className="bg-[#2a2a2a] border-l-4 border-blue-500 p-4 rounded mb-4">
            <p className="text-blue-400 font-semibold mb-1">Bucket Naming</p>
            <p className="text-gray-300">
              S3 bucket names must be globally unique across all AWS accounts. Choose a descriptive name that includes your organization or project name to avoid conflicts.
            </p>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">3</span>
            </div>
            Step 3: Configure General Settings
          </h2>

          <p className="text-gray-300 mb-4">
            In the <strong>"General configuration"</strong> section, configure the following settings:
          </p>

          <div className="space-y-4 mb-4">
            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">Bucket name</h3>
              <p className="text-gray-300 text-sm mb-2">
                Enter a unique bucket name. Examples:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
                <li><code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">mycompany-grid-backups</code></li>
                <li><code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">postgres-backups-prod</code></li>
                <li><code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">grid-database-backups-2024</code></li>
              </ul>
              <div className="mt-3 bg-[#2a2a2a] border-l-4 border-yellow-500 p-3 rounded">
                <p className="text-yellow-400 font-semibold mb-1 text-xs">Naming Rules</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
                  <li>Must be between 3 and 63 characters long</li>
                  <li>Can only contain lowercase letters, numbers, dots (.), and hyphens (-)</li>
                  <li>Must begin and end with a letter or number</li>
                  <li>Must not be formatted as an IP address</li>
                  <li>Must be globally unique</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">AWS Region</h3>
              <p className="text-gray-300 text-sm mb-2">
                Select the AWS region where you want to store your backups. Choose a region that:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
                <li>Is closest to your PostgreSQL deployment for lower latency</li>
                <li>Meets your compliance or data residency requirements</li>
                <li>Has the pricing that fits your budget</li>
              </ul>
              <p className="text-gray-300 text-sm mt-2">
                Common regions include: <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">us-east-1</code> (N. Virginia), <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">eu-west-1</code> (Ireland), <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">ap-southeast-1</code> (Singapore).
              </p>
            </div>
          </div>

          <div className="bg-[#2a2a2a] border-l-4 border-blue-500 p-4 rounded">
            <p className="text-blue-400 font-semibold mb-1">Region Selection</p>
            <p className="text-gray-300">
              The region you choose affects latency, pricing, and data residency. Once a bucket is created, you cannot change its region without creating a new bucket and migrating data.
            </p>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">4</span>
            </div>
            Step 4: Configure Object Ownership
          </h2>

          <p className="text-gray-300 mb-4">
            In the <strong>"Object Ownership"</strong> section, select:
          </p>

          <div className="bg-[#252525] border border-[#333] rounded-lg p-4 mb-4">
            <h3 className="text-lg font-medium mb-2 text-gray-200">ACLs disabled (recommended)</h3>
            <p className="text-gray-300 text-sm">
              Select <strong>"ACLs disabled (recommended)"</strong> to use bucket policies for access control. This is the recommended approach for new buckets and provides better security and management.
            </p>
          </div>

          <p className="text-gray-300 mb-4">
            Under <strong>"Object Ownership"</strong>, choose <strong>"Bucket owner enforced"</strong>. This ensures that all objects in the bucket are owned by the bucket owner, simplifying access management.
          </p>

          <div className="bg-[#2a2a2a] border-l-4 border-green-500 p-4 rounded">
            <p className="text-green-400 font-semibold mb-1">Best Practice</p>
            <p className="text-gray-300">
              Using ACLs disabled with bucket owner enforced is the recommended security practice. Access will be controlled through IAM policies, which we'll configure in the next step.
            </p>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">5</span>
            </div>
            Step 5: Configure Block Public Access Settings
          </h2>

          <p className="text-gray-300 mb-4">
            In the <strong>"Block Public Access settings for this bucket"</strong> section:
          </p>

          <div className="bg-[#252525] border border-[#333] rounded-lg p-4 mb-4">
            <h3 className="text-lg font-medium mb-2 text-gray-200">Block all public access</h3>
            <p className="text-gray-300 text-sm mb-3">
              Ensure that <strong>all four checkboxes are checked</strong>:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
              <li>✓ Block all public access</li>
              <li>✓ Block public access to buckets and objects granted through new access control lists (ACLs)</li>
              <li>✓ Block public access to buckets and objects granted through any access control lists (ACLs)</li>
              <li>✓ Block public access to buckets and objects granted through new public bucket or access point policies</li>
              <li>✓ Block public and cross-account access to buckets and objects through any public bucket or access point policies</li>
            </ul>
          </div>

          <p className="text-gray-300 mb-4">
            <strong>Do not uncheck these boxes</strong>. Your bucket should remain private to protect your PostgreSQL backups from unauthorized access. Only IAM users with proper credentials will be able to access the bucket.
          </p>

          <div className="bg-[#2a2a2a] border-l-4 border-red-500 p-4 rounded">
            <p className="text-red-400 font-semibold mb-1">Security Warning</p>
            <p className="text-gray-300">
              Leaving any of these unchecked could allow public access to your backup data. Always keep all public access blocked for backup buckets to ensure data security and compliance.
            </p>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">6</span>
            </div>
            Step 6: Configure Bucket Versioning (Optional)
          </h2>

          <p className="text-gray-300 mb-4">
            In the <strong>"Bucket Versioning"</strong> section, you can choose to enable versioning:
          </p>

          <div className="space-y-4 mb-4">
            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">Enable versioning (Recommended)</h3>
              <p className="text-gray-300 text-sm">
                Enabling versioning allows you to keep multiple versions of backup files. This is useful if you accidentally delete or overwrite a backup, as you can restore previous versions. However, this will increase storage costs as multiple versions are stored.
              </p>
            </div>

            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">Disable versioning</h3>
              <p className="text-gray-300 text-sm">
                If you prefer to save on storage costs and are confident in your backup strategy, you can leave versioning disabled. New backups will overwrite files with the same name.
              </p>
            </div>
          </div>

          <p className="text-gray-300 mb-4">
            For PostgreSQL backups, enabling versioning is recommended as it provides an additional layer of protection against accidental data loss. You can configure lifecycle policies later to automatically delete old versions after a certain period.
          </p>

          <div className="bg-[#2a2a2a] border-l-4 border-blue-500 p-4 rounded">
            <p className="text-blue-400 font-semibold mb-1">Cost Consideration</p>
            <p className="text-gray-300">
              Versioning increases storage costs because multiple versions of files are stored. Consider configuring S3 Lifecycle policies to automatically transition old versions to cheaper storage classes or delete them after a retention period.
            </p>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">7</span>
            </div>
            Step 7: Configure Default Encryption (Optional)
          </h2>

          <p className="text-gray-300 mb-4">
            In the <strong>"Default encryption"</strong> section, you can configure encryption for objects stored in your bucket:
          </p>

          <div className="space-y-4 mb-4">
            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">Enable encryption (Recommended)</h3>
              <p className="text-gray-300 text-sm mb-2">
                Select <strong>"Enable"</strong> and choose one of the following encryption options:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
                <li><strong>Amazon S3 managed keys (SSE-S3):</strong> AWS manages encryption keys automatically. This is the simplest option and is recommended for most use cases.</li>
                <li><strong>AWS Key Management Service (SSE-KMS):</strong> Use AWS KMS to manage encryption keys. Provides more control but may incur additional costs.</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-300 mb-4">
            For PostgreSQL backups, using <strong>Amazon S3 managed keys (SSE-S3)</strong> is recommended. It provides strong encryption at rest with no additional configuration or cost beyond storage.
          </p>

          <div className="bg-[#2a2a2a] border-l-4 border-green-500 p-4 rounded">
            <p className="text-green-400 font-semibold mb-1">Security Best Practice</p>
            <p className="text-gray-300">
              Enabling encryption ensures that your backup data is encrypted at rest in S3, providing an additional layer of security. Even if someone gains unauthorized access to the storage, they cannot read the encrypted data without the encryption keys.
            </p>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">8</span>
            </div>
            Step 8: Review and Create Bucket
          </h2>

          <p className="text-gray-300 mb-4">
            Review all your settings to ensure they are correct:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
            <li>Bucket name is unique and follows naming rules</li>
            <li>AWS region is selected</li>
            <li>Object Ownership is set to "Bucket owner enforced"</li>
            <li>All public access is blocked</li>
            <li>Versioning and encryption settings are configured as desired</li>
          </ul>

          <p className="text-gray-300 mb-4">
            Scroll to the bottom of the page and click <strong>"Create bucket"</strong>.
          </p>

          <div className="bg-[#2a2a2a] border-l-4 border-green-500 p-4 rounded mb-4">
            <p className="text-green-400 font-semibold mb-1">Success</p>
            <p className="text-gray-300">
              Once the bucket is created, you'll see a success message and the bucket will appear in your S3 bucket list. Make note of the bucket name and region, as you'll need these when configuring IAM access in the next step.
            </p>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Next Steps</h2>
          <p className="text-gray-300 mb-4">
            Now that you have created a private S3 bucket, the next step is to configure IAM access so that Grid can upload backups to your bucket:
          </p>
          <div className="space-y-3">
            <Link href="/aws/iam-access" className="block">
              <div className="bg-[#252525] border border-[#333] rounded-lg p-4 hover:border-green-500 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-200">Configure IAM Access</h3>
                    <p className="text-gray-400 text-sm mt-1">Learn how to create an IAM user with access keys and policies for your S3 bucket</p>
                  </div>
                  <span className="text-green-500">→</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
