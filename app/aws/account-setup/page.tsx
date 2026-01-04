import Link from "next/link"

export default function AWSAccountSetupPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">AWS Account Setup</h1>

      <p className="text-gray-300 mb-8">
        To store PostgreSQL backups in an S3 bucket, you need an AWS account. This guide walks you through creating and configuring your AWS account to get started with S3 backup storage on Grid.
      </p>

      <div className="bg-[#2a2a2a] border-l-4 border-blue-500 p-4 rounded mb-8">
        <p className="text-blue-400 font-semibold mb-1">Prerequisites</p>
        <p className="text-gray-300">
          Before you begin, make sure you have a valid email address and a credit card or payment method ready. AWS offers a Free Tier that includes 5 GB of S3 storage for the first 12 months.
        </p>
      </div>

      <div className="space-y-10">
        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">1</span>
            </div>
            Step 1: Visit AWS Website
          </h2>

          <p className="text-gray-300 mb-4">
            Navigate to the AWS website to begin the account creation process:
          </p>

          <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-4 mb-4">
            <p className="text-gray-300 mb-2">
              Go to: <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">https://aws.amazon.com</a>
            </p>
          </div>

          <p className="text-gray-300 mb-4">
            Click on the <strong>"Create an AWS Account"</strong> button located in the top right corner of the page.
          </p>

          <div className="bg-[#2a2a2a] border-l-4 border-yellow-500 p-4 rounded">
            <p className="text-yellow-400 font-semibold mb-1">Note</p>
            <p className="text-gray-300">
              If you already have an AWS account, you can skip to the next step: <Link href="/aws/s3-bucket" className="text-green-500 hover:underline">Create S3 Bucket</Link>.
            </p>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">2</span>
            </div>
            Step 2: Enter Account Information
          </h2>

          <p className="text-gray-300 mb-4">
            Fill in the required account information:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
            <li><strong>Root user email address:</strong> Enter a valid email address that you have access to. This will be used for account verification and notifications.</li>
            <li><strong>AWS account name:</strong> Choose a name for your account (e.g., "My Grid Backups"). This name can be changed later.</li>
          </ul>

          <p className="text-gray-300 mb-4">
            Review and accept the AWS Customer Agreement. Check the box to confirm that you agree to the terms.
          </p>

          <div className="bg-[#2a2a2a] border-l-4 border-red-500 p-4 rounded">
            <p className="text-red-400 font-semibold mb-1">Important</p>
            <p className="text-gray-300">
              Make sure to use a secure email address that you have access to. AWS will send verification emails and important account notifications to this address.
            </p>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">3</span>
            </div>
            Step 3: Verify Your Email Address
          </h2>

          <p className="text-gray-300 mb-4">
            AWS will send a verification email to the address you provided. Follow these steps:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
            <li>Check your email inbox (and spam folder if necessary)</li>
            <li>Open the email from AWS Account Team</li>
            <li>Click on the verification link provided in the email</li>
            <li>Enter the verification code from the email if prompted</li>
          </ul>

          <p className="text-gray-300 mb-4">
            Once verified, you'll be redirected back to the AWS account creation page to continue.
          </p>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">4</span>
            </div>
            Step 4: Set Root User Password
          </h2>

          <p className="text-gray-300 mb-4">
            Create a strong password for your AWS root user account:
          </p>

          <div className="bg-[#252525] border border-[#333] rounded-lg p-4 mb-4">
            <h3 className="text-lg font-medium mb-2 text-gray-200">Password Requirements</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
              <li>At least 8 characters long</li>
              <li>Contains at least one uppercase letter</li>
              <li>Contains at least one lowercase letter</li>
              <li>Contains at least one number</li>
              <li>Contains at least one special character (! @ # $ % ^ & *)</li>
            </ul>
          </div>

          <p className="text-gray-300 mb-4">
            Enter your password twice to confirm it, then click <strong>"Continue"</strong>.
          </p>

          <div className="bg-[#2a2a2a] border-l-4 border-red-500 p-4 rounded">
            <p className="text-red-400 font-semibold mb-1">Security Best Practice</p>
            <p className="text-gray-300">
              The root user has complete access to your AWS account. Store this password securely, preferably in a password manager. Consider enabling multi-factor authentication (MFA) for your root user after account creation.
            </p>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">5</span>
            </div>
            Step 5: Provide Contact Information
          </h2>

          <p className="text-gray-300 mb-4">
            Enter your contact information:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
            <li><strong>Full name:</strong> Your legal name</li>
            <li><strong>Phone number:</strong> A valid phone number where AWS can reach you</li>
            <li><strong>Country/Region:</strong> Select your country or region</li>
            <li><strong>Address:</strong> Your physical address</li>
            <li><strong>City:</strong> Your city</li>
            <li><strong>State/Province/Region:</strong> Your state or province</li>
            <li><strong>Postal code:</strong> Your postal or ZIP code</li>
          </ul>

          <p className="text-gray-300 mb-4">
            AWS uses this information for billing and account verification purposes.
          </p>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">6</span>
            </div>
            Step 6: Enter Payment Information
          </h2>

          <p className="text-gray-300 mb-4">
            AWS requires a valid payment method to create an account. Enter your payment information:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
            <li><strong>Credit or debit card:</strong> Enter your card number, expiration date, cardholder name, and billing address</li>
            <li><strong>Alternatives:</strong> AWS also accepts other payment methods depending on your region</li>
          </ul>

          <div className="bg-[#2a2a2a] border-l-4 border-blue-500 p-4 rounded mb-4">
            <p className="text-blue-400 font-semibold mb-1">AWS Free Tier</p>
            <p className="text-gray-300">
              AWS Free Tier includes 5 GB of S3 Standard storage, 20,000 GET requests, and 2,000 PUT requests per month for the first 12 months. You won't be charged unless you exceed these limits. However, AWS may place a small hold on your card to verify it's valid - this is typically removed within a few days.
            </p>
          </div>

          <p className="text-gray-300 mb-4">
            Review your information and click <strong>"Verify and Continue"</strong>.
          </p>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">7</span>
            </div>
            Step 7: Verify Your Phone Number
          </h2>

          <p className="text-gray-300 mb-4">
            AWS will send a verification code to your phone number via text message or voice call:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
            <li>Select your preferred verification method (SMS or Voice)</li>
            <li>Click <strong>"Send SMS"</strong> or <strong>"Call me now"</strong></li>
            <li>Enter the verification code you receive</li>
            <li>Click <strong>"Verify code"</strong></li>
          </ul>

          <p className="text-gray-300 mb-4">
            If you don't receive the code, you can request a new one or try the alternate method.
          </p>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">8</span>
            </div>
            Step 8: Select a Support Plan
          </h2>

          <p className="text-gray-300 mb-4">
            Choose a support plan for your AWS account:
          </p>

          <div className="space-y-4 mb-4">
            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-200">Basic Plan (Free)</h3>
              <p className="text-gray-300 text-sm">
                The Basic plan is free and includes access to AWS documentation, whitepapers, and support forums. For most users storing PostgreSQL backups, this plan is sufficient.
              </p>
            </div>

            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-200">Developer, Business, or Enterprise Plans</h3>
              <p className="text-gray-300 text-sm">
                Paid support plans offer additional features like technical support, account assistance, and faster response times. These are optional and can be upgraded later if needed.
              </p>
            </div>
          </div>

          <p className="text-gray-300 mb-4">
            Select the <strong>"Basic Plan"</strong> (free) unless you require additional support, then click <strong>"Continue"</strong>.
          </p>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">9</span>
            </div>
            Step 9: Sign In to Your AWS Account
          </h2>

          <p className="text-gray-300 mb-4">
            After completing the registration process, you'll see a confirmation message. Your AWS account may take a few minutes to fully activate. Once ready:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
            <li>Go to the <a href="https://console.aws.amazon.com" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">AWS Management Console</a></li>
            <li>Sign in using your root user email address and password</li>
            <li>If prompted, verify your identity using your phone number</li>
          </ul>

          <div className="bg-[#2a2a2a] border-l-4 border-green-500 p-4 rounded">
            <p className="text-green-400 font-semibold mb-1">Congratulations!</p>
            <p className="text-gray-300">
              Your AWS account is now created and ready to use. You can proceed to the next step: <Link href="/aws/s3-bucket" className="text-green-500 hover:underline">Create S3 Bucket</Link>.
            </p>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Next Steps</h2>
          <p className="text-gray-300 mb-4">
            Now that you have an AWS account, continue with the setup process:
          </p>
          <div className="space-y-3">
            <Link href="/aws/s3-bucket" className="block">
              <div className="bg-[#252525] border border-[#333] rounded-lg p-4 hover:border-green-500 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-200">Create S3 Bucket</h3>
                    <p className="text-gray-400 text-sm mt-1">Learn how to create a private S3 bucket for storing PostgreSQL backups</p>
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
