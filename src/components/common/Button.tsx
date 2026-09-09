import { Link } from 'react-router-dom'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '../../utils/cn'

type Variant = 'primary' | 'secondary' | 'ghost' | 'light' | 'inverse' | 'accent'
type Size = 'sm' | 'md' | 'lg'

/**
 * The site's single button.
 *
 * Every variant is defined here rather than patched in by callers — passing
 * `className="bg-ivory"` to override a variant is a cascade coin-flip, and it
 * is what made the hero's secondary CTA render invisible.
 *
 * The `group/btn` + sliding sheen is what lifts these above a flat pill: on
 * hover a soft highlight wipes across, the label nudges, and the shadow
 * deepens — three cheap properties that together read as considered.
 */
const base =
  'group/btn relative isolate inline-flex items-center justify-center gap-2 overflow-hidden ' +
  'rounded-full font-medium tracking-[-0.01em] whitespace-nowrap ' +
  'transition-[transform,box-shadow,background-color,color,border-color] duration-400 ' +
  'ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ' +
  'disabled:pointer-events-none disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary: 'bg-pine text-ivory shadow-lift hover:bg-pine-soft hover:shadow-deep',
  accent: 'bg-clay text-ivory shadow-lift hover:bg-clay-deep hover:shadow-glow',
  inverse: 'bg-ivory text-pine shadow-lift hover:bg-white hover:shadow-deep',
  secondary:
    'border border-border-strong bg-transparent text-ink hover:border-ink hover:bg-ink/[0.04] hover:shadow-lift',
  ghost: 'text-ink hover:bg-ink/[0.06]',
  light: 'glass text-ivory hover:bg-ivory hover:text-pine',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-[0.8125rem]',
  md: 'h-11 px-6 text-[0.875rem]',
  lg: 'h-[3.375rem] px-8 text-[0.9375rem]',
}

/** Diagonal highlight that sweeps across on hover. */
function Sheen() {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 -z-10 -translate-x-full',
        'bg-gradient-to-r from-transparent via-white/25 to-transparent',
        'transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]',
        'group-hover/btn:translate-x-full motion-reduce:hidden',
      )}
    />
  )
}

interface CommonProps {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

type ButtonProps = CommonProps & ComponentPropsWithoutRef<'button'> & { to?: never; href?: never }
type LinkProps = CommonProps &
  Omit<ComponentPropsWithoutRef<'a'>, 'href'> & { to: string; href?: never }
type AnchorProps = CommonProps & ComponentPropsWithoutRef<'a'> & { href: string; to?: never }

export function Button(props: ButtonProps | LinkProps | AnchorProps) {
  const { variant = 'primary', size = 'md', className, children } = props
  const classes = cn(base, variants[variant], sizes[size], className)

  if ('to' in props && props.to !== undefined) {
    const { to, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props
    return (
      <Link to={to} className={classes} {...rest}>
        <Sheen />
        {children}
      </Link>
    )
  }

  if ('href' in props && props.href !== undefined) {
    const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props
    return (
      <a className={classes} {...rest}>
        <Sheen />
        {children}
      </a>
    )
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props as ButtonProps
  return (
    <button className={classes} {...rest}>
      <Sheen />
      {children}
    </button>
  )
}
