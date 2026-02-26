'use client'
import Link from "next/link"
import { SanityImage } from "../../lib/SanityImage2"

function formatDateFR(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleString("fr-FR", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit"
  })
}

function isEventOver(event: any) {
  const now = new Date()
  const end = event.endDate
    ? new Date(event.endDate)
    : new Date(event.startDate)
  return end < now
}

export function EventCard({ event }: { event: any }) {
  const eventOver = isEventOver(event)

  return (
    <Link
      href={`/evenements/${event.slug}`}
     className="
group relative block overflow-hidden rounded-3xl
border-[3px] border-[#187B73]/40
bg-white
transition
hover:border-[#187B73]/70
hover:shadow-[0_15px_40px_rgba(24,123,115,0.15)]

transition
hover:-translate-y-1
hover:bg-[#D6ECEA]
hover:border-[#187B73]/50
hover:shadow-[0_20px_60px_rgba(24,123,115,0.25)]

dark:border-white/10
dark:bg-white/5
dark:hover:border-white/20
dark:hover:bg-white/10
"
    >
      {/* glow hover (dark only vraiment visible) */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl dark:block hidden" />
        <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-indigo-500/15 blur-3xl dark:block hidden" />
      </div>

      <div className="relative">
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          {event.poster ? (
            <SanityImage
              source={event.poster}
              alt={event.title}
              width={900}
              height={560}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.06]"
            />
          ) : (
            <div className="h-full w-full bg-black/5 dark:bg-white/5" />
          )}
        </div>

        {/* gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 dark:from-black/60" />

        {/* type badge */}
        {event.type && (
          <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs text-white/90 backdrop-blur">
            {event.type}
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="text-xs text-zinc-600 dark:text-white/60">
          {formatDateFR(event.startDate)}
          {event.location ? ` • ${event.location}` : ""}
        </div>

        <div className="mt-2 text-lg font-semibold leading-snug line-clamp-2 text-zinc-900 dark:text-white">
          {event.title}
        </div>

        {Array.isArray(event.tags) && event.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {event.tags.slice(0, 3).map((t: string) => (
              <span
                key={t}
                className="rounded-full bg-black/5 px-3 py-1 text-xs text-zinc-700
                           dark:bg-white/10 dark:text-white/80"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="mt-5 flex gap-3">
          <div
            className="
              flex-1 rounded-xl
              bg-black/5 px-4 py-2
              text-center text-sm font-medium text-zinc-800
              transition group-hover:bg-black/10

              dark:bg-white/10
              dark:text-white/80
              dark:group-hover:bg-white/20
            "
          >
            Voir les détails
          </div>

          {!eventOver && event.signupUrl && (
            <button
              type="button"
              className="flex-1 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:scale-[1.02]"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                window.open(event.signupUrl, "_blank", "noopener,noreferrer")
              }}
            >
              🎟️ S’inscrire
            </button>
          )}
        </div>
      </div>
    </Link>
  )
}