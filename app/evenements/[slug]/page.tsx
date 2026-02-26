import { sanity } from "../../../lib/sanity"
import { eventBySlugQuery } from "../../../lib/queries"
import { PortableText } from "@portabletext/react"
import { SanityImage } from "../../../lib/SanityImage2"
import { urlFor } from "../../../lib/sanityImage"


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
  if (!event) return <main className="p-6">Événement introuvable</main>
  const cover = event.poster ?? event.photoAlbum?.[0]
  const now = new Date()
  const isPast = new Date(event.startDate) < now

  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="text-3xl font-semibold">{event.title}</h1>
      <div className="mt-2 text-sm opacity-70">
        {new Date(event.startDate).toLocaleString("fr-FR")}
        {event.location ? ` • ${event.location}` : ""}
      </div>

      {cover ? (
  <div className="mt-6 overflow-hidden rounded-3xl border border-white/10">
    <SanityImage
      source={cover}
      alt={`Couverture ${event.title}`}
      width={1600}
      height={900}
      className="h-auto w-full object-cover"
    />
  </div>
) : null}

      {event.description?.length ? (
        <div className="prose mt-6 max-w-none">
          <PortableText value={event.description} />
        </div>
      ) : null}

      {event.photoAlbum?.length ? (
  <>
 {event.signupUrl && !isPast ? (
  <a
    href={event.signupUrl}
    target="_blank"
    rel="noreferrer"
    className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-purple-500/20 transition hover:scale-[1.02] hover:shadow-purple-500/40"
  >
    S’inscrire
  </a>
) : null}


  {event.driveFolderUrl ? (
  <a
    href={event.driveFolderUrl}
    target="_blank"
    rel="noreferrer"
    className="mt-6 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/15"
  >
    Télécharger l’album (Google Drive)
  </a>
) : null}

    <h2 className="mt-10 text-2xl font-semibold">Photos</h2>
    <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
      {event.photoAlbum.map((img: any, i: number) => (
        <div key={i} className="aspect-square overflow-hidden rounded-2xl border">
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


      {event.videos?.length ? (
        <>
          <h2 className="mt-10 text-2xl font-semibold">Vidéos</h2>
          <div className="mt-4 grid gap-6">
            {event.videos.map((url: string) => {
              const id = youtubeId(url)
              return id ? (
                <iframe
                  key={url}
                  className="aspect-video w-full rounded-2xl border"
                  src={`https://www.youtube.com/embed/${id}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <a key={url} className="underline" href={url} target="_blank" rel="noreferrer">
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