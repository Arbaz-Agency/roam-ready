import { useId } from 'react'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '../../utils/cn'
import { ChevronDown } from '../common/Icons'

/**
 * Form fields.
 *
 * The look is deliberately not a rounded box: a bottom rule that thickens and
 * shifts to pine on focus. It reads as stationery rather than as a web form,
 * which is the whole point on a premium travel brand.
 *
 * Accessibility: every control gets a real <label>, errors are wired through
 * aria-describedby + aria-invalid, and the focus ring is never removed —
 * it is drawn on the wrapper instead.
 */

const controlBase =
  'peer w-full appearance-none border-0 border-b bg-transparent px-0 pb-2.5 pt-1 ' +
  'text-[0.9375rem] text-ink placeholder:text-faint/70 ' +
  'transition-colors duration-300 focus:outline-none'

const controlState = (error?: string, onDark?: boolean) =>
  cn(
    error
      ? 'border-clay focus:border-clay'
      : onDark
        ? 'border-ivory/25 focus:border-ivory'
        : 'border-border-strong focus:border-pine',
    onDark && 'text-ivory placeholder:text-ivory/40',
  )

interface Wrap {
  label: string
  error?: string
  hint?: string
  required?: boolean
  onDark?: boolean
  className?: string
}

function Label({
  htmlFor,
  children,
  required,
  onDark,
}: {
  htmlFor: string
  children: ReactNode
  required?: boolean
  onDark?: boolean
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        'mb-1 block text-[0.6875rem] font-semibold uppercase tracking-[0.14em]',
        onDark ? 'text-ivory/55' : 'text-faint',
      )}
    >
      {children}
      {required && <span className="ml-1 text-clay">*</span>}
    </label>
  )
}

function Message({ error, hint, id, onDark }: { error?: string; hint?: string; id: string; onDark?: boolean }) {
  if (!error && !hint) return null
  return (
    <p
      id={id}
      className={cn(
        'mt-2 text-[0.75rem] leading-snug',
        error ? 'text-clay-deep' : onDark ? 'text-ivory/45' : 'text-faint',
      )}
    >
      {error ?? hint}
    </p>
  )
}

/* ------------------------------------------------------------------ */

type InputProps = Wrap & ComponentPropsWithoutRef<'input'>

export function Input({ label, error, hint, required, onDark, className, ...rest }: InputProps) {
  const id = useId()
  const msgId = `${id}-msg`
  return (
    <div className={className}>
      <Label htmlFor={id} required={required} onDark={onDark}>
        {label}
      </Label>
      <input
        id={id}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error || hint ? msgId : undefined}
        className={cn(controlBase, controlState(error, onDark))}
        {...rest}
      />
      <Message error={error} hint={hint} id={msgId} onDark={onDark} />
    </div>
  )
}

/* ------------------------------------------------------------------ */

type SelectProps = Wrap &
  ComponentPropsWithoutRef<'select'> & {
    options: readonly { value: string; label: string }[]
    placeholder?: string
  }

export function Select({
  label,
  error,
  hint,
  required,
  onDark,
  className,
  options,
  placeholder = 'Select an option',
  ...rest
}: SelectProps) {
  const id = useId()
  const msgId = `${id}-msg`
  return (
    <div className={className}>
      <Label htmlFor={id} required={required} onDark={onDark}>
        {label}
      </Label>
      <div className="relative">
        <select
          id={id}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={error || hint ? msgId : undefined}
          className={cn(controlBase, controlState(error, onDark), 'cursor-pointer pr-8')}
          {...rest}
        >
          <option value="">{placeholder}</option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <ChevronDown
          className={cn(
            'pointer-events-none absolute right-0 top-1.5 h-4 w-4',
            onDark ? 'text-ivory/50' : 'text-faint',
          )}
        />
      </div>
      <Message error={error} hint={hint} id={msgId} onDark={onDark} />
    </div>
  )
}

/* ------------------------------------------------------------------ */

type TextareaProps = Wrap & ComponentPropsWithoutRef<'textarea'>

export function Textarea({ label, error, hint, required, onDark, className, ...rest }: TextareaProps) {
  const id = useId()
  const msgId = `${id}-msg`
  return (
    <div className={className}>
      <Label htmlFor={id} required={required} onDark={onDark}>
        {label}
      </Label>
      <textarea
        id={id}
        required={required}
        rows={4}
        aria-invalid={error ? true : undefined}
        aria-describedby={error || hint ? msgId : undefined}
        className={cn(controlBase, controlState(error, onDark), 'resize-none leading-relaxed')}
        {...rest}
      />
      <Message error={error} hint={hint} id={msgId} onDark={onDark} />
    </div>
  )
}

/* ------------------------------------------------------------------ */

/**
 * Large selectable card used by the multi-step planner. A real radio input is
 * kept in the DOM (visually hidden) so arrow-key navigation and form semantics
 * work exactly as a native radio group should.
 */
export function ChoiceCard({
  name,
  value,
  label,
  description,
  checked,
  onChange,
}: {
  name: string
  value: string
  label: string
  description?: string
  checked: boolean
  onChange: (value: string) => void
}) {
  const id = useId()
  return (
    <label
      htmlFor={id}
      className={cn(
        'group relative flex cursor-pointer flex-col gap-1 rounded-2xl border p-5 text-left',
        'transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
        'has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-clay',
        checked
          ? 'border-pine bg-pine text-ivory shadow-lift'
          : 'border-border bg-surface text-ink hover:border-border-strong hover:shadow-lift',
      )}
    >
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="sr-only"
      />
      <span className="font-sans text-[0.9375rem] font-medium tracking-[-0.01em]">{label}</span>
      {description && (
        <span className={cn('text-[0.8125rem] leading-snug', checked ? 'text-ivory/65' : 'text-muted')}>
          {description}
        </span>
      )}
    </label>
  )
}
