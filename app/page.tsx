import Link from "next/link"
import { CalendarDays, Image as ImageIcon, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl p-8">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-12">
        {/* background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#187B73]/25 blur-3xl" />
          <div className="absolute -right-28 -bottom-28 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/10 to-transparent dark:from-white/10 dark:via-transparent" />
        </div>

        <div className="relative">
          {/* badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-800 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-white/80">
            <Sparkles className="h-4 w-4 text-[#187B73]" />
            BDE • Ynov Toulouse
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
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

          {/* CTA */}
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

          {/* mini stats */}
          {/* <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-black/10 bg-white/70 p-4 backdrop-blur dark:border-white/10 dark:bg-white/10">
              <div className="text-xs font-medium text-zinc-600 dark:text-white/60">
                Ambiance
              </div>
              <div className="mt-1 text-lg font-semibold text-zinc-900 dark:text-white">
                Soirées & activités
              </div>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white/70 p-4 backdrop-blur dark:border-white/10 dark:bg-white/10">
              <div className="text-xs font-medium text-zinc-600 dark:text-white/60">
                Infos
              </div>
              <div className="mt-1 text-lg font-semibold text-zinc-900 dark:text-white">
                Dates, lieux, billets
              </div>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white/70 p-4 backdrop-blur dark:border-white/10 dark:bg-white/10">
              <div className="text-xs font-medium text-zinc-600 dark:text-white/60">
                Souvenirs
              </div>
              <div className="mt-1 text-lg font-semibold text-zinc-900 dark:text-white">
                Photos & recaps
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Quick links section (optionnel, mais clean) */}
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
          <div className="mt-4 text-sm font-medium text-[#187B73] group-hover:underline">
            
          </div>
        </Link>

        <Link
          href="/archives"
          className="group rounded-3xl border border-black/10 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-indigo-500/10 p-3 text-indigo-600 dark:bg-white/10 dark:text-white">
              <CalendarDays className="h-6 w-6" />
            </div>
            <div className="text-lg font-semibold text-zinc-900 dark:text-white">
              Archives
            </div>
          </div>
          <p className="mt-3 text-sm text-zinc-700 dark:text-white/70">
            Retrouve les events passés et recaps.
          </p>
          <div className="mt-4 text-sm font-medium text-indigo-600 group-hover:underline dark:text-white/80">
           
          </div>
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
          <div className="mt-4 text-sm font-medium text-pink-600 group-hover:underline dark:text-white/80">
            
          </div>
        </Link>
      </section>
    </main>
  )
}