import { site } from '../data/site'
import { useSeo } from '../utils/seo'
import { PageHero } from '../components/layout/PageHero'
import { Container, Section, SectionHeading } from '../components/common/Section'
import { Media } from '../components/common/Media'
import { Button } from '../components/common/Button'
import { Testimonials } from '../components/testimonials/Testimonials'
import { PlanCTA } from '../components/home/PlanCTA'
import { ArrowRight } from '../components/common/Icons'

const principles = [
  {
    title: 'We plan for daylight, not for distance',
    body: 'The single biggest thing that ruins a mountain trip is a schedule built by someone looking at a map instead of a clock. We build around when the light is good and when the roads are open.',
  },
  {
    title: 'We would rather say no',
    body: 'If a route does not work in your dates, or the version you have been quoted elsewhere is too compressed to enjoy, we will tell you before you book rather than after.',
  },
  {
    title: 'Empty afternoons are deliberate',
    body: 'Every itinerary we write has unscheduled time in it. That is not us running out of ideas — it is the part people describe when they get home.',
  },
  {
    title: 'One person, start to finish',
    body: 'The person who plans your trip is the person who answers the phone while you are on it. No handover, no ticket queue.',
  },
]

export default function About() {
  useSeo({
    title: 'About Roam Ready | How We Plan Travel',
    description:
      'Roam Ready is a small travel team designing curated journeys across India — planned around daylight, altitude and rest rather than around cramming in stops.',
    path: '/about',
  })

  return (
    <>
      <PageHero
        image="heroAbout"
        imageAlt="Snow-covered orchards in the Sangla valley, Himachal Pradesh"
        eyebrow="About us"
        title={
          <>
            We believe the best journeys are the ones you{' '}
            <span className="accent-italic">remember.</span>
          </>
        }
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
      />

      {/* ------------------------------------------------------------- STORY */}
      <Section tone="ivory">
        <Container wide>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5" data-reveal>
              <p className="eyebrow mb-6">Our story</p>
              <h2 className="text-display">
                It started with a badly planned trip.
              </h2>
            </div>

            <div className="lg:col-span-7 lg:pt-3" data-reveal>
              <p className="font-display text-[1.375rem] leading-[1.45] tracking-[-0.015em] sm:text-[1.625rem]">
                Five days, four hill stations, and about eleven hours a day in a vehicle. We came
                back exhausted, with a camera roll full of places we had technically been to.
              </p>
              <p className="mt-6 text-[1rem] leading-relaxed text-muted">
                Roam Ready came out of that. The premise is not complicated: most travel in India is
                sold on how much you can fit in, and almost nobody enjoys travelling that way. We
                would rather plan fewer stops, at better hours, with somewhere decent to sleep and
                someone reachable when the weather changes the plan.
              </p>
              <p className="mt-5 text-[1rem] leading-relaxed text-muted">
                We are a small team, and that is deliberate. It means the person who writes your
                itinerary has usually driven the road it is built on.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* -------------------------------------------------------- PHILOSOPHY */}
      <Section tone="shell">
        <Container wide>
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="lg:sticky lg:top-28">
              <Media
                name="storyMountains"
                alt="Snow-covered peaks of the Rohtang range above the Manali valley"
                aspect="aspect-[4/5]"
                rounded="rounded-3xl"
                sizes="(min-width: 1024px) 46vw, 100vw"
              />
            </div>

            <div>
              <p className="eyebrow mb-6" data-reveal>
                Our philosophy
              </p>
              <h2
                className="text-display"
                data-reveal
                style={{ '--reveal-delay': '60ms' } as React.CSSProperties}
              >
                Four things we will not <span className="accent-italic">compromise on.</span>
              </h2>

              <ul className="mt-12">
                {principles.map((p, i) => (
                  <li
                    key={p.title}
                    className="border-t border-border-strong/50 py-7 last:border-b"
                    data-reveal
                    style={{ '--reveal-delay': `${100 + i * 80}ms` } as React.CSSProperties}
                  >
                    <div className="flex gap-6">
                      <span className="mt-1.5 font-sans text-[0.6875rem] font-semibold tracking-[0.14em] text-stone">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="font-display text-[1.375rem] leading-tight tracking-[-0.02em]">
                          {p.title}
                        </h3>
                        <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{p.body}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------- WHAT WE DO */}
      <Section tone="ivory">
        <Container wide>
          <SectionHeading
            eyebrow="What we do"
            title="Four regions, one way of working."
            intro="We stay narrow on purpose. These are the places we know well enough to plan properly."
            className="mb-14"
          />

          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                image: 'manaliValley' as const,
                alt: 'The Rohtang range above Manali',
                region: 'Himachal Pradesh',
                body: 'Manali, the Parvati valley and the Shimla ridge — our most travelled ground.',
              },
              {
                image: 'pahalgamValley' as const,
                alt: 'The Pahalgam valley in Kashmir',
                region: 'Kashmir',
                body: 'Srinagar, Pahalgam, Gulmarg and Sonamarg, at a pace that lets you look up.',
              },
              {
                image: 'kedarnathWalkover' as const,
                alt: 'The pilgrim route towards Kedarnath',
                region: 'Uttarakhand',
                body: 'Kedarnath, Badrinath and Rishikesh — routes shaped by pilgrimage.',
              },
              {
                image: 'udaipurPicholaSunset' as const,
                alt: 'Sunset over Lake Pichola in Udaipur',
                region: 'Rajasthan',
                body: 'Udaipur and Mount Abu, timed around the light and away from the heat.',
              },
            ].map((r, i) => (
              <article
                key={r.region}
                data-reveal
                style={{ '--reveal-delay': `${i * 80}ms` } as React.CSSProperties}
              >
                <Media
                  name={r.image}
                  alt={r.alt}
                  aspect="aspect-[4/5]"
                  rounded="rounded-2xl"
                  sizes="(min-width: 1024px) 23vw, (min-width: 640px) 46vw, 92vw"
                />
                <h3 className="mt-5 font-display text-[1.25rem] tracking-[-0.02em]">{r.region}</h3>
                <p className="mt-2 text-[0.875rem] leading-relaxed text-muted">{r.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* --------------------------------------------------------- CONFIDENCE */}
      <Section tone="pine">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5" data-reveal>
              <p className="eyebrow mb-6 text-ivory/50">Travel with confidence</p>
              <h2 className="text-display text-ivory">
                The parts nobody advertises.
              </h2>
            </div>

            <div className="lg:col-span-7" data-reveal>
              <dl className="border-t border-ivory/15">
                {[
                  {
                    t: 'Honest pricing',
                    d: 'Indicative starting prices on every journey, and a written quote before you commit. What is excluded is listed as plainly as what is included.',
                  },
                  {
                    t: 'Vetted stays and drivers',
                    d: 'We use accommodation and vehicles we have used before. Where a property cannot be confirmed until booking, we say so rather than printing a name we cannot honour.',
                  },
                  {
                    t: 'Weather-first decisions',
                    d: 'If a road, a trek or an activity is not safe on the day, it does not run. We will restructure the day rather than push an itinerary through bad conditions.',
                  },
                  {
                    t: 'Reachable while you travel',
                    d: 'One point of contact, on a phone, for the whole trip.',
                  },
                ].map((row) => (
                  <div key={row.t} className="border-b border-ivory/15 py-7">
                    <dt className="font-sans text-[1.0625rem] font-medium text-ivory">{row.t}</dt>
                    <dd className="mt-2.5 max-w-2xl text-[0.9375rem] leading-relaxed text-ivory/65">
                      {row.d}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10 flex flex-wrap gap-3">
                <Button to="/packages" variant="inverse">
                  Browse journeys
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button to="/contact" variant="light">
                  Talk to us
                </Button>
              </div>

              <p className="mt-8 text-[0.75rem] leading-relaxed text-ivory/40">
                Registered as {site.name}. Itineraries shown across this site are indicative;
                inclusions, stays and pricing are confirmed in writing at the time of booking.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Testimonials />
      <PlanCTA />
    </>
  )
}
