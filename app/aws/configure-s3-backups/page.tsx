import Link from "next/link"

export default function ConfigureS3BackupsPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Configure S3 Backups in Grid</h1>

      <p className="text-gray-300 mb-8">
        This guide walks you through configuring PostgreSQL backups to S3 in Grid. After setting up your AWS account, S3 bucket, and IAM credentials, you'll enable S3 backups for your PostgreSQL deployment and configure the backup settings in Grid.
      </p>

      <div className="bg-[#2a2a2a] border-l-4 border-blue-500 p-4 rounded mb-8">
        <p className="text-blue-400 font-semibold mb-1">Prerequisites</p>
        <p className="text-gray-300">
          Before you begin, make sure you have completed the AWS setup:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm mt-2">
          <li><Link href="/aws/account-setup" className="text-green-500 hover:underline">AWS Account Setup</Link> - Active AWS account</li>
          <li><Link href="/aws/s3-bucket" className="text-green-500 hover:underline">Create S3 Bucket</Link> - Private S3 bucket created</li>
          <li><Link href="/aws/iam-access" className="text-green-500 hover:underline">Configure IAM Access</Link> - IAM user with access keys</li>
        </ul>
        <p className="text-gray-300 text-sm mt-2">
          You'll need your AWS Access Key ID, Secret Access Key, S3 bucket name, and AWS region.
        </p>
      </div>

      <div className="space-y-10">
        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">1</span>
            </div>
            Step 1: Enable S3 Backup When Deploying PostgreSQL
          </h2>

          <p className="text-gray-300 mb-4">
            The first step is to enable the S3 Backup option when creating your PostgreSQL deployment. This option must be enabled during deployment; you cannot enable it later on an existing deployment.
          </p>

          <div className="space-y-4 mb-4">
            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">Navigate to Deploy PostgreSQL</h3>
              <p className="text-gray-300 text-sm mb-2">
                In the Grid Console:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
                <li>Click on <strong>"New +"</strong> button in the sidebar</li>
                <li>Select <strong>"Deploy Postgres"</strong> or navigate to PostgreSQL deployment options</li>
              </ul>
            </div>

            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">Configure PostgreSQL Settings</h3>
              <p className="text-gray-300 text-sm mb-2">
                Configure your PostgreSQL deployment settings:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
                <li>Select your PostgreSQL version (e.g., PostgreSQL 17, 16, 15, or 14)</li>
                <li>Choose your resource tier (Free Tier, Starter, Standard, Pro, or Production)</li>
                <li>Configure any additional settings as needed</li>
              </ul>
            </div>

            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">Enable S3 Backup</h3>
              <p className="text-gray-300 text-sm mb-2">
                In the <strong>"S3 Backup"</strong> section:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
                <li>Find the toggle switch labeled <strong>"Enabled"</strong></li>
                <li>Turn on the toggle to enable S3 backup functionality</li>
                <li>A description will appear: <em>"A Node.js application that automatically backs up your PostgreSQL database to S3 via a cron job."</em></li>
              </ul>
              <p className="text-gray-300 text-sm mt-3">
                <strong>Important:</strong> If you don't enable this option now, you won't be able to configure S3 backups later. You would need to create a new PostgreSQL deployment with S3 Backup enabled.
              </p>
            </div>

            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">Create Deployment</h3>
              <p className="text-gray-300 text-sm">
                Click the <strong>"Create"</strong> button to deploy your PostgreSQL database with S3 Backup enabled. The deployment process will take a few minutes to complete.
              </p>
            </div>
          </div>

          <div className="bg-[#2a2a2a] border-l-4 border-red-500 p-4 rounded">
            <p className="text-red-400 font-semibold mb-1">⚠️ Critical Requirement</p>
            <p className="text-gray-300">
              You <strong>must</strong> enable S3 Backup during PostgreSQL deployment. This feature cannot be enabled on existing deployments. If you've already deployed PostgreSQL without S3 Backup, you'll need to create a new deployment with S3 Backup enabled.
            </p>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">2</span>
            </div>
            Step 2: Navigate to Project Variables
          </h2>

          <p className="text-gray-300 mb-4">
            After your PostgreSQL deployment is created, you need to configure the AWS credentials and backup settings in the project variables:
          </p>

          <div className="space-y-4 mb-4">
            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">Access Your Deployment</h3>
              <p className="text-gray-300 text-sm mb-2">
                Once your PostgreSQL deployment is active, you'll be automatically redirected to the project detail page (Activity view). If you're not on this page:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
                <li>Click on <strong>"Projects"</strong> in the left sidebar</li>
                <li>Select your PostgreSQL deployment from the list</li>
              </ul>
            </div>

            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">Navigate to Variables Tab</h3>
              <p className="text-gray-300 text-sm mb-2">
                In the project detail page, you'll see several tabs at the top:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
                <li><strong>Information</strong> - Shows deployment details, connection info, and status</li>
                <li><strong>Logs</strong> - View application and backup logs</li>
                <li><strong>Shell</strong> - Access the container shell</li>
                <li><strong>Variables</strong> - Configure environment variables and backup settings</li>
              </ul>
              <p className="text-gray-300 text-sm mt-2">
                Click on the <strong>"Variables"</strong> tab to access the configuration page.
              </p>
            </div>
          </div>

          <div className="bg-[#2a2a2a] border-l-4 border-blue-500 p-4 rounded">
            <p className="text-blue-400 font-semibold mb-1">Note</p>
            <p className="text-gray-300">
              The Variables tab (also referred to as "S3 Backups Options" in future versions) is where you'll configure all S3 backup-related settings for your PostgreSQL deployment.
            </p>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">3</span>
            </div>
            Step 3: Configure AWS Credentials
          </h2>

          <p className="text-gray-300 mb-4">
            In the Variables page, you'll see a section called <strong>"S3 Backup Environment Variables"</strong>. This is where you'll enter your AWS credentials and S3 configuration.
          </p>

          <div className="space-y-4 mb-4">
            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">AWS Configuration Section</h3>
              <p className="text-gray-300 text-sm mb-3">
                Under the <strong>"S3 Backup Environment Variables"</strong> section, find the <strong>"AWS Configuration"</strong> subsection. You'll need to fill in four fields:
              </p>

              <div className="space-y-3 mt-4">
                <div className="bg-[#2a2a2a] border border-[#333] rounded p-3">
                  <h4 className="text-base font-medium mb-1 text-gray-200">AWS Access Key ID</h4>
                  <p className="text-gray-300 text-sm mb-2">
                    Enter the Access Key ID you created in the <Link href="/aws/iam-access" className="text-green-500 hover:underline">Configure IAM Access</Link> step.
                  </p>
                  <p className="text-gray-400 text-xs">
                    Placeholder: "Enter AWS Key ID."
                  </p>
                  <div className="bg-[#121212] border border-[#333] rounded p-2 mt-2">
                    <code className="text-green-400 text-xs">AKIAIOSFODNN7EXAMPLE</code>
                  </div>
                </div>

                <div className="bg-[#2a2a2a] border border-[#333] rounded p-3">
                  <h4 className="text-base font-medium mb-1 text-gray-200">AWS Secret Access Key</h4>
                  <p className="text-gray-300 text-sm mb-2">
                    Enter the Secret Access Key you saved when creating the IAM access key. This is the sensitive credential that should be kept secure.
                  </p>
                  <p className="text-gray-400 text-xs">
                    Placeholder: "Enter AWS secret key."
                  </p>
                  <div className="bg-[#121212] border border-[#333] rounded p-2 mt-2">
                    <code className="text-green-400 text-xs">wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY</code>
                  </div>
                </div>

                <div className="bg-[#2a2a2a] border border-[#333] rounded p-3">
                  <h4 className="text-base font-medium mb-1 text-gray-200">S3 Bucket</h4>
                  <p className="text-gray-300 text-sm mb-2">
                    Enter the name of your S3 bucket created in the <Link href="/aws/s3-bucket" className="text-green-500 hover:underline">Create S3 Bucket</Link> step.
                  </p>
                  <p className="text-gray-300 text-sm">
                    Example: <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">grid-postgresql-test</code> or <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">mycompany-grid-backups</code>
                  </p>
                </div>

                <div className="bg-[#2a2a2a] border border-[#333] rounded p-3">
                  <h4 className="text-base font-medium mb-1 text-gray-200">S3 Region</h4>
                  <p className="text-gray-300 text-sm mb-2">
                    Enter the AWS region where your S3 bucket is located. This should match the region you selected when creating the bucket.
                  </p>
                  <p className="text-gray-300 text-sm mb-2">
                    Common regions:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-300 text-xs">
                    <li><code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">us-east-1</code> - US East (N. Virginia)</li>
                    <li><code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">us-east-2</code> - US East (Ohio)</li>
                    <li><code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">eu-west-1</code> - Europe (Ireland)</li>
                    <li><code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">ap-southeast-1</code> - Asia Pacific (Singapore)</li>
                  </ul>
                  <p className="text-gray-300 text-sm mt-2">
                    Example: <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">us-east-2</code>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#2a2a2a] border-l-4 border-yellow-500 p-4 rounded">
            <p className="text-yellow-400 font-semibold mb-1">Security Note</p>
            <p className="text-gray-300">
              The AWS credentials you enter here are stored securely as environment variables in your Grid deployment. They are used only by the S3 backup service to authenticate with AWS and upload backup files to your bucket.
            </p>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">4</span>
            </div>
            Step 4: Review Database Configuration (Automatic)
          </h2>

          <p className="text-gray-300 mb-4">
            Below the AWS Configuration section, you'll see a section called <strong>"Database Configuration"</strong>:
          </p>

          <div className="bg-[#252525] border border-[#333] rounded-lg p-4 mb-4">
            <p className="text-gray-300 text-sm mb-2">
              <strong>Description:</strong> <em>"These values are automatically set from your PostgreSQL deployment and cannot be modified."</em>
            </p>
            <p className="text-gray-300 text-sm mb-3">
              This section displays the connection details for your PostgreSQL database:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
              <li><strong>DB Host:</strong> Your PostgreSQL host address (e.g., <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">provider.akash-palmito.org</code>)</li>
              <li><strong>DB Port:</strong> The external port mapped by the provider (e.g., <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">31553</code>)</li>
              <li><strong>DB User:</strong> The database username (typically <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">admin</code>)</li>
              <li><strong>DB Password:</strong> The database password (masked for security)</li>
              <li><strong>DB Name:</strong> The database name (e.g., <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">mydb</code>)</li>
            </ul>
          </div>

          <p className="text-gray-300 mb-4">
            These values are automatically populated from your PostgreSQL deployment. The S3 backup service uses these credentials to connect to your database and create backups. You don't need to modify these fields.
          </p>

          <div className="bg-[#2a2a2a] border-l-4 border-blue-500 p-4 rounded">
            <p className="text-blue-400 font-semibold mb-1">Automatic Configuration</p>
            <p className="text-gray-300">
              Grid automatically configures these database connection details when your PostgreSQL deployment is created. The backup service uses these credentials to access your database securely.
            </p>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">5</span>
            </div>
            Step 5: Configure Backup Settings
          </h2>

          <p className="text-gray-300 mb-4">
            The <strong>"Backup Configuration"</strong> section allows you to customize when and how backups are created:
          </p>

          <div className="space-y-4 mb-4">
            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">Cron Schedule</h3>
              <p className="text-gray-300 text-sm mb-2">
                Specify when backups should run using cron syntax:
              </p>
              <div className="bg-[#2a2a2a] border border-[#333] rounded p-3 mb-2">
                <p className="text-gray-300 text-sm mb-1">
                  Format: <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">minute hour day month weekday</code>
                </p>
                <p className="text-gray-400 text-xs mb-2">
                  Example: <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">0 5 * * *</code>
                </p>
                <p className="text-gray-300 text-xs">
                  This example runs backups every day at 5:00 AM (UTC).
                </p>
              </div>
              <p className="text-gray-300 text-sm mb-2">
                Common cron schedules:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-xs">
                <li><code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">0 5 * * *</code> - Daily at 5:00 AM</li>
                <li><code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">0 */6 * * *</code> - Every 6 hours</li>
                <li><code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">0 0 * * 0</code> - Weekly on Sunday at midnight</li>
                <li><code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">0 2 1 * *</code> - Monthly on the 1st at 2:00 AM</li>
              </ul>
            </div>

            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">Run on Startup</h3>
              <p className="text-gray-300 text-sm mb-2">
                A dropdown menu that controls whether a backup runs immediately when the backup service starts:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
                <li><strong>True:</strong> A backup will run immediately when the service starts or restarts</li>
                <li><strong>False:</strong> (Default) Backups will only run according to the cron schedule</li>
              </ul>
              <p className="text-gray-300 text-sm mt-2">
                Setting this to <strong>True</strong> is useful for ensuring you have an immediate backup after deployment or service restart.
              </p>
            </div>

            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">Backup File Prefix</h3>
              <p className="text-gray-300 text-sm mb-2">
                Specify a prefix that will be added to all backup file names stored in S3:
              </p>
              <div className="bg-[#2a2a2a] border border-[#333] rounded p-3 mb-2">
                <p className="text-gray-400 text-xs mb-1">
                  Example: <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">backup</code>
                </p>
                <p className="text-gray-300 text-xs">
                  Backup files will be named: <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">backup-2024-01-15-05-00-00.sql.gz</code>
                </p>
              </div>
              <p className="text-gray-300 text-sm">
                Using a prefix helps organize backups in your S3 bucket, especially if you have multiple databases backing up to the same bucket.
              </p>
            </div>
          </div>

          <div className="bg-[#2a2a2a] border-l-4 border-blue-500 p-4 rounded">
            <p className="text-blue-400 font-semibold mb-1">Cron Schedule Tips</p>
            <p className="text-gray-300 text-sm">
              When setting your cron schedule, consider:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm mt-2">
              <li>Database usage patterns (schedule backups during low-traffic periods)</li>
              <li>Recovery point objectives (how often you need backups)</li>
              <li>S3 storage costs (more frequent backups = more storage)</li>
              <li>Time zone (cron uses UTC by default)</li>
            </ul>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">6</span>
            </div>
            Step 6: Save Configuration
          </h2>

          <p className="text-gray-300 mb-4">
            After filling in all the required fields, review your configuration:
          </p>

          <div className="space-y-4 mb-4">
            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">Verify Your Settings</h3>
              <p className="text-gray-300 text-sm mb-2">
                Before saving, double-check:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
                <li>AWS Access Key ID is correct</li>
                <li>AWS Secret Access Key is entered correctly (no typos)</li>
                <li>S3 Bucket name matches your bucket exactly</li>
                <li>S3 Region matches the region where your bucket was created</li>
                <li>Cron schedule is set correctly</li>
                <li>Backup file prefix is set as desired</li>
              </ul>
            </div>

            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">Update Variables</h3>
              <p className="text-gray-300 text-sm">
                Click the <strong>"Update Variables"</strong> button (usually located at the bottom right of the page) to save your configuration. Grid will apply these settings to your deployment.
              </p>
            </div>
          </div>

          <div className="bg-[#2a2a2a] border-l-4 border-green-500 p-4 rounded">
            <p className="text-green-400 font-semibold mb-1">Configuration Applied</p>
            <p className="text-gray-300">
              Once you click "Update Variables", Grid will update the environment variables for your S3 backup service. The backup service will restart with the new configuration and begin backing up your database according to the cron schedule you specified.
            </p>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">7</span>
            </div>
            Step 7: Verify Backups Are Running
          </h2>

          <p className="text-gray-300 mb-4">
            After configuring your backup settings, verify that backups are working correctly:
          </p>

          <div className="space-y-4 mb-4">
            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">Check Backup Logs</h3>
              <p className="text-gray-300 text-sm mb-2">
                In the Grid Console, navigate to the <strong>"Logs"</strong> tab of your PostgreSQL deployment to view backup logs:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
                <li>Look for log entries indicating successful backup creation</li>
                <li>Check for any error messages related to AWS authentication or S3 upload</li>
                <li>Verify that backups are running according to your cron schedule</li>
              </ul>
            </div>

            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">Verify in S3 Bucket</h3>
              <p className="text-gray-300 text-sm mb-2">
                Log in to the AWS S3 Console and navigate to your bucket to verify backup files are being created:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
                <li>Go to <a href="https://s3.console.aws.amazon.com" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">S3 Console</a></li>
                <li>Click on your bucket name</li>
                <li>You should see backup files with names like: <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">backup-2024-01-15-05-00-00.sql.gz</code></li>
                <li>Check the file timestamps to ensure backups are running on schedule</li>
              </ul>
            </div>

            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">Test Manual Backup (Optional)</h3>
              <p className="text-gray-300 text-sm mb-2">
                If you set "Run on Startup" to True, you can trigger a manual backup by:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
                <li>Restarting the backup service component, or</li>
                <li>Waiting for the next scheduled backup according to your cron schedule</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#2a2a2a] border-l-4 border-green-500 p-4 rounded">
            <p className="text-green-400 font-semibold mb-1">Backup Success Indicators</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
              <li>Backup logs show successful completion messages</li>
              <li>Backup files appear in your S3 bucket with correct naming format</li>
              <li>File sizes are reasonable (not zero bytes)</li>
              <li>Backups run according to your cron schedule</li>
              <li>No error messages in the logs</li>
            </ul>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Troubleshooting</h2>
          <div className="space-y-4">
            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-200">Backups Not Running</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
                <li>Verify that S3 Backup was enabled when deploying PostgreSQL</li>
                <li>Check that all AWS credentials are correct (Access Key ID and Secret Access Key)</li>
                <li>Verify the S3 bucket name and region match your AWS configuration</li>
                <li>Check the backup service logs for error messages</li>
              </ul>
            </div>

            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-200">AWS Authentication Errors</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
                <li>Verify your IAM user has the correct S3 permissions (see <Link href="/aws/iam-access" className="text-green-500 hover:underline">Configure IAM Access</Link>)</li>
                <li>Check that the Access Key ID and Secret Access Key are entered correctly</li>
                <li>Verify the IAM user hasn't been deleted or disabled in AWS</li>
                <li>Ensure the IAM policy is attached to the correct user</li>
              </ul>
            </div>

            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-200">Files Not Appearing in S3</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
                <li>Check that the S3 bucket name is correct (case-sensitive)</li>
                <li>Verify the region matches where the bucket was created</li>
                <li>Check S3 bucket permissions and policies</li>
                <li>Look for error messages in the backup logs</li>
                <li>Verify the IAM user has PutObject permission for the bucket</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>
          <p className="text-gray-300 mb-4">
            You've successfully configured PostgreSQL backups to S3 in Grid! Here's what you've accomplished:
          </p>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <p className="text-gray-300 text-sm">Enabled S3 Backup when deploying PostgreSQL</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <p className="text-gray-300 text-sm">Configured AWS credentials (Access Key ID, Secret Access Key, Bucket, Region)</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <p className="text-gray-300 text-sm">Set backup schedule using cron syntax</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <p className="text-gray-300 text-sm">Configured backup file prefix and startup options</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <p className="text-gray-300 text-sm">Verified backups are running and files are appearing in S3</p>
            </div>
          </div>
          <div className="bg-[#2a2a2a] border-l-4 border-green-500 p-4 rounded mt-4">
            <p className="text-green-400 font-semibold mb-1">Next Steps</p>
            <p className="text-gray-300 text-sm">
              Your PostgreSQL database is now automatically backing up to S3 according to your schedule. Monitor the logs periodically to ensure backups continue to run successfully. Consider setting up S3 Lifecycle policies in AWS to manage backup retention and storage costs.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
