import EventCardSkeleton from "../components/EventCardSkeleton"
import { Archive } from "lucide-react"

export default function Loading() {
  return (
    <main className="mx-auto max-w-6xl p-8">
      <h1 className="flex items-center gap-3 text-3xl font-semibold">
        <Archive className="h-7 w-7" strokeWidth={2} />
        Archives
      </h1>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <EventCardSkeleton key={i} />
        ))}
      </div>
    </main>
  )
}