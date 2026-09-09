import { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks, site, whatsappLink } from '../../data/site'
import { cn } from '../../utils/cn'
import { ArrowUpRight, Phone, WhatsApp } from '../common/Icons'
import { Button } from '../common/Button'

/**
 * Mobile navigation.
 *
 * A full-height sheet with the links set at display size — the brief asked for
 * this not to be a shrunken desktop navbar, so it is treated as its own screen:
 * large editorial type, a staggered entrance, and the two things a travel
 * visitor actually wants on a phone (call, WhatsApp) pinned at the bottom.
 */
export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <div
      id="mobile-nav"
      className={cn(
        'fixed inset-0 z-40 lg:hidden',
        'transition-[opacity,visibility] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
        open ? 'visible opacity-100' : 'invisible opacity-0',
      )}
      aria-hidden={!open}
    >
      <div className="absolute inset-0 bg-ivory" />

      <div className="relative flex h-full flex-col overflow-y-auto pb-8 pt-[4.25rem]">
        <nav aria-label="Mobile" className="flex-1 px-6 pt-8">
          <ul>
            {navLinks.map((link, i) => (
              <li key={link.to} className="border-b border-border/70">
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={onClose}
                  tabIndex={open ? 0 : -1}
                  className={({ isActive }) =>
                    cn(
                      'flex items-baseline gap-4 py-5 font-display text-[2rem] leading-none tracking-[-0.025em]',
                      'transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
                      open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0',
                      isActive ? 'text-ink' : 'text-muted',
                    )
                  }
                  // Staggered so the list unfolds rather than appearing at once.
                  style={{ transitionDelay: open ? `${90 + i * 55}ms` : '0ms' }}
                >
                  <span className="font-sans text-[0.6875rem] font-semibold tracking-[0.16em] text-faint">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div
            className="mt-9 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transitionDelay: open ? '440ms' : '0ms' }}
          >
            <Button
              to="/plan-your-trip"
              size="lg"
              className="w-full"
              onClick={onClose}
              tabIndex={open ? 0 : -1}
            >
              Plan Your Trip
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </nav>

        <div
          className="mt-10 px-6 transition-opacity duration-500"
          style={{ transitionDelay: open ? '520ms' : '0ms' }}
        >
          <div className="grid grid-cols-2 gap-3">
            <a
              href={`tel:+${site.contact.phoneRaw}`}
              tabIndex={open ? 0 : -1}
              className="flex items-center justify-center gap-2 rounded-full border border-border-strong py-3.5 text-[0.8125rem] font-medium text-ink transition-colors hover:border-ink"
            >
              <Phone className="h-4 w-4" />
              Call us
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={open ? 0 : -1}
              className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-[0.8125rem] font-medium text-white transition-opacity hover:opacity-90"
            >
              <WhatsApp className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          <p className="mt-6 text-[0.75rem] leading-relaxed text-faint">
            {site.contact.hours}
            <br />
            <Link to="/contact" onClick={onClose} className="underline underline-offset-4">
              {site.contact.email}
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
