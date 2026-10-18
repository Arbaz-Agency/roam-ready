import type { Collection, Destination, TripType } from '../types'

/**
 * Destinations are the discovery layer — a traveller who knows *where* but not
 * *which package*. Each links back to the journeys that go there.
 */
export const destinations: Destination[] = [
  {
    slug: 'manali',
    name: 'Manali',
    region: 'Himachal Pradesh',
    blurb: 'Deodar forest, an alpine valley, and a tunnel through to Lahaul.',
    image: 'manaliValley',
    imageAlt: 'The snow-covered Rohtang range above Manali',
    categories: ['Mountain', 'Adventure', 'Family', 'Couple'],
    packages: ['manali-kasol'],
  },
  {
    slug: 'kasol',
    name: 'Kasol',
    region: 'Himachal Pradesh',
    blurb: 'A riverside village in the Parvati valley, built for slowness.',
    image: 'kasolTown',
    imageAlt: 'Kasol village beside the Parvati river',
    categories: ['Mountain', 'Adventure', 'Couple'],
    packages: ['manali-kasol'],
  },
  {
    slug: 'kashmir',
    name: 'Kashmir',
    region: 'Jammu & Kashmir',
    blurb: 'Meadow, lake and pine — Srinagar, Pahalgam, Gulmarg and Sonamarg.',
    image: 'pahalgamValley',
    imageAlt: 'The Pahalgam valley in Kashmir',
    categories: ['Mountain', 'Couple', 'Family', 'Leisure'],
    packages: ['kashmir'],
  },
  {
    slug: 'udaipur',
    name: 'Udaipur',
    region: 'Rajasthan',
    blurb: 'A city built around water, and the light that comes off it.',
    image: 'udaipurPicholaSunset',
    imageAlt: 'Sunset over Lake Pichola in Udaipur',
    categories: ['Heritage', 'Couple', 'Leisure'],
    packages: ['udaipur-mount-abu'],
  },
  {
    slug: 'mount-abu',
    name: 'Mount Abu',
    region: 'Rajasthan',
    blurb: 'Rajasthan’s only hill station, and the marble of Dilwara.',
    image: 'nakkiSunset',
    imageAlt: 'Sunset at Nakki Lake, Mount Abu',
    categories: ['Heritage', 'Family', 'Couple'],
    packages: ['udaipur-mount-abu'],
  },
  {
    slug: 'kedarnath',
    name: 'Kedarnath',
    region: 'Uttarakhand',
    blurb: 'A stone temple at 3,583 metres, sixteen kilometres on foot.',
    image: 'kedarnathTemple',
    imageAlt: 'The Kedarnath temple beneath snow peaks',
    categories: ['Spiritual', 'Adventure'],
    packages: ['kedarnath'],
  },
  {
    slug: 'nainital',
    name: 'Nainital',
    region: 'Uttarakhand',
    blurb: 'A lake town in the Kumaon hills, a short run from Delhi.',
    image: 'rishikeshView',
    imageAlt: 'A lake view in the Uttarakhand hills',
    categories: ['Mountain', 'Family', 'Couple', 'Leisure'],
    packages: ['nainital'],
  },
]

export const destinationCategories: TripType[] = [
  'Mountain',
  'Adventure',
  'Spiritual',
  'Heritage',
  'Family',
  'Couple',
]

/**
 * Editorial groupings for the homepage. Curation, not taxonomy — these read as
 * a point of view rather than a filter menu.
 */
export const collections: Collection[] = [
  {
    title: 'Into the Mountains',
    description:
      'Altitude, pine and cold mornings. The journeys where the landscape does most of the talking.',
    image: 'storyMountains',
    imageAlt: 'Snow-covered Himalayan peaks above a valley',
    destinations: [
      { name: 'Manali', slug: 'manali' },
      { name: 'Kasol', slug: 'kasol' },
      { name: 'Kashmir', slug: 'kashmir' },
      { name: 'Nainital', slug: 'nainital' },
    ],
  },
  {
    title: 'Journeys of Faith',
    description:
      'Long walks, early starts and old stone. Routes shaped by pilgrimage rather than by sightseeing.',
    image: 'storyFaith',
    imageAlt: 'The pilgrim trail leading towards Kedarnath',
    destinations: [
      { name: 'Kedarnath', slug: 'kedarnath' },
    ],
  },
  {
    title: 'Culture & Escape',
    description:
      'Water, marble and evening light — heritage travel with somewhere cooler to retreat to.',
    image: 'storyCulture',
    imageAlt: 'The lake palace on Lake Pichola seen from Udaipur City Palace',
    destinations: [
      { name: 'Udaipur', slug: 'udaipur' },
      { name: 'Mount Abu', slug: 'mount-abu' },
    ],
  },
]

export const destinationBySlug = new Map(destinations.map((d) => [d.slug, d]))
