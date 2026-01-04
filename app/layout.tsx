import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Moon, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Sidebar from "@/components/sidebar"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Grid Documentation",
  description: "Comprehensive documentation for the Grid platform",
  icons: {
    icon: '/images/grid-logo.png',
    apple: '/images/grid-logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <header className="border-b border-[#333] py-2 px-4 flex items-center justify-between bg-[#121212] fixed top-0 left-0 right-0 z-10 h-16">
              <div className="flex items-center">
                <Link href="/">
                  <div className="flex items-center">
                    <Image src="/images/grid-logo.png" alt="Grid Logo" width={40} height={40} className="mr-2" />
                  </div>
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <Moon size={20} className="text-gray-400" />
                <Link href="https://x.com/OnGridRun" target="_blank" rel="noopener noreferrer">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <Image
                      src="/images/xlogo.svg"
                      alt="X (Twitter)"
                      width={20}
                      height={20}
                      className="opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </Link>
                <Link href="https://github.com/RunOnGrid" target="_blank" rel="noopener noreferrer">
                  <Github size={20} className="text-gray-400 hover:text-white transition-colors" />
                </Link>
                <Button className="bg-green-500 hover:bg-green-600 text-white" asChild>
                  <Link href="https://console.ongrid.run" target="_blank" rel="noopener noreferrer">
                    Start project
                  </Link>
                </Button>
              </div>
            </header>
            <div className="flex flex-1">
              <Sidebar />
              <div className="flex-1 bg-[#121212] ml-0 md:ml-64 pt-16">{children}</div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
