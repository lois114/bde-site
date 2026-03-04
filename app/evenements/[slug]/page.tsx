import { sanity } from "../../../lib/sanity"
import { eventBySlugQuery } from "../../../lib/queries"
import { PortableText } from "@portabletext/react"
import { SanityImage } from "../../../lib/SanityImage2"
import { AddToCalendarButton } from "@/app/components/AddToCalendarButton"

function youtubeId(url: string) {
  try {
    const u = new URL(url)
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1)
    return u.searchParams.get("v")
  } catch {
    return null
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const event = await sanity.fetch(eventBySlugQuery, { slug })
  if (!event) {
    return (
      <main className="mx-auto max-w-4xl p-6 text-zinc-900 dark:text-white">
        Événement introuvable
      </main>
    )
  }

  const cover = event.poster ?? event.photoAlbum?.[0]
  const now = new Date()
  const isPast = new Date(event.startDate) < now

  return (
    <main className="mx-auto max-w-4xl p-6 text-zinc-900 dark:text-white">
      {cover ? (
        <div className="mt-2 overflow-hidden rounded-3xl border border-black/10 dark:border-white/10">
          <SanityImage
            source={cover}
            alt={`Couverture ${event.title}`}
            width={1600}
            height={900}
            className="h-auto w-full object-cover"
          />
        </div>
      ) : null}

      {/* ✅ Bloc contenu entouré */}
      <section
        className="
          mt-6 rounded-3xl border-2
          border-[#187B73]/35 bg-white/80 backdrop-blur-xl
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          p-6

          dark:border-white/10 dark:bg-white/5
          dark:shadow-[0_25px_80px_rgba(0,0,0,0.35)]
        "
      >
        <h1 className="text-3xl font-semibold">{event.title}</h1>

        <div className="mt-2 text-sm text-zinc-600 dark:text-white/70">
          {new Date(event.startDate).toLocaleString("fr-FR")}
          {event.location ? ` • ${event.location}` : ""}
        </div>

        {event.description?.length ? (
          <div className="prose prose-zinc mt-6 max-w-none dark:prose-invert">
            <PortableText value={event.description} />
          </div>
        ) : null}

        {/* Actions (mieux dans le bloc) */}
        <div className="mt-6 flex flex-wrap gap-3">
          {!isPast ? <AddToCalendarButton event={event} /> : null}
          {event.signupUrl && !isPast ? (
            <a
              href={event.signupUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-purple-500/20 transition hover:scale-[1.02] hover:shadow-purple-500/40"
            >
              S’inscrire
            </a>
          ) : null}

          {event.driveFolderUrl ? (
            <a
              href={event.driveFolderUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-black/5 px-4 py-2 text-sm font-medium text-zinc-800 transition hover:bg-black/10
                         dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
            >
              Télécharger l’album (Google Drive)
            </a>
          ) : null}
        </div>
      </section>

      {/* Photos */}
      {event.photoAlbum?.length ? (
        <>
          <h2 className="mt-10 text-2xl font-semibold">Photos</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {event.photoAlbum.map((img: any, i: number) => (
              <div
                key={i}
                className="aspect-square overflow-hidden rounded-2xl border border-black/10 dark:border-white/10"
              >
                <SanityImage
                  source={img}
                  alt={`${event.title} photo ${i + 1}`}
                  width={800}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </>
      ) : null}

      {/* Videos */}
      {event.videos?.length ? (
        <>
          <h2 className="mt-10 text-2xl font-semibold">Vidéos</h2>
          <div className="mt-4 grid gap-6">
            {event.videos.map((url: string) => {
              const id = youtubeId(url)
              return id ? (
                <iframe
                  key={url}
                  className="aspect-video w-full rounded-2xl border border-black/10 dark:border-white/10"
                  src={`https://www.youtube.com/embed/${id}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <a
                  key={url}
                  className="underline text-[#187B73] hover:opacity-80 dark:text-emerald-300"
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {url}
                </a>
              )
            })}
          </div>
        </>
      ) : null}
    </main>
  )
}