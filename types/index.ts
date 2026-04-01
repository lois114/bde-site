import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export type { SanityImageSource }

// Représente une image Sanity dans un tableau (avec _key ajouté par Sanity)
export interface SanityImageAsset {
  _type?: string
  _key?: string
  asset: { _ref: string; _type: 'reference' }
  hotspot?: { x: number; y: number; height: number; width: number }
  crop?: { top: number; bottom: number; left: number; right: number }
}

export type EventType = 'soiree' | 'sport' | 'integration' | 'culture' | 'autre'

export interface EventSummary {
  _id: string
  title: string
  slug: string
  startDate: string
  endDate?: string
  location?: string
  type?: EventType
  tags?: string[]
  poster?: SanityImageAsset
  signupUrl?: string
}

export interface EventDetail extends EventSummary {
  description?: unknown[]
  photoAlbum?: SanityImageAsset[]
  videos?: string[]
  driveFolderUrl?: string
}

export interface GalleryEvent {
  _id: string
  title: string
  slug: string
  startDate: string
  photoAlbum: SanityImageAsset[]
}
