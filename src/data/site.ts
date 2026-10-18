/**
 * Brand + contact configuration.
 *
 * Contact details are the official Roam Ready details. Hours and social links
 * are still placeholders.
 */
export const site = {
  name: 'Roam Ready',
  tagline: 'Plan your escape to the mountains.',
  description:
    'Roam Ready plans hill, lake and temple tours from Delhi, across Kashmir, Uttarakhand, Himachal and Rajasthan — with vegetarian meals, daylight travel and one contact for your whole trip.',

  /** PLACEHOLDER — set to the production domain. */
  url: 'https://roamready.in',

  contact: {
    phoneDisplay: '+91 99584 46827',
    /** Digits only, country code first, used for wa.me links. */
    phoneRaw: '919958446827',
    email: 'roamready5@gmail.com',
    addressLines: ['Roam Ready', 'Mandir Marg, Pocket A, Gole Market', 'New Delhi, Delhi 110001'],
    hours: 'Mon – Sat, 10:00 – 19:00 IST',
  },

  social: [
    // PLACEHOLDER handles.
    { label: 'Instagram', href: 'https://www.instagram.com/rr_community' },
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61562554374866' },
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
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
] as const
