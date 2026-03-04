export function toGoogleCalendarDateUTC(input: string | Date) {
  const d = typeof input === "string" ? new Date(input) : input
  // Format attendu : YYYYMMDDTHHMMSSZ (UTC)
  const pad = (n: number) => String(n).padStart(2, "0")
  return (
    d.getUTCFullYear() +
    pad(d.getUTCMonth() + 1) +
    pad(d.getUTCDate()) +
    "T" +
    pad(d.getUTCHours()) +
    pad(d.getUTCMinutes()) +
    pad(d.getUTCSeconds()) +
    "Z"
  )
}

export function buildGoogleCalendarUrl(opts: {
  title: string
  start: string | Date
  end?: string | Date
  details?: string
  location?: string
}) {
  const start = toGoogleCalendarDateUTC(opts.start)
  const end = toGoogleCalendarDateUTC(opts.end ?? opts.start)

  const url = new URL("https://calendar.google.com/calendar/render")
  url.searchParams.set("action", "TEMPLATE")
  url.searchParams.set("text", opts.title)
  url.searchParams.set("dates", `${start}/${end}`)
  if (opts.details) url.searchParams.set("details", opts.details)
  if (opts.location) url.searchParams.set("location", opts.location)

  return url.toString()
}