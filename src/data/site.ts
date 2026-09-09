/**
 * Brand + contact configuration.
 *
 * ⚠️ PLACEHOLDER CONTACT DETAILS — every value marked below is invented for the
 * build and must be replaced with real Roam Ready details before launch.
 */
export const site = {
  name: 'Roam Ready',
  tagline: 'Go somewhere worth remembering.',
  description:
    'Roam Ready designs curated journeys across the Himalayas, Rajasthan and beyond — mountain escapes, spiritual trails and slow, well-planned travel.',

  /** PLACEHOLDER — set to the production domain. */
  url: 'https://roamready.in',

  contact: {
    /** PLACEHOLDER */
    phoneDisplay: '+91 98765 43210',
    /** PLACEHOLDER — digits only, country code first, used for wa.me links. */
    phoneRaw: '919876543210',
    /** PLACEHOLDER */
    email: 'hello@roamready.in',
    /** PLACEHOLDER */
    addressLines: ['Roam Ready Travel', 'Sector 17, Chandigarh', 'Punjab 160017, India'],
    hours: 'Mon – Sat, 10:00 – 19:00 IST',
  },

  social: [
    // PLACEHOLDER handles.
    { label: 'Instagram', href: 'https://instagram.com/' },
    { label: 'Facebook', href: 'https://facebook.com/' },
    { label: 'YouTube', href: 'https://youtube.com/' },
  ],
} as const

/** Builds a wa.me deep link with a prefilled, context-aware message. */
export const whatsappLink = (message?: string) => {
  const text = message ?? `Hi Roam Ready, I'd like to plan a trip.`
  return `https://wa.me/${site.contact.phoneRaw}?text=${encodeURIComponent(text)}`
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Packages', to: '/packages' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
] as const
