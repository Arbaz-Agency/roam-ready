import { packages } from '../data/packages'
import { site } from '../data/site'
import { useSeo } from '../utils/seo'
import { PageHero } from '../components/layout/PageHero'
import { Container, Section } from '../components/common/Section'
import { PackageCard } from '../components/packages/PackageCard'
import { PlanCTA } from '../components/home/PlanCTA'

export default function Packages() {
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

  return (
    <>
      <PageHero
        image="kashmirSnowy"
        imageAlt="Snow peaks above the Kashmir valleys"
        eyebrow="Journeys"
        title={
          <>
            Journeys worth <span className="accent-italic">taking.</span>
          </>
        }
        intro="Five routes across the Himalaya, Kashmir and Rajasthan. Each one is a starting point — tell us what to change."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Packages' }]}
      />

      <Section tone="ivory" size="md">
        <Container wide>
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg, i) => (
              <PackageCard key={pkg.slug} pkg={pkg} priority={i === 0} />
            ))}
          </div>
        </Container>
      </Section>

      <PlanCTA />
    </>
  )
}
