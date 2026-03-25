import { sanity } from "../../lib/sanity"
import { upcomingEventsQuery } from "../../lib/queries"
import { EventsFilter } from "../components/EventsFilter"
import { CalendarDays } from "lucide-react"

export const revalidate = 60

export default async function Page() {
  const events = await sanity.fetch(upcomingEventsQuery)

  return (
    <main className="mx-auto max-w-6xl p-4 sm:p-8">
      <h1 className="flex items-center gap-3 text-3xl font-semibold">
        <CalendarDays className="h-7 w-7 text-[#FFFFF]" strokeWidth={2} />
        Evénements à venir
      </h1>

      {events.length === 0 ? (
        <p className="mt-6 opacity-70">Aucun événement à venir.</p>
      ) : (
        <EventsFilter events={events} />
      )}
    </main>
  )
}