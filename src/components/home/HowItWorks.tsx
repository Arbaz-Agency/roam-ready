import { Container, Section } from '../common/Section'
import { Button } from '../common/Button'
import { ArrowRight } from '../common/Icons'

const steps = [
  {
    n: '01',
    title: 'Choose your journey',
    body: 'Browse the packages, or WhatsApp us your city, dates and number of travellers.',
  },
  {
    n: '02',
    title: 'Tell us your plans',
    body: 'Share your dates, group size, budget and pace. We send back a plan written for you, not a brochure.',
  },
  {
    n: '03',
    title: 'We handle the rest',
    body: 'We book the stays, transport and timings. One person stays in touch with you through the trip.',
  },
]

/**
 * Three-step process on deep pine — the tonal break that stops the middle of
 * the homepage running as one long ivory stretch.
 *
 * The connecting line and ringed numerals give it structure without imagery,
 * so it still reads as the quiet section it should be.
 */
export function HowItWorks() {
  return (
    <Section tone="pine" size="md" className="grain relative overflow-hidden">
      <div
        aria-hidden="true"
        className="glow-clay pointer-events-none absolute left-1/2 top-0 h-[34rem] w-[60rem] -translate-x-1/2 opacity-30"
      />

      <Container wide className="relative">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <p className="eyebrow mb-6 text-ivory/50">How it works</p>
          <h2 className="text-display text-ivory">
            Three simple steps, then <span className="accent-italic text-clay-light">relax.</span>
          </h2>
        </div>

        <div className="relative mt-20">
          {/* Connector, drawn only where the three columns line up. */}
          <div
            aria-hidden="true"
            className="rule-fade-dark absolute left-0 right-0 top-7 hidden lg:block"
          />

          <ol className="grid gap-14 lg:grid-cols-3 lg:gap-10">
            {steps.map((s, i) => (
              <li
                key={s.n}
                className="relative text-center lg:text-left"
                data-reveal
                style={{ '--reveal-delay': `${i * 120}ms` } as React.CSSProperties}
              >
                <div className="mb-7 flex justify-center lg:justify-start">
                  <span className="grid h-14 w-14 place-items-center rounded-full border border-ivory/25 bg-pine font-display text-[1.125rem] text-ivory">
                    {s.n}
                  </span>
                </div>
                <h3 className="font-display text-[1.5rem] leading-tight tracking-[-0.02em] text-ivory sm:text-[1.75rem]">
                  {s.title}
                </h3>
                <p className="mx-auto mt-3 max-w-sm text-[0.9375rem] leading-relaxed text-ivory/65 lg:mx-0">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 flex justify-center" data-reveal>
          <Button to="/plan-your-trip" size="lg" variant="inverse">
            Start planning
            <ArrowRight className="h-4 w-4 transition-transform duration-400 group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </Container>
    </Section>
  )
}
