"use client"

import { ChevronDown } from "lucide-react"
import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 border-r border-[#333] hidden md:block fixed top-16 left-0 h-[calc(100vh-4rem)] overflow-y-auto">
      {/* <div className="p-4 border-b border-[#333]">
        <Link href="/">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl">Grid</span>
          </div>
        </Link>
      </div> */}

      <div className="py-2">
        <Link href="/">
          <NavItem label="Home" active={pathname === "/"} />
        </Link>


        <NavItemWithChildren label="Getting started" defaultOpen={pathname.includes("/getting-started")}>
          <Link href="/getting-started/how-to-use">
            <NavItem label="How to use Grid?" active={pathname === "/getting-started/how-to-use"} indent={1} />
          </Link>
          <Link href="/getting-started/wallet-setup">
            <NavItem label="Wallet Setup" active={pathname === "/getting-started/wallet-setup"} indent={1} />
          </Link>
          {/* <Link href="/getting-started/how-to-use">
            <NavItem label="Decentralized philosophy" active={pathname === "/getting-started/how-to-use"} indent={1} />
          </Link> */}
        </NavItemWithChildren>

        <Link href="/payments">
          <NavItem label="Payments" active={pathname === "/payments"} />
        </Link>

        <NavItemWithChildren 
          label="PostgreSQL" 
          defaultOpen={pathname.includes("/build-deploy/grid-console/deploy-postgres")}
        >
          <Link href="/build-deploy/grid-console/deploy-postgres">
            <NavItem 
              label="PostgreSQL Quickstart" 
              active={pathname === "/build-deploy/grid-console/deploy-postgres"} 
              indent={1} 
            />
          </Link>
          <Link href="/build-deploy/grid-console/deploy-postgres/ssl-setup">
            <NavItem 
              label="Set up SSL Certificate" 
              active={pathname === "/build-deploy/grid-console/deploy-postgres/ssl-setup"} 
              indent={1} 
            />
          </Link>
          <Link href="/build-deploy/grid-console/deploy-postgres/connection-latency">
            <NavItem 
              label="Connection Latency" 
              active={pathname === "/build-deploy/grid-console/deploy-postgres/connection-latency"} 
              indent={1} 
            />
          </Link>
        </NavItemWithChildren>

        <NavItemWithChildren 
          label="Valkey" 
          defaultOpen={pathname.includes("/build-deploy/grid-console/deploy-valkey")}
        >
          <Link href="/build-deploy/grid-console/deploy-valkey">
            <NavItem 
              label="Valkey Quickstart" 
              active={pathname === "/build-deploy/grid-console/deploy-valkey"} 
              indent={1} 
            />
          </Link>
          <Link href="/build-deploy/grid-console/deploy-valkey/ssl-setup">
            <NavItem 
              label="Set up SSL Certificate" 
              active={pathname === "/build-deploy/grid-console/deploy-valkey/ssl-setup"} 
              indent={1} 
            />
          </Link>
        </NavItemWithChildren>

        <NavItemWithChildren 
          label="AWS" 
          defaultOpen={pathname.includes("/aws")}
        >
          <Link href="/aws/account-setup">
            <NavItem 
              label="AWS Account Setup" 
              active={pathname === "/aws/account-setup"} 
              indent={1} 
            />
          </Link>
          <Link href="/aws/s3-bucket">
            <NavItem 
              label="Create S3 Bucket" 
              active={pathname === "/aws/s3-bucket"} 
              indent={1} 
            />
          </Link>
          <Link href="/aws/iam-access">
            <NavItem 
              label="Configure IAM Access" 
              active={pathname === "/aws/iam-access"} 
              indent={1} 
            />
          </Link>
        </NavItemWithChildren>
      </div>
    </aside>
  )
}

function NavItem({ label, active = false, indent = 0 }: { label: string; active?: boolean; indent?: number }) {
  return (
    <div
      className={`flex items-center justify-between px-4 py-2 hover:bg-[#1e1e1e] cursor-pointer ${active ? "bg-[#1e1e1e]" : ""}`}
      style={{ paddingLeft: `${indent * 0.5 + 1}rem` }}
    >
      <span className="text-sm">{label}</span>
    </div>
  )
}

function NavItemWithChildren({
  label,
  children,
  defaultOpen = false,
  indent = 0
}: {
  label: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  indent?: number
}) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen)

  return (
    <div>
      <div
        className="flex items-center justify-between px-4 py-2 hover:bg-[#1e1e1e] cursor-pointer"
        style={{ paddingLeft: `${indent * 0.5 + 1}rem` }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm">{label}</span>
        <ChevronDown size={16} className={`text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  )
}
