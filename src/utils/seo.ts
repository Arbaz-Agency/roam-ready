import { useEffect } from 'react'
import { site } from '../data/site'

interface SeoOptions {
  title: string
  description: string
  /** Path only, e.g. "/packages/kashmir". */
  path: string
  image?: string
  type?: 'website' | 'article'
  /** JSON-LD object injected as a single <script type="application/ld+json">. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}

const setMeta = (selector: string, attr: 'name' | 'property', key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/**
 * Document head management without a dependency. React 19 hoists <title> and
 * <meta> rendered in components, but ordering across nested routes is fiddly —
 * an explicit effect keeps one source of truth per page.
 */
export function useSeo({ title, description, path, image, type = 'website', jsonLd }: SeoOptions) {
  // Pages build their structured data inline, so `jsonLd` is a fresh object on
  // every render. Depending on the serialised form keeps the effect stable.
  const ld = jsonLd ? JSON.stringify(jsonLd) : null

  useEffect(() => {
    const canonical = `${site.url}${path}`
    document.title = title

    setMeta('meta[name="description"]', 'name', 'description', description)
    setMeta('meta[property="og:title"]', 'property', 'og:title', title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setMeta('meta[property="og:type"]', 'property', 'og:type', type)
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonical)
    setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', site.name)
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
    if (image) {
      setMeta('meta[property="og:image"]', 'property', 'og:image', image)
      setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', image)
    }

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = canonical

    const scriptId = 'rr-jsonld'
    document.getElementById(scriptId)?.remove()
    if (ld) {
      const script = document.createElement('script')
      script.id = scriptId
      script.type = 'application/ld+json'
      script.textContent = ld
      document.head.appendChild(script)
    }

    return () => document.getElementById(scriptId)?.remove()
  }, [title, description, path, image, type, ld])
}
