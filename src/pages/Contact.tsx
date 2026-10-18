import { site, whatsappLink } from '../data/site'
import { useSeo } from '../utils/seo'
import { PageHero } from '../components/layout/PageHero'
import { Container, Section } from '../components/common/Section'
import { Button } from '../components/common/Button'
import { Accordion } from '../components/common/Accordion'
import { EnquiryForm } from '../components/forms/EnquiryForm'
import { WhatsAppFloat } from '../components/common/StickyCTA'
import { Mail, Phone, Pin, WhatsApp } from '../components/common/Icons'

const faqs = [
  {
    question: 'How quickly will I hear back?',
    answer:
      'Within one working day for enquiries sent through the site. WhatsApp is usually faster during business hours.',
  },
  {
    question: 'Do you only sell the five packages listed?',
    answer:
      'No. Those are our most requested trips. We also plan custom holidays for families, friends, couples, groups and pilgrims, built around your dates and budget.',
  },
  {
    question: 'Can you work with a fixed budget?',
    answer:
      'Yes. Tell us your budget at the start. If it cannot cover the trip you want, we will say what it does cover rather than quietly cutting the quality of the stays.',
  },
  {
    question: 'What do you need from me to start?',
    answer:
      'Your city, travel dates, the number of adults and children, any elders or medical needs, and a budget range. We will work out the rest with you.',
  },
  {
    question: 'Can you help with a Char Dham or Kedarnath yatra?',
    answer:
      'Yes. We help with the yatra registration formalities and plan the route around temple opening dates and the road conditions on the day.',
  },
  {
    question: 'How do payments work?',
    answer:
      'You receive a written quote first. A booking deposit confirms the trip, and the balance is due before you travel. Nothing is charged before you have seen the terms in writing, and the quote lists the accepted payment methods.',
  },
]

const channels = [
  {
    icon: <Phone className="h-4 w-4" />,
    label: 'Phone',
    value: site.contact.phoneDisplay,
    href: `tel:+${site.contact.phoneRaw}`,
    note: site.contact.hours,
  },
  {
    icon: <Mail className="h-4 w-4" />,
    label: 'Email',
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
    note: 'We reply within one working day',
  },
  {
    icon: <WhatsApp className="h-4 w-4" />,
    label: 'WhatsApp',
    value: 'Message us',
    href: whatsappLink(),
    note: 'Fastest during business hours. Send your city, dates and group size.',
    external: true,
  },
]

export default function Contact() {
  useSeo({
    title: 'Contact Roam Ready',
    description:
      'Talk to Roam Ready about planning a journey across India — by phone, email or WhatsApp. We reply within one working day.',
    path: '/contact',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'TravelAgency',
      name: site.name,
      url: `${site.url}/contact`,
      telephone: `+${site.contact.phoneRaw}`,
      email: site.contact.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.contact.addressLines[1],
        addressCountry: 'IN',
      },
    },
  })

  return (
    <>
      <PageHero
        image="heroContact"
        imageAlt="Evening light over Lake Pichola in Udaipur"
        eyebrow="Contact"
        title={
          <>
            Let’s start with a <span className="accent-italic">conversation.</span>
          </>
        }
        intro="Tell us your city, travel dates and how many of you are going. No obligation, and no automated quote at the end."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        height="sm"
      />

      {/* ------------------------------------------------------------ DETAILS */}
      <Section tone="ivory" size="sm">
        <Container wide>
          <ul className="grid gap-x-8 gap-y-10 border-t border-border pt-12 sm:grid-cols-3">
            {channels.map((c, i) => (
              <li
                key={c.label}
                data-reveal
                style={{ '--reveal-delay': `${i * 90}ms` } as React.CSSProperties}
              >
                <div className="mb-5 flex items-center gap-2.5 text-muted">
                  {c.icon}
                  <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em]">
                    {c.label}
                  </span>
                </div>
                <a
                  href={c.href}
                  {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="font-display text-[1.5rem] leading-tight tracking-[-0.02em] text-ink transition-colors duration-300 hover:text-moss"
                >
                  {c.value}
                </a>
                <p className="mt-2 text-[0.8125rem] text-faint">{c.note}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* --------------------------------------------------------------- FORM */}
      <Section tone="shell">
        <Container wide>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4" data-reveal>
              <p className="eyebrow mb-6">Enquiry</p>
              <h2 className="text-display">Send us the outline.</h2>
              <p className="mt-6 text-[0.9375rem] leading-relaxed text-muted">
                A rough destination and a rough month is enough to start. We will come back with
                questions and a first draft of an itinerary.
              </p>

              <div className="mt-10 flex items-start gap-3.5 border-t border-border pt-8">
                <Pin className="mt-0.5 h-4 w-4 shrink-0 text-stone" />
                <address className="not-italic text-[0.9375rem] leading-relaxed text-muted">
                  {site.contact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>

              <div className="mt-8">
                <Button
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                >
                  <WhatsApp className="h-4 w-4" />
                  WhatsApp Us
                </Button>
              </div>
            </div>

            <div className="lg:col-span-8" data-reveal>
              <div className="rounded-3xl bg-ivory p-8 sm:p-10">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- MAP */}
      <Section tone="ivory" size="sm">
        <Container wide>
          <div className="overflow-hidden rounded-3xl border border-border" data-reveal>
            {/* Lazy-loaded so the embed never blocks first paint. */}
            <iframe
              title={`Map showing the ${site.name} office location`}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.824889664021!2d77.19876037528918!3d28.635009875663435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfde680f3ae49%3A0x8fa845d3e2f55e8f!2sRoam%20Ready!5e0!3m2!1sen!2sin!4v1792312792879!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="h-[22rem] w-full border-0 sm:h-[26rem]"
            />
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- FAQ */}
      <Section tone="shell">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4" data-reveal>
              <p className="eyebrow mb-5">Questions</p>
              <h2 className="text-title">Before you write.</h2>
            </div>
            <div className="lg:col-span-8" data-reveal>
              <Accordion items={faqs} />
            </div>
          </div>
        </Container>
      </Section>

      <WhatsAppFloat />
    </>
  )
}
