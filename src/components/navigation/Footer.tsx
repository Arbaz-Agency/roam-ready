import { Link } from 'react-router-dom'
import { packages } from '../../data/packages'
import { destinations } from '../../data/destinations'
import { navLinks, site, whatsappLink } from '../../data/site'
import { Container } from '../common/Section'
import { ArrowUpRight, WhatsApp } from '../common/Icons'

const year = new Date().getFullYear()

function Column({
  title,
  links,
}: {
  title: string
  links: { label: string; to: string }[]
}) {
  return (
    <div>
      <h3 className="eyebrow mb-5 text-ivory/45">{title}</h3>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="text-[0.875rem] text-ivory/70 transition-colors duration-300 hover:text-ivory"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-pine text-ivory">
      <div
        aria-hidden="true"
        className="glow-clay pointer-events-none absolute -bottom-52 left-1/2 h-[44rem] w-[70rem] -translate-x-1/2 opacity-25"
      />

      <Container wide className="relative py-20 sm:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_2.6fr]">
          {/* Brand block */}
          <div className="max-w-sm">
            <Link to="/" className="group flex items-center gap-2.5 text-ivory">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 shrink-0">
                <circle
                  cx="12"
                  cy="12"
                  r="9.5"
                  fill="none"
                  stroke="currentColor"
                  strokeOpacity="0.35"
                  strokeWidth="1.3"
                />
                <path
                  d="M16.4 7.6 13.2 13.2 7.6 16.4l3.2-5.6 5.6-3.2Z"
                  className="fill-clay-light transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-[135deg]"
                  style={{ transformOrigin: '50% 50%' }}
                />
              </svg>
              <span className="font-display text-[1.0625rem] leading-none tracking-[0.16em]">
                ROAM READY
              </span>
            </Link>
            <p className="mt-6 text-[0.9375rem] leading-relaxed text-ivory/65">
              Curated journeys across the Himalayas, Rajasthan and beyond — planned slowly, run
              properly, and built around the people travelling.
            </p>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-ivory/25 px-5 py-3 text-[0.8125rem] font-medium text-ivory transition-colors duration-300 hover:border-ivory/60 hover:bg-ivory/[0.06]"
            >
              <WhatsApp className="h-4 w-4" />
              Message us on WhatsApp
            </a>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            <Column title="Navigate" links={navLinks.map((l) => ({ label: l.label, to: l.to }))} />

            <Column
              title="Journeys"
              links={packages.map((p) => ({
                label: p.plainName,
                to: `/packages/${p.slug}`,
              }))}
            />

            <Column
              title="Destinations"
              links={destinations
                .slice(0, 8)
                .map((d) => ({ label: d.name, to: `/destinations#${d.slug}` }))}
            />

            <div>
              <h3 className="eyebrow mb-5 text-ivory/45">Contact</h3>
              <ul className="space-y-3 text-[0.875rem] text-ivory/70">
                <li>
                  <a
                    href={`tel:+${site.contact.phoneRaw}`}
                    className="transition-colors duration-300 hover:text-ivory"
                  >
                    {site.contact.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="transition-colors duration-300 hover:text-ivory"
                  >
                    {site.contact.email}
                  </a>
                </li>
                <li className="pt-2 leading-relaxed text-ivory/55">
                  {site.contact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </li>
                <li className="pt-1 text-ivory/45">{site.contact.hours}</li>
              </ul>

              <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
                {site.social.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[0.8125rem] text-ivory/60 transition-colors duration-300 hover:text-ivory"
                    >
                      {s.label}
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ivory/12 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.75rem] text-ivory/45">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-[0.75rem] text-ivory/45">
            <Link to="/credits" className="transition-colors hover:text-ivory/80">
              Photography credits
            </Link>
            <span className="mx-2.5 text-ivory/25">·</span>
            Indicative itineraries — details confirmed at booking.
          </p>
        </div>
      </Container>
    </footer>
  )
}
