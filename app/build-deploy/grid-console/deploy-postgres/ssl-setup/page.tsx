import Image from "next/image"

export default function PostgresSSLSetupPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">PostgreSQL SSL Certificate Setup</h1>

      <p className="text-gray-300 mb-8">
        By default, communication to PostgreSQL is unencrypted, which means data transmitted between your application and the database can be intercepted. This guide walks you through configuring SSL certificates for your PostgreSQL database deployment on Grid to secure your database connections.
      </p>


      <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4">Why SSL Certificates Matter</h2>

        <p className="text-gray-300 mb-4">
          SSL certificates protect your database connections from man-in-the-middle (MITM) attacks. Without SSL encryption, attackers can intercept, read, and modify data transmitted between your application and PostgreSQL database.
        </p>

        <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-6 mb-4">
          {/* TODO: Replace this placeholder with your SSL/MITM diagram image */}
          {/* Uncomment and update the image path below when you have the diagram */}

          <Image
            src="/images/2.jpg"
            alt="SSL Certificate and Man-in-the-Middle Attack Protection Diagram"
            width={600}
            height={200}
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
            Step 1: Navigate to PostgreSQL Data Directory
          </h2>

          <p className="text-gray-300 mb-4">
            Navigate to the persistent volume where PostgreSQL configuration and data files are stored:
          </p>

          <div className="bg-[#2a2a2a] border-l-4 border-purple-500 p-3 rounded mb-4">
            <p className="text-purple-400 font-semibold mb-1">Execution Environment</p>
            <p className="text-gray-300 text-sm">
              Run <strong>Step 1</strong> in the Grid Shell at{" "}
              <a
                href="https://console.ongrid.run/profile/project/shell?id=24394242"
                className="text-green-500 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                console.ongrid.run
              </a>
              .
            </p>
          </div>

          <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-4 mb-4">
            <code className="text-green-400 text-sm block">
              cd /var/lib/postgresql/data/
            </code>
          </div>

          <div className="bg-[#2a2a2a] border-l-4 border-blue-500 p-4 rounded">
            <p className="text-blue-400 font-semibold mb-1">Persistent Volume</p>
            <p className="text-gray-300">
              The <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">/var/lib/postgresql/data</code> directory is a persistent volume. All PostgreSQL configuration files, data, and SSL certificates are stored in the <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">pgdata</code> subdirectory, ensuring they persist across container restarts and deployments.
            </p>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">2</span>
            </div>
            Step 2: Configure PostgreSQL for SSL
          </h2>

          <p className="text-gray-300 mb-4">
            Add SSL configuration to the PostgreSQL configuration file in the persistent volume:
          </p>

          <div className="bg-[#2a2a2a] border-l-4 border-purple-500 p-3 rounded mb-4">
            <p className="text-purple-400 font-semibold mb-1">Execution Environment</p>
            <p className="text-gray-300 text-sm">
              Run <strong>Step 2</strong> in the Grid Shell at{" "}
              <a
                href="https://console.ongrid.run/profile/project/shell?id=24394242"
                className="text-green-500 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                console.ongrid.run
              </a>
              .
            </p>
          </div>

          <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-4 mb-4">
            <code className="text-green-400 text-sm block whitespace-pre-wrap">
              {`printf "ssl = on\nssl_cert_file = 'server.crt'\nssl_key_file = 'server.key'\n" >> /var/lib/postgresql/data/pgdata/postgresql.conf`}
            </code>
          </div>

          <p className="text-gray-300 mb-4">
            Verify the configuration was added correctly:
          </p>

          <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-4 mb-4">
            <code className="text-green-400 text-sm block">
              tail postgresql.conf
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

          <div className="bg-[#2a2a2a] border-l-4 border-teal-500 p-3 rounded mb-4">
            <p className="text-teal-400 font-semibold mb-1">Execution Environment</p>
            <p className="text-gray-300 text-sm">
              Run <strong>Step 3</strong> in your <strong>local terminal</strong> (outside of the Grid Shell / container). Generate the certificates on your local machine, then copy them to the container in Step 4.
            </p>
          </div>

          <p className="text-gray-300 mb-4">
            Generate SSL certificates on your local machine. You can create them in any directory:
          </p>

          <p className="text-gray-300 mb-4">
            Create a Certificate Authority (CA) root certificate:
          </p>

          <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-4 mb-4">
            <code className="text-green-400 text-sm block whitespace-pre-wrap">
              {`openssl genrsa -out root.key 4096

openssl req -x509 -new -nodes -key root.key \\
  -sha256 -days 3650 \\
  -out root.crt`}
            </code>
          </div>

          <p className="text-gray-300 mb-4">
            Generate the server private key and certificate signing request:
          </p>

          <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-4 mb-4">
            <code className="text-green-400 text-sm block whitespace-pre-wrap">
              {`openssl genrsa -out server.key 2048

openssl req -new -key server.key -out server.csr`}
            </code>
          </div>

          <p className="text-gray-300 mb-4">
            Sign the server certificate with the CA:
          </p>

          <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-4 mb-4">
            <code className="text-green-400 text-sm block whitespace-pre-wrap">
              {`openssl x509 -req -in server.csr \\
  -CA root.crt -CAkey root.key \\
  -CAcreateserial \\
  -out server.crt \\
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
              openssl x509 -req -in server.csr -CA root.crt -CAkey root.key -CAcreateserial -out server.crt -days 3650 -sha256
            </code>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">4</span>
            </div>
            Step 4: Copy Certificates to Container and Set Permissions
          </h2>

          <div className="bg-[#2a2a2a] border-l-4 border-purple-500 p-3 rounded mb-4">
            <p className="text-purple-400 font-semibold mb-1">Execution Environment</p>
            <p className="text-gray-300 text-sm">
              Run <strong>Step 4</strong> in the Grid Shell at{" "}
              <a
                href="https://console.ongrid.run/profile/project/shell?id=24394242"
                className="text-green-500 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                console.ongrid.run
              </a>
              .
            </p>
          </div>

          <p className="text-gray-300 mb-4">
            Copy the certificates generated in Step 3 to the persistent volume at <code className="bg-[#2a2a2a] px-2 py-1 rounded text-green-400">/var/lib/postgresql/data/pgdata/</code> using the cat command with heredoc:
          </p>

          <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-4 mb-4">
            <p className="text-gray-300 mb-3 text-sm">
              Add the private key:
            </p>
            <code className="text-green-400 text-sm block whitespace-pre-wrap">
{`cat > /var/lib/postgresql/data/pgdata/server.key << 'EOF'
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
{`cat > /var/lib/postgresql/data/pgdata/server.crt << 'EOF'
-----BEGIN CERTIFICATE-----
[paste your certificate content here]
-----END CERTIFICATE-----
EOF`}
            </code>
          </div>

          <p className="text-gray-300 mb-4">
            After copying the files, set proper permissions:
          </p>

          <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-4 mb-4 space-y-2">
            <code className="text-green-400 text-sm block">
              chmod 600 /var/lib/postgresql/data/pgdata/server.key
            </code>
            <code className="text-green-400 text-sm block">
              chown postgres:postgres /var/lib/postgresql/data/pgdata/server.key
            </code>
            <code className="text-green-400 text-sm block">
              chmod 644 /var/lib/postgresql/data/pgdata/server.crt
            </code>
          </div>

          <div className="bg-[#2a2a2a] border-l-4 border-blue-500 p-4 rounded">
            <p className="text-blue-400 font-semibold mb-1">Security Note</p>
            <p className="text-gray-300">
              The private key (<code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">server.key</code>) must have restricted permissions (600) and be owned by the postgres user for security.
            </p>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
              <span className="text-green-500 font-mono">5</span>
            </div>
            Step 5: Restart PostgreSQL Service
          </h2>

          <p className="text-gray-300 mb-4">
            Restart PostgreSQL to apply the SSL configuration changes:
          </p>

          <div className="bg-[#2a2a2a] border-l-4 border-purple-500 p-3 rounded mb-4">
            <p className="text-purple-400 font-semibold mb-1">Execution Environment</p>
            <p className="text-gray-300 text-sm">
              Run <strong>Step 5</strong> in the Grid Shell at{" "}
              <a
                href="https://console.ongrid.run/profile/project/shell?id=24394242"
                className="text-green-500 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                console.ongrid.run
              </a>
              .
            </p>
          </div>

          <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-4 mb-4">
            <code className="text-green-400 text-sm block whitespace-pre-wrap">
              {`su - postgres

/usr/lib/postgresql/15/bin/pg_ctl restart -D /var/lib/postgresql/data/pgdata`}
            </code>
          </div>

          <div className="bg-[#2a2a2a] border-l-4 border-yellow-500 p-4 rounded">
            <p className="text-yellow-400 font-semibold mb-1">Note</p>
            <p className="text-gray-300">
              The PostgreSQL version path may vary (e.g., <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">/usr/lib/postgresql/15/bin/</code>). Adjust according to your PostgreSQL version.
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
            Verify that SSL is working by connecting to your database with SSL mode:
          </p>

          <div className="bg-[#2a2a2a] border-l-4 border-teal-500 p-3 rounded mb-4">
            <p className="text-teal-400 font-semibold mb-1">Execution Environment</p>
            <p className="text-gray-300 text-sm">
              Run <strong>Step 6</strong> in your <strong>local terminal</strong>, using the connection details provided by your deployment.
            </p>
          </div>

          <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-4 mb-4">
            <code className="text-green-400 text-sm block">
              psql "host=provider.akash-palmito.org port=5432 user=admin dbname=mydb sslmode=require"
            </code>
          </div>

          <p className="text-gray-300 mb-4">
            Replace the connection parameters with your actual values:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
            <li><strong>host:</strong> Your PostgreSQL host address</li>
            <li><strong>port:</strong> PostgreSQL port (default: 5432)</li>
            <li><strong>user:</strong> Database username</li>
            <li><strong>dbname:</strong> Database name</li>
            <li><strong>sslmode:</strong> SSL connection mode (require, verify-ca, or verify-full)</li>
          </ul>

          <div className="bg-[#2a2a2a] border-l-4 border-green-500 p-4 rounded">
            <p className="text-green-400 font-semibold mb-1">Success Indicators</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-300">
              <li>Connection established without errors</li>
              <li>SSL connection status shown in PostgreSQL logs</li>
              <li>No SSL-related warnings in connection output</li>
            </ul>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 bg-[#1e1e1e] border border-green-500 rounded flex items-center justify-center mr-3">
            </div>
            SSL Connection Modes
          </h2>

          <div className="space-y-4">
            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">
                <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">require</code>
              </h3>
              <p className="text-gray-300">
                Requires SSL connection but does not verify the certificate. Suitable for testing environments.
              </p>
            </div>

            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">
                <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">verify-ca</code>
              </h3>
              <p className="text-gray-300">
                Verifies that the server certificate is signed by a trusted CA, but does not verify the hostname.
              </p>
            </div>

            <div className="bg-[#252525] border border-[#333] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2 text-gray-200">
                <code className="bg-[#1e1e1e] px-2 py-1 rounded text-green-400">verify-full</code>
              </h3>
              <p className="text-gray-300">
                Verifies both the certificate and the hostname. Provides the highest level of security. Recommended for production.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

