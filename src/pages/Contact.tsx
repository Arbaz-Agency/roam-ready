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
      'Within one working day for enquiries sent through the site, and usually much faster on WhatsApp during business hours.',
  },
  {
    question: 'Do you only sell the eight journeys listed?',
    answer:
      'No. Those are our most requested routes and they exist mainly to show how we plan. Roughly half the trips we run are built from scratch around someone’s dates and interests.',
  },
  {
    question: 'Can you work with a fixed budget?',
    answer:
      'Yes, and we would rather you told us the number at the start. If what you want is not achievable within it, we will say so rather than quietly reducing the quality of the stays.',
  },
  {
    question: 'What do you need from me to start?',
    answer:
      'Roughly where, roughly when, how many of you, and a budget range. Everything else we can work out together.',
  },
  {
    question: 'How do payments work?',
    answer:
      'Bookings are confirmed against a written quote and a deposit, with the balance due before travel. Exact terms are set out in the quote — nothing is taken before you have seen them in writing.',
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
    note: 'Fastest during business hours',
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
        intro="Tell us roughly what you have in mind. There is no obligation and no automated quote at the end of it."
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
              src="https://www.openstreetmap.org/export/embed.html?bbox=76.75%2C30.70%2C76.83%2C30.77&layer=mapnik"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[22rem] w-full border-0 sm:h-[26rem]"
            />
          </div>
          <p className="mt-4 text-[0.75rem] text-faint">
            Placeholder location — replace with the confirmed Roam Ready office address and map
            embed.
          </p>
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
