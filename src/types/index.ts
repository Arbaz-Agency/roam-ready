/**
 * Roam Ready — content schema.
 *
 * Every page renders from these shapes. Adding a new journey means adding one
 * `TourPackage` object to `data/packages.ts`; no component needs to change.
 */

import type { MediaKey } from '../data/media'

export type TripType =
  | 'Adventure'
  | 'Mountain'
  | 'Spiritual'
  | 'Heritage'
  | 'Family'
  | 'Couple'
  | 'Group'
  | 'Leisure'

export type Region = 'Himachal Pradesh' | 'Uttarakhand' | 'Kashmir' | 'Rajasthan'

export interface ItineraryDay {
  day: number
  title: string
  description: string
  places: string[]
  /** Indicative operational detail — confirmed at the time of booking. */
  meals: string
  stay: string
  transport: string
  image: MediaKey
  imageAlt: string
}

export interface Place {
  name: string
  description: string
  image: MediaKey
  imageAlt: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface TripInfo {
  bestTime: string
  weather: string
  whatToCarry: string[]
  tips: string[]
  important: string[]
}

export interface TourPackage {
  slug: string
  /** Display name, e.g. "Manali × Kasol". */
  name: string
  /** Plain name for titles, breadcrumbs and structured data. */
  plainName: string
  tagline: string
  region: Region
  /** Nights drive numeric duration filtering. */
  nights: number
  duration: string
  /** Indicative starting price in INR. PLACEHOLDER — confirm before launch. */
  priceFrom: number
  heroImage: MediaKey
  heroImageAlt: string
  cardImage: MediaKey
  summary: string
  description: string[]
  bestFor: string[]
  travelStyle: string
  tripTypes: TripType[]
  highlights: string[]
  itinerary: ItineraryDay[]
  inclusions: string[]
  exclusions: string[]
  placesCovered: Place[]
  info: TripInfo
  faqs: FAQ[]
  /** Surfaces the package in the homepage editorial composition. */
  featured?: boolean
}

export interface Destination {
  slug: string
  name: string
  region: string
  blurb: string
  image: MediaKey
  imageAlt: string
  categories: TripType[]
  /** Package slugs travelling here. */
  packages: string[]
}

export interface Testimonial {
  quote: string
  name: string
  trip: string
  location: string
}

export interface GalleryImage {
  src: MediaKey
  alt: string
  caption: string
  place: string
  /** Drives the masonry row-span so the grid stays editorial, not square. */
  ratio: 'portrait' | 'landscape' | 'square'
}

export interface Collection {
  title: string
  description: string
  image: MediaKey
  imageAlt: string
  destinations: { name: string; slug: string }[]
}
