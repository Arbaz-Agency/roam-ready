import { destinations } from '../../data/destinations'

const names = destinations.map((d) => d.name)

/** One pass of the list. Declared outside the component so it is not
 *  recreated — and remounted — on every render. */
function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14"
      aria-hidden={hidden || undefined}
    >
      {names.map((name) => (
        <li key={name} className="flex items-center gap-10 sm:gap-14">
          <span className="whitespace-nowrap font-display text-[1.5rem] tracking-[-0.02em] text-ivory/75 sm:text-[2rem]">
            {name}
          </span>
          <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rotate-45 bg-clay-light" />
        </li>
      ))}
    </ul>
  )
}

/**
 * Continuous destination band.
 *
 * Sits directly under the hero as a hard tonal cut from photograph to deep
 * pine. The track is duplicated and the pair translated -50%, which loops
 * seamlessly without measuring anything; the duplicate is aria-hidden so the
 * list is announced once. Edges are masked so names fade rather than clip.
 */
export function Marquee() {
  return (
    <section className="grain relative overflow-hidden border-y border-ivory/10 bg-pine py-7 sm:py-9">
      <div aria-hidden="true" className="glow-moss absolute inset-0 opacity-40" />
      <div className="relative flex [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee flex motion-reduce:animate-none">
          <Track />
          <Track hidden />
        </div>
      </div>
    </section>
  )
}
