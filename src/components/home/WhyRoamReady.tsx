import { Container, Section } from '../common/Section'
import { Media } from '../common/Media'
import { Button } from '../common/Button'
import { ArrowRight } from '../common/Icons'

/**
 * Not a "why choose us" icon grid.
 *
 * A split section carrying a layered image composition: a tall primary
 * photograph with a second, smaller frame overlapping its lower corner and a
 * floating stat card. The overlap is what stops the section reading as two
 * columns side by side — it gives the page a z-axis.
 */
const points = [
  {
    title: 'Carefully planned journeys',
    body: 'Routes built around daylight, altitude and rest — not around fitting the most stops into the fewest days.',
  },
  {
    title: 'Reliable stays and transfers',
    body: 'Accommodation and vehicles we have used before, with a driver who knows the road you are actually on.',
  },
  {
    title: 'Local experiences',
    body: 'The short detours and the right hour to be somewhere. Usually the part people remember.',
  },
  {
    title: 'Flexible customisation',
    body: 'Every itinerary is a starting point. Most travellers change something, and that is the intended use.',
  },
  {
    title: 'Dedicated support',
    body: 'One point of contact before you leave and while you are on the road. Not a rota, not a ticket queue.',
  },
]

export function WhyRoamReady() {
  return (
    <Section tone="shell" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="glow-moss pointer-events-none absolute -left-[18%] top-[20%] h-[42rem] w-[42rem] opacity-25"
      />

      <Container wide className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="order-2 lg:order-1">
            <div className="mb-6 flex items-center gap-4" data-reveal>
              <span className="h-px w-10 bg-clay" />
              <p className="eyebrow">Why Roam Ready</p>
            </div>

            <h2
              className="text-display"
              data-reveal
              style={{ '--reveal-delay': '60ms' } as React.CSSProperties}
            >
              Travel should feel <span className="accent-italic text-clay">effortless.</span>
            </h2>
            <p
              className="lede mt-6 max-w-lg"
              data-reveal
              style={{ '--reveal-delay': '120ms' } as React.CSSProperties}
            >
              The planning is the part that goes wrong. We take it off you, and then stay reachable
              for the parts that cannot be planned.
            </p>

            <ul className="mt-12">
              {points.map((p, i) => (
                <li
                  key={p.title}
                  className="group relative border-t border-border py-6 last:border-b"
                  data-reveal
                  style={{ '--reveal-delay': `${140 + i * 70}ms` } as React.CSSProperties}
                >
                  {/* Clay rule that draws in from the left on hover. */}
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-px w-0 bg-clay transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"
                  />
                  <div className="flex gap-6">
                    <span className="mt-1 font-display text-[1.125rem] leading-none text-stone transition-colors duration-400 group-hover:text-clay">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-sans text-[1.0625rem] font-medium tracking-[-0.01em] text-ink">
                        {p.title}
                      </h3>
                      <p className="mt-1.5 max-w-md text-[0.9375rem] leading-relaxed text-muted">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div
              className="mt-10"
              data-reveal
              style={{ '--reveal-delay': '200ms' } as React.CSSProperties}
            >
              <Button to="/about" variant="secondary">
                More about how we work
                <ArrowRight className="h-4 w-4 transition-transform duration-400 group-hover/btn:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Layered composition */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-28">
            <div className="relative pb-16 pr-16 sm:pb-20 sm:pr-20">
              <div className="graded relative overflow-hidden rounded-[1.75rem] shadow-float">
                <Media
                  name="whyRoamReady"
                  alt="A quiet morning in a Himalayan valley"
                  aspect="aspect-[4/3] lg:aspect-[4/5]"
                  sizes="(min-width: 1024px) 46vw, 100vw"
                />
              </div>

              {/* Overlapping secondary frame */}
              <div className="absolute bottom-0 right-0 w-40 overflow-hidden rounded-2xl border-[6px] border-shell shadow-float sm:w-56">
                <Media
                  name="himalayaHorses"
                  alt="A village on a Himalayan hillside"
                  aspect="aspect-square"
                  sizes="14rem"
                />
              </div>

              {/* Floating figure — anchors the composition and adds a fact. */}
              <div className="absolute left-0 top-8 -translate-x-4 rounded-2xl bg-pine px-5 py-4 text-ivory shadow-deep sm:-translate-x-8">
                <p className="font-display text-[1.75rem] leading-none">8</p>
                <p className="mt-1 text-[0.6875rem] uppercase tracking-[0.14em] text-ivory/60">
                  Curated routes
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
