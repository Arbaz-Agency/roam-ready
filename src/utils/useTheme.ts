import { useCallback, useEffect, useState } from 'react'

export type Theme = 'warm' | 'bright'
const STORAGE_KEY = 'rr-theme'
// Mirrors --color-pine for each theme (index.css) — the browser chrome
// (address bar / task switcher) has no access to CSS custom properties.
const PINE_BY_THEME: Record<Theme, string> = { warm: '#0E5F66', bright: '#0B5258' }

function setThemeColorMeta(theme: Theme) {
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', PINE_BY_THEME[theme])
}

/**
 * Reads the theme actually applied to <html> right now.
 *
 * The real decision happens synchronously in the inline script in
 * index.html — it sets `data-theme` before first paint so there is never a
 * flash of the wrong palette. This just mirrors that into React state so the
 * toggle button can render the correct icon and label.
 */
function currentTheme(): Theme {
  if (typeof document === 'undefined') return 'warm'
  return document.documentElement.dataset.theme === 'bright' ? 'bright' : 'warm'
}

/**
 * Warm (default, earthy) vs Bright (crisp, high-key) palette toggle.
 *
 * Both are light themes — this is not light/dark mode — so it deliberately
 * ignores prefers-color-scheme and only ever reflects the visitor's own
 * choice, persisted to localStorage.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(currentTheme)

  // The inline script in index.html already set data-theme before paint; this
  // just brings the chrome colour in line with whatever it decided.
  useEffect(() => {
    setThemeColorMeta(theme)
  }, [theme])

  // Stay in sync if the theme is changed from another tab.
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setTheme(currentTheme())
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === 'warm' ? 'bright' : 'warm'
      document.documentElement.dataset.theme = next
      setThemeColorMeta(next)
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // Private browsing / storage disabled — the toggle still works for
        // this page view, it just won't persist to the next visit.
      }
      return next
    })
  }, [])

  return { theme, toggleTheme }
}
