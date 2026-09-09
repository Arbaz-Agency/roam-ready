import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPackage, packages } from '../data/packages'
import { media } from '../data/media'
import { site, whatsappLink } from '../data/site'
import { useSeo } from '../utils/seo'
import { inr } from '../utils/format'
import { largestSrc } from '../utils/image'
import { Container, Section, SectionHeading } from '../components/common/Section'
import { Media } from '../components/common/Media'
import { Button } from '../components/common/Button'
import { Pill } from '../components/common/Pill'
import { Accordion } from '../components/common/Accordion'
import { Modal } from '../components/common/Modal'
import { StickyCTA } from '../components/common/StickyCTA'
import { NotFoundBody } from '../components/common/States'
import { Breadcrumbs } from '../components/navigation/Breadcrumbs'
import { Itinerary } from '../components/itinerary/Itinerary'
import { PackageCard } from '../components/packages/PackageCard'
import { EnquiryForm } from '../components/forms/EnquiryForm'
import { ArrowRight, Check, Close, WhatsApp } from '../components/common/Icons'

export default function PackageDetails() {
  const { slug } = useParams()
  const pkg = getPackage(slug)
  const [enquiryOpen, setEnquiryOpen] = useState(false)

  const title = pkg ? `${pkg.plainName} Tour Package | Roam Ready` : 'Journey not found | Roam Ready'

  useSeo({
    title,
    description: pkg?.summary ?? 'This journey could not be found.',
    path: `/packages/${slug ?? ''}`,
    image: pkg ? largestSrc(media[pkg.heroImage]) : undefined,
    type: 'article',
    jsonLd: pkg
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'TouristTrip',
            name: `${pkg.plainName} Tour Package`,
            description: pkg.summary,
            url: `${site.url}/packages/${pkg.slug}`,
            touristType: pkg.bestFor,
            itinerary: {
              '@type': 'ItemList',
              numberOfItems: pkg.itinerary.length,
              itemListElement: pkg.itinerary.map((d) => ({
                '@type': 'ListItem',
                position: d.day,
                name: d.title,
                description: d.description,
              })),
            },
            offers: {
              '@type': 'Offer',
              price: pkg.priceFrom,
              priceCurrency: 'INR',
              availability: 'https://schema.org/InStock',
              // Indicative starting price, not a fixed quote.
              priceValidUntil: undefined,
            },
            provider: { '@type': 'TravelAgency', name: site.name, url: site.url },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: pkg.faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
              { '@type': 'ListItem', position: 2, name: 'Packages', item: `${site.url}/packages` },
              {
                '@type': 'ListItem',
                position: 3,
                name: pkg.plainName,
                item: `${site.url}/packages/${pkg.slug}`,
              },
            ],
          },
        ]
      : undefined,
  })

  if (!pkg) {
    return (
      <NotFoundBody
        title="We could not find that journey."
        description="It may have been renamed or retired. Browse the current collection instead."
      />
    )
  }

  const related = packages.filter((p) => p.slug !== pkg.slug && p.region === pkg.region).slice(0, 3)
  const fallbackRelated = packages.filter((p) => p.slug !== pkg.slug).slice(0, 3)
  const suggestions = related.length >= 2 ? related : fallbackRelated

  const waMessage = `Hi Roam Ready, I'd like to know more about the ${pkg.plainName} journey.`

  return (
    <>
      {/* ---------------------------------------------------------------- HERO */}
      <section className="grain relative min-h-[92svh] w-full overflow-hidden bg-pine">
        <Media
          name={pkg.heroImage}
          alt={pkg.heroImageAlt}
          priority
          reveal={false}
          sizes="100vw"
          fill
          imgClassName="h-full w-full object-cover animate-kenburns motion-reduce:animate-none"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[1] bg-gradient-to-br from-clay/25 via-transparent to-pine/70 mix-blend-soft-light"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[2] bg-gradient-to-b from-ink/75 via-ink/25 to-ink/92"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[2] bg-gradient-to-r from-ink/65 via-transparent to-transparent"
        />
        <div
          aria-hidden="true"
          className="glow-clay animate-drift absolute -right-[12%] top-[6%] z-[3] h-[38rem] w-[38rem] opacity-45 motion-reduce:animate-none"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[3] shadow-[inset_0_0_16rem_rgba(12,14,11,0.62)]"
        />

        <div className="relative z-10 flex min-h-[92svh] flex-col justify-between pb-12 pt-28 sm:pt-32">
          <Container wide>
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <Breadcrumbs
                onDark
                items={[
                  { label: 'Home', to: '/' },
                  { label: 'Packages', to: '/packages' },
                  { label: pkg.plainName },
                ]}
              />
            </div>
          </Container>

          <Container wide>
            <div className="max-w-3xl">
              <div
                className="mb-6 flex flex-wrap gap-2 animate-fade-up"
                style={{ animationDelay: '120ms' }}
              >
                {pkg.tripTypes.slice(0, 3).map((t) => (
                  <Pill key={t} tone="light">
                    {t}
                  </Pill>
                ))}
              </div>

              <h1
                className="text-hero text-ivory drop-shadow-[0_2px_28px_rgba(12,14,11,0.5)] animate-fade-up"
                style={{ animationDelay: '200ms' }}
              >
                {pkg.name}
              </h1>

              <p
                className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-ivory/78 sm:text-[1.1875rem] animate-fade-up"
                style={{ animationDelay: '300ms' }}
              >
                {pkg.tagline}
              </p>

              {/* Key facts as a hairline-separated row rather than three cards. */}
              <dl
                className="mt-10 flex flex-wrap gap-x-10 gap-y-5 border-t border-ivory/20 pt-7 animate-fade-up"
                style={{ animationDelay: '380ms' }}
              >
                <div>
                  <dt className="text-[0.6875rem] uppercase tracking-[0.14em] text-ivory/50">
                    Duration
                  </dt>
                  <dd className="mt-1.5 text-[1rem] text-ivory">{pkg.duration}</dd>
                </div>
                <div>
                  <dt className="text-[0.6875rem] uppercase tracking-[0.14em] text-ivory/50">
                    Starting from
                  </dt>
                  <dd className="mt-1.5 font-display text-[1.375rem] leading-none text-clay-light">
                    {inr(pkg.priceFrom)}
                    <span className="ml-1.5 font-sans text-[0.75rem] text-ivory/55">
                      per person
                    </span>
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.6875rem] uppercase tracking-[0.14em] text-ivory/50">
                    Best for
                  </dt>
                  <dd className="mt-1.5 text-[1rem] text-ivory">{pkg.bestFor.join(' · ')}</dd>
                </div>
              </dl>

              <div
                className="mt-9 flex flex-wrap gap-3 animate-fade-up"
                style={{ animationDelay: '460ms' }}
              >
                <Button
                  size="lg"
                  onClick={() => setEnquiryOpen(true)}
                  variant="inverse"
                >
                  Enquire Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  href={whatsappLink(waMessage)}
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
          </Container>
        </div>
      </section>

      {/* ------------------------------------------------------------ OVERVIEW */}
      <Section tone="ivory">
        <Container wide>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7" data-reveal>
              <p className="eyebrow mb-6">The journey</p>
              {pkg.description.map((para, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? 'font-display text-[1.375rem] leading-[1.45] tracking-[-0.015em] text-ink sm:text-[1.625rem]'
                      : 'mt-6 text-[1rem] leading-relaxed text-muted'
                  }
                >
                  {para}
                </p>
              ))}

              <h2 className="mt-12 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-faint">
                Highlights
              </h2>
              <ul className="mt-5 space-y-3">
                {pkg.highlights.map((h) => (
                  <li key={h} className="flex gap-3.5 text-[0.9375rem] leading-relaxed text-ink">
                    <span
                      aria-hidden="true"
                      className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-clay"
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick facts */}
            <aside className="lg:col-span-5 lg:pl-8" data-reveal>
              <div className="rounded-3xl bg-shell p-8">
                <h2 className="eyebrow mb-7">Quick facts</h2>
                <dl className="space-y-6">
                  {[
                    { label: 'Duration', value: pkg.duration },
                    { label: 'Destination', value: pkg.region },
                    { label: 'Best for', value: pkg.bestFor.join(' / ') },
                    { label: 'Travel style', value: pkg.travelStyle },
                    { label: 'Best time to visit', value: pkg.info.bestTime },
                    { label: 'Starting price', value: `${inr(pkg.priceFrom)} per person` },
                  ].map((f) => (
                    <div key={f.label} className="border-b border-border pb-6 last:border-0 last:pb-0">
                      <dt className="text-[0.6875rem] uppercase tracking-[0.14em] text-faint">
                        {f.label}
                      </dt>
                      <dd className="mt-1.5 text-[0.9375rem] text-ink">{f.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-8">
                  <Button onClick={() => setEnquiryOpen(true)} className="w-full">
                    Enquire about this journey
                  </Button>
                </div>

                <p className="mt-5 text-[0.75rem] leading-relaxed text-faint">
                  Indicative pricing based on twin sharing. Final cost depends on dates, group size
                  and choice of stay.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* ----------------------------------------------------------- ITINERARY */}
      <Section tone="shell" id="itinerary">
        <Container wide>
          <SectionHeading
            eyebrow="Day by day"
            title="The itinerary"
            intro="An indicative plan. Timings and order shift with weather, road conditions and how you want to travel."
            className="mb-16 lg:mb-20"
          />
          <Itinerary days={pkg.itinerary} />
        </Container>
      </Section>

      {/* -------------------------------------------------- INCLUSIONS / EXCL. */}
      <Section tone="ivory">
        <Container wide>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div data-reveal>
              <h2 className="text-title">What’s included</h2>
              <ul className="mt-8 border-t border-border">
                {pkg.inclusions.map((item) => (
                  <li key={item} className="flex gap-4 border-b border-border py-4">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-moss" />
                    <span className="text-[0.9375rem] leading-relaxed text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div data-reveal style={{ '--reveal-delay': '100ms' } as React.CSSProperties}>
              <h2 className="text-title text-muted">Not included</h2>
              <ul className="mt-8 border-t border-border">
                {pkg.exclusions.map((item) => (
                  <li key={item} className="flex gap-4 border-b border-border py-4">
                    <Close className="mt-1 h-4 w-4 shrink-0 text-stone" />
                    <span className="text-[0.9375rem] leading-relaxed text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------------------ PLACES COVERED */}
      <Section tone="shell">
        <Container wide>
          <SectionHeading
            eyebrow="Places covered"
            title="Where you’ll actually be."
            className="mb-14"
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {pkg.placesCovered.map((place, i) => (
              <article
                key={place.name}
                className="group"
                data-reveal
                style={{ '--reveal-delay': `${i * 80}ms` } as React.CSSProperties}
              >
                <Media
                  name={place.image}
                  alt={place.imageAlt}
                  aspect="aspect-[4/5]"
                  rounded="rounded-2xl"
                  hoverZoom
                  sizes="(min-width: 1024px) 23vw, (min-width: 640px) 46vw, 92vw"
                />
                <h3 className="mt-5 font-display text-[1.25rem] tracking-[-0.02em]">{place.name}</h3>
                <p className="mt-2 text-[0.875rem] leading-relaxed text-muted">
                  {place.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* -------------------------------------------------- TRIP INFORMATION */}
      <Section tone="ivory">
        <Container wide>
          <SectionHeading eyebrow="Before you go" title="Trip information" className="mb-14" />

          <div className="grid gap-x-16 gap-y-12 lg:grid-cols-12">
            <div className="lg:col-span-5" data-reveal>
              <h3 className="font-display text-[1.375rem] tracking-[-0.02em]">Best time to visit</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{pkg.info.bestTime}</p>

              <h3 className="mt-10 font-display text-[1.375rem] tracking-[-0.02em]">Weather</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{pkg.info.weather}</p>

              <h3 className="mt-10 font-display text-[1.375rem] tracking-[-0.02em]">Travel tips</h3>
              <ul className="mt-4 space-y-3">
                {pkg.info.tips.map((t) => (
                  <li key={t} className="flex gap-3.5 text-[0.9375rem] leading-relaxed text-muted">
                    <span
                      aria-hidden="true"
                      className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-stone"
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4" data-reveal>
              <h3 className="font-display text-[1.375rem] tracking-[-0.02em]">What to carry</h3>
              <ul className="mt-4 border-t border-border">
                {pkg.info.whatToCarry.map((w) => (
                  <li
                    key={w}
                    className="border-b border-border py-3.5 text-[0.9375rem] leading-relaxed text-muted"
                  >
                    {w}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3" data-reveal>
              <div className="rounded-2xl border border-clay/25 bg-clay-wash/60 p-6">
                <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-clay-deep">
                  Important
                </h3>
                <ul className="mt-4 space-y-3">
                  {pkg.info.important.map((n) => (
                    <li key={n} className="text-[0.8125rem] leading-relaxed text-ink/75">
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ----------------------------------------------------------------- FAQ */}
      <Section tone="shell">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4" data-reveal>
              <p className="eyebrow mb-5">Questions</p>
              <h2 className="text-title">The things people ask us.</h2>
              <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted">
                Not here? Ask us directly — we would rather answer it than have you guess.
              </p>
              <div className="mt-7">
                <Button
                  href={whatsappLink(waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                >
                  <WhatsApp className="h-4 w-4" />
                  Ask on WhatsApp
                </Button>
              </div>
            </div>
            <div className="lg:col-span-8" data-reveal>
              <Accordion items={pkg.faqs.map((f) => ({ question: f.question, answer: f.answer }))} />
            </div>
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------------------------- ENQUIRY */}
      <Section tone="pine" id="enquire">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4" data-reveal>
              <p className="eyebrow mb-5 text-ivory/50">Enquire</p>
              <h2 className="text-display text-ivory">
                Let’s plan <span className="accent-italic">{pkg.plainName}.</span>
              </h2>
              <p className="mt-6 text-[0.9375rem] leading-relaxed text-ivory/70">
                Tell us your dates and who is travelling. We will come back with a plan built around
                you — usually within a working day.
              </p>

              <div className="mt-10 space-y-4 border-t border-ivory/15 pt-8">
                <a
                  href={`tel:+${site.contact.phoneRaw}`}
                  className="block text-[0.9375rem] text-ivory/70 transition-colors hover:text-ivory"
                >
                  {site.contact.phoneDisplay}
                </a>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="block text-[0.9375rem] text-ivory/70 transition-colors hover:text-ivory"
                >
                  {site.contact.email}
                </a>
                <p className="text-[0.8125rem] text-ivory/45">{site.contact.hours}</p>
              </div>
            </div>

            <div className="lg:col-span-8" data-reveal>
              <EnquiryForm defaultPackage={pkg.slug} onDark />
            </div>
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------------------------- RELATED */}
      <Section tone="ivory">
        <Container wide>
          <SectionHeading
            eyebrow="Keep looking"
            title="Other journeys you might like"
            aside={
              <Button to="/packages" variant="secondary">
                All journeys
              </Button>
            }
            className="mb-12"
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {suggestions.map((p) => (
              <PackageCard key={p.slug} pkg={p} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Mobile conversion bar + modal enquiry */}
      <div className="pb-20 lg:pb-0" />
      <StickyCTA
        priceFrom={pkg.priceFrom}
        packageName={pkg.plainName}
        onEnquire={() => setEnquiryOpen(true)}
      />

      <Modal
        open={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        title={`Enquire — ${pkg.plainName}`}
        size="lg"
      >
        <p className="-mt-3 mb-8 text-[0.9375rem] leading-relaxed text-muted">
          {pkg.duration} · from {inr(pkg.priceFrom)} per person. Tell us your dates and we will do
          the rest.
        </p>
        <EnquiryForm defaultPackage={pkg.slug} />
      </Modal>

      <Link to="/packages" className="sr-only">
        Back to all packages
      </Link>
    </>
  )
}
