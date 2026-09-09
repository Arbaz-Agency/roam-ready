import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'
import { Close } from './Icons'

/**
 * Dialog built on the native <dialog> element — it gives us the top layer,
 * Escape-to-close and modal focus containment for free, which is a lot of
 * fiddly a11y code we do not have to write or maintain.
 */
export function Modal({
  open,
  onClose,
  title,
  children,
  size = 'md',
  bare = false,
}: {
  open: boolean
  onClose: () => void
  title: string
  children: ReactNode
  size?: 'md' | 'lg' | 'full'
  /** Chromeless — used by the gallery lightbox. */
  bare?: boolean
}) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (open && !el.open) el.showModal()
    if (!open && el.open) el.close()
  }, [open])

  // Lock the page behind the dialog so background content cannot scroll.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  const sizes = {
    md: 'max-w-lg',
    lg: 'max-w-3xl',
    full: 'max-w-[min(96rem,95vw)]',
  }

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onCancel={onClose}
      aria-label={title}
      // Clicking the backdrop closes; clicks inside the panel are stopped below.
      onClick={(e) => {
        if (e.target === ref.current) onClose()
      }}
      className={cn(
        'w-full backdrop:bg-ink/70 backdrop:backdrop-blur-sm',
        'm-auto max-h-[92vh] overflow-visible bg-transparent p-4 text-ink',
        'open:animate-fade-in',
        sizes[size],
      )}
    >
      {open && (
        <div
          className={cn(
            'relative animate-fade-up',
            !bare && 'max-h-[88vh] overflow-y-auto rounded-3xl bg-ivory p-7 shadow-float sm:p-9',
          )}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className={cn(
              'absolute z-10 grid h-10 w-10 place-items-center rounded-full transition-colors duration-300',
              bare
                ? '-top-1 right-0 bg-ink/60 text-ivory backdrop-blur-md hover:bg-ink sm:-top-2'
                : 'right-5 top-5 bg-ink/[0.055] text-muted hover:bg-ink/10 hover:text-ink',
            )}
          >
            <Close className="h-4 w-4" />
          </button>
          {!bare && <h2 className="mb-6 pr-12 text-title">{title}</h2>}
          {children}
        </div>
      )}
    </dialog>
  )
}
