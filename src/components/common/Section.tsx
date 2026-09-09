import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'

/** The single horizontal rhythm for the whole site. */
export function Container({
  children,
  className,
  wide = false,
}: {
  children: ReactNode
  className?: string
  wide?: boolean
}) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-5 sm:px-8 lg:px-12',
        wide ? 'max-w-[110rem]' : 'max-w-[82rem]',
        className,
      )}
    >
      {children}
    </div>
  )
}

/** Vertical rhythm. `tone` is what lets sections alternate without gradients. */
export function Section({
  children,
  className,
  tone = 'ivory',
  size = 'md',
  id,
}: {
  children: ReactNode
  className?: string
  tone?: 'ivory' | 'shell' | 'pine' | 'none'
  size?: 'sm' | 'md' | 'lg'
  id?: string
}) {
  const tones = {
    ivory: 'bg-ivory text-ink',
    shell: 'bg-shell text-ink',
    pine: 'bg-pine text-ivory',
    none: '',
  }
  const sizes = {
    sm: 'py-16 sm:py-20',
    md: 'py-20 sm:py-28 lg:py-32',
    lg: 'py-24 sm:py-32 lg:py-40',
  }

  return (
    <section id={id} className={cn(tones[tone], sizes[size], className)}>
      {children}
    </section>
  )
}

interface HeadingProps {
  eyebrow?: string
  title: ReactNode
  intro?: ReactNode
  align?: 'left' | 'center'
  /** Inverts for use on the pine tone. */
  onDark?: boolean
  className?: string
  /** Rendered to the right of the title on wide screens — usually a CTA. */
  aside?: ReactNode
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  onDark = false,
  className,
  aside,
}: HeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-6 md:flex-row md:items-end md:justify-between',
        align === 'center' && 'md:flex-col md:items-center',
        className,
      )}
    >
      <div className={cn('max-w-2xl', align === 'center' && 'text-center')} data-reveal>
        {eyebrow && (
          <div
            className={cn(
              'mb-6 flex items-center gap-4',
              align === 'center' && 'justify-center',
            )}
          >
            <span className={cn('h-px w-10', onDark ? 'bg-clay-light' : 'bg-clay')} />
            <p className={cn('eyebrow', onDark && 'text-ivory/60')}>{eyebrow}</p>
          </div>
        )}
        <h2 className={cn('text-display', onDark && 'text-ivory')}>{title}</h2>
        {intro && (
          <p className={cn('lede mt-6', onDark && 'text-ivory/70')}>{intro}</p>
        )}
      </div>
      {aside && (
        <div className="shrink-0" data-reveal style={{ '--reveal-delay': '120ms' } as React.CSSProperties}>
          {aside}
        </div>
      )}
    </div>
  )
}

/** Hairline rule used instead of borders on cards. */
export function Rule({ className, onDark = false }: { className?: string; onDark?: boolean }) {
  return <div className={cn('h-px w-full', onDark ? 'bg-ivory/15' : 'bg-border', className)} />
}
