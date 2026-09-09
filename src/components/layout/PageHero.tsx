import type { ReactNode } from 'react'
import type { MediaKey } from '../../data/media'
import { cn } from '../../utils/cn'
import { Media } from '../common/Media'
import { Container } from '../common/Section'
import { Breadcrumbs, type Crumb } from '../navigation/Breadcrumbs'

/**
 * Shared hero for the interior pages.
 *
 * Same stacked treatment as the homepage hero — grade, scrim, bloom, grain —
 * so every page opens in the same visual language, just shorter so interior
 * content is reached quickly.
 */
export function PageHero({
  image,
  imageAlt,
  eyebrow,
  title,
  intro,
  crumbs,
  actions,
  height = 'md',
}: {
  image: MediaKey
  imageAlt: string
  eyebrow?: string
  title: ReactNode
  intro?: string
  crumbs?: Crumb[]
  actions?: ReactNode
  height?: 'sm' | 'md'
}) {
  const h = height === 'md' ? 'min-h-[76svh]' : 'min-h-[60svh]'

  return (
    <section className={cn('grain relative w-full overflow-hidden bg-pine', h)}>
      <Media
        name={image}
        alt={imageAlt}
        priority
        reveal={false}
        sizes="100vw"
        fill
        imgClassName="h-full w-full object-cover animate-kenburns motion-reduce:animate-none"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-gradient-to-br from-clay/25 via-transparent to-pine/70 mix-blend-soft-light"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[2] bg-gradient-to-b from-ink/75 via-ink/30 to-ink/90"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[2] bg-gradient-to-r from-ink/65 via-transparent to-transparent"
      />
      <div
        aria-hidden="true"
        className="glow-clay animate-drift absolute -right-[12%] top-0 z-[3] h-[36rem] w-[36rem] opacity-45 motion-reduce:animate-none"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[3] shadow-[inset_0_0_14rem_rgba(12,14,11,0.6)]"
      />

      <div className={cn('relative z-10 flex flex-col justify-between pb-16 pt-28 sm:pt-32', h)}>
        <Container wide>
          {crumbs && (
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <Breadcrumbs items={crumbs} onDark />
            </div>
          )}
        </Container>

        <Container wide>
          <div className="max-w-3xl">
            {eyebrow && (
              <div
                className="mb-7 flex items-center gap-4 animate-fade-up"
                style={{ animationDelay: '120ms' }}
              >
                <span className="h-px w-10 bg-clay-light" />
                <p className="eyebrow text-ivory/75">{eyebrow}</p>
              </div>
            )}
            <h1
              className="text-display text-ivory drop-shadow-[0_2px_26px_rgba(12,14,11,0.5)] animate-fade-up"
              style={{ animationDelay: '200ms' }}
            >
              {title}
            </h1>
            {intro && (
              <p
                className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-ivory/80 sm:text-[1.125rem] animate-fade-up"
                style={{ animationDelay: '300ms' }}
              >
                {intro}
              </p>
            )}
            {actions && (
              <div
                className="mt-9 flex flex-wrap gap-3 animate-fade-up"
                style={{ animationDelay: '400ms' }}
              >
                {actions}
              </div>
            )}
          </div>
        </Container>
      </div>
    </section>
  )
}
