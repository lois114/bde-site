import Link from "next/link"
import { sanity } from "../../lib/sanity"
import { galleryQuery } from "../../lib/queries"
import { SanityImage } from "../../lib/SanityImage2"
import { ImageIcon } from "lucide-react"
export default async function Page() {
  const events = await sanity.fetch(galleryQuery)

  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="flex items-center gap-3 text-3xl font-semibold">
  <ImageIcon className="h-7 w-7 text-[#FFFFF]" strokeWidth={2} />
  Galerie
</h1>
      {events.length === 0 && (
        <p className="mt-6 opacity-70">Aucune photo disponible.</p>
      )}

      <div className="mt-8 space-y-12">
        {events.map((event: any) => (
          <section key={event._id}>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{event.title}</h2>
              <Link
                href={`/evenements/${event.slug}`}
                className="text-sm underline"
              >
                Voir l’événement
              </Link>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {event.photoAlbum.slice(0, 8).map((img: any, i: number) => (
                <div key={i} className="overflow-hidden rounded-2xl border">
                  <SanityImage
                    source={img}
                    alt={`${event.title} photo ${i + 1}`}
                    width={600}
                    height={600}
                    className="aspect-square w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}