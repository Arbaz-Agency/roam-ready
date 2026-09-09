import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { destinationCategories, destinations } from '../data/destinations'
import { packageBySlug } from '../data/packages'
import { useSeo } from '../utils/seo'
import { cn } from '../utils/cn'
import { PageHero } from '../components/layout/PageHero'
import { Container, Section } from '../components/common/Section'
import { Media } from '../components/common/Media'
import { FilterChip } from '../components/common/Pill'
import { Button } from '../components/common/Button'
import { EmptyState } from '../components/common/States'
import { PlanCTA } from '../components/home/PlanCTA'
import { ArrowUpRight } from '../components/common/Icons'

export default function Destinations() {
  const [category, setCategory] = useState<string>('all')

  useSeo({
    title: 'Destinations in India | Roam Ready',
    description:
      'Discover the destinations Roam Ready travels to — Himalayan valleys, spiritual towns, heritage cities and hill stations across Himachal, Kashmir, Uttarakhand and Rajasthan.',
    path: '/destinations',
  })

  const results = useMemo(
    () =>
      category === 'all'
        ? destinations
        : destinations.filter((d) => d.categories.includes(category as never)),
    [category],
  )

  return (
    <>
      <PageHero
        image="heroDestinations"
        imageAlt="The Pahalgam valley in Kashmir, ringed by pine forest and mountains"
        eyebrow="Destinations"
        title={
          <>
            Ten places we know <span className="accent-italic">properly.</span>
          </>
        }
        intro="We travel a narrow map on purpose. These are the destinations we have driven, walked and can plan without guessing."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Destinations' }]}
      />

      <Section tone="ivory">
        <Container wide>
          <div
            role="group"
            aria-label="Filter destinations by category"
            className="hide-scrollbar -mx-5 mb-14 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
          >
            <FilterChip active={category === 'all'} onClick={() => setCategory('all')}>
              All destinations
            </FilterChip>
            {destinationCategories.map((c) => (
              <FilterChip key={c} active={category === c} onClick={() => setCategory(c)}>
                {c}
              </FilterChip>
            ))}
          </div>

          {results.length === 0 ? (
            <EmptyState
              title="Nothing here yet."
              description="We have not added a destination in this category. Tell us where you want to go and we will look into it."
              action={<Button to="/plan-your-trip">Plan a custom trip</Button>}
            />
          ) : (
            /* Alternating editorial rows — a destination gets a full-width band
               rather than a card, so the photography carries the page. */
            <div className="space-y-14 lg:space-y-20">
              {results.map((d, i) => {
                const flipped = i % 2 === 1
                const journeys = d.packages
                  .map((s) => packageBySlug.get(s))
                  .filter((p): p is NonNullable<typeof p> => Boolean(p))

                return (
                  <article
                    key={d.slug}
                    id={d.slug}
                    className="group relative grid scroll-mt-28 items-center gap-8 border-t border-border pt-14 lg:grid-cols-12 lg:gap-16 lg:pt-16"
                    data-reveal
                  >
                    {/* Index numeral riding the top rule. */}
                    <span
                      aria-hidden="true"
                      className="absolute -top-3 left-0 bg-ivory pr-4 font-display text-[0.875rem] tracking-[0.1em] text-clay"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <div
                      className={cn(
                        'lg:col-span-7',
                        flipped ? 'lg:order-2 lg:col-start-6' : 'lg:order-1',
                      )}
                    >
                      <div className="graded relative overflow-hidden rounded-[1.75rem] shadow-lift transition-shadow duration-700 group-hover:shadow-deep">
                        <Media
                          name={d.image}
                          alt={d.imageAlt}
                          aspect="aspect-[3/2] lg:aspect-[16/10]"
                          hoverZoom
                          priority={i === 0}
                          sizes="(min-width: 1024px) 58vw, 100vw"
                        />
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-ink/40 to-transparent"
                        />
                      </div>
                    </div>

                    <div
                      className={cn(
                        'lg:col-span-5',
                        flipped ? 'lg:order-1 lg:col-start-1 lg:row-start-1' : 'lg:order-2',
                      )}
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <span aria-hidden="true" className="h-1 w-1 rotate-45 bg-clay" />
                        <p className="eyebrow">{d.region}</p>
                      </div>
                      <h2 className="text-title">{d.name}</h2>
                      <p className="mt-5 max-w-md text-[0.9375rem] leading-relaxed text-muted">
                        {d.blurb}
                      </p>

                      <ul className="mt-6 flex flex-wrap gap-2">
                        {d.categories.map((c) => (
                          <li
                            key={c}
                            className="rounded-full bg-ink/[0.05] px-3 py-1 text-[0.75rem] text-muted"
                          >
                            {c}
                          </li>
                        ))}
                      </ul>

                      {journeys.length > 0 && (
                        <div className="mt-8">
                          <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-faint">
                            Journeys travelling here
                          </h3>
                          <ul className="mt-3 border-t border-border">
                            {journeys.map((p) => (
                              <li key={p.slug} className="border-b border-border">
                                <Link
                                  to={`/packages/${p.slug}`}
                                  className="group flex items-center justify-between gap-4 py-3 transition-colors duration-300 hover:text-moss"
                                >
                                  <span className="text-[0.9375rem]">{p.name}</span>
                                  <span className="flex shrink-0 items-center gap-3 text-[0.75rem] text-faint">
                                    {p.duration}
                                    <ArrowUpRight className="h-4 w-4 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </Container>
      </Section>

      <PlanCTA />
    </>
  )
}
