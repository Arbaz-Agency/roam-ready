import { useState } from 'react'
import { packages } from '../../data/packages'
import { whatsappLink } from '../../data/site'
import { cn } from '../../utils/cn'
import { Input, Select, Textarea } from './Field'
import { Button } from '../common/Button'
import { ArrowRight, Check, WhatsApp } from '../common/Icons'

export interface EnquiryValues {
  name: string
  phone: string
  email: string
  date: string
  travellers: string
  packageSlug: string
  message: string
}

const empty: EnquiryValues = {
  name: '',
  phone: '',
  email: '',
  date: '',
  travellers: '2',
  packageSlug: '',
  message: '',
}

const travellerOptions = [
  { value: '1', label: '1 traveller' },
  { value: '2', label: '2 travellers' },
  { value: '3-4', label: '3 – 4 travellers' },
  { value: '5-8', label: '5 – 8 travellers' },
  { value: '9+', label: '9 or more' },
]

const packageOptions = [
  ...packages.map((p) => ({ value: p.slug, label: p.plainName })),
  { value: 'custom', label: 'Something custom' },
]

type Errors = Partial<Record<keyof EnquiryValues, string>>

/** Validation is intentionally forgiving — this is a lead form, not a passport check. */
function validate(v: EnquiryValues): Errors {
  const e: Errors = {}
  if (!v.name.trim()) e.name = 'Please tell us your name.'
  if (!v.phone.trim()) e.phone = 'We need a number to reach you on.'
  else if (v.phone.replace(/\D/g, '').length < 10) e.phone = 'That number looks incomplete.'
  if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email))
    e.email = 'Please check the email address.'
  return e
}

/**
 * Enquiry form.
 *
 * ⚠️ NO BACKEND WIRED. `onSubmit` currently resolves locally and shows the
 * success state. Connect it to your CRM, an email service or a form endpoint
 * in the marked block below — the component already handles validation,
 * pending and success states around it.
 */
export function EnquiryForm({
  defaultPackage,
  onDark = false,
}: {
  defaultPackage?: string
  onDark?: boolean
}) {
  const [values, setValues] = useState<EnquiryValues>({
    ...empty,
    packageSlug: defaultPackage ?? '',
  })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const set = (key: keyof EnquiryValues) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [key]: e.target.value }))
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      // Move focus to the first problem so keyboard users are not stranded.
      const first = document.querySelector<HTMLElement>('[aria-invalid="true"]')
      first?.focus()
      return
    }

    setStatus('sending')
    // ---- REPLACE: submit to your endpoint / CRM here -------------------
    await new Promise((r) => setTimeout(r, 700))
    // --------------------------------------------------------------------
    setStatus('sent')
  }

  if (status === 'sent') {
    const chosen = packages.find((p) => p.slug === values.packageSlug)
    return (
      <div
        className={cn(
          'animate-fade-up rounded-3xl p-8 sm:p-10',
          onDark ? 'bg-ivory/[0.06]' : 'bg-shell',
        )}
        role="status"
      >
        <div
          className={cn(
            'mb-6 grid h-12 w-12 place-items-center rounded-full',
            onDark ? 'bg-ivory/15 text-ivory' : 'bg-pine text-ivory',
          )}
        >
          <Check className="h-5 w-5" />
        </div>
        <h3 className={cn('text-title', onDark && 'text-ivory')}>Thank you, {values.name.split(' ')[0]}.</h3>
        <p className={cn('mt-4 max-w-md text-[0.9375rem] leading-relaxed', onDark ? 'text-ivory/70' : 'text-muted')}>
          We have your enquiry{chosen ? ` about ${chosen.plainName}` : ''}. Someone will come back
          to you within one working day — usually sooner.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            href={whatsappLink(
              `Hi Roam Ready, I've just submitted an enquiry${chosen ? ` about ${chosen.plainName}` : ''}.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            variant={onDark ? 'light' : 'secondary'}
          >
            <WhatsApp className="h-4 w-4" />
            Continue on WhatsApp
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              setValues({ ...empty, packageSlug: defaultPackage ?? '' })
              setStatus('idle')
            }}
            className={onDark ? 'text-ivory hover:bg-ivory/10' : undefined}
          >
            Send another
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
        <Input
          label="Full name"
          name="name"
          autoComplete="name"
          required
          value={values.name}
          onChange={set('name')}
          error={errors.name}
          onDark={onDark}
          placeholder="Your name"
        />
        <Input
          label="Phone number"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
          value={values.phone}
          onChange={set('phone')}
          error={errors.phone}
          onDark={onDark}
          placeholder="+91"
        />
        <Input
          label="Email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          value={values.email}
          onChange={set('email')}
          error={errors.email}
          onDark={onDark}
          placeholder="you@example.com"
        />
        <Input
          label="Travel date"
          name="date"
          type="date"
          value={values.date}
          onChange={set('date')}
          onDark={onDark}
          hint="Approximate is fine"
        />
        <Select
          label="Travellers"
          name="travellers"
          options={travellerOptions}
          value={values.travellers}
          onChange={set('travellers')}
          onDark={onDark}
          placeholder="How many?"
        />
        <Select
          label="Journey"
          name="package"
          options={packageOptions}
          value={values.packageSlug}
          onChange={set('packageSlug')}
          onDark={onDark}
          placeholder="Not sure yet"
        />
        <Textarea
          label="Anything else?"
          name="message"
          className="sm:col-span-2"
          value={values.message}
          onChange={set('message')}
          onDark={onDark}
          placeholder="Pace, budget, who is travelling, anything we should know."
        />
      </div>

      <div className="mt-9 flex flex-wrap items-center gap-3">
        <Button
          type="submit"
          size="lg"
          disabled={status === 'sending'}
          variant={onDark ? 'inverse' : 'primary'}
        >
          {status === 'sending' ? 'Sending…' : 'Plan My Trip'}
          {status !== 'sending' && <ArrowRight className="h-4 w-4" />}
        </Button>

        <Button
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          variant={onDark ? 'light' : 'secondary'}
        >
          <WhatsApp className="h-4 w-4" />
          WhatsApp Us
        </Button>
      </div>

      <p className={cn('mt-5 text-[0.75rem] leading-relaxed', onDark ? 'text-ivory/45' : 'text-faint')}>
        We will only use these details to answer your enquiry.
      </p>
    </form>
  )
}
