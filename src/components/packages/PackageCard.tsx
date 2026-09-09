import { Link } from 'react-router-dom'
import type { TourPackage } from '../../types'
import { cn } from '../../utils/cn'
import { inr } from '../../utils/format'
import { Media } from '../common/Media'
import { Pill } from '../common/Pill'
import { ArrowUpRight } from '../common/Icons'

/** Circular arrow badge that fills and spins on hover. */
function GoBadge({ onDark = false }: { onDark?: boolean }) {
  return (
    <span
      className={cn(
        'grid h-10 w-10 shrink-0 place-items-center rounded-full border',
        'transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-45',
        onDark
          ? 'border-ivory/35 text-ivory group-hover:border-ivory group-hover:bg-ivory group-hover:text-pine'
          : 'border-border-strong text-ink group-hover:border-clay group-hover:bg-clay group-hover:text-ivory',
      )}
    >
      <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-rotate-45" />
    </span>
  )
}

/**
 * Package card, in two weights.
 *
 * `feature` renders a wide, image-led row used to break up the listing grid —
 * the brief asked that not every card look identical, and this is how the
 * packages page avoids becoming a uniform wall of tiles.
 */
export function PackageCard({
  pkg,
  variant = 'default',
  priority = false,
}: {
  pkg: TourPackage
  variant?: 'default' | 'feature'
  priority?: boolean
}) {
  if (variant === 'feature') {
    return (
      <article className="group sm:col-span-2 lg:col-span-3" data-reveal>
        <Link
          to={`/packages/${pkg.slug}`}
          className="grid items-center gap-8 rounded-[1.75rem] bg-shell p-5 transition-shadow duration-700 hover:shadow-float sm:p-7 lg:grid-cols-2 lg:gap-14"
        >
          <div className="graded relative overflow-hidden rounded-2xl shadow-lift">
            <Media
              name={pkg.heroImage}
              alt={pkg.heroImageAlt}
              aspect="aspect-[16/10] lg:aspect-[16/11]"
              hoverZoom
              priority={priority}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          <div className="lg:pr-8">
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <Pill tone="accent">Featured</Pill>
              {pkg.tripTypes.slice(0, 2).map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </div>

            <h3 className="text-title transition-colors duration-400 group-hover:text-clay">
              {pkg.name}
            </h3>
            <p className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-muted">
              {pkg.summary}
            </p>

            <dl className="mt-7 flex flex-wrap gap-x-10 gap-y-4 border-t border-border-strong/60 pt-6">
              <div>
                <dt className="text-[0.6875rem] uppercase tracking-[0.14em] text-faint">
                  Duration
                </dt>
                <dd className="mt-1 text-[0.9375rem]">{pkg.duration}</dd>
              </div>
              <div>
                <dt className="text-[0.6875rem] uppercase tracking-[0.14em] text-faint">Region</dt>
                <dd className="mt-1 text-[0.9375rem]">{pkg.region}</dd>
              </div>
              <div>
                <dt className="text-[0.6875rem] uppercase tracking-[0.14em] text-faint">From</dt>
                <dd className="mt-1 font-display text-[1.125rem] text-clay">
                  {inr(pkg.priceFrom)}
                </dd>
              </div>
            </dl>

            <span className="mt-7 inline-flex items-center gap-3 text-[0.875rem] font-medium text-ink">
              View journey
              <GoBadge />
            </span>
          </div>
        </Link>
      </article>
    )
  }

  return (
    <article className="group" data-reveal>
      <Link to={`/packages/${pkg.slug}`} className="flex h-full flex-col">
        <div className="graded relative overflow-hidden rounded-2xl shadow-lift transition-shadow duration-700 group-hover:shadow-deep">
          <Media
            name={pkg.cardImage}
            alt={`${pkg.plainName} — ${pkg.tagline}`}
            aspect="aspect-[4/5]"
            hoverZoom
            priority={priority}
            sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 92vw"
          />

          {/* Scrims top and bottom — the photography ranges from bright snow
              to dark forest, so on-image text needs its own ground at both
              ends rather than relying on the picture being dark enough. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-3/5 bg-gradient-to-t from-ink/90 via-ink/45 to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-24 bg-gradient-to-b from-ink/55 to-transparent"
          />

          <div className="absolute left-4 top-4 z-[3]">
            <Pill tone="glass">{pkg.duration}</Pill>
          </div>

          <div className="absolute inset-x-4 bottom-4 z-[3] flex items-end justify-between gap-3">
            <p className="text-[0.8125rem] text-ivory/75">
              From{' '}
              <span className="font-display text-[1.125rem] text-ivory">{inr(pkg.priceFrom)}</span>
            </p>
            <GoBadge onDark />
          </div>
        </div>

        <div className="mt-5 flex flex-1 flex-col">
          <div className="flex items-center gap-2.5">
            <span aria-hidden="true" className="h-1 w-1 rotate-45 bg-clay" />
            <p className="text-[0.75rem] tracking-[0.02em] text-faint">{pkg.region}</p>
          </div>
          <h3 className="mt-2 font-display text-[1.375rem] leading-tight tracking-[-0.02em] transition-colors duration-300 group-hover:text-clay">
            {pkg.name}
          </h3>
          <p className="mt-2.5 line-clamp-2 text-[0.875rem] leading-relaxed text-muted">
            {pkg.tagline}
          </p>
        </div>
      </Link>
    </article>
  )
}
