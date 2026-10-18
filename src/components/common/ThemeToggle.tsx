import { cn } from '../../utils/cn'
import { useTheme } from '../../utils/useTheme'
import { Leaf, Sun } from './Icons'

/**
 * Warm / Bright palette switch.
 *
 * Both themes are light — this toggles between the site's default earthy
 * palette and a crisper, higher-key alternative (see the `[data-theme]`
 * overrides in index.css) — so the icon itself carries the meaning (leaf vs
 * sun) rather than a sun/moon pair that would wrongly imply a dark mode.
 */
export function ThemeToggle({ onDark = false }: { onDark?: boolean }) {
  const { theme, toggleTheme } = useTheme()
  const isBright = theme === 'bright'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isBright}
      aria-label={isBright ? 'Switch to Warm theme' : 'Switch to Bright theme'}
      title={isBright ? 'Warm theme' : 'Bright theme'}
      className={cn(
        'grid h-10 w-10 shrink-0 place-items-center rounded-full transition-colors duration-300',
        onDark ? 'text-ivory hover:bg-ivory/15' : 'text-ink hover:bg-ink/[0.06]',
      )}
    >
      {/* Cross-fade between the two glyphs rather than a hard swap. */}
      <span className="relative grid h-5 w-5 place-items-center">
        <Sun
          className={cn(
            'absolute h-5 w-5 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]',
            isBright ? 'rotate-0 scale-100 opacity-100' : '-rotate-45 scale-50 opacity-0',
          )}
        />
        <Leaf
          className={cn(
            'absolute h-5 w-5 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]',
            isBright ? 'rotate-45 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100',
          )}
        />
      </span>
    </button>
  )
}
