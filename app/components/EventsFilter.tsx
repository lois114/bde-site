'use client'

import { useState } from "react"
import { EventCard } from "./EventCard"
import type { EventSummary } from "../../types"

const CATEGORIES = [
  { label: "Tous", value: null },
  { label: "Soirée", value: "soiree" },
  { label: "Sport", value: "sport" },
  { label: "Intégration", value: "integration" },
  { label: "Culture", value: "culture" },
  { label: "Autre", value: "autre" },
]

export function EventsFilter({ events }: { events: EventSummary[] }) {
  const [active, setActive] = useState<string | null>(null)

  const filtered = active ? events.filter((e) => e.type === active) : events

  return (
    <>
      {/* Filtres */}
      <div className="mt-6 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.label}
            onClick={() => setActive(cat.value)}
            className={[
              "rounded-full px-4 py-1.5 text-sm font-medium transition border",
              active === cat.value
                ? "bg-[#187B73] border-[#187B73] text-white shadow-md"
                : "border-zinc-200 bg-zinc-100 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200 dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:text-white dark:hover:bg-white/10",
            ].join(" ")}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Résultats */}
      {filtered.length === 0 ? (
        <p className="mt-8 opacity-70">Aucun événement dans cette catégorie.</p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      )}
    </>
  )
}
