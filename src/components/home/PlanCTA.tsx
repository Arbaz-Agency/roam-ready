import { whatsappLink } from '../../data/site'
import { Media } from '../common/Media'
import { Button } from '../common/Button'
import { ArrowRight, WhatsApp } from '../common/Icons'

/**
 * Closing conversion section.
 *
 * Full-bleed photograph with the same stacked treatment as the hero — grade,
 * scrim, bloom, grain — so the page is bookended and the CTA reads as a
 * conclusion rather than a banner bolted on the end.
 */
export function PlanCTA() {
  return (
    <section className="grain relative overflow-hidden bg-pine">
      <Media
        name="heroPlan"
        alt="Dramatic cloud over a high Himalayan valley"
        sizes="100vw"
        fill
        imgClassName="h-full w-full object-cover"
        reveal={false}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-gradient-to-br from-clay/25 via-transparent to-pine/70 mix-blend-soft-light"
      />
      <div aria-hidden="true" className="absolute inset-0 z-[2] bg-ink/65" />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[2] bg-gradient-to-t from-ink/85 via-transparent to-ink/45"
      />
      <div
        aria-hidden="true"
        className="glow-clay animate-drift absolute -bottom-40 left-1/2 z-[3] h-[40rem] w-[40rem] -translate-x-1/2 opacity-50 motion-reduce:animate-none"
      />

      <div className="relative z-10 mx-auto flex max-w-[110rem] flex-col items-center px-5 py-32 text-center sm:px-8 sm:py-40 lg:px-12 lg:py-48">
        <div className="mb-7 flex items-center gap-4" data-reveal>
          <span className="h-px w-10 bg-clay-light" />
          <p className="eyebrow text-ivory/70">Plan your trip</p>
          <span className="h-px w-10 bg-clay-light" />
        </div>

        <h2
          className="max-w-3xl text-display text-ivory drop-shadow-[0_2px_30px_rgba(12,14,11,0.5)]"
          data-reveal
          style={{ '--reveal-delay': '80ms' } as React.CSSProperties}
        >
          Your next adventure{' '}
          <span className="accent-italic text-gradient-clay">starts here.</span>
        </h2>

        <p
          className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-ivory/80"
          data-reveal
          style={{ '--reveal-delay': '140ms' } as React.CSSProperties}
        >
          Tell us where you are going, when, and who with. We will send back an itinerary written
          for you — usually within a day.
        </p>

        <div
          className="mt-11 flex flex-wrap items-center justify-center gap-3"
          data-reveal
          style={{ '--reveal-delay': '200ms' } as React.CSSProperties}
        >
          <Button to="/plan-your-trip" size="lg" variant="inverse">
            Plan My Trip
            <ArrowRight className="h-4 w-4 transition-transform duration-400 group-hover/btn:translate-x-1" />
          </Button>
          <Button
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            variant="light"
          >
            <WhatsApp className="h-4 w-4" />
            WhatsApp Us
          </Button>
        </div>
      </div>
    </section>
  )
}
