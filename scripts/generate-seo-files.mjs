/**
 * Generates public/sitemap.xml and public/robots.txt from the real route table
 * and package data, so adding a journey does not mean remembering to update
 * the sitemap by hand. Runs automatically before `npm run build`.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

// Read the slugs straight out of the data file rather than importing TS.
const packagesSrc = readFileSync(resolve(root, 'src/data/packages.ts'), 'utf8')
const slugs = [...packagesSrc.matchAll(/^\s{4}slug: '([a-z0-9-]+)',$/gm)].map((m) => m[1])

const siteSrc = readFileSync(resolve(root, 'src/data/site.ts'), 'utf8')
const origin = siteSrc.match(/url:\s*'([^']+)'/)?.[1] ?? 'https://roamready.in'

if (slugs.length === 0) {
  console.warn('[seo] No package slugs found — sitemap will list static routes only.')
}

const staticRoutes = [
  { path: '/', priority: '1.0', freq: 'weekly' },
  { path: '/packages', priority: '0.9', freq: 'weekly' },
  { path: '/destinations', priority: '0.8', freq: 'monthly' },
  { path: '/plan-your-trip', priority: '0.8', freq: 'monthly' },
  { path: '/about', priority: '0.6', freq: 'monthly' },
  { path: '/gallery', priority: '0.5', freq: 'monthly' },
  { path: '/contact', priority: '0.6', freq: 'monthly' },
]

const routes = [
  ...staticRoutes,
  ...slugs.map((slug) => ({ path: `/packages/${slug}`, priority: '0.9', freq: 'monthly' })),
]

const today = new Date().toISOString().slice(0, 10)

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${origin}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.freq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

const robots = `User-agent: *
Allow: /

Sitemap: ${origin}/sitemap.xml
`

writeFileSync(resolve(root, 'public/sitemap.xml'), sitemap)
writeFileSync(resolve(root, 'public/robots.txt'), robots)

console.log(`[seo] sitemap.xml written — ${routes.length} routes (${slugs.length} journeys).`)
