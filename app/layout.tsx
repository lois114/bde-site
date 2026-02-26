import Link from "next/link"
import "./globals.css"
import Image from "next/image"
import { Navbar } from "./components/Navbar"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-neutral-950 text-white">
        {/* background glow */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-purple-600/20 blur-3xl" />
          <div className="absolute right-[-10%] top-[10%] h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

      <Navbar />
  

        <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
      </body>
    </html>
  )
}