import { useId, useState } from 'react'
import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'
import { Minus } from './Icons'

interface Item {
  question: string
  answer: ReactNode
}

/**
 * FAQ accordion.
 *
 * Height animates via grid-template-rows 0fr → 1fr, which transitions
 * cleanly without measuring the content or hard-coding a max-height.
 * The toggle is a real <button> inside a heading, so the list is navigable
 * by keyboard and announced correctly.
 */
export function Accordion({
  items,
  onDark = false,
  defaultOpen = -1,
}: {
  items: Item[]
  onDark?: boolean
  defaultOpen?: number
}) {
  const [open, setOpen] = useState(defaultOpen)
  const id = useId()

  return (
    <div className={cn('border-t', onDark ? 'border-ivory/15' : 'border-border')}>
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div
            key={item.question}
            className={cn('border-b', onDark ? 'border-ivory/15' : 'border-border')}
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                aria-controls={`${id}-panel-${i}`}
                className={cn(
                  'group flex w-full items-start justify-between gap-6 py-6 text-left',
                  'transition-colors duration-300',
                  onDark ? 'text-ivory hover:text-ivory/70' : 'text-ink hover:text-muted',
                )}
              >
                <span className="font-sans text-[1.0625rem] font-medium leading-snug tracking-[-0.01em]">
                  {item.question}
                </span>
                <span
                  className={cn(
                    'relative mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full',
                    'transition-colors duration-300',
                    onDark ? 'bg-ivory/10' : 'bg-ink/[0.055]',
                  )}
                >
                  {/* Two rules crossing — the vertical one rotates away on open. */}
                  <Minus className="h-3.5 w-3.5" />
                  <Minus
                    className={cn(
                      'absolute h-3.5 w-3.5 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]',
                      isOpen ? 'rotate-0' : 'rotate-90',
                    )}
                  />
                </span>
              </button>
            </h3>

            <div
              id={`${id}-panel-${i}`}
              role="region"
              className={cn(
                'grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="overflow-hidden">
                <div
                  className={cn(
                    'max-w-2xl pb-7 pr-10 text-[0.9375rem] leading-relaxed',
                    onDark ? 'text-ivory/70' : 'text-muted',
                  )}
                >
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
