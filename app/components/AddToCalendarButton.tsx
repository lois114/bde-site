"use client"

import { buildGoogleCalendarUrl } from "./calendar"

export function AddToCalendarButton({ event }: { event: any }) {
  const url = buildGoogleCalendarUrl({
    title: event.title,
    start: event.startDate,
    end: event.endDate,
    location: event.location,
    details: event.description
      ? `${event.description}\n\n${event.signupUrl ? `Inscription: ${event.signupUrl}` : ""}`
      : event.signupUrl
        ? `Inscription: ${event.signupUrl}`
        : undefined,
  })

  return (
    <button
      type="button"
      className="flex-1 rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-black/5
                 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        window.open(url, "_blank", "noopener,noreferrer")
      }}
    >
      📅 Ajouter à Google Calendar
    </button>
  )
}