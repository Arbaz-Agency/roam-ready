import type { GalleryImage } from '../types'

/**
 * Gallery sequence, limited to the places Roam Ready currently runs trips to.
 * The order is a composition decision: each photograph sits next to a different
 * landscape so neighbouring tiles never repeat the same kind of view.
 */
export const gallery: GalleryImage[] = [
  {
    src: 'manaliValley',
    alt: 'Sunset light over the mountains above the Manali valley',
    caption: 'Evening over the Manali valley',
    place: 'Manali',
    ratio: 'landscape',
  },
  {
    src: 'kasolTown2',
    alt: 'The Parvati river running past Kasol',
    caption: 'The Parvati river at Kasol',
    place: 'Kasol',
    ratio: 'landscape',
  },
  {
    src: 'udaipurCityPalace',
    alt: 'The City Palace of Udaipur rising above Lake Pichola',
    caption: 'City Palace above Lake Pichola',
    place: 'Udaipur',
    ratio: 'landscape',
  },
  {
    src: 'dalLake4',
    alt: 'Houseboats moored on Dal Lake in Srinagar',
    caption: 'Houseboats on Dal Lake',
    place: 'Srinagar',
    ratio: 'landscape',
  },
  {
    src: 'kedarnathTemple',
    alt: 'The Kedarnath temple beneath snow-covered peaks',
    caption: 'Kedarnath temple under the snow line',
    place: 'Kedarnath',
    ratio: 'landscape',
  },
  {
    src: 'solangValley',
    alt: 'Solang Valley meadow beneath snow-covered peaks',
    caption: 'Solang Valley meadows',
    place: 'Solang Valley',
    ratio: 'landscape',
  },
  {
    src: 'dilwaraCeiling',
    alt: 'Carved marble ceiling inside the Dilwara temples',
    caption: 'Marble carving at Dilwara',
    place: 'Mount Abu',
    ratio: 'landscape',
  },
  {
    src: 'gulmargSunset',
    alt: 'A snowy sunset at Gulmarg',
    caption: 'Snowy sunset at Gulmarg',
    place: 'Gulmarg',
    ratio: 'landscape',
  },
  {
    src: 'haridwarAarti',
    alt: 'Evening aarti at Har ki Pauri, Haridwar',
    caption: 'Evening aarti at Har ki Pauri',
    place: 'Haridwar',
    ratio: 'landscape',
  },
  {
    src: 'sonamargThajiwas',
    alt: 'Thajiwas park above Sonamarg in Kashmir',
    caption: 'Thajiwas above Sonamarg',
    place: 'Sonamarg',
    ratio: 'landscape',
  },
  {
    src: 'nainitalLake',
    alt: 'Naini Lake at Nainital, surrounded by hills',
    caption: 'Naini Lake, Nainital',
    place: 'Nainital',
    ratio: 'landscape',
  },
  {
    src: 'manikaran',
    alt: 'The town of Manikaran on the banks of the Parvati river',
    caption: 'Manikaran on the Parvati river',
    place: 'Manikaran',
    ratio: 'landscape',
  },
]
