# Roam Ready

A production-quality marketing and lead-generation site for **Roam Ready**, a
curated travel brand operating across the Himalaya, Kashmir, Uttarakhand and
Rajasthan.

React 19 · TypeScript · Vite 8 · Tailwind CSS 4 · React Router 7.
No UI kit, no animation library.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + sitemap + production bundle
npm run preview    # serve the production build
npm run lint
```

---

## Before you launch — replace the placeholders

Everything below is invented for the build. None of it is a confirmed Roam
Ready offering, and all of it is isolated so it can be swapped without touching
components.

| What | Where | Notes |
| --- | --- | --- |
| Phone, WhatsApp, email, address, domain | `src/data/site.ts` | Every value is marked `PLACEHOLDER`. The WhatsApp number drives every `wa.me` link on the site. |
| Itineraries, pricing, inclusions | `src/data/packages.ts` | Prices are indicative starting points. Stays are described by *category* ("Hotel in Manali") rather than by property name — deliberately, so the site never promises a specific hotel. |
| Testimonials | `src/data/testimonials.ts` | Written for the build. Replace with real, attributable feedback. |
| Photography | `src/data/media.ts` | See below. |
| Contact map | `src/pages/Contact.tsx` | OpenStreetMap embed pointing at a placeholder area. |

**Form submissions are not wired to anything.** `EnquiryForm` and
`TripPlanner` validate, show pending and success states, then resolve locally.
Search for `REPLACE: submit to your endpoint` in
`src/components/forms/` — there is one marked block in each.

---

## Photography

The site ships with Creative Commons photography of the real destinations,
served from Flickr's CDN under licences permitting commercial use and
modification. Every photograph is credited on **`/credits`**, which is
generated from the manifest.

All imagery flows through one file — `src/data/media.ts` — as named keys
(`heroJourney`, `dalLakeDusk`, …). No component or page ever references an
image URL directly, so replacing the manifest replaces the whole site's art
direction. Each entry records the widths its source actually serves, and
`utils/image.ts` builds the `srcset` from that list, so no candidate 404s.

To move to owned photography, keep the keys and repoint them at your files.

---

## Architecture

```
src/
├── components/
│   ├── common/       Button, Media, Pill, Accordion, Modal, Section, Icons, States
│   ├── layout/       Layout (shell + routing chrome), PageHero
│   ├── navigation/   Navbar, MobileNav, Footer, Breadcrumbs
│   ├── home/         Hero, Marquee, FeaturedJourneys, WhyRoamReady,
│   │                 Collections, HowItWorks, PlanCTA
│   ├── packages/     PackageCard (default + feature weights)
│   ├── itinerary/    Itinerary timeline
│   ├── testimonials/
│   └── forms/        Field primitives, EnquiryForm, TripPlanner
├── data/             packages, destinations, testimonials, gallery, media, site
├── pages/            one file per route
├── types/            the content schema
└── utils/            cn, image, format, seo, useReveal
```

### Adding a ninth journey

Append one `TourPackage` object to `src/data/packages.ts`. Its route, detail
page, filters, footer link, sitemap entry, structured data and related-journey
suggestions all derive from that array — no component changes.

### Design system

Tokens live in `@theme` at the top of `src/index.css`: colour, the two
typefaces, easing curves, shadows. Everything else consumes them via Tailwind
(`bg-pine`, `text-clay`, `font-display`).

The depth in the design comes from a repeatable stack of utilities defined in
the same file — `grain`, `graded`, `glow-clay`, `glass`, `rule-fade`,
`text-gradient-clay`. Full-bleed sections layer: photograph → Ken Burns push →
warm grade → scrim → light bloom → grain → content.

`cn()` uses **tailwind-merge**, not string concatenation. Tailwind resolves
conflicting classes by stylesheet order rather than by the order written, so a
caller's override would otherwise lose to a component default silently.

---

## Behaviour worth knowing

- **Scroll reveals** — `useReveal` mounts once and runs one IntersectionObserver
  for the document, plus a MutationObserver so lazily-routed pages and
  re-filtered lists get picked up. Collapses entirely under
  `prefers-reduced-motion`, and content is visible if the observer never runs.
- **SEO** — `useSeo` sets title, description, canonical, Open Graph, Twitter
  and JSON-LD per page. Package pages emit `TouristTrip`, `FAQPage` and
  `BreadcrumbList`. `sitemap.xml` and `robots.txt` are generated from the real
  route table on every build (`scripts/generate-seo-files.mjs`).
- **Deployment** — this is a client-routed SPA, so deep links need a rewrite to
  `index.html`. `vercel.json` and `public/_redirects` cover Vercel and
  Netlify/Cloudflare. Any other host needs the equivalent.
- **`SkeletonGrid`** in `common/States.tsx` is unused today because all content
  is local and synchronous. It is kept for when listings move behind an API.

## Accessibility

Semantic landmarks, one `<h1>` per page, a skip link, focus moved to `<main>`
on navigation, visible focus rings on everything, real labels with
`aria-describedby` on form errors, `aria-pressed` on filters, and the
`<dialog>` element for modals so focus containment and Escape come from the
platform.

Verified at 1440 / 834 / 390 px: no horizontal overflow, no missing `alt`, no
console errors.
