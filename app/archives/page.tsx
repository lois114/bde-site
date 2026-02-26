import Link from "next/link"
import { sanity } from "../../lib/sanity"
import { pastEventsQuery } from "../../lib/queries"
import { EventCard } from "../components/EventCard"


export default async function Page() {
  const events = await sanity.fetch(pastEventsQuery)

  return (
    <main className="mx-auto max-w-6xl p-8">
      <h1 className="text-3xl font-semibold">Archives</h1>

      {events.length === 0 && (
        <p className="mt-6 opacity-70">Aucun événement passé.</p>
      )}

     <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
       {events.map((event: any) => (
         <EventCard key={event._id} event={event} />
       ))}
     </div>
    </main>
  )
}