import { Media } from '../common/Media'
import { Button } from '../common/Button'
import { ArrowRight } from '../common/Icons'

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
              <p className="eyebrow text-ivory/80">Hill, lake and heritage trips from Delhi</p>
            </div>

            <h1
              className="text-hero text-ivory drop-shadow-[0_2px_30px_rgba(12,14,11,0.5)] animate-fade-up"
              style={{ animationDelay: '220ms' }}
            >
              Plan your escape
              <br />
              to the{' '}
              <span className="accent-italic text-gradient-clay">mountains.</span>
            </h1>

            <p
              className="mt-8 max-w-xl text-[1.0625rem] leading-relaxed text-ivory/80 sm:text-[1.1875rem] animate-fade-up"
              style={{ animationDelay: '340ms' }}
            >
              Mountain valleys, sacred temples and lake cities, planned with vegetarian meals,
              sensible travel times and one person to call when you need them.
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
        </div>
      </div>

    </section>
  )
}
