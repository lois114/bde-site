import Link from "next/link"
import "./globals.css"
import Image from "next/image"
import { Navbar } from "./components/Navbar"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
   <html lang="fr">
  <body className="min-h-screen relative overflow-x-hidden
                   bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950
                   text-white
                   dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950
                   light:from-[#F4F6F8] light:via-[#EEF2F4] light:to-[#F4F6F8]">

    {/* Background layers */}
    <div className="pointer-events-none fixed inset-0 -z-10">
    
      {/* DARK MODE GLOWS */}
      <div className="absolute left-[-15%] top-[-10%] h-[500px] w-[500px] rounded-full bg-purple-600/25 blur-[140px] dark:block hidden" />
      <div className="absolute right-[-10%] top-[20%] h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[140px] dark:block hidden" />
      <div className="absolute bottom-[-20%] left-[30%] h-[500px] w-[500px] rounded-full bg-[#187B73]/25 blur-[160px] dark:block hidden" />

      {/* WHITE MODE GLOWS */}
      <div className="absolute left-[-15%] top-[-10%] h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[140px] dark:hidden" />
      <div className="absolute right-[-10%] top-[20%] h-[450px] w-[450px] rounded-full bg-[#187B73]/15 blur-[160px] dark:hidden" />
      <div className="absolute bottom-[-20%] left-[30%] h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[160px] dark:hidden" />

      {/* Subtle radial texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.04),transparent_70%)]" />
    </div>

    <Navbar />

    <main className="mx-auto max-w-6xl px-6 py-10 text-zinc-900 dark:text-white">
      {children}
    </main>

  </body>
</html>
  )
}


