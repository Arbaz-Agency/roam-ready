import { useEffect } from 'react'

const SELECTOR =
  '[data-reveal]:not([data-reveal="in"]), [data-reveal-image]:not([data-reveal-image="in"])'

const show = (el: HTMLElement) => {
  if (el.hasAttribute('data-reveal')) el.setAttribute('data-reveal', 'in')
  if (el.hasAttribute('data-reveal-image')) el.setAttribute('data-reveal-image', 'in')
}

/**
 * Scroll reveal for anything carrying [data-reveal] / [data-reveal-image].
 *
 * Mounted once, in Layout. A single IntersectionObserver serves the whole
 * document, and a MutationObserver picks up nodes that appear later — which
 * matters more than it sounds: route chunks are lazy-loaded, so a page commits
 * *after* the navigation effect has already run, and filtering the packages
 * list mounts fresh cards. Without the mutation pass those nodes would keep
 * their initial opacity: 0 and the content would simply never appear.
 *
 * Elements are unobserved once revealed, so nothing accumulates.
 */
export function useReveal() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const supported = typeof IntersectionObserver !== 'undefined'

    // No observer, or the user asked for less motion: reveal on sight and keep
    // a mutation pass running so later content is shown too.
    if (reduced || !supported) {
      const revealAll = () =>
        document.querySelectorAll<HTMLElement>(SELECTOR).forEach(show)
      revealAll()
      const mo = new MutationObserver(revealAll)
      mo.observe(document.body, { childList: true, subtree: true })
      return () => mo.disconnect()
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          show(entry.target as HTMLElement)
          io.unobserve(entry.target)
        })
      },
      // Fire slightly before the element reaches the fold so the motion has
      // finished by the time it is properly in view.
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
    )

    const scan = (root: ParentNode = document) =>
      root.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => io.observe(el))

    scan()

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        for (const node of m.addedNodes) {
          if (!(node instanceof HTMLElement)) continue
          if (node.matches(SELECTOR)) io.observe(node)
          scan(node)
        }
      }
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])
}
