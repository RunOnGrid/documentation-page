"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"

export default function CommandNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const commands = [
    { name: "deploy", path: "/build-deploy/grid-cli/commands/deploy" },
    { name: "deployment", path: "/build-deploy/grid-cli/commands/list" },
    { name: "app", path: "/build-deploy/grid-cli/commands/appMethods" },
    { name: "logs", path: "/build-deploy/grid-cli/commands/logs" },
    { name: "git", path: "/build-deploy/grid-cli/commands/git" },
    { name: "login", path: "/build-deploy/grid-cli/commands/login" },
    { name: "logout", path: "/build-deploy/grid-cli/commands/logout" },
    { name: "refund", path: "/build-deploy/grid-cli/commands/refund" },
    { name: "help", path: "/build-deploy/grid-cli/commands/help" },
    { name: "delete", path: "/build-deploy/grid-cli/commands/delete" },
    // { name: "pull", path: "/build-deploy/grid-cli/commands/pull" },
  ]

  // Find current command
  const currentCommand = commands.find((cmd) => pathname === cmd.path)?.name || "Commands"

  return (
    <div className="relative mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full md:w-64 px-4 py-2 bg-[#1e1e1e] border border-[#333] rounded-md text-left"
      >
        <span className="font-mono">grid {currentCommand}</span>
        <ChevronDown size={16} className={`text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full md:w-64 mt-1 bg-[#1e1e1e] border border-[#333] rounded-md shadow-lg max-h-96 overflow-y-auto">
          <div className="py-1">
            <Link href="/build-deploy/grid-cli" className="block px-4 py-2 hover:bg-[#252525]">
              Grid CLI Overview
            </Link>
            <div className="border-t border-[#333] my-1"></div>
            {commands.map((cmd) => (
              <Link
                key={cmd.name}
                href={cmd.path}
                className={`block px-4 py-2 font-mono ${
                  pathname === cmd.path ? "bg-[#252525] text-green-500" : "hover:bg-[#252525]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                grid {cmd.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
