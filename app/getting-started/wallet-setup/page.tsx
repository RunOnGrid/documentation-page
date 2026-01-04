import Image from "next/image"

export default function WalletSetupPage() {
  return (
    <main className="flex-1 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Wallet Setup</h1>

        <p className="text-gray-300 mb-8">
          To get started with Grid, you need to set up a wallet. You can either create a new wallet or import an existing one.
        </p>

        <div className="space-y-12">
          {/* Wallet Creation Section */}
          <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Create Wallet</h2>
            <p className="text-gray-300 mb-6">
              If you're new to Grid, create a new wallet to get started. Make sure to securely store your recovery phrase.
            </p>

            <div className="space-y-8">
              {/* Step 1 */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
                    <span className="text-green-500 font-mono">1</span>
                  </div>
                  <h3 className="text-xl font-semibold">Create wallet</h3>
                </div>
                <p className="text-gray-300 mb-4 ml-11">
                  Click on the "Create Wallet" button in the Grid interface to start the wallet creation process. This will generate a new wallet with a unique address.
                </p>
                <div className="ml-11 mb-4">
                  <Image
                    src="https://imagedelivery.net/EXhaUxjEp-0lLrNJjhM2AA/20bfc68a-c29b-49da-30a7-c42cd68e6900/public"
                    alt="Create wallet step"
                    width={800}
                    height={600}
                    className="rounded-lg border border-[#333]"
                  />
                </div>
              </div>

              {/* Step 2 */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
                    <span className="text-green-500 font-mono">2</span>
                  </div>
                  <h3 className="text-xl font-semibold">Backup seed phrase</h3>
                </div>
                <p className="text-gray-300 mb-4 ml-11">
                  After creating your wallet, you'll be shown a recovery seed phrase. This is a series of words that can be used to restore your wallet. Write down these words in the exact order shown and store them in a secure location. Never share your seed phrase with anyone.
                </p>
                <div className="ml-11 mb-4">
                  <Image
                    src="https://imagedelivery.net/EXhaUxjEp-0lLrNJjhM2AA/8dc3b90c-941f-4bd1-9b16-31b3c75f1a00/public"
                    alt="Backup seed phrase step"
                    width={800}
                    height={600}
                    className="rounded-lg border border-[#333]"
                  />
                </div>
              </div>

              {/* Step 3 */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
                    <span className="text-green-500 font-mono">3</span>
                  </div>
                  <h3 className="text-xl font-semibold">Verify your Recovery Phrase</h3>
                </div>
                <p className="text-gray-300 mb-4 ml-11">
                  To ensure you've correctly saved your recovery phrase, you'll be asked to verify it by selecting the words in the correct order. This step is crucial to confirm that you can restore your wallet if needed.
                </p>
                <div className="ml-11 mb-4">
                  <Image
                    src="https://imagedelivery.net/EXhaUxjEp-0lLrNJjhM2AA/34639ba3-29ce-4fd2-0b8d-7980bc0b9f00/public"
                    alt="Verify recovery phrase step"
                    width={800}
                    height={600}
                    className="rounded-lg border border-[#333]"
                  />
                </div>
              </div>

              {/* Step 4 */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
                    <span className="text-green-500 font-mono">4</span>
                  </div>
                  <h3 className="text-xl font-semibold">Secure your wallet</h3>
                </div>
                <p className="text-gray-300 mb-4 ml-11">
                  Once your wallet is created and verified, set up additional security measures such as a password or PIN. This adds an extra layer of protection to your wallet and helps prevent unauthorized access.
                </p>
                <div className="ml-11 mb-4">
                  <Image
                    src="https://imagedelivery.net/EXhaUxjEp-0lLrNJjhM2AA/a929950e-ff05-42a3-2839-5202a8ce6300/public"
                    alt="Secure your wallet step"
                    width={800}
                    height={600}
                    className="rounded-lg border border-[#333]"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Wallet Import Section */}
          <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Import Wallet</h2>
            <p className="text-gray-300 mb-6">
              If you already have a wallet with a recovery phrase, you can import it into Grid to access your existing account and funds.
            </p>

            <div className="space-y-8">
              {/* Step 1 */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
                    <span className="text-green-500 font-mono">1</span>
                  </div>
                  <h3 className="text-xl font-semibold">Import wallet</h3>
                </div>
                <p className="text-gray-300 mb-4 ml-11">
                  Click on the "Import Wallet" option in the Grid interface. This will allow you to restore an existing wallet using your recovery phrase.
                </p>
                <div className="ml-11 mb-4">
                  <Image
                    src="https://imagedelivery.net/EXhaUxjEp-0lLrNJjhM2AA/b937c993-ab5e-49b0-6315-e5e6ad67e800/public"
                    alt="Import wallet step"
                    width={800}
                    height={600}
                    className="rounded-lg border border-[#333]"
                  />
                </div>
              </div>

              {/* Step 2 */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
                    <span className="text-green-500 font-mono">2</span>
                  </div>
                  <h3 className="text-xl font-semibold">Import from a recovery phrase</h3>
                </div>
                <p className="text-gray-300 mb-4 ml-11">
                  Enter your recovery phrase in the exact order it was provided when you created the wallet. Make sure to enter all words correctly and in the right sequence. The system will verify the phrase and restore your wallet.
                </p>
                <div className="ml-11 mb-4">
                  <Image
                    src="https://imagedelivery.net/EXhaUxjEp-0lLrNJjhM2AA/fff6123b-0696-47a9-0d46-c75b46a9d400/public"
                    alt="Import from recovery phrase step"
                    width={800}
                    height={600}
                    className="rounded-lg border border-[#333]"
                  />
                </div>
              </div>

              {/* Step 3 */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
                    <span className="text-green-500 font-mono">3</span>
                  </div>
                  <h3 className="text-xl font-semibold">Secure your wallet</h3>
                </div>
                <p className="text-gray-300 mb-4 ml-11">
                  After successfully importing your wallet, set up security measures such as a password or PIN to protect your imported wallet from unauthorized access.
                </p>
                <div className="ml-11 mb-4">
                  <Image
                    src="https://imagedelivery.net/EXhaUxjEp-0lLrNJjhM2AA/1d2aafcc-081d-4427-e85d-a14c43067200/public"
                    alt="Secure your imported wallet step"
                    width={800}
                    height={600}
                    className="rounded-lg border border-[#333]"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

