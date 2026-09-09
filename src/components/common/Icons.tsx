/**
 * A deliberately small icon set.
 *
 * The brief calls for minimal, meaningful iconography, so rather than pull in
 * an icon library (and the temptation to use all of it) these are the only
 * glyphs the site needs. All inherit currentColor and share a 1.5 stroke.
 */

type P = { className?: string }

const s = (className?: string) => ({
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  className: className ?? 'h-4 w-4',
})

export const ArrowRight = ({ className }: P) => (
  <svg {...s(className)}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
)

export const ArrowUpRight = ({ className }: P) => (
  <svg {...s(className)}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

export const ChevronDown = ({ className }: P) => (
  <svg {...s(className)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export const Close = ({ className }: P) => (
  <svg {...s(className)}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
)

export const Check = ({ className }: P) => (
  <svg {...s(className)}>
    <path d="m20 6-11 11-5-5" />
  </svg>
)

export const Minus = ({ className }: P) => (
  <svg {...s(className)}>
    <path d="M5 12h14" />
  </svg>
)

export const Clock = ({ className }: P) => (
  <svg {...s(className)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

export const Pin = ({ className }: P) => (
  <svg {...s(className)}>
    <path d="M20 10c0 5.5-8 12-8 12s-8-6.5-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="2.75" />
  </svg>
)

export const Phone = ({ className }: P) => (
  <svg {...s(className)}>
    <path d="M5 4h3.5l1.8 4.4-2.2 1.3a12 12 0 0 0 5.2 5.2l1.3-2.2 4.4 1.8V18a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3 6.2 2 2 0 0 1 5 4Z" />
  </svg>
)

export const Mail = ({ className }: P) => (
  <svg {...s(className)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </svg>
)

export const Compass = ({ className }: P) => (
  <svg {...s(className)}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
  </svg>
)

export const Menu = ({ className }: P) => (
  <svg {...s(className)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const Search = ({ className }: P) => (
  <svg {...s(className)}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
)

export const Sliders = ({ className }: P) => (
  <svg {...s(className)}>
    <path d="M4 7h10M18 7h2M4 17h4M12 17h8" />
    <circle cx="16" cy="7" r="2" />
    <circle cx="10" cy="17" r="2" />
  </svg>
)

/** Brand mark — the only filled icon, used for WhatsApp CTAs. */
export const WhatsApp = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className ?? 'h-4 w-4'}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.16c-.24.68-1.2 1.26-1.96 1.42-.52.11-1.2.2-3.5-.75-2.94-1.22-4.82-4.2-4.97-4.4-.14-.2-1.18-1.57-1.18-3s.75-2.12 1.02-2.41c.27-.29.58-.36.78-.36l.56.01c.18.01.42-.07.66.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.1.2-.15.32-.29.49l-.44.51c-.14.14-.29.3-.13.59.17.29.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.3 1.42.29.14.46.12.63-.07.17-.2.72-.85.92-1.14.19-.29.39-.24.65-.14.27.09 1.68.79 1.97.94.29.14.48.22.55.34.07.12.07.7-.17 1.38Z" />
  </svg>
)
