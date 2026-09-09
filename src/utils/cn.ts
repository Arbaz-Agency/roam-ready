import { extendTailwindMerge } from 'tailwind-merge'

/**
 * Class joiner with conflict resolution.
 *
 * Plain string concatenation is not enough: Tailwind resolves `bg-ivory` vs
 * `bg-pine` by stylesheet order, not by the order they appear in the class
 * attribute — so a caller's override silently loses to a component's default.
 * tailwind-merge strips the losing class so the last one written always wins.
 *
 * The custom groups below teach it about the project's own utilities.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [{ text: ['hero', 'display', 'title'] }],
    },
  },
})

type ClassValue = string | false | null | undefined

export const cn = (...parts: ClassValue[]) => twMerge(parts.filter(Boolean).join(' '))
