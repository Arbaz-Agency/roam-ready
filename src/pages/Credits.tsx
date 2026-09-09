import { media } from '../data/media'
import { useSeo } from '../utils/seo'
import { Container, Section } from '../components/common/Section'

/**
 * Photography credits.
 *
 * The build ships with freely-licensed placeholder photography, and those
 * licences require attribution. This page is generated straight from the media
 * manifest, so it stays accurate as images are swapped — and can simply be
 * removed once the site runs on owned photography.
 */
export default function Credits() {
  useSeo({
    title: 'Photography Credits | Roam Ready',
    description: 'Attribution for the photography used across the Roam Ready website.',
    path: '/credits',
  })

  // One row per distinct photograph — several keys can point at the same file.
  const rows = Object.entries(media)
    .filter(([, a], i, all) => all.findIndex(([, b]) => b.base === a.base) === i)
    .map(([key, a]) => ({
      key,
      credit: a.credit,
      license: a.license,
      source: a.source,
    }))
    .sort((a, b) => a.credit.localeCompare(b.credit) || a.key.localeCompare(b.key))

  return (
    <Section tone="ivory" className="pt-36 sm:pt-44">
      <Container>
        <p className="eyebrow mb-6">Credits</p>
        <h1 className="text-display">Photography</h1>
        <p className="lede mt-6 max-w-2xl">
          Roam Ready is built with Creative Commons placeholder photography of the destinations we
          travel to. Every photograph is used under a licence permitting commercial use and
          modification, and is credited to its author below.
        </p>
        <p className="mt-5 max-w-2xl text-[0.875rem] leading-relaxed text-muted">
          These are placeholders. Before launch they should be replaced with commissioned or
          licensed photography — a single edit to <code className="text-ink">src/data/media.ts</code>{' '}
          swaps every image on the site.
        </p>

        <ul className="mt-14 border-t border-border">
          {rows.map((r) => (
            <li
              key={r.key}
              className="grid gap-1 border-b border-border py-4 sm:grid-cols-12 sm:gap-6"
            >
              <span className="text-[0.875rem] text-ink sm:col-span-5">{r.credit}</span>
              <span className="text-[0.75rem] text-faint sm:col-span-3">{r.license}</span>
              <span className="sm:col-span-4">
                {r.source ? (
                  <a
                    href={r.source}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-[0.8125rem] text-muted underline underline-offset-4 transition-colors hover:text-ink"
                  >
                    View original
                  </a>
                ) : null}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-[0.75rem] leading-relaxed text-faint">
          {rows.length} photographs. Licence terms are as published at each source link; consult
          them for the full text before relying on this photography commercially.
        </p>
      </Container>
    </Section>
  )
}
