import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'
import { Compass } from './Icons'
import { Button } from './Button'

/** Loading placeholder matched to the package card's proportions. */
export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn('animate-fade-in', className)} aria-hidden="true">
      <div className="skeleton aspect-[4/5] w-full rounded-2xl" />
      <div className="mt-5 space-y-3">
        <div className="skeleton h-3 w-24 rounded-full" />
        <div className="skeleton h-5 w-3/4 rounded-full" />
        <div className="skeleton h-3 w-1/2 rounded-full" />
      </div>
    </div>
  )
}

export function SkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div
      className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
      role="status"
      aria-live="polite"
      aria-label="Loading journeys"
    >
      {Array.from({ length: count }, (_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  )
}

/**
 * Empty state. Given a filtered package list this is a dead end, so it always
 * offers a way back rather than just reporting the absence.
 */
export function EmptyState({
  title,
  description,
  action,
  icon,
}: {
  title: string
  description: string
  action?: ReactNode
  icon?: ReactNode
}) {
  return (
    <div className="mx-auto max-w-md py-20 text-center" role="status">
      <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-ink/[0.045] text-muted">
        {icon ?? <Compass className="h-6 w-6" />}
      </div>
      <h3 className="text-[1.5rem] leading-tight">{title}</h3>
      <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{description}</p>
      {action && <div className="mt-7 flex justify-center">{action}</div>}
    </div>
  )
}

/** 404 body, shared by the route-level not-found and unknown package slugs. */
export function NotFoundBody({
  title = 'This page has wandered off.',
  description = 'The page you are looking for does not exist, or has moved somewhere else.',
}: {
  title?: string
  description?: string
}) {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow mb-6">Error 404</p>
      <h1 className="text-display">{title}</h1>
      <p className="lede mt-6">{description}</p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <Button to="/" size="lg">
          Back to home
        </Button>
        <Button to="/packages" variant="secondary" size="lg">
          Browse journeys
        </Button>
      </div>
      <p className="mt-10 text-[0.8125rem] text-faint">
        Or{' '}
        <Link to="/contact" className="underline underline-offset-4 hover:text-ink">
          get in touch
        </Link>{' '}
        and we will point you the right way.
      </p>
    </div>
  )
}
