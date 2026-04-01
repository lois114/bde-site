import Link from "next/link"
import Image from "next/image"
import { Archive, CalendarDays, Image as ImageIcon, Sparkles } from "lucide-react"

const PARTNERS = [
  { name: "McDonald's", logo: "/macdo.png", url: "https://www.mcdonalds.com/fr/fr-fr.html" },
  { name: "Jow", logo: "/jow.png", url: "https://jow.fr" },
  { name: "Revolut", logo: "/revolut.jpg", url: "https://revolut.com" },
  { name: "Rose Festival", logo: "/rose.jpg", url: "https://www.rosefestival.fr" },
  { name: "GaroRock", logo: "/garorock.png", url: "https://www.garorock.com" },
]

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl p-4 sm:p-8">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-8 lg:p-12">
        {/* background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#187B73]/25 blur-3xl" />
          <div className="absolute -right-28 -bottom-28 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/10 to-transparent dark:from-white/10 dark:via-transparent" />
        </div>

        <div className="relative grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-800 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-white/80">
              <Sparkles className="h-4 w-4 text-[#187B73]" />
              BDE • Ynov Toulouse
            </div>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl lg:text-5xl">
              Des events, des souvenirs,{" "}
              <span className="bg-gradient-to-r from-[#187B73] to-indigo-500 bg-clip-text text-transparent">
                toute l’année
              </span>
              .
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-zinc-700 dark:text-white/70">
              Retrouve les prochains événements du BDE, les archives, et la galerie
              photo — tout au même endroit.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/evenements"
                className="
                  inline-flex items-center gap-2
                  rounded-xl
                  bg-gradient-to-r from-[#187B73] to-[#1f9a91]
                  px-6 py-3
                  font-semibold text-white
                  shadow-lg shadow-[#187B73]/20
                  transition
                  hover:-translate-y-0.5
                  hover:shadow-xl hover:shadow-[#187B73]/30
                  active:translate-y-0
                "
              >
                <CalendarDays className="h-5 w-5" />
                Voir les événements
              </Link>

              <Link
                href="/galerie"
                className="
                  inline-flex items-center gap-2
                  rounded-xl
                  border border-black/10
                  bg-white/80
                  px-6 py-3
                  font-semibold
                  text-zinc-900
                  backdrop-blur
                  transition
                  hover:-translate-y-0.5
                  hover:bg-black/5
                  hover:shadow-md
                  dark:border-white/10
                  dark:bg-white/10
                  dark:text-white
                  dark:hover:bg-white/20
                "
              >
                <ImageIcon className="h-5 w-5" />
                Galerie
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white/60 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/10">
              <Image
                src="/ACC.jpg"
                alt="Ambiance d’un événement du BDE"
                width={1200}
                height={900}
                priority
                className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[420px]"
              />
            </div>

            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-black/10 bg-white/85 px-4 py-3 text-sm font-medium text-zinc-800 shadow-lg backdrop-blur dark:border-white/10 dark:bg-black/30 dark:text-white">
              🎉 Vie étudiante • Soirées • Souvenirs
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/evenements"
          className="group rounded-3xl border border-black/10 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-[#187B73]/10 p-3 text-[#187B73] dark:bg-white/10 dark:text-white">
              <CalendarDays className="h-6 w-6" />
            </div>
            <div className="text-lg font-semibold text-zinc-900 dark:text-white">
              Événements
            </div>
          </div>
          <p className="mt-3 text-sm text-zinc-700 dark:text-white/70">
            Consulte les prochains events du BDE.
          </p>
        </Link>

        <Link
          href="/archives"
          className="group rounded-3xl border border-black/10 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-indigo-500/10 p-3 text-indigo-600 dark:bg-white/10 dark:text-white">
              <Archive className="h-6 w-6" />
            </div>
            <div className="text-lg font-semibold text-zinc-900 dark:text-white">
              Archives
            </div>
          </div>
          <p className="mt-3 text-sm text-zinc-700 dark:text-white/70">
            Retrouve les events passés et recaps.
          </p>
        </Link>

        <Link
          href="/galerie"
          className="group rounded-3xl border border-black/10 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-pink-500/10 p-3 text-pink-600 dark:bg-white/10 dark:text-white">
              <ImageIcon className="h-6 w-6" />
            </div>
            <div className="text-lg font-semibold text-zinc-900 dark:text-white">
              Galerie
            </div>
          </div>
          <p className="mt-3 text-sm text-zinc-700 dark:text-white/70">
            Les meilleures photos des events.
          </p>
        </Link>
      </section>

      {/* PARTENAIRES */}
      <section className="mt-10 rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/5 sm:p-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-white/30">
          Nos partenaires
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {PARTNERS.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 transition hover:-translate-y-0.5"
            >
              <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition group-hover:shadow-md dark:border-white/10 dark:bg-white">
                <Image
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-xs font-medium text-zinc-600 dark:text-white/60">
                {partner.name}
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}