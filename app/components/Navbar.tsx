'use client'

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useMemo, useState,useEffect } from "react"
import ThemeSwitch from "../components/ThemeSwitch";
import { CalendarDays, Archive, Image as ImageIcon } from "lucide-react"

const DISCORD_URL = "https://discord.gg/RA5BXbZKaW"
const INSTAGRAM_URL = "https://www.instagram.com/bde.ynovtoulouse/?hl=fr" // ← mets ton vrai lien
const TWITCH_URL = "https://www.twitch.tv/bde_ynot" // ← mets ton vrai lien
const TIKTOK_URL = "https://www.tiktok.com/@bde.ynov.toulouse" // ← mets le vrai

const NAV = [
  { href: "/evenements", label: "À venir", icon: CalendarDays },
  { href: "/archives", label: "Archives", icon: Archive },
  { href: "/galerie", label: "Galerie", icon: ImageIcon },
]



function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(href + "/")
}

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

   useEffect(() => {
    setOpen(false)
  }, [pathname])


  const items = useMemo(
    () =>
      NAV.map((item) => ({
        ...item,
        active: isActive(pathname, item.href),
      })),
    [pathname]
  )

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
       <Link
  href="/"
  className="group flex items-center gap-3 rounded-2xl px-3 py-2 transition hover:bg-white/5"
>
  <div className="relative">
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/30 to-purple-500/30 blur-md opacity-0 transition group-hover:opacity-100" />
    
    <Image
      src="/YnovLogo.png"
      alt="Logo BDE"
      width={40}
      height={40}
      className="relative rounded-xl object-contain"
      priority
    />
  </div>

  <div className="flex flex-col leading-tight">
    <span className="text-xs uppercase tracking-widest text-white/50">
      BDE
    </span>
    <span className="text-sm font-semibold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
      Ynov Toulouse
    </span>
  </div>
</Link>

        {/* Navigation desktop */}
        <nav className="hidden md:block">
          <div className="relative flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
            {items.map((item) => {
  const Icon = item.icon

  return (
    <Link
      key={item.href}
      href={item.href}
      className={[
        "relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition",
        item.active ? "text-white" : "text-white/70 hover:text-white",
      ].join(" ")}
    >
      <Icon size={16} strokeWidth={2} />
      {item.label}

      {item.active && (
        <span className="absolute inset-x-2 -bottom-[2px] h-[2px] rounded-full bg-gradient-to-r from-purple-500 to-indigo-500" />
      )}
    </Link>
  )
})}
          </div>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
<ThemeSwitch />
          <div className="relative hidden md:block">
  <svg width="0" height="0" style={{ position: "absolute" }}>
    <defs>
      <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
        <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5" />
      </clipPath>
    </defs>
  </svg>

  <div className="absolute inset-0 bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl" />

  <div className="relative flex items-end gap-x-2 p-2">
    
    {/* Instagram */}
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{ clipPath: "url(#squircleClip)" }}
      className="w-8 h-8 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg border border-pink-500/40 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
    >
      <Image
        src="/instagram.svg"
        alt="Instagram"
        width={20}
        height={20}
        className="invert"
      />
    </a>
{/* Twitch */}
<a
  href={TWITCH_URL}
  target="_blank"
  rel="noopener noreferrer"
  style={{ clipPath: "url(#squircleClip)" }}
  className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center shadow-lg border border-purple-500/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
>
  <Image
    src="/twitch.svg"
    alt="Twitch"
    width={20}
    height={20}
    className="invert"
  />
</a>
    {/* Discord */}
    <a
      href={DISCORD_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{ clipPath: "url(#squircleClip)" }}
      className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-xl flex items-center justify-center shadow-lg border border-indigo-500/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
    >
      <Image
        src="/discord.svg"
        alt="Discord"
        width={20}
        height={20}
        className="invert"
      />
    </a>

    {/* TIKTOK */}
    <a
      href={TIKTOK_URL    }
      target="_blank"
      rel="noopener noreferrer"
      style={{ clipPath: "url(#squircleClip)" }}
      className="w-8 h-8 bg-gradient-to-br from-black to-neutral-800 rounded-xl flex items-center justify-center shadow-lg border border-white/10 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
 >
      <Image
        src="/tiktok.svg"
        alt="Tiktok"
        width={20}
        height={20}
        className="invert"
      />
    </a>

  </div>
</div>

          {/* Mobile burger */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 transition hover:bg-white/10 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="text-lg">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
  <div className="border-t border-white/10 bg-neutral-950/90 backdrop-blur-xl md:hidden animate-in slide-in-from-top duration-300">
    <div className="mx-auto max-w-6xl px-6 py-6 space-y-3">

            {items.map((item) => {
  const Icon = item.icon

  return (
    <Link
      key={item.href}
      href={item.href}
      onClick={() => setOpen(false)}
      className={[
        "flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium transition",
        item.active
          ? "text-white bg-white/10"
          : "text-white/70 hover:text-white hover:bg-white/10",
      ].join(" ")}
    >
      <Icon size={18} />
      {item.label}
    </Link>
  )
})}

            <div className="pt-4 border-t border-white/10 flex items-center justify-center gap-4">
  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
    <Image src="/instagram.svg" alt="Instagram" width={22} height={22} className="opacity-80 hover:opacity-100 invert" />
  </a>

  <a href={TWITCH_URL} target="_blank" rel="noopener noreferrer">
    <Image src="/twitch.svg" alt="Twitch" width={22} height={22} className="opacity-80 hover:opacity-100 invert" />
  </a>

  <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
    <Image src="/discord.svg" alt="Discord" width={22} height={22} className="opacity-80 hover:opacity-100 invert" />
  </a>

  <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer">
    <Image src="/tiktok.svg" alt="Tiktok" width={22} height={22} className="opacity-80 hover:opacity-100 invert" />
  </a>
</div>

          </div>
        </div>
      )}
    </header>
  )
}