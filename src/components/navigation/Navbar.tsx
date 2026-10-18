import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navLinks, site } from '../../data/site'
import { cn } from '../../utils/cn'
import { Button } from '../common/Button'
import { Close, Menu } from '../common/Icons'
import { ThemeToggle } from '../common/ThemeToggle'
import { MobileNav } from './MobileNav'

/**
 * Navbar.
 *
 * Two states: transparent overlay on pages that open with a full-bleed hero,
 * and a compact solid bar once scrolled (or on any page without a hero).
 * The transition is on height, background and colour together so it reads as
 * one movement rather than three properties changing independently.
 */
export function Navbar({ overlay = false }: { overlay?: boolean }) {
  // Initialised from the current scroll position rather than set in an effect,
  // so a page restored mid-scroll paints the solid bar on the first frame.
  const [scrolled, setScrolled] = useState(
    () => typeof window !== 'undefined' && window.scrollY > 24,
  )
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Any navigation closes the mobile sheet — including a browser back/forward,
  // which no click handler would catch. Adjusted during render rather than in
  // an effect so the sheet never paints open on the new route first.
  const [lastPath, setLastPath] = useState(pathname)
  if (pathname !== lastPath) {
    setLastPath(pathname)
    setMenuOpen(false)
  }

  const solid = !overlay || scrolled

  return (
    <>
      {/* Skip link — first tab stop on every page. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-pine focus:px-5 focus:py-3 focus:text-sm focus:text-ivory"
      >
        Skip to content
      </a>

      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
          solid
            ? 'border-b border-border/70 bg-ivory/88 shadow-[0_1px_24px_rgba(26,29,25,0.06)] backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <div
          className={cn(
            'mx-auto flex max-w-[110rem] items-center justify-between gap-8 px-5 sm:px-8 lg:px-12',
            'transition-[height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
            solid ? 'h-[4.25rem]' : 'h-[5.5rem]',
          )}
        >
          <Link
            to="/"
            aria-label={`${site.name} — home`}
            className={cn(
              'group flex items-center gap-2.5 transition-colors duration-500',
              solid ? 'text-ink' : 'text-ivory',
            )}
          >
            {/* Official logo, on a light tile so its colours hold on the dark hero. */}
            <img
              src={`${import.meta.env.BASE_URL}roam-ready-logo.png`}
              alt="Roam Ready"
              width={1254}
              height={1254}
              className={cn(
                'rounded-xl bg-white object-contain p-1 transition-all duration-500',
                solid ? 'h-14 w-14' : 'h-20 w-20',
              )}
            />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      cn(
                        'relative py-1 text-[0.875rem] transition-colors duration-300',
                        // The active marker is a hairline under the label —
                        // quieter and more editorial than a pill or a bold weight.
                        'after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-current',
                        'after:transition-[width] after:duration-400 after:ease-[cubic-bezier(0.16,1,0.3,1)]',
                        isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full',
                        solid
                          ? isActive
                            ? 'text-ink'
                            : 'text-muted hover:text-ink'
                          : isActive
                            ? 'text-ivory'
                            : 'text-ivory/75 hover:text-ivory',
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle onDark={!solid} />

            <Button
              to="/plan-your-trip"
              size="sm"
              variant={solid ? 'primary' : 'light'}
              className="hidden sm:inline-flex"
            >
              Plan Your Trip
            </Button>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className={cn(
                'grid h-10 w-10 place-items-center rounded-full transition-colors duration-300 lg:hidden',
                solid ? 'text-ink hover:bg-ink/[0.06]' : 'text-ivory hover:bg-ivory/15',
              )}
            >
              {menuOpen ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
