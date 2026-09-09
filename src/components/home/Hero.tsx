import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { destinations } from '../../data/destinations'
import { cn } from '../../utils/cn'
import { Media } from '../common/Media'
import { Button } from '../common/Button'
import { ArrowRight, Compass } from '../common/Icons'

/**
 * Homepage hero.
 *
 * The depth here comes from stacking, not from any one trick:
 *   photograph → slow Ken Burns push → warm colour grade → three-stop scrim
 *   → clay light bloom → film grain → content.
 *
 * That stack is what makes a single flat stock photograph read as art
 * direction, and it keeps the type legible over whatever the image is doing
 * underneath — the top scrim in particular exists so the overlay navbar has
 * contrast against a bright sky.
 */
export function Hero() {
  const navigate = useNavigate()
  const [active, setActive] = useState<string | null>(null)

  return (
    <section className="grain relative min-h-[100svh] w-full overflow-hidden bg-pine">
      {/* Photograph + slow push */}
      <div className="absolute inset-0 overflow-hidden">
        <Media
          name="heroJourney"
          alt="A mountain road winding through the high Himalaya"
          priority
          reveal={false}
          sizes="100vw"
          fill
          imgClassName="h-full w-full object-cover animate-kenburns motion-reduce:animate-none"
        />
      </div>

      {/* Warm colour grade — pulls the photograph toward the palette. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-gradient-to-br from-clay/25 via-transparent to-pine/70 mix-blend-soft-light"
      />

      {/* Legibility scrim: dark at the top for the navbar, dark at the base
          for the headline, and left-weighted so the copy always has ground. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[2] bg-gradient-to-b from-ink/75 via-ink/25 to-ink/90"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[2] bg-gradient-to-r from-ink/70 via-ink/10 to-transparent"
      />

      {/* Light bloom, drifting slowly. */}
      <div
        aria-hidden="true"
        className="glow-clay animate-drift absolute -right-[10%] top-[8%] z-[3] h-[46rem] w-[46rem] opacity-60 blur-[2px] motion-reduce:animate-none"
      />

      {/* Vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[3] shadow-[inset_0_0_18rem_rgba(12,14,11,0.65)]"
      />

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end pb-10 pt-32 sm:pb-14">
        <div className="mx-auto w-full max-w-[110rem] px-5 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            {/* Eyebrow with a drawn rule — small detail, reads as designed. */}
            <div
              className="mb-8 flex items-center gap-4 animate-fade-up"
              style={{ animationDelay: '120ms' }}
            >
              <span className="h-px w-12 bg-clay-light" />
              <p className="eyebrow text-ivory/80">Curated journeys across India</p>
            </div>

            <h1
              className="text-hero text-ivory drop-shadow-[0_2px_30px_rgba(12,14,11,0.5)] animate-fade-up"
              style={{ animationDelay: '220ms' }}
            >
              Go somewhere
              <br />
              worth{' '}
              <span className="accent-italic text-gradient-clay">remembering.</span>
            </h1>

            <p
              className="mt-8 max-w-xl text-[1.0625rem] leading-relaxed text-ivory/80 sm:text-[1.1875rem] animate-fade-up"
              style={{ animationDelay: '340ms' }}
            >
              Curated journeys, unforgettable landscapes, and travel experiences designed around
              you.
            </p>

            <div
              className="mt-10 flex flex-wrap items-center gap-3 animate-fade-up"
              style={{ animationDelay: '440ms' }}
            >
              <Button to="/packages" size="lg" variant="inverse">
                Explore Journeys
                <ArrowRight className="h-4 w-4 transition-transform duration-400 group-hover/btn:translate-x-1" />
              </Button>
              <Button to="/plan-your-trip" size="lg" variant="light">
                Plan My Trip
              </Button>
            </div>
          </div>

          {/* Destination rail — a frosted panel rather than a bare row. */}
          <div
            className="mt-12 animate-fade-up sm:mt-16"
            style={{ animationDelay: '560ms' }}
          >
            <div className="mb-4 flex items-center gap-2.5 text-ivory/60">
              <Compass className="h-4 w-4" />
              <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em]">
                Where to?
              </span>
            </div>

            <div className="hide-scrollbar -mx-5 flex gap-2.5 overflow-x-auto px-5 pb-1 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
              {destinations.map((d) => (
                <button
                  key={d.slug}
                  type="button"
                  onMouseEnter={() => setActive(d.slug)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(d.slug)}
                  onBlur={() => setActive(null)}
                  onClick={() =>
                    navigate(
                      d.packages.length === 1
                        ? `/packages/${d.packages[0]}`
                        : `/destinations#${d.slug}`,
                    )
                  }
                  className={cn(
                    'shrink-0 rounded-full px-5 py-2.5 text-[0.8125rem] font-medium',
                    'transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]',
                    'hover:-translate-y-0.5',
                    active === d.slug
                      ? 'bg-ivory text-pine shadow-lift'
                      : 'glass text-ivory/90',
                  )}
                >
                  {d.name}
                  <span
                    className={cn(
                      'ml-2 inline-block text-[0.6875rem] transition-opacity duration-300',
                      active === d.slug ? 'opacity-55' : 'opacity-0',
                    )}
                  >
                    {d.region.split(' ')[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
