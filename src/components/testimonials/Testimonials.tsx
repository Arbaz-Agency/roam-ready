import { useState } from 'react'
import { testimonials } from '../../data/testimonials'
import { cn } from '../../utils/cn'
import { Container, Section } from '../common/Section'

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
  const active = testimonials[index]

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

            <div className="relative" data-reveal>
              <p className="eyebrow mb-10">In their words</p>

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
