import { useEffect, useState } from 'react'
import { whatsappLink } from '../../data/site'
import { cn } from '../../utils/cn'
import { inr } from '../../utils/format'
import { WhatsApp } from './Icons'

/**
 * Mobile-only sticky conversion bar for package pages.
 *
 * Appears once the hero has scrolled past — showing it immediately would
 * cover the hero CTAs that are already on screen. Hidden on desktop, where
 * the enquiry form is reachable without it.
 */
export function StickyCTA({
  priceFrom,
  packageName,
  onEnquire,
}: {
  priceFrom: number
  packageName: string
  onEnquire: () => void
}) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.75)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={cn(
        'fixed inset-x-0 bottom-0 z-40 lg:hidden',
        'border-t border-border bg-ivory/95 backdrop-blur-xl',
        'transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
        // Respects the iOS home indicator.
        'pb-[env(safe-area-inset-bottom)]',
        visible ? 'translate-y-0' : 'translate-y-full',
      )}
    >
      <div className="flex items-center gap-3 px-5 py-3.5">
        <div className="min-w-0 flex-1">
          <p className="text-[0.6875rem] uppercase tracking-[0.14em] text-faint">From</p>
          <p className="truncate font-display text-[1.25rem] leading-tight text-ink">
            {inr(priceFrom)}
            <span className="ml-1 font-sans text-[0.6875rem] tracking-normal text-faint">
              per person
            </span>
          </p>
        </div>

        <a
          href={whatsappLink(`Hi Roam Ready, I'd like to know more about the ${packageName} journey.`)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Enquire on WhatsApp"
          className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#25D366] text-white transition-opacity active:opacity-80"
        >
          <WhatsApp className="h-5 w-5" />
        </a>

        <button
          type="button"
          onClick={onEnquire}
          className="h-12 shrink-0 rounded-full bg-pine px-6 text-[0.875rem] font-medium text-ivory transition-transform active:scale-[0.98]"
        >
          Enquire
        </button>
      </div>
    </div>
  )
}

/** Floating WhatsApp button for pages without a sticky price bar. */
export function WhatsAppFloat({ message }: { message?: string }) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={cn(
        'fixed bottom-5 right-5 z-40 grid h-13 w-13 place-items-center rounded-full',
        'h-14 w-14 bg-[#25D366] text-white shadow-float',
        'transition-transform duration-300 hover:scale-105 active:scale-95',
        'mb-[env(safe-area-inset-bottom)]',
      )}
    >
      <WhatsApp className="h-6 w-6" />
    </a>
  )
}
