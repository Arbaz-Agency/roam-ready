import { useEffect } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import { Navbar } from '../navigation/Navbar'
import { Footer } from '../navigation/Footer'
import { useReveal } from '../../utils/useReveal'

/** Routes that open with a full-bleed hero and want the transparent navbar. */
const OVERLAY_ROUTES = [
  '/',
  '/about',
  '/packages',
  '/destinations',
  '/gallery',
  '/contact',
  '/plan-your-trip',
]

export function Layout() {
  const { pathname } = useLocation()
  const overlay = OVERLAY_ROUTES.includes(pathname) || pathname.startsWith('/packages/')

  // Mounted once — the hook watches the DOM for new reveal targets itself.
  useReveal()

  // Move focus to the main landmark on navigation so screen-reader and
  // keyboard users are not dropped back at the top of the nav each time.
  useEffect(() => {
    const main = document.getElementById('main')
    if (main) main.focus({ preventScroll: true })
  }, [pathname])

  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar overlay={overlay} />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}
