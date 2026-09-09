import { useSeo } from '../utils/seo'
import { PageHero } from '../components/layout/PageHero'
import { Container, Section } from '../components/common/Section'
import { TripPlanner } from '../components/forms/TripPlanner'
import { Testimonials } from '../components/testimonials/Testimonials'

export default function PlanYourTrip() {
  useSeo({
    title: 'Plan Your Trip | Roam Ready',
    description:
      'Tell us where you want to go, when, and who with. Roam Ready will send back a written itinerary built around you — usually within a working day.',
    path: '/plan-your-trip',
  })

  return (
    <>
      <PageHero
        image="heroPlan"
        imageAlt="Rain clouds gathering over a high Himalayan valley"
        eyebrow="Plan your trip"
        title={
          <>
            Tell us the shape of it. We will do the <span className="accent-italic">rest.</span>
          </>
        }
        intro="Six short questions. No obligation, no automated quote — a real itinerary written by the person who will plan your trip."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Plan your trip' }]}
        height="sm"
      />

      <Section tone="ivory">
        <Container>
          <TripPlanner />
        </Container>
      </Section>

      <Testimonials />
    </>
  )
}
