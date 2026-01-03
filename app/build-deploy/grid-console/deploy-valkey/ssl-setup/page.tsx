import Image from "next/image"

export default function ValkeySSLSetupPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Valkey SSL Certificate Setup</h1>

      <p className="text-gray-300 mb-8">
        By default, communication to Valkey is unencrypted, which means data transmitted between your application and the database can be intercepted. This guide walks you through configuring SSL certificates for your Valkey database deployment on Grid to secure your database connections.
      </p>

      <div className="bg-[#2a2a2a] border-l-4 border-blue-500 p-4 rounded mb-8">
        <p className="text-blue-400 font-semibold mb-1">Prerequisites</p>
        <p className="text-gray-300 mb-2">
          Ensure you have SSH access to your Valkey container and appropriate permissions to modify Valkey configuration files.
        </p>
        <p className="text-gray-300">
          <strong>Important:</strong> A persistent volume is mounted at <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">/config</code> to ensure that SSL certificates and the <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">valkey.conf</code> configuration file persist across container restarts and redeployments.
        </p>
      </div>

      <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4">Why SSL Certificates Matter</h2>

        <p className="text-gray-300 mb-4">
          SSL certificates protect your database connections from man-in-the-middle (MITM) attacks. Without SSL encryption, attackers can intercept, read, and modify data transmitted between your application and Valkey database.
        </p>

        <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-6 mb-4">
          <Image
            src="/images/2 2.jpg"
            alt="SSL Certificate and Man-in-the-Middle Attack Protection Diagram"
            width={600}
            height={250}
            className="rounded-lg w-full max-w-2xl mx-auto"
          />
        </div>
        <div className="bg-[#2a2a2a] border-l-4 border-red-500 p-4 rounded">
          <p className="text-red-400 font-semibold mb-1">Security Risk</p>
          <p className="text-gray-300">
            Without SSL encryption, sensitive data like passwords, personal information, and business data can be intercepted by attackers. Always use SSL/TLS encryption for production databases.
          </p>
        </div>
      </section>

      <div className="space-y-10">
        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">1</span>
            </div>
            Step 1: Navigate to Valkey Configuration Directory
          </h2>

          <p className="text-gray-300 mb-4">
            Navigate to the persistent volume mount point where Valkey configuration files and SSL certificates will be stored:
          </p>

          <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-4 mb-4">
            <code className="text-green-400 text-sm block">
              cd /config
            </code>
          </div>

          <div className="bg-[#2a2a2a] border-l-4 border-blue-500 p-4 rounded">
            <p className="text-blue-400 font-semibold mb-1">Persistent Volume</p>
            <p className="text-gray-300">
              The <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">/config</code> directory is a persistent volume, ensuring that your SSL certificates and <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">valkey.conf</code> configuration persist across container restarts and deployments.
            </p>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">2</span>
            </div>
            Step 2: Configure Valkey for SSL/TLS
          </h2>

          <p className="text-gray-300 mb-4">
            Add SSL/TLS configuration to the Valkey configuration file (<code className="bg-[#2a2a2a] px-2 py-1 rounded text-green-400">valkey.conf</code> or <code className="bg-[#2a2a2a] px-2 py-1 rounded text-green-400">redis.conf</code>) in the persistent volume:
          </p>

          <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-4 mb-4">
            <code className="text-green-400 text-sm block whitespace-pre-wrap">
{`printf  "port 0\ntls-port 6379\ntls-cert-file /config/valkey.crt\ntls-key-file /config/valkey.key\ntls-ca-cert-file /config/ca.crt\n" >> /config/valkey.conf`}
            </code>
          </div>

          <p className="text-gray-300 mb-4">
            Verify the configuration was added correctly:
          </p>

          <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-4 mb-4">
            <code className="text-green-400 text-sm block">
              tail /config/valkey.conf
            </code>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">3</span>
            </div>
            Step 3: Generate SSL Certificates
          </h2>

          <p className="text-gray-300 mb-4">
            <strong>Important:</strong> These commands should be run on your client terminal, not in the container shell. Generate the certificates on your local machine first, then copy them to the container.
          </p>

          <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-4 mb-4">
            <code className="text-green-400 text-sm block whitespace-pre-wrap">
              {`

openssl genrsa -out ca.key 4096

openssl req -x509 -new -nodes -key ca.key \\
  -sha256 -days 3650 \\
  -out ca.crt`}
            </code>
          </div>

          <p className="text-gray-300 mb-4">
            Generate the server private key and certificate signing request:
          </p>

          <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-4 mb-4">
            <code className="text-green-400 text-sm block whitespace-pre-wrap">
              {`openssl genrsa -out valkey.key 2048

openssl req -new -key valkey.key -out valkey.csr`}
            </code>
          </div>

          <p className="text-gray-300 mb-4">
            Sign the server certificate with the CA:
          </p>

          <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-4 mb-4">
            <code className="text-green-400 text-sm block whitespace-pre-wrap">
              {`openssl x509 -req -in valkey.csr \\
  -CA ca.crt -CAkey ca.key \\
  -CAcreateserial \\
  -out valkey.crt \\
  -days 3650 \\
  -sha256`}
            </code>
          </div>

          <div className="bg-[#2a2a2a] border-l-4 border-yellow-500 p-4 rounded">
            <p className="text-yellow-400 font-semibold mb-1">Alternative Command</p>
            <p className="text-gray-300 mb-2">
              You can also use this single-line command:
            </p>
            <code className="text-green-400 text-sm block bg-[#1e1e1e] p-2 rounded">
              openssl x509 -req -in valkey.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out valkey.crt -days 3650 -sha256
            </code>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">4</span>
            </div>
            Step 4: Add key and certificates
          </h2>

          <p className="text-gray-300 mb-4">
            After creating the key & certificates on your local machine, add them to the persistent volume at <code className="bg-[#2a2a2a] px-2 py-1 rounded text-green-400">/config/</code> using the cat command with heredoc:
          </p>

          <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-4 mb-4">
            <p className="text-gray-300 mb-3 text-sm">
              Add the private key:
            </p>
            <code className="text-green-400 text-sm block whitespace-pre-wrap">
{`cat > /config/valkey.key << 'EOF'
-----BEGIN PRIVATE KEY-----
[paste your key content here]
-----END PRIVATE KEY-----
EOF`}
            </code>
          </div>

          <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-4 mb-4">
            <p className="text-gray-300 mb-3 text-sm">
              Add the certificate:
            </p>
            <code className="text-green-400 text-sm block whitespace-pre-wrap">
{`cat > /config/valkey.crt << 'EOF'
-----BEGIN CERTIFICATE-----
[paste your certificate content here]
-----END CERTIFICATE-----
EOF`}
            </code>
          </div>

          <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-4 mb-4">
            <p className="text-gray-300 mb-3 text-sm">
              Add the CA certificate:
            </p>
            <code className="text-green-400 text-sm block whitespace-pre-wrap">
{`cat > /config/ca.crt << 'EOF'
-----BEGIN CERTIFICATE-----
[paste your CA certificate content here]
-----END CERTIFICATE-----
EOF`}
            </code>
          </div>

          <p className="text-gray-300 mb-4">
            After adding the files, set proper permissions:
          </p>

          <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-4 mb-4 space-y-2">
            <code className="text-green-400 text-sm block">
              chmod 600 /config/valkey.key
            </code>
            <code className="text-green-400 text-sm block">
              chown valkey:valkey /config/valkey.key
            </code>
            <code className="text-green-400 text-sm block">
              chmod 644 /config/valkey.crt
            </code>
            <code className="text-green-400 text-sm block">
              chmod 644 /config/ca.crt
            </code>
          </div>

          <div className="bg-[#2a2a2a] border-l-4 border-blue-500 p-4 rounded">
            <p className="text-blue-400 font-semibold mb-1">Security Note</p>
            <p className="text-gray-300">
              The private key (<code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">valkey.key</code>) must have restricted permissions (600) and be owned by the valkey user for security.
            </p>
          </div>
        </section>


        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">5</span>
            </div>
            Step 5: Restart Valkey Service
          </h2>

          <p className="text-gray-300 mb-4">
            Apply the SSL/TLS configuration changes:
          </p>

          <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-4 mb-4">
            <code className="text-green-400 text-sm block whitespace-pre-wrap">
              {`valkey-server /config/valkey.conf`}
            </code>
          </div>

          <div className="bg-[#2a2a2a] border-l-4 border-yellow-500 p-4 rounded">
            <p className="text-yellow-400 font-semibold mb-1">Note</p>
            <p className="text-gray-300">
              The restart method depends on how Valkey is deployed. Use <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">systemctl</code> for systemd services, or restart the container if running in Docker.
            </p>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">6</span>
            </div>
            Step 6: Test SSL Connection
          </h2>

          <p className="text-gray-300 mb-4">
            Verify that SSL/TLS is working by connecting to your Valkey instance with TLS. Use the port that your provider has mapped in the networking configuration:
          </p>

          <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-4 mb-4">
            <code className="text-green-400 text-sm block">
              valkey-cli --tls --cert /config/valkey.crt --key /config/valkey.key --cacert /config/ca.crt -h provider.akash-palmito.org -p &lt;provider-mapped-port&gt;
            </code>
          </div>

          <p className="text-gray-300 mb-4">
            Or using redis-cli (Valkey is Redis-compatible):
          </p>

          <div className="bg-[#2a2a2a] border border-[#333] rounded-lg pmb-4">
            <code className="text-green-400 text-sm block">-4 
              redis-cli --tls --cert /config/valkey.crt --key /config/valkey.key --cacert /config/ca.crt -h provider.akash-palmito.org -p &lt;provider-mapped-port&gt;
            </code>
          </div>

          <p className="text-gray-300 mb-4">
            Replace the connection parameters with your actual values:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
            <li><strong>host:</strong> Your Valkey host address</li>
            <li><strong>port:</strong> The port mapped by your provider in the networking configuration</li>
            <li><strong>cert:</strong> Path to client certificate (<code className="bg-[#1e1e1e] px-1 py-0.5 rounded text-green-400">/config/valkey.crt</code>)</li>
            <li><strong>key:</strong> Path to client private key (<code className="bg-[#1e1e1e] px-1 py-0.5 rounded text-green-400">/config/valkey.key</code>)</li>
            <li><strong>cacert:</strong> Path to CA certificate (<code className="bg-[#1e1e1e] px-1 py-0.5 rounded text-green-400">/config/ca.crt</code>)</li>
          </ul>

          <div className="bg-[#2a2a2a] border-l-4 border-green-500 p-4 rounded">
            <p className="text-green-400 font-semibold mb-1">Success Indicators</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-300">
              <li>Connection established without errors</li>
              <li>TLS handshake completed successfully</li>
              <li>Commands execute without SSL-related warnings</li>
            </ul>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
            </div>
            TLS Configuration Options
          </h2>

          <div className="space-y-4">
            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">
                <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">tls-auth-clients</code>
              </h3>
              <p className="text-gray-300">
                Set to <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">yes</code> to require client certificates, or <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">no</code> to allow connections without client certificates.
              </p>
            </div>

            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">
                <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">tls-protocols</code>
              </h3>
              <p className="text-gray-300">
                Specify allowed TLS protocols (e.g., <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">"TLSv1.2 TLSv1.3"</code>). Recommended to use TLSv1.2 or higher for security.
              </p>
            </div>

            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">
                <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">tls-ciphers</code>
              </h3>
              <p className="text-gray-300">
                Configure allowed cipher suites. Use strong ciphers for production environments to ensure maximum security.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

