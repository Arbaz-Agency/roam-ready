import { useEffect, useState } from 'react'
import { testimonials } from '../../data/testimonials'
import { cn } from '../../utils/cn'
import { Container, Section } from '../common/Section'
import { ArrowRight } from '../common/Icons'

/** How long each review stays on screen before the next one slides in. */
const INTERVAL_MS = 6000

/**
 * Testimonials.
 *
 * No stars, no avatar rows, no five-across card wall. One quote at a time set
 * large in the display face, against an oversized clay quote glyph, with the
 * others reachable as a list of names down the side. Reads as people rather
 * than as social-proof furniture.
 */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const active = testimonials[index]
  const total = testimonials.length

  const next = () => setIndex((i) => (i + 1) % total)
  const prev = () => setIndex((i) => (i - 1 + total) % total)

  // Advance automatically, one review at a time, through all of them and back
  // to the start. Holds still while the reader is on the quote or has chosen
  // one, and never runs for people who have asked the system to reduce motion.
  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % total), INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [paused, total, index])

  return (
    <Section tone="shell" size="lg" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="glow-clay pointer-events-none absolute -left-[10%] top-[10%] h-[38rem] w-[38rem] opacity-20"
      />

      <Container wide className="relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Quote */}
          <div className="relative lg:col-span-8">
            {/* Oversized opening quote, set in the display face. */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-2 -top-16 select-none font-display text-[12rem] leading-none text-clay/15 sm:-top-24 sm:text-[17rem]"
            >
              &ldquo;
            </span>

            <div
              className="relative"
              data-reveal
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocus={() => setPaused(true)}
              onBlur={() => setPaused(false)}
            >
              <p className="eyebrow mb-10">What travellers say</p>

              <blockquote>
                <p
                  key={index}
                  aria-live="polite"
                  className="animate-fade-up font-display text-[1.625rem] leading-[1.3] tracking-[-0.02em] text-ink sm:text-[2.125rem] lg:text-[2.5rem]"
                >
                  {active.quote}
                </p>

                <footer className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-1">
                  <span aria-hidden="true" className="h-px w-10 bg-clay" />
                  <cite className="font-sans text-[0.9375rem] font-medium not-italic text-ink">
                    {active.name}
                  </cite>
                  <span className="text-[0.875rem] text-muted">{active.trip}</span>
                  <span className="text-[0.875rem] text-faint">{active.location}</span>
                </footer>
              </blockquote>

              {/* Manual controls, with a progress bar that fills over each review. */}
              <div className="mt-10 flex items-center gap-5">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous review"
                  className="grid h-11 w-11 place-items-center rounded-full border border-border-strong text-ink transition-colors duration-300 hover:border-clay hover:text-clay"
                >
                  <ArrowRight className="h-4 w-4 rotate-180" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next review"
                  className="grid h-11 w-11 place-items-center rounded-full border border-border-strong text-ink transition-colors duration-300 hover:border-clay hover:text-clay"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-[0.8125rem] tabular-nums text-muted">
                  {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                </p>
                <div className="relative hidden h-px flex-1 overflow-hidden bg-border-strong sm:block">
                  <span
                    key={index}
                    className="absolute inset-y-0 left-0 w-full origin-left bg-clay motion-reduce:hidden"
                    style={{
                      animation: `rr-progress ${INTERVAL_MS}ms linear forwards`,
                      animationPlayState: paused ? 'paused' : 'running',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Selector */}
          <div className="lg:col-span-4 lg:pt-24" data-reveal>
            <ul className="border-t border-border">
              {testimonials.map((t, i) => (
                <li key={t.name} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-current={i === index ? 'true' : undefined}
                    className={cn(
                      'group relative flex w-full items-center justify-between gap-4 py-3.5 text-left',
                      'transition-colors duration-400',
                      i === index ? 'text-ink' : 'text-faint hover:text-ink',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'absolute bottom-0 left-0 h-px bg-clay transition-[width] duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]',
                        i === index ? 'w-full' : 'w-0 group-hover:w-full',
                      )}
                    />
                    <span className="text-[0.9375rem]">{t.name}</span>
                    <span className="shrink-0 text-[0.6875rem] uppercase tracking-[0.12em]">
                      {t.trip.split(' × ')[0]}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  )
}
