import { Link } from 'react-router-dom'
import { collections } from '../../data/destinations'
import { cn } from '../../utils/cn'
import { Container, Section, SectionHeading } from '../common/Section'
import { Media } from '../common/Media'
import { ArrowUpRight } from '../common/Icons'

/**
 * Curated collections — "Into the Mountains", "Journeys of Faith",
 * "Culture & Escape".
 *
 * Full-width editorial rows with alternating image side. The oversized ghost
 * numeral behind each row is the device that makes this read as a magazine
 * spread rather than three stacked cards, and it gives the eye something to
 * track as the section scrolls.
 */
export function Collections() {
  return (
    <Section tone="ivory" size="lg" className="relative overflow-hidden">
      <Container wide className="relative">
        <SectionHeading
          eyebrow="Travel stories"
          title={
            <>
              Collections, not
              <br className="hidden sm:block" /> <span className="accent-italic text-clay">categories.</span>
            </>
          }
          intro="Three ways of travelling through India. Pick the one that sounds like you and we will take it from there."
          className="mb-16 lg:mb-24"
        />

        <div className="space-y-24 lg:space-y-32">
          {collections.map((c, i) => {
            const flipped = i % 2 === 1
            return (
              <article
                key={c.title}
                className="relative grid items-center gap-8 lg:grid-cols-12 lg:gap-16"
                data-reveal
              >
                {/* Oversized ghost numeral */}
                <span
                  aria-hidden="true"
                  className={cn(
                    'pointer-events-none absolute -top-16 z-0 select-none font-display leading-none',
                    'text-[9rem] text-ink/[0.045] sm:text-[14rem] lg:text-[17rem]',
                    flipped ? 'right-0' : 'left-0',
                  )}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div
                  className={cn(
                    'relative z-10',
                    flipped ? 'lg:order-2 lg:col-span-7 lg:col-start-6' : 'lg:order-1 lg:col-span-7',
                  )}
                >
                  <div className="graded group relative overflow-hidden rounded-[1.75rem] shadow-lift transition-shadow duration-700 hover:shadow-deep">
                    <Media
                      name={c.image}
                      alt={c.imageAlt}
                      aspect="aspect-[3/2] lg:aspect-[16/10]"
                      hoverZoom
                      sizes="(min-width: 1024px) 58vw, 100vw"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-ink/45 to-transparent"
                    />
                  </div>
                </div>

                <div
                  className={cn(
                    'relative z-10',
                    flipped
                      ? 'lg:order-1 lg:col-span-5 lg:col-start-1 lg:row-start-1'
                      : 'lg:order-2 lg:col-span-5',
                  )}
                >
                  <h3 className="text-title">{c.title}</h3>
                  <p className="mt-5 max-w-md text-[0.9375rem] leading-relaxed text-muted">
                    {c.description}
                  </p>

                  <ul className="mt-8">
                    {c.destinations.map((d) => (
                      <li key={d.slug} className="border-b border-border first:border-t">
                        <Link
                          to={`/destinations#${d.slug}`}
                          className="group relative flex items-center justify-between gap-4 py-4 transition-colors duration-400 hover:text-clay"
                        >
                          <span
                            aria-hidden="true"
                            className="absolute bottom-0 left-0 h-px w-0 bg-clay transition-[width] duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"
                          />
                          <span className="font-display text-[1.25rem] tracking-[-0.015em] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">
                            {d.name}
                          </span>
                          <ArrowUpRight className="h-4 w-4 shrink-0 text-stone transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-clay" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
