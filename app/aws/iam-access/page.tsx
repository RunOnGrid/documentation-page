import Link from "next/link"

export default function ConfigureIAMAccessPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Configure IAM Access</h1>

      <p className="text-gray-300 mb-8">
        This guide walks you through creating an IAM user with access keys and policies that allow Grid to upload PostgreSQL backups to your S3 bucket. IAM (Identity and Access Management) provides secure access to AWS services without using your root account credentials.
      </p>

      <div className="bg-[#2a2a2a] border-l-4 border-blue-500 p-4 rounded mb-8">
        <p className="text-blue-400 font-semibold mb-1">Prerequisites</p>
        <p className="text-gray-300">
          Before you begin, make sure you have completed the <Link href="/aws/account-setup" className="text-green-500 hover:underline">AWS Account Setup</Link> and <Link href="/aws/s3-bucket" className="text-green-500 hover:underline">Create S3 Bucket</Link> steps. You'll need your bucket name and region for this configuration.
        </p>
      </div>

      <div className="bg-[#2a2a2a] border-l-4 border-red-500 p-4 rounded mb-8">
        <p className="text-red-400 font-semibold mb-1">Security Best Practice</p>
        <p className="text-gray-300">
          Never use your root AWS account credentials for applications or services. Always create IAM users with limited permissions that only have access to the resources they need. This follows the principle of least privilege and reduces security risks.
        </p>
      </div>

      <div className="space-y-10">
        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">1</span>
            </div>
            Step 1: Navigate to IAM Service
          </h2>

          <p className="text-gray-300 mb-4">
            Sign in to the AWS Management Console and navigate to the IAM service:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
            <li>Go to <a href="https://console.aws.amazon.com" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">AWS Management Console</a></li>
            <li>Sign in with your root user email address and password</li>
            <li>In the search bar at the top, type <code className="bg-[#2a2a2a] px-2 py-1 rounded text-green-400">IAM</code></li>
            <li>Click on <strong>"IAM"</strong> from the search results</li>
          </ul>

          <p className="text-gray-300 mb-4">
            Alternatively, you can navigate to IAM directly by going to: <a href="https://console.aws.amazon.com/iam" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">https://console.aws.amazon.com/iam</a>
          </p>

          <div className="bg-[#2a2a2a] border-l-4 border-purple-500 p-4 rounded">
            <p className="text-purple-400 font-semibold mb-1">IAM Dashboard</p>
            <p className="text-gray-300">
              The IAM console will show your account's security status, users, groups, roles, and policies. You'll see a dashboard with security recommendations and access summaries.
            </p>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">2</span>
            </div>
            Step 2: Create a New IAM User
          </h2>

          <p className="text-gray-300 mb-4">
            In the IAM console, create a new user for Grid backups:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
            <li>In the left navigation pane, click <strong>"Users"</strong></li>
            <li>Click the <strong>"Create user"</strong> button at the top of the page</li>
            <li>This will open the user creation wizard</li>
          </ul>

          <div className="bg-[#2a2a2a] border-l-4 border-blue-500 p-4 rounded">
            <p className="text-blue-400 font-semibold mb-1">User Naming</p>
            <p className="text-gray-300">
              Choose a descriptive name for your IAM user, such as <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">grid-backup-user</code> or <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">postgres-backup-service</code>. This helps you identify the purpose of the user account.
            </p>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">3</span>
            </div>
            Step 3: Set User Details
          </h2>

          <p className="text-gray-300 mb-4">
            In the <strong>"User details"</strong> section:
          </p>

          <div className="space-y-4 mb-4">
            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">User name</h3>
              <p className="text-gray-300 text-sm">
                Enter a descriptive name for your IAM user. Example names:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm mt-2">
                <li><code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">grid-backup-user</code></li>
                <li><code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">postgres-s3-backup</code></li>
                <li><code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">grid-database-backups</code></li>
              </ul>
            </div>

            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">Provide user access to the AWS Management Console (Optional)</h3>
              <p className="text-gray-300 text-sm">
                For programmatic access from Grid, you <strong>do not need</strong> to enable console access. Leave this unchecked. The IAM user will only need access keys for programmatic API access.
              </p>
            </div>
          </div>

          <p className="text-gray-300 mb-4">
            Click <strong>"Next"</strong> to proceed to the permissions configuration step.
          </p>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">4</span>
            </div>
            Step 4: Set Permissions - Create a Custom Policy
          </h2>

          <p className="text-gray-300 mb-4">
            In the <strong>"Set permissions"</strong> section, you'll attach a policy that grants access to your S3 bucket. Select <strong>"Attach policies directly"</strong>:
          </p>

          <div className="bg-[#2a2a2a] border-l-4 border-blue-500 p-4 rounded mb-4">
            <p className="text-blue-400 font-semibold mb-1">Why Create a Custom Policy?</p>
            <p className="text-gray-300">
              AWS provides managed policies like <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">AmazonS3FullAccess</code>, but this grants access to all S3 buckets in your account. For security, we'll create a custom policy that only grants access to your specific backup bucket.
            </p>
          </div>

          <p className="text-gray-300 mb-4">
            Before attaching a policy, we need to create one. Click <strong>"Create policy"</strong> to open the policy editor in a new tab or window.
          </p>

          <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-4 mb-4">
            <p className="text-gray-300 mb-2 text-sm">
              <strong>Note:</strong> You can also click on <strong>"Policies"</strong> in the left navigation pane, then click <strong>"Create policy"</strong>.
            </p>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">5</span>
            </div>
            Step 5: Create S3 Bucket Policy
          </h2>

          <p className="text-gray-300 mb-4">
            In the policy editor, you'll create a custom policy that grants access to your specific S3 bucket. Follow these steps:
          </p>

          <div className="space-y-4 mb-4">
            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">1. Select JSON Tab</h3>
              <p className="text-gray-300 text-sm">
                In the policy editor, select the <strong>"JSON"</strong> tab. This allows you to define the policy using JSON syntax.
              </p>
            </div>

            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">2. Enter Policy JSON</h3>
              <p className="text-gray-300 text-sm mb-3">
                Replace the default policy with the following JSON. Make sure to replace <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">YOUR-BUCKET-NAME</code> with your actual bucket name:
              </p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mb-3">
                <code className="text-green-400 text-xs block whitespace-pre-wrap">{`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:ListBucket",
        "s3:DeleteObject"
      ],
      "Resource": [
        "arn:aws:s3:::YOUR-BUCKET-NAME",
        "arn:aws:s3:::YOUR-BUCKET-NAME/*"
      ]
    }
  ]
}`}</code>
              </div>
              <p className="text-gray-300 text-sm">
                <strong>Replace:</strong> <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">YOUR-BUCKET-NAME</code> with your actual bucket name (e.g., <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">mycompany-grid-backups</code>)
              </p>
            </div>

            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">3. Policy Actions Explained</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
                <li><code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">s3:PutObject</code> - Allows uploading backup files to the bucket</li>
                <li><code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">s3:GetObject</code> - Allows reading/downloading backup files from the bucket</li>
                <li><code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">s3:ListBucket</code> - Allows listing objects in the bucket</li>
                <li><code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">s3:DeleteObject</code> - Allows deleting backup files from the bucket</li>
              </ul>
            </div>

            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">4. Review and Validate</h3>
              <p className="text-gray-300 text-sm mb-2">
                After entering the JSON:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
                <li>Click <strong>"Next"</strong> to proceed</li>
                <li>On the next page, review the policy syntax</li>
                <li>If there are any errors, AWS will highlight them. Fix any issues before continuing</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#2a2a2a] border-l-4 border-yellow-500 p-4 rounded mb-4">
            <p className="text-yellow-400 font-semibold mb-1">Important</p>
            <p className="text-gray-300">
              Make sure you've replaced <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">YOUR-BUCKET-NAME</code> with your actual bucket name in both places (the bucket ARN and the bucket/* ARN). The bucket/* ARN grants access to objects within the bucket.
            </p>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">6</span>
            </div>
            Step 6: Name and Create the Policy
          </h2>

          <p className="text-gray-300 mb-4">
            In the policy details page:
          </p>

          <div className="space-y-4 mb-4">
            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">Policy name</h3>
              <p className="text-gray-300 text-sm">
                Enter a descriptive name for your policy. Examples:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm mt-2">
                <li><code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">GridBackupS3Access</code></li>
                <li><code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">PostgreSQLBackupBucketPolicy</code></li>
                <li><code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">S3BackupAccessPolicy</code></li>
              </ul>
            </div>

            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">Description (Optional)</h3>
              <p className="text-gray-300 text-sm">
                Optionally, provide a description like: <em>"Grants access to S3 bucket for PostgreSQL backup storage from Grid"</em>
              </p>
            </div>
          </div>

          <p className="text-gray-300 mb-4">
            Click <strong>"Create policy"</strong> to create the policy. Once created, you'll see a success message. Note the policy name, as you'll need to attach it to your IAM user in the next step.
          </p>

          <div className="bg-[#2a2a2a] border-l-4 border-green-500 p-4 rounded">
            <p className="text-green-400 font-semibold mb-1">Policy Created</p>
            <p className="text-gray-300">
              The policy is now created and available in your account. You can attach it to one or more IAM users, groups, or roles as needed.
            </p>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">7</span>
            </div>
            Step 7: Attach Policy to IAM User
          </h2>

          <p className="text-gray-300 mb-4">
            Return to the IAM user creation wizard (or open the Users page in IAM). Follow these steps:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
            <li>In the <strong>"Set permissions"</strong> step of the user creation wizard, select <strong>"Attach policies directly"</strong></li>
            <li>In the search box, type the name of the policy you just created (e.g., <code className="bg-[#2a2a2a] px-2 py-1 rounded text-green-400">GridBackupS3Access</code>)</li>
            <li>Check the box next to your custom policy</li>
            <li>Click <strong>"Next"</strong> to proceed to the review step</li>
          </ul>

          <p className="text-gray-300 mb-4">
            If you've already created the user, you can attach the policy later:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
            <li>Go to <strong>"Users"</strong> in the IAM console</li>
            <li>Click on your IAM user name</li>
            <li>Click the <strong>"Add permissions"</strong> dropdown and select <strong>"Attach policies directly"</strong></li>
            <li>Search for and select your custom policy</li>
            <li>Click <strong>"Next"</strong> and then <strong>"Add permissions"</strong></li>
          </ul>

          <div className="bg-[#2a2a2a] border-l-4 border-blue-500 p-4 rounded">
            <p className="text-blue-400 font-semibold mb-1">Policy Attachment</p>
            <p className="text-gray-300">
              You can attach multiple policies to a single IAM user. For this use case, the custom S3 bucket policy is sufficient. You don't need any additional policies.
            </p>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">8</span>
            </div>
            Step 8: Review and Create User
          </h2>

          <p className="text-gray-300 mb-4">
            In the <strong>"Review and create"</strong> step:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
            <li>Review the user name</li>
            <li>Verify that the correct policy is attached</li>
            <li>Check that all settings are correct</li>
            <li>Click <strong>"Create user"</strong></li>
          </ul>

          <p className="text-gray-300 mb-4">
            Once the user is created, you'll see a success message. The user will appear in your Users list in the IAM console.
          </p>

          <div className="bg-[#2a2a2a] border-l-4 border-green-500 p-4 rounded">
            <p className="text-green-400 font-semibold mb-1">User Created</p>
            <p className="text-gray-300">
              Your IAM user is now created with the necessary permissions to access your S3 bucket. The next step is to create access keys that Grid will use to authenticate.
            </p>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">9</span>
            </div>
            Step 9: Create Access Keys
          </h2>

          <p className="text-gray-300 mb-4">
            To allow Grid to programmatically access your S3 bucket, you need to create access keys for your IAM user:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
            <li>In the IAM console, navigate to <strong>"Users"</strong></li>
            <li>Click on your IAM user name (e.g., <code className="bg-[#2a2a2a] px-2 py-1 rounded text-green-400">grid-backup-user</code>)</li>
            <li>Click on the <strong>"Security credentials"</strong> tab</li>
            <li>Scroll down to the <strong>"Access keys"</strong> section</li>
            <li>Click <strong>"Create access key"</strong></li>
          </ul>

          <div className="space-y-4 mb-4">
            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">Use case</h3>
              <p className="text-gray-300 text-sm">
                Select <strong>"Application running outside AWS"</strong> or <strong>"Command Line Interface (CLI)"</strong> from the use case dropdown. This is appropriate for Grid's backup service running outside of AWS.
              </p>
            </div>

            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">Access key best practices</h3>
              <p className="text-gray-300 text-sm mb-2">
                AWS will show recommendations for access key best practices. Review these recommendations:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
                <li>Read the security warning about storing access keys securely</li>
                <li>Consider adding a description tag for the access key</li>
                <li>Check the confirmation box if required</li>
              </ul>
            </div>

            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">Create access key</h3>
              <p className="text-gray-300 text-sm">
                Click <strong>"Next"</strong>, review the use case details, then click <strong>"Create access key"</strong>.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">10</span>
            </div>
            Step 10: Save Access Keys Securely
          </h2>

          <p className="text-gray-300 mb-4">
            After creating the access key, AWS will display your access key ID and secret access key. This is the <strong>only time</strong> AWS will show the secret access key, so save it immediately:
          </p>

          <div className="bg-[#2a2a2a] border-l-4 border-red-500 p-4 rounded mb-4">
            <p className="text-red-400 font-semibold mb-1">⚠️ Critical Security Warning</p>
            <p className="text-gray-300 mb-2">
              <strong>Save these credentials immediately!</strong> AWS will not display the secret access key again. If you lose it, you'll need to create a new access key.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm mt-2">
              <li><strong>Access Key ID:</strong> This will be visible in the IAM console later</li>
              <li><strong>Secret Access Key:</strong> This is shown only once and must be saved securely</li>
            </ul>
          </div>

          <div className="space-y-4 mb-4">
            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">How to Save Access Keys</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
                <li>Click the <strong>"Download .csv file"</strong> button to download the keys to a CSV file</li>
                <li>Store the CSV file in a secure location (e.g., encrypted password manager)</li>
                <li>Alternatively, copy both keys manually and store them securely</li>
                <li>Never share these keys publicly or commit them to version control</li>
              </ul>
            </div>

            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">Access Key Format</h3>
              <p className="text-gray-300 text-sm mb-2">
                Your access keys will look like this:
              </p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-3 mb-2">
                <code className="text-green-400 text-xs block">
                  Access Key ID: AKIAIOSFODNN7EXAMPLE<br/>
                  Secret Access Key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
                </code>
              </div>
              <p className="text-gray-300 text-sm">
                Both are long alphanumeric strings. The Access Key ID is visible, but the Secret Access Key must be kept confidential.
              </p>
            </div>
          </div>

          <p className="text-gray-300 mb-4">
            After saving your keys, click <strong>"Done"</strong> to close the access key creation dialog.
          </p>

          <div className="bg-[#2a2a2a] border-l-4 border-green-500 p-4 rounded">
            <p className="text-green-400 font-semibold mb-1">Next Steps</p>
            <p className="text-gray-300">
              You now have all the credentials needed to configure PostgreSQL backups in Grid. You'll use the Access Key ID, Secret Access Key, bucket name, and region when setting up backups in your Grid deployment.
            </p>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Summary: What You've Configured</h2>
          <p className="text-gray-300 mb-4">
            You've successfully configured AWS for PostgreSQL backups on Grid. Here's what you've created:
          </p>

          <div className="space-y-4 mb-4">
            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-200">1. AWS Account ✓</h3>
              <p className="text-gray-300 text-sm">
                An active AWS account with access to S3 and IAM services.
              </p>
            </div>

            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-200">2. S3 Bucket ✓</h3>
              <p className="text-gray-300 text-sm">
                A private S3 bucket configured with:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm mt-2">
                <li>Unique bucket name</li>
                <li>Selected AWS region</li>
                <li>All public access blocked</li>
                <li>Encryption enabled (optional)</li>
              </ul>
            </div>

            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-200">3. IAM User ✓</h3>
              <p className="text-gray-300 text-sm">
                An IAM user with programmatic access configured for:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm mt-2">
                <li>Uploading backups (PutObject)</li>
                <li>Downloading backups (GetObject)</li>
                <li>Listing backup files (ListBucket)</li>
                <li>Deleting backup files (DeleteObject)</li>
              </ul>
            </div>

            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-200">4. Access Keys ✓</h3>
              <p className="text-gray-300 text-sm">
                Access Key ID and Secret Access Key securely stored for Grid authentication.
              </p>
            </div>
          </div>

          <div className="bg-[#2a2a2a] border-l-4 border-green-500 p-4 rounded">
            <p className="text-green-400 font-semibold mb-1">Ready to Configure Backups</p>
            <p className="text-gray-300">
              You now have everything you need to configure PostgreSQL backups in Grid. When setting up backups, you'll need to provide:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm mt-2">
              <li>AWS Access Key ID</li>
              <li>AWS Secret Access Key</li>
              <li>S3 Bucket Name</li>
              <li>AWS Region</li>
            </ul>
            <p className="text-gray-300 text-sm mt-2">
              These credentials will allow Grid to securely upload your PostgreSQL backups to your private S3 bucket.
            </p>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Additional Security Recommendations</h2>
          <div className="space-y-4">
            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-200">Rotate Access Keys Regularly</h3>
              <p className="text-gray-300 text-sm">
                Periodically rotate your access keys (e.g., every 90 days) by creating new keys and updating Grid with the new credentials. Delete old keys after verifying the new ones work.
              </p>
            </div>

            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-200">Monitor S3 Access</h3>
              <p className="text-gray-300 text-sm">
                Enable AWS CloudTrail and S3 access logging to monitor who accesses your bucket and when. This helps detect unauthorized access and audit backup operations.
              </p>
            </div>

            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-200">Set Up S3 Lifecycle Policies</h3>
              <p className="text-gray-300 text-sm">
                Configure S3 Lifecycle policies to automatically transition old backups to cheaper storage classes (e.g., Glacier) or delete them after a retention period to manage costs.
              </p>
            </div>

            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-200">Enable MFA for Root Account</h3>
              <p className="text-gray-300 text-sm">
                Enable multi-factor authentication (MFA) for your AWS root account to add an extra layer of security. The root account has complete access to your AWS resources.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
