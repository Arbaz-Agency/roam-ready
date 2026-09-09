import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'

export interface Crumb {
  label: string
  to?: string
}

export function Breadcrumbs({ items, onDark = false }: { items: Crumb[]; onDark?: boolean }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[0.75rem]">
        {items.map((item, i) => {
          const last = i === items.length - 1
          return (
            <li key={item.label} className="flex items-center gap-2.5">
              {item.to && !last ? (
                <Link
                  to={item.to}
                  className={cn(
                    'transition-colors duration-300',
                    onDark ? 'text-ivory/60 hover:text-ivory' : 'text-faint hover:text-ink',
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={last ? 'page' : undefined}
                  className={onDark ? 'text-ivory/90' : 'text-muted'}
                >
                  {item.label}
                </span>
              )}
              {!last && (
                <span aria-hidden="true" className={onDark ? 'text-ivory/30' : 'text-stone'}>
                  /
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
