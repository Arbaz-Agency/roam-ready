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
    packages: ['manali-kasol', 'shimla-manali-kasol'],
  },
  {
    slug: 'kasol',
    name: 'Kasol',
    region: 'Himachal Pradesh',
    blurb: 'A riverside village in the Parvati valley, built for slowness.',
    image: 'kasolTown',
    imageAlt: 'Kasol village beside the Parvati river',
    categories: ['Mountain', 'Adventure', 'Couple'],
    packages: ['manali-kasol', 'kasol-kheerganga', 'shimla-manali-kasol'],
  },
  {
    slug: 'kheerganga',
    name: 'Kheerganga',
    region: 'Himachal Pradesh',
    blurb: 'Hot springs in a high meadow, five hours uphill from the nearest road.',
    image: 'kheergangaCamp',
    imageAlt: 'The camping meadow at Kheerganga',
    categories: ['Adventure', 'Mountain'],
    packages: ['kasol-kheerganga'],
  },
  {
    slug: 'shimla',
    name: 'Shimla',
    region: 'Himachal Pradesh',
    blurb: 'A colonial hill station layered along a forested ridge.',
    image: 'shimlaCity',
    imageAlt: 'The city of Shimla along the ridge',
    categories: ['Heritage', 'Family', 'Leisure'],
    packages: ['shimla-manali-kasol'],
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
    slug: 'badrinath',
    name: 'Badrinath',
    region: 'Uttarakhand',
    blurb: 'The last temple before the border, reached by road through the gorge.',
    image: 'badrinathTemple',
    imageAlt: 'The Badrinath temple in early morning light',
    categories: ['Spiritual', 'Family'],
    packages: ['badrinath'],
  },
  {
    slug: 'rishikesh',
    name: 'Rishikesh',
    region: 'Uttarakhand',
    blurb: 'Whitewater by day, lamplight on the river at dusk.',
    image: 'lakshmanJhula2',
    imageAlt: 'The Lakshman Jhula bridge at Rishikesh',
    categories: ['Adventure', 'Spiritual', 'Group'],
    packages: ['rishikesh', 'kedarnath', 'badrinath'],
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
      { name: 'Kheerganga', slug: 'kheerganga' },
      { name: 'Kashmir', slug: 'kashmir' },
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
      { name: 'Badrinath', slug: 'badrinath' },
      { name: 'Rishikesh', slug: 'rishikesh' },
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
