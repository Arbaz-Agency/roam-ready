import type { ItineraryDay } from '../../types'
import { pad2 } from '../../utils/format'
import { cn } from '../../utils/cn'
import { Media } from '../common/Media'

/**
 * Day-wise itinerary.
 *
 * Deliberately not an accordion list. On desktop it is a vertical timeline
 * with the day marker in a fixed left rail and the content alternating image
 * side, so consecutive days never look identical. On mobile the rail collapses
 * and each day becomes a clean stacked block — the same data, restructured
 * rather than shrunk.
 */

function Fact({ label, value }: { label: string; value: string }) {
  if (!value || value === '—') return null
  return (
    <div>
      <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-faint">
        {label}
      </dt>
      <dd className="mt-1 text-[0.875rem] leading-snug text-ink">{value}</dd>
    </div>
  )
}

function Day({ day, flipped }: { day: ItineraryDay; flipped: boolean }) {
  return (
    <li className="relative" data-reveal>
      {/* Marker sitting on the rail. */}
      <div className="absolute left-0 top-1.5 hidden lg:block">
        <div className="relative z-10 grid h-14 w-14 place-items-center rounded-full border border-clay/35 bg-shell shadow-lift">
          <span className="font-display text-[1.125rem] leading-none text-clay">
            {pad2(day.day)}
          </span>
        </div>
      </div>

      <div className="lg:pl-24">
        {/* Mobile day marker */}
        <div className="mb-4 flex items-center gap-3 lg:hidden">
          <span className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-clay">
            Day {pad2(day.day)}
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>

        {/* items-center keeps the shorter column optically balanced — the
            descriptions vary a lot in length and top-alignment left a large
            hole beneath the text on the shorter days. */}
        <div
          className={cn(
            'grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-12',
            flipped && 'lg:[&>figure]:order-2',
          )}
        >
          <figure className="graded relative overflow-hidden rounded-2xl shadow-lift">
            <Media
              name={day.image}
              alt={day.imageAlt}
              aspect="aspect-[5/4]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </figure>

          <div className={cn(flipped && 'lg:order-1')}>
            <h3 className="font-display text-[1.5rem] leading-tight tracking-[-0.02em] sm:text-[1.75rem]">
              {day.title}
            </h3>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">{day.description}</p>

            {day.places.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {day.places.map((p) => (
                  <li
                    key={p}
                    className="rounded-full bg-ink/[0.05] px-3 py-1 text-[0.75rem] text-muted"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            )}

            <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-6 sm:grid-cols-3">
              <Fact label="Meals" value={day.meals} />
              <Fact label="Stay" value={day.stay} />
              <Fact label="Transport" value={day.transport} />
            </dl>
          </div>
        </div>
      </div>
    </li>
  )
}

export function Itinerary({ days }: { days: ItineraryDay[] }) {
  return (
    <div className="relative">
      {/* The rail. Stops short at both ends so it reads as a route rather
          than as a border running off the section. */}
      <div
        aria-hidden="true"
        className="absolute left-7 top-8 hidden w-px bg-border lg:block"
        style={{ height: 'calc(100% - 6rem)' }}
      />

      <ol className="space-y-16 lg:space-y-24">
        {days.map((day, i) => (
          <Day key={day.day} day={day} flipped={i % 2 === 1} />
        ))}
      </ol>
    </div>
  )
}
