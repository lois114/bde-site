import { MetadataRoute } from "next"
import { sanity } from "@/lib/sanity"

const BASE_URL = "https://ynov-toulouse-bde.vercel.app"

const slugsQuery = `*[_type == "event" && published == true]{ "slug": slug.current }`

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const events = await sanity.fetch<{ slug: string }[]>(slugsQuery)

  const eventUrls = events.map((e) => ({
    url: `${BASE_URL}/evenements/${e.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/evenements`, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/archives`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/galerie`, changeFrequency: "weekly", priority: 0.7 },
    ...eventUrls,
  ]
}
