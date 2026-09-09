import { useMemo, useState } from 'react'
import { packages, regions, tripTypes } from '../data/packages'
import { site } from '../data/site'
import { useSeo } from '../utils/seo'
import { inr } from '../utils/format'
import { PageHero } from '../components/layout/PageHero'
import { Container, Section } from '../components/common/Section'
import { FilterChip } from '../components/common/Pill'
import { Button } from '../components/common/Button'
import { EmptyState } from '../components/common/States'
import { PackageCard } from '../components/packages/PackageCard'
import { PlanCTA } from '../components/home/PlanCTA'
import { Sliders } from '../components/common/Icons'

type DurationBand = 'all' | 'short' | 'medium' | 'long'
type BudgetBand = 'all' | 'under15' | '15to20' | 'over20'

const durationBands: { value: DurationBand; label: string; test: (n: number) => boolean }[] = [
  { value: 'all', label: 'Any length', test: () => true },
  { value: 'short', label: 'Up to 3 nights', test: (n) => n <= 3 },
  { value: 'medium', label: '4 – 5 nights', test: (n) => n >= 4 && n <= 5 },
  { value: 'long', label: '6 nights +', test: (n) => n >= 6 },
]

const budgetBands: { value: BudgetBand; label: string; test: (p: number) => boolean }[] = [
  { value: 'all', label: 'Any budget', test: () => true },
  { value: 'under15', label: `Under ${inr(15000)}`, test: (p) => p < 15000 },
  { value: '15to20', label: `${inr(15000)} – ${inr(20000)}`, test: (p) => p >= 15000 && p <= 20000 },
  { value: 'over20', label: `Over ${inr(20000)}`, test: (p) => p > 20000 },
]

export default function Packages() {
  const [region, setRegion] = useState<string>('all')
  const [type, setType] = useState<string>('all')
  const [duration, setDuration] = useState<DurationBand>('all')
  const [budget, setBudget] = useState<BudgetBand>('all')

  useSeo({
    title: 'Tour Packages & Curated Journeys | Roam Ready',
    description:
      'Explore Roam Ready’s curated journeys across Himachal, Kashmir, Uttarakhand and Rajasthan — mountain escapes, spiritual trails, heritage routes and adventure trips.',
    path: '/packages',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Roam Ready journeys',
      numberOfItems: packages.length,
      itemListElement: packages.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.plainName,
        url: `${site.url}/packages/${p.slug}`,
      })),
    },
  })

  const results = useMemo(() => {
    const d = durationBands.find((b) => b.value === duration)!
    const b = budgetBands.find((x) => x.value === budget)!
    return packages.filter(
      (p) =>
        (region === 'all' || p.region === region) &&
        (type === 'all' || p.tripTypes.includes(type as never)) &&
        d.test(p.nights) &&
        b.test(p.priceFrom),
    )
  }, [region, type, duration, budget])

  const active = [region, type, duration, budget].filter((v) => v !== 'all').length
  const reset = () => {
    setRegion('all')
    setType('all')
    setDuration('all')
    setBudget('all')
  }

  return (
    <>
      <PageHero
        image="heroPackages"
        imageAlt="Chandra Taal lake in Spiti beneath the Himalayan range"
        eyebrow="Journeys"
        title={
          <>
            Journeys worth <span className="accent-italic">taking.</span>
          </>
        }
        intro="Eight routes across the Himalaya, Rajasthan and the Ganges plain. Each one is a starting point — tell us what to change."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Packages' }]}
      />

      <Section tone="ivory" size="md">
        <Container wide>
          {/* Filters. A horizontal rail of chip groups rather than a boxed
              sidebar — it keeps the imagery below the primary content. */}
          <div className="mb-14 border-b border-border pb-10">
            <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2.5 text-muted">
                <Sliders className="h-4 w-4" />
                <h2 className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em]">
                  Refine
                </h2>
              </div>
              <p className="text-[0.8125rem] text-faint" aria-live="polite">
                {results.length} {results.length === 1 ? 'journey' : 'journeys'}
                {active > 0 && (
                  <button
                    type="button"
                    onClick={reset}
                    className="ml-4 underline underline-offset-4 transition-colors hover:text-ink"
                  >
                    Clear filters
                  </button>
                )}
              </p>
            </div>

            <div className="space-y-5">
              <FilterRow label="Destination">
                <FilterChip active={region === 'all'} onClick={() => setRegion('all')}>
                  All regions
                </FilterChip>
                {regions.map((r) => (
                  <FilterChip key={r} active={region === r} onClick={() => setRegion(r)}>
                    {r}
                  </FilterChip>
                ))}
              </FilterRow>

              <FilterRow label="Trip type">
                <FilterChip active={type === 'all'} onClick={() => setType('all')}>
                  All types
                </FilterChip>
                {tripTypes.map((t) => (
                  <FilterChip key={t} active={type === t} onClick={() => setType(t)}>
                    {t}
                  </FilterChip>
                ))}
              </FilterRow>

              <FilterRow label="Duration">
                {durationBands.map((b) => (
                  <FilterChip
                    key={b.value}
                    active={duration === b.value}
                    onClick={() => setDuration(b.value)}
                  >
                    {b.label}
                  </FilterChip>
                ))}
              </FilterRow>

              <FilterRow label="Budget">
                {budgetBands.map((b) => (
                  <FilterChip
                    key={b.value}
                    active={budget === b.value}
                    onClick={() => setBudget(b.value)}
                  >
                    {b.label}
                  </FilterChip>
                ))}
              </FilterRow>
            </div>
          </div>

          {results.length === 0 ? (
            <EmptyState
              title="Nothing matches that combination."
              description="Try widening one of the filters — or tell us what you had in mind and we will build it from scratch."
              action={
                <div className="flex flex-wrap justify-center gap-3">
                  <Button onClick={reset} variant="secondary">
                    Clear filters
                  </Button>
                  <Button to="/plan-your-trip">Plan a custom trip</Button>
                </div>
              }
            />
          ) : (
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((pkg, i) => (
                <PackageCard
                  key={pkg.slug}
                  pkg={pkg}
                  priority={i === 0}
                  // Every fifth card breaks to full width, so the grid never
                  // settles into an even wall of identical tiles.
                  variant={results.length > 4 && i === 4 ? 'feature' : 'default'}
                />
              ))}
            </div>
          )}
        </Container>
      </Section>

      <PlanCTA />
    </>
  )
}

function FilterRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-5">
      <span className="w-24 shrink-0 text-[0.75rem] text-faint">{label}</span>
      <div
        role="group"
        aria-label={label}
        className="hide-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {children}
      </div>
    </div>
  )
}
