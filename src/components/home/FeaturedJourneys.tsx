import { Link } from 'react-router-dom'
import { packageBySlug } from '../../data/packages'
import type { TourPackage } from '../../types'
import { cn } from '../../utils/cn'
import { inr } from '../../utils/format'
import { Container, Section, SectionHeading } from '../common/Section'
import { Media } from '../common/Media'
import { Button } from '../common/Button'
import { ArrowUpRight } from '../common/Icons'

/**
 * The homepage composition is an editorial decision, not a data query — one
 * hero journey carrying three supporting ones at different weights. The slugs
 * are named here so the arrangement stays intentional as the catalogue grows.
 */
const LEAD = 'kashmir'
const SUPPORTING = ['manali-kasol', 'rishikesh', 'udaipur-mount-abu']

function Meta({ pkg, onDark = false }: { pkg: TourPackage; onDark?: boolean }) {
  return (
    <div
      className={cn(
        'flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.75rem]',
        onDark ? 'text-ivory/70' : 'text-faint',
      )}
    >
      <span>{pkg.duration}</span>
      <span className={onDark ? 'text-clay-light' : 'text-clay'}>◆</span>
      <span>{pkg.region}</span>
      <span className={onDark ? 'text-clay-light' : 'text-clay'}>◆</span>
      <span>From {inr(pkg.priceFrom)}</span>
    </div>
  )
}

/** Circular arrow badge that fills on hover — the card's main affordance. */
function GoBadge({ onDark = false }: { onDark?: boolean }) {
  return (
    <span
      className={cn(
        'grid h-11 w-11 shrink-0 place-items-center rounded-full border',
        'transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
        onDark
          ? 'border-ivory/35 text-ivory group-hover:border-ivory group-hover:bg-ivory group-hover:text-pine'
          : 'border-border-strong text-ink group-hover:border-clay group-hover:bg-clay group-hover:text-ivory',
        'group-hover:rotate-45',
      )}
    >
      <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-rotate-45" />
    </span>
  )
}

export function FeaturedJourneys() {
  const lead = packageBySlug.get(LEAD)
  const supporting = SUPPORTING.map((s) => packageBySlug.get(s)).filter(
    (p): p is TourPackage => Boolean(p),
  )

  if (!lead) return null

  return (
    <Section tone="ivory" className="relative overflow-hidden">
      {/* Soft warm wash bleeding in from the right edge. */}
      <div
        aria-hidden="true"
        className="glow-clay pointer-events-none absolute -right-[15%] top-[12%] h-[40rem] w-[40rem] opacity-[0.22]"
      />

      <Container wide className="relative">
        <SectionHeading
          eyebrow="Featured journeys"
          title={
            <>
              A few places worth
              <br className="hidden sm:block" /> clearing your{' '}
              <span className="accent-italic text-clay">calendar</span> for.
            </>
          }
          aside={
            <Button to="/packages" variant="secondary">
              All journeys
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          }
          className="mb-14 lg:mb-20"
        />

        {/* Asymmetric: the lead occupies three of five columns and runs taller
            than the stack beside it, so the composition never reads as a grid. */}
        <div className="grid gap-x-8 gap-y-12 lg:grid-cols-5 lg:gap-y-0">
          {/* Lead */}
          <article className="group relative lg:col-span-3" data-reveal>
            <Link to={`/packages/${lead.slug}`} className="block">
              <div className="graded relative overflow-hidden rounded-[1.75rem] shadow-lift transition-shadow duration-700 group-hover:shadow-deep">
                <Media
                  name={lead.heroImage}
                  alt={lead.heroImageAlt}
                  aspect="aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/4.4]"
                  hoverZoom
                  sizes="(min-width: 1024px) 58vw, 100vw"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-2/3 bg-gradient-to-t from-ink/92 via-ink/40 to-transparent"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] p-7 sm:p-9">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-full bg-clay px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ivory">
                      Most requested
                    </span>
                  </div>
                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <h3 className="text-title text-ivory">{lead.name}</h3>
                      <p className="mt-3 max-w-md text-[0.9375rem] leading-relaxed text-ivory/80">
                        {lead.tagline}
                      </p>
                      <div className="mt-5">
                        <Meta pkg={lead} onDark />
                      </div>
                    </div>
                    <GoBadge onDark />
                  </div>
                </div>
              </div>
            </Link>
          </article>

          {/* Supporting stack */}
          <div className="flex flex-col gap-8 lg:col-span-2">
            {supporting.map((pkg, i) => (
              <article
                key={pkg.slug}
                className="group flex-1"
                data-reveal
                style={{ '--reveal-delay': `${100 + i * 90}ms` } as React.CSSProperties}
              >
                <Link
                  to={`/packages/${pkg.slug}`}
                  className={cn(
                    'flex h-full items-center gap-5 rounded-3xl p-3 sm:gap-6 lg:flex-col lg:items-stretch lg:gap-0 lg:p-0',
                    'transition-colors duration-500 hover:bg-shell lg:hover:bg-transparent',
                  )}
                >
                  <div className="overflow-hidden rounded-2xl shadow-lift transition-shadow duration-500 group-hover:shadow-float">
                    <Media
                      name={pkg.cardImage}
                      alt={`${pkg.plainName} — ${pkg.tagline}`}
                      aspect="aspect-square lg:aspect-[16/9]"
                      hoverZoom
                      sizes="(min-width: 1024px) 30vw, 40vw"
                      className="w-28 shrink-0 sm:w-40 lg:w-full"
                    />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col justify-center lg:mt-5 lg:flex-none">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-[1.375rem] leading-tight tracking-[-0.02em] text-ink transition-colors duration-300 group-hover:text-clay sm:text-[1.5rem]">
                        {pkg.name}
                      </h3>
                      <span className="hidden lg:block">
                        <GoBadge />
                      </span>
                    </div>
                    <p className="mt-2 line-clamp-2 text-[0.875rem] leading-relaxed text-muted">
                      {pkg.tagline}
                    </p>
                    <div className="mt-3.5">
                      <Meta pkg={pkg} />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
