import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'

/** Quiet metadata marker — duration, trip type, region. */
export function Pill({
  children,
  tone = 'default',
  className,
}: {
  children: ReactNode
  tone?: 'default' | 'light' | 'accent' | 'outline' | 'glass'
  className?: string
}) {
  const tones = {
    default: 'bg-ink/[0.055] text-muted',
    light: 'bg-ivory/15 text-ivory/90 backdrop-blur-sm',
    // Reliable over any photograph, bright or dark.
    glass: 'bg-ink/55 text-ivory backdrop-blur-md ring-1 ring-ivory/20',
    accent: 'bg-clay-wash text-clay-deep',
    outline: 'border border-border-strong text-muted',
  }
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-[0.75rem] font-medium tracking-[0.01em]',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}

/**
 * Filter toggle. Distinct from Pill because it is interactive — the affordance
 * needs to read as pressable, and it carries aria-pressed for screen readers.
 */
export function FilterChip({
  children,
  active,
  onClick,
}: {
  children: ReactNode
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'rounded-full border px-4 py-2 text-[0.8125rem] font-medium transition-all duration-300',
        'ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.97]',
        active
          ? 'border-pine bg-pine text-ivory'
          : 'border-border-strong bg-transparent text-muted hover:border-ink hover:text-ink',
      )}
    >
      {children}
    </button>
  )
}
