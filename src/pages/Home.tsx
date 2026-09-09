import { site } from '../data/site'
import { packages } from '../data/packages'
import { useSeo } from '../utils/seo'
import { Hero } from '../components/home/Hero'
import { Marquee } from '../components/home/Marquee'
import { FeaturedJourneys } from '../components/home/FeaturedJourneys'
import { WhyRoamReady } from '../components/home/WhyRoamReady'
import { Collections } from '../components/home/Collections'
import { HowItWorks } from '../components/home/HowItWorks'
import { Testimonials } from '../components/testimonials/Testimonials'
import { PlanCTA } from '../components/home/PlanCTA'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: `+${site.contact.phoneRaw}`,
  email: site.contact.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.contact.addressLines[1],
    addressCountry: 'IN',
  },
  areaServed: [...new Set(packages.map((p) => p.region))],
}

export default function Home() {
  useSeo({
    title: 'Roam Ready | Curated Journeys Across India',
    description: site.description,
    path: '/',
    jsonLd,
  })

  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedJourneys />
      <WhyRoamReady />
      <Collections />
      <HowItWorks />
      <Testimonials />
      <PlanCTA />
    </>
  )
}
