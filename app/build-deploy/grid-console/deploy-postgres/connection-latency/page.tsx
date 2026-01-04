import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function ConnectionLatencyPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Connection Latency</h1>
      
      <div className="space-y-10">
        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Connection Latency</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Latency benchmarks:</h3>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                  <TableHead className="text-gray-300">PROVIDER</TableHead>
                    <TableHead className="text-gray-300">REGION</TableHead>
                    <TableHead className="text-gray-300">LATENCY</TableHead>
                    <TableHead className="text-gray-300">TYPE</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                  <TableCell className="text-gray-300">
                      <a 
                        href="https://console.akash.network/providers/akash15tl6v6gd0nte0syyxnv57zmmspgju4c3xfmdhk?network=mainnet" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 underline"
                      >
                        Hurricane (Akash Network)
                      </a>
                    </TableCell>
                    <TableCell className="text-gray-300">California, United States</TableCell>
                    <TableCell className="text-gray-300">39.782 ms</TableCell>
                    <TableCell className="text-gray-300">direct</TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell className="text-gray-300">
                      <a 
                        href="https://console.akash.network/providers/akash15tl6v6gd0nte0syyxnv57zmmspgju4c3xfmdhk?network=mainnet" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 underline"
                      >
                        Akash provider (Akash Network)
                      </a>
                    </TableCell>
                    <TableCell className="text-gray-300">Texas, United States</TableCell>
                    <TableCell className="text-gray-300">64.982 ms</TableCell>
                    <TableCell className="text-gray-300">direct</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-gray-300"><a 
                    href="https://console.akash.network/providers/akash175llqyjvxfle9qwt740vm46772dzaznpzgm576?network=mainnet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 underline"
                    >Europlots (Akash Network)</a></TableCell>
                    <TableCell className="text-gray-300">City of Zagreb, Croatia</TableCell>
                    <TableCell className="text-gray-300">149.737 ms</TableCell>
                    <TableCell className="text-gray-300">direct</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-gray-300"><a 
                    href="https://console.akash.network/providers/akash1r2yz5fzkk9gt0r3mk9u2c29q5mmtef050cryak?network=mainnet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 underline"
                    >Subangle (Akash Network)</a></TableCell>
                    <TableCell className="text-gray-300">Bavaria, Germany</TableCell>
                    <TableCell className="text-gray-300">210.5 ms</TableCell>
                    <TableCell className="text-gray-300">direct</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Test Methodology</h3>
            
            <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-4 space-y-3">
              <div>
                <p className="text-gray-300 mb-2">
                  <strong className="text-green-400">Tool</strong>
                </p>
                <p className="text-gray-400 font-mono mb-2">pgbench</p>
                <p className="text-gray-400 text-sm">
                  pgbench is a benchmarking tool included with PostgreSQL that runs a series of SQL commands to measure database performance, including connection latency and transaction throughput.
                </p>
              </div>
              
              <div>
                <p className="text-gray-300 mb-2">
                  <strong className="text-green-400">Configuration</strong>
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-400 text-sm">
                  <li>Scaling factor: 1</li>
                  <li>Clients: 1</li>
                  <li>Threads: 1</li>
                  <li>Transactions per client: 200</li>
                  <li>Query mode: simple</li>
                  <li>Connection pooling: disabled</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Manual Client Testing (for users)</h3>
            
            <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-4">
              <p className="text-gray-300 mb-2">
                <code className="bg-[#1e1e1e] px-3 py-2 rounded text-green-400 font-mono block">
                  pgbench -S -c 1 -t 200 -h &lt;host&gt; -p &lt;port&gt; -U &lt;user&gt; -d &lt;db&gt;
                </code>
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Run this command from your application server to get realistic latency numbers.
              </p>
            </div>
          </div>

          <div className="bg-[#2a2a2a] border-l-4 border-blue-500 p-4 rounded">
            <p className="text-blue-400 font-semibold mb-2">Testing Location</p>
            <p className="text-gray-300 text-sm">
              All testing was made from Texas, United States from a container VM on this provider:{" "}
              <a 
                href="https://console.akash.network/providers/akash1kqzpqqhm39umt06wu8m4hx63v5hefhrfmjf9dj?network=mainnet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 underline"
              >
                https://console.akash.network/providers/akash1kqzpqqhm39umt06wu8m4hx63v5hefhrfmjf9dj?network=mainnet
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

