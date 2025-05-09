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
      <div className="p-4 border-b border-[#333]">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image src="/images/grid-logo.png" alt="Grid Logo" width={32} height={32} className="object-contain" />
            <span className="font-bold text-xl">Grid</span>
          </div>
        </Link>
      </div>

      <div className="py-2">
        <Link href="/">
          <NavItem label="Home" active={pathname === "/"} />
        </Link>

        <NavItemWithChildren label="Getting started" defaultOpen={pathname.includes("/getting-started")}>
          <Link href="/getting-started/how-to-use">
            <NavItem label="How to use Grid?" active={pathname === "/getting-started/how-to-use"} indent />
          </Link>
        </NavItemWithChildren>

        <NavItemWithChildren label="Build & deploy" defaultOpen={pathname.includes("/build-deploy")}>
          <Link href="/build-deploy">
            <NavItem label="Overview" active={pathname === "/build-deploy"} indent />
          </Link>

          {/* Grid Console link */}
          <Link href="/build-deploy/grid-console">
            <NavItem label="Grid Console" active={pathname === "/build-deploy/grid-console"} indent />
          </Link>

          {/* Grid CLI link added */}
          <Link href="/build-deploy/grid-cli">
            <NavItem label="Grid CLI" active={pathname === "/build-deploy/grid-cli"} indent />
          </Link>

          {/* Grid Console pages moved directly under Build & Deploy */}
          <Link href="/build-deploy/grid-console/deploy-from-github">
            <NavItem
              label="Deploy from GitHub repository"
              active={pathname === "/build-deploy/grid-console/deploy-from-github"}
              indent
            />
          </Link>
          <Link href="/build-deploy/grid-console/deploy-from-container">
            <NavItem
              label="Deploy from container registry"
              active={pathname === "/build-deploy/grid-console/deploy-from-container"}
              indent
            />
          </Link>
          {/* Multicomponent link commented out
          <Link href="/build-deploy/grid-console/multicomponent">
            <NavItem label="Multicomponent" active={pathname === "/build-deploy/grid-console/multicomponent"} indent />
          </Link>
          */}

          <NavItemWithChildren label="Payments" indent defaultOpen={pathname.includes("/build-deploy/payments")}>
            <Link href="/build-deploy/payments/akash">
              <NavItem
                label={
                  <div className="flex items-center gap-1">
                    <Image src="/images/akash-logo.png" alt="Akash Logo" width={14} height={14} />
                    <span>Akash</span>
                  </div>
                }
                active={pathname === "/build-deploy/payments/akash"}
                indent={2}
              />
            </Link>
            <Link href="/build-deploy/payments/flux">
              <NavItem
                label={
                  <div className="flex items-center gap-1">
                    <Image src="/images/flux-logo.jpeg" alt="Flux Logo" width={14} height={14} />
                    <span>Flux</span>
                  </div>
                }
                active={pathname === "/build-deploy/payments/flux"}
                indent={2}
              />
            </Link>
          </NavItemWithChildren>
        </NavItemWithChildren>
      </div>
    </aside>
  )
}

function NavItem({ label, active = false, indent = 0 }) {
  return (
    <div
      className={`flex items-center justify-between px-4 py-2 hover:bg-[#1e1e1e] cursor-pointer ${
        active ? "bg-[#1e1e1e]" : ""
      }`}
      style={{ paddingLeft: `${indent * 0.5 + 1}rem` }}
    >
      <span className="text-sm">{label}</span>
    </div>
  )
}

function NavItemWithChildren({ label, children, defaultOpen = false, indent = 0 }) {
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
