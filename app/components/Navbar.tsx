'use client'

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useMemo, useState } from "react"

const DISCORD_URL = "https://discord.gg/RA5BXbZKaW"
const INSTAGRAM_URL = "https://instagram.com/toncompte" // ← mets ton vrai lien

const NAV = [
  { href: "/evenements", label: "À venir" },
  { href: "/archives", label: "Archives" },
  { href: "/galerie", label: "Galerie" },
]

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(href + "/")
}

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

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
        <Link href="/evenements" className="flex items-center gap-3">
          <Image
            src="/YnovLogo.png"
            alt="Logo BDE"
            width={36}
            height={36}
            className="rounded-xl object-contain"
            priority
          />
          <div className="text-sm font-semibold tracking-tight text-white">
            Ynov Toulouse
          </div>
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden md:block">
          <div className="relative flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "relative rounded-full px-4 py-2 text-sm font-medium transition",
                  item.active ? "text-white" : "text-white/70 hover:text-white",
                ].join(" ")}
              >
                {item.label}
                {item.active && (
                  <span className="absolute inset-x-2 -bottom-[2px] h-[2px] rounded-full bg-gradient-to-r from-purple-500 to-indigo-500" />
                )}
              </Link>
            ))}
          </div>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">

          <a
  href={DISCORD_URL}
  target="_blank"
  rel="noopener noreferrer"
  className="hidden md:inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
>
  <Image
    src="/discord.svg"
    alt="Discord"
    width={18}
    height={18}
    className="invert"
  />
  Discord
</a>

        <a
  href={INSTAGRAM_URL}
  target="_blank"
  rel="noopener noreferrer"
  className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
>
  <Image
    src="/instagram.svg"
    alt="Instagram"
    width={18}
    height={18}
    className="invert"
  />
  Instagram
</a>

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
        <div className="border-t border-white/10 bg-neutral-950/80 backdrop-blur-xl md:hidden">
          <div className="mx-auto max-w-6xl px-6 py-4 grid gap-2">

            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}

            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-indigo-600 px-4 py-3 text-sm font-medium text-white"
            >
              Discord
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-4 py-3 text-sm font-medium text-white"
            >
              Instagram
            </a>

          </div>
        </div>
      )}
    </header>
  )
}