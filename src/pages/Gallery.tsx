import { useCallback, useEffect, useState } from 'react'
import { gallery } from '../data/gallery'
import { media } from '../data/media'
import { useSeo } from '../utils/seo'
import { cn } from '../utils/cn'
import { fallbackSrc, srcSet } from '../utils/image'
import { PageHero } from '../components/layout/PageHero'
import { Container, Section } from '../components/common/Section'
import { Media } from '../components/common/Media'
import { Modal } from '../components/common/Modal'
import { PlanCTA } from '../components/home/PlanCTA'
import { ArrowRight } from '../components/common/Icons'

/** Column spans by intrinsic shape — this is what keeps the grid from squaring off. */
const spans: Record<string, string> = {
  portrait: 'row-span-2',
  landscape: '',
  square: '',
}

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null)

  useSeo({
    title: 'Gallery | Roam Ready',
    description:
      'Photographs from the routes we travel — Himalayan valleys, river towns, temples and high mountain roads across northern India.',
    path: '/gallery',
  })

  const close = useCallback(() => setOpen(null), [])
  const step = useCallback(
    (dir: number) =>
      setOpen((i) => (i === null ? null : (i + dir + gallery.length) % gallery.length)),
    [],
  )

  // Arrow-key navigation while the lightbox is open.
  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, step])

  const active = open === null ? null : gallery[open]

  return (
    <>
      <PageHero
        image="heroGallery"
        imageAlt="The cold desert landscape of Spiti, Himachal Pradesh"
        eyebrow="Gallery"
        title={
          <>
            The places, as we <span className="accent-italic">found them.</span>
          </>
        }
        intro="No filters, no composites. Photographs from the routes we actually travel."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Gallery' }]}
        height="sm"
      />

      <Section tone="ivory">
        <Container wide>
          {/* Masonry via dense grid auto-flow: portraits take two rows and the
              browser backfills the gaps, so the layout stays tight without
              a JS masonry library. */}
          <ul className="grid auto-rows-[13rem] grid-flow-dense grid-cols-2 gap-3 sm:auto-rows-[15rem] sm:gap-4 lg:grid-cols-4 lg:auto-rows-[16rem]">
            {gallery.map((img, i) => (
              <li
                key={img.src}
                className={cn('group relative', spans[img.ratio])}
                data-reveal
                style={{ '--reveal-delay': `${(i % 8) * 60}ms` } as React.CSSProperties}
              >
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  aria-label={`View ${img.caption}, ${img.place}`}
                  className="h-full w-full overflow-hidden rounded-2xl"
                >
                  <Media
                    name={img.src}
                    alt={img.alt}
                    fill
                    imgClassName="h-full w-full object-cover"
                    hoverZoom
                    priority={i < 3}
                    reveal={false}
                    sizes="(min-width: 1024px) 24vw, 46vw"
                  />

                  {/* Caption reveals on hover only — the grid stays quiet at rest. */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col justify-end rounded-b-2xl bg-gradient-to-t from-ink/80 to-transparent p-4 pt-12 text-left opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                  >
                    <span className="text-[0.8125rem] font-medium text-ivory">{img.caption}</span>
                    <span className="text-[0.6875rem] text-ivory/65">{img.place}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-[0.75rem] text-faint">
            Placeholder photography, freely licensed. See{' '}
            <a href="/credits" className="underline underline-offset-4 hover:text-ink">
              credits
            </a>
            .
          </p>
        </Container>
      </Section>

      <PlanCTA />

      {/* Lightbox */}
      <Modal open={open !== null} onClose={close} title={active?.caption ?? 'Photograph'} size="full" bare>
        {active && (
          <figure className="flex flex-col items-center">
            <img
              key={active.src}
              src={fallbackSrc(media[active.src])}
              srcSet={srcSet(media[active.src])}
              sizes="92vw"
              alt={active.alt}
              className="max-h-[76vh] w-auto max-w-full animate-fade-in rounded-2xl object-contain"
            />

            <figcaption className="mt-5 flex w-full items-center justify-between gap-6">
              <div>
                <p className="font-display text-[1.125rem] text-ivory">{active.caption}</p>
                <p className="text-[0.8125rem] text-ivory/55">{active.place}</p>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <span className="mr-2 text-[0.75rem] tabular-nums text-ivory/45">
                  {(open ?? 0) + 1} / {gallery.length}
                </span>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous photograph"
                  className="grid h-10 w-10 place-items-center rounded-full bg-ivory/10 text-ivory transition-colors hover:bg-ivory/20"
                >
                  <ArrowRight className="h-4 w-4 rotate-180" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next photograph"
                  className="grid h-10 w-10 place-items-center rounded-full bg-ivory/10 text-ivory transition-colors hover:bg-ivory/20"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </figcaption>
          </figure>
        )}
      </Modal>
    </>
  )
}
