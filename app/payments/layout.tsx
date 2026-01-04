import type React from "react"

export default function PaymentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <main className="p-8">{children}</main>
    </div>
  )
}

