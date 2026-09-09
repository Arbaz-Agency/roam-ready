import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { NotFoundBody } from './components/common/States'

/**
 * Routing.
 *
 * Home is bundled eagerly because it is the landing route; everything else is
 * split so a first visit downloads only what it needs. The Suspense fallback
 * is a plain ivory panel rather than a spinner — at this bundle size the
 * chunks arrive faster than a spinner would be legible.
 */
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Packages = lazy(() => import('./pages/Packages'))
const PackageDetails = lazy(() => import('./pages/PackageDetails'))
const Destinations = lazy(() => import('./pages/Destinations'))
const Gallery = lazy(() => import('./pages/Gallery'))
const PlanYourTrip = lazy(() => import('./pages/PlanYourTrip'))
const Contact = lazy(() => import('./pages/Contact'))
const Credits = lazy(() => import('./pages/Credits'))

const Loading = () => <div className="min-h-[70vh] bg-ivory" aria-hidden="true" />

const page = (element: React.ReactNode) => <Suspense fallback={<Loading />}>{element}</Suspense>

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: page(<Home />) },
      { path: '/about', element: page(<About />) },
      { path: '/packages', element: page(<Packages />) },
      { path: '/packages/:slug', element: page(<PackageDetails />) },
      { path: '/destinations', element: page(<Destinations />) },
      { path: '/gallery', element: page(<Gallery />) },
      { path: '/plan-your-trip', element: page(<PlanYourTrip />) },
      { path: '/contact', element: page(<Contact />) },
      { path: '/credits', element: page(<Credits />) },
      { path: '*', element: <NotFoundBody /> },
    ],
  },
]

// import.meta.env.BASE_URL mirrors Vite's `base` config automatically, so the
// router only knows about the /roam-ready/ subpath on the GitHub Pages build
// (see vite.config.ts) and stays at '/' everywhere else — no duplication.
const router = createBrowserRouter(routes, { basename: import.meta.env.BASE_URL })

export default function App() {
  return <RouterProvider router={router} />
}
