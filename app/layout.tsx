import Link from "next/link"
import "./globals.css"
import Image from "next/image"
import { Navbar } from "./components/Navbar"

export const metadata = {
  title: "BDE Ynov Toulouse",
  icons: {
    icon: "/favicon.ico",
  },
};
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
      <div className="absolute left-[-5%] top-[-5%] h-[220px] w-[220px] rounded-full bg-purple-600/25 blur-[80px] dark:block hidden sm:left-[-15%] sm:top-[-10%] sm:h-[500px] sm:w-[500px] sm:blur-[140px]" />
      <div className="absolute right-[-5%] top-[20%] h-[200px] w-[200px] rounded-full bg-cyan-500/20 blur-[80px] dark:block hidden sm:right-[-10%] sm:h-[450px] sm:w-[450px] sm:blur-[140px]" />
      <div className="absolute bottom-[-10%] left-[20%] h-[220px] w-[220px] rounded-full bg-[#187B73]/25 blur-[80px] dark:block hidden sm:bottom-[-20%] sm:left-[30%] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

      {/* WHITE MODE GLOWS */}
      <div className="absolute left-[-5%] top-[-5%] h-[220px] w-[220px] rounded-full bg-purple-500/10 blur-[80px] dark:hidden sm:left-[-15%] sm:top-[-10%] sm:h-[500px] sm:w-[500px] sm:blur-[140px]" />
      <div className="absolute right-[-5%] top-[20%] h-[200px] w-[200px] rounded-full bg-[#187B73]/15 blur-[80px] dark:hidden sm:right-[-10%] sm:h-[450px] sm:w-[450px] sm:blur-[160px]" />
      <div className="absolute bottom-[-10%] left-[20%] h-[220px] w-[220px] rounded-full bg-cyan-400/10 blur-[80px] dark:hidden sm:bottom-[-20%] sm:left-[30%] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

      {/* Subtle radial texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.04),transparent_70%)]" />
    </div>

    <Navbar />

    <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10 text-zinc-900 dark:text-white">
      {children}
    </main>

    <footer className="mt-10 border-t border-white/10 bg-neutral-950/50 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2 text-sm text-white/50">
          <Image src="/YnovLogo.png" alt="Logo BDE" width={20} height={20} className="rounded-md opacity-60" />
          <span>BDE Ynov Toulouse</span>
        </div>
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} BDE Ynov Toulouse — Tous droits réservés
        </p>
      </div>
    </footer>

  </body>
</html>
  )
}


