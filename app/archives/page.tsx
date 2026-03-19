import { sanity } from "../../lib/sanity"
import { pastEventsQuery } from "../../lib/queries"
import { EventsFilter } from "../components/EventsFilter"
import { Archive } from "lucide-react"

export const revalidate = 60

export default async function Page() {
  const events = await sanity.fetch(pastEventsQuery)

  return (
    <main className="mx-auto max-w-6xl p-4 sm:p-8">
      <h1 className="flex items-center gap-3 text-3xl font-semibold">
        <Archive className="h-7 w-7 text-[#FFFFF]" strokeWidth={2} />
        Archives
      </h1>

      {events.length === 0 ? (
        <p className="mt-6 opacity-70">Aucun événement passé.</p>
      ) : (
        <EventsFilter events={events} />
      )}
    </main>
  )
}