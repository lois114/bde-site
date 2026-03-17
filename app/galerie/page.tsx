import Link from "next/link"
import { sanity } from "../../lib/sanity"
import { galleryQuery } from "../../lib/queries"
import { ImageIcon } from "lucide-react"
import { LightboxGallery } from "../components/LightboxGallery"

export default async function Page() {
  const events = await sanity.fetch(galleryQuery)

  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="flex items-center gap-3 text-3xl font-semibold">
        <ImageIcon className="h-7 w-7 text-white" strokeWidth={2} />
        Galerie
      </h1>

      {events.length === 0 && (
        <p className="mt-6 opacity-70">Aucune photo disponible.</p>
      )}

      <div className="mt-8 space-y-12">
        {events.map((event: any) => (
          <section key={event._id}>
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold">{event.title}</h2>
              <Link
                href={`/evenements/${event.slug}`}
                className="text-sm underline"
              >
                Voir l’événement
              </Link>
            </div>

            <div className="mt-4">
              <LightboxGallery
                images={event.photoAlbum.slice(0, 8)}
                title={event.title}
                columnsClassName="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
              />
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}