import { useState } from 'react'
import { destinations } from '../../data/destinations'
import { whatsappLink } from '../../data/site'
import { inr } from '../../utils/format'
import { Button } from '../common/Button'
import { ChoiceCard, Input, Select, Textarea } from './Field'
import { ArrowRight, Check, WhatsApp } from '../common/Icons'

/**
 * Six-step trip planner.
 *
 * One question per screen so the form never looks like a wall of inputs.
 * Progress is a hairline bar plus "Step n of 6"; steps validate on advance,
 * and the whole thing is a single <form> so browser autofill still works on
 * the contact step.
 */

interface State {
  destination: string
  month: string
  year: string
  travellers: string
  rooms: string
  tripType: string
  budget: string
  name: string
  phone: string
  email: string
  notes: string
}

const initial: State = {
  destination: '',
  month: '',
  year: String(new Date().getFullYear()),
  travellers: '2',
  rooms: '1',
  tripType: '',
  budget: '',
  name: '',
  phone: '',
  email: '',
  notes: '',
}

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const tripTypeOptions = [
  { value: 'Adventure', label: 'Adventure', description: 'Trekking, rafting, high passes.' },
  { value: 'Family', label: 'Family', description: 'Gentle pacing, short walks.' },
  { value: 'Couple', label: 'Couple', description: 'Quiet stays, unhurried days.' },
  { value: 'Honeymoon', label: 'Honeymoon', description: 'Privacy and good evenings.' },
  { value: 'Spiritual', label: 'Spiritual', description: 'Pilgrimage routes and temples.' },
  { value: 'Luxury', label: 'Luxury', description: 'The best available stays.' },
  { value: 'Budget', label: 'Budget', description: 'Well planned, carefully priced.' },
  { value: 'Group', label: 'Group', description: 'Six or more travelling together.' },
]

const budgetOptions = [
  { value: 'under-15k', label: `Under ${inr(15000)}`, description: 'per person' },
  { value: '15-25k', label: `${inr(15000)} – ${inr(25000)}`, description: 'per person' },
  { value: '25-40k', label: `${inr(25000)} – ${inr(40000)}`, description: 'per person' },
  { value: 'over-40k', label: `Over ${inr(40000)}`, description: 'per person' },
  { value: 'unsure', label: 'Not sure yet', description: 'Advise me' },
]

const STEPS = [
  'Where do you want to go?',
  'When are you travelling?',
  'How many travellers?',
  'What kind of trip?',
  'Approximate budget',
  'Contact details',
]

export function TripPlanner() {
  const [step, setStep] = useState(0)
  const [v, setV] = useState<State>(initial)
  const [error, setError] = useState<string | null>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const set = <K extends keyof State>(key: K, value: State[K]) => {
    setV((prev) => ({ ...prev, [key]: value }))
    setError(null)
  }

  const canAdvance = () => {
    switch (step) {
      case 0:
        return v.destination !== ''
      case 1:
        return v.month !== ''
      case 2:
        return v.travellers !== ''
      case 3:
        return v.tripType !== ''
      case 4:
        return v.budget !== ''
      default:
        return true
    }
  }

  const messages = [
    'Pick a destination, or choose “somewhere else” and tell us later.',
    'Choose the month you are aiming for.',
    'Tell us how many are travelling.',
    'Pick the closest match — we will refine it with you.',
    'A rough range is enough.',
    '',
  ]

  const next = () => {
    if (!canAdvance()) {
      setError(messages[step])
      return
    }
    setStep((s) => Math.min(s + 1, STEPS.length - 1))
  }

  const back = () => setStep((s) => Math.max(s - 1, 0))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (step < STEPS.length - 1) {
      next()
      return
    }
    if (!v.name.trim() || v.phone.replace(/\D/g, '').length < 10) {
      setError('We need a name and a working phone number to send this back to you.')
      return
    }
    setStatus('sending')
    // ---- REPLACE: submit to your endpoint / CRM here --------------------
    await new Promise((r) => setTimeout(r, 800))
    // ---------------------------------------------------------------------
    setStatus('sent')
  }

  if (status === 'sent') {
    return (
      <div className="animate-fade-up rounded-3xl bg-shell p-9 sm:p-12" role="status">
        <div className="mb-7 grid h-12 w-12 place-items-center rounded-full bg-pine text-ivory">
          <Check className="h-5 w-5" />
        </div>
        <h2 className="text-display">Thank you, {v.name.split(' ')[0]}.</h2>
        <p className="mt-5 max-w-lg text-[1rem] leading-relaxed text-muted">
          We have your plan — {v.destination}, {v.month} {v.year}, {v.travellers} travelling. Someone
          will come back to you with a written itinerary within one working day.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Button
            href={whatsappLink(
              `Hi Roam Ready, I've just submitted a trip plan for ${v.destination} in ${v.month} ${v.year}.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            <WhatsApp className="h-4 w-4" />
            Continue on WhatsApp
          </Button>
          <Button to="/packages" variant="ghost">
            Browse journeys meanwhile
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={submit} noValidate>
      {/* Progress */}
      <div className="mb-12">
        <div className="mb-3 flex items-baseline justify-between">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-faint">
            Step {String(step + 1).padStart(2, '0')} — {STEPS[step]}
          </p>
          <p className="text-[0.75rem] tabular-nums text-faint">
            {step + 1} / {STEPS.length}
          </p>
        </div>
        <div
          className="h-px w-full bg-border"
          role="progressbar"
          aria-valuenow={step + 1}
          aria-valuemin={1}
          aria-valuemax={STEPS.length}
          aria-label="Planner progress"
        >
          <div
            className="h-px bg-pine transition-[width] duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Steps. Keyed so each panel animates in as its own screen. */}
      <div key={step} className="animate-fade-up">
        <h2 className="text-title">{STEPS[step]}</h2>

        {step === 0 && (
          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d) => (
              <ChoiceCard
                key={d.slug}
                name="destination"
                value={d.name}
                label={d.name}
                description={d.region}
                checked={v.destination === d.name}
                onChange={(val) => set('destination', val)}
              />
            ))}
            <ChoiceCard
              name="destination"
              value="Somewhere else"
              label="Somewhere else"
              description="Tell us at the end"
              checked={v.destination === 'Somewhere else'}
              onChange={(val) => set('destination', val)}
            />
          </div>
        )}

        {step === 1 && (
          <div className="mt-9 max-w-lg">
            <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
              <Select
                label="Month"
                options={months.map((m) => ({ value: m, label: m }))}
                value={v.month}
                onChange={(e) => set('month', e.target.value)}
                placeholder="Choose a month"
                required
              />
              <Select
                label="Year"
                options={[0, 1, 2].map((n) => {
                  const y = String(new Date().getFullYear() + n)
                  return { value: y, label: y }
                })}
                value={v.year}
                onChange={(e) => set('year', e.target.value)}
              />
            </div>
            <p className="mt-6 text-[0.875rem] leading-relaxed text-muted">
              Not fixed yet? Pick the closest month — we will tell you honestly whether it is the
              right window for where you are going.
            </p>
          </div>
        )}

        {step === 2 && (
          <div className="mt-9 max-w-lg">
            <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
              <Input
                label="Travellers"
                type="number"
                min={1}
                max={40}
                value={v.travellers}
                onChange={(e) => set('travellers', e.target.value)}
                required
              />
              <Input
                label="Rooms needed"
                type="number"
                min={1}
                max={20}
                value={v.rooms}
                onChange={(e) => set('rooms', e.target.value)}
                hint="Leave as one if you are not sure"
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {tripTypeOptions.map((o) => (
              <ChoiceCard
                key={o.value}
                name="tripType"
                value={o.value}
                label={o.label}
                description={o.description}
                checked={v.tripType === o.value}
                onChange={(val) => set('tripType', val)}
              />
            ))}
          </div>
        )}

        {step === 4 && (
          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {budgetOptions.map((o) => (
              <ChoiceCard
                key={o.value}
                name="budget"
                value={o.value}
                label={o.label}
                description={o.description}
                checked={v.budget === o.value}
                onChange={(val) => set('budget', val)}
              />
            ))}
            <p className="mt-3 max-w-md text-[0.8125rem] leading-relaxed text-faint sm:col-span-2 lg:col-span-3">
              Budgets are per person, excluding flights and trains. We will tell you if what you
              want is not achievable in the range rather than quietly cutting corners.
            </p>
          </div>
        )}

        {step === 5 && (
          <div className="mt-9 max-w-2xl">
            <p className="mb-8 text-[0.9375rem] leading-relaxed text-muted">
              Last step. We will send your itinerary here.
            </p>
            <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
              <Input
                label="Full name"
                autoComplete="name"
                required
                value={v.name}
                onChange={(e) => set('name', e.target.value)}
              />
              <Input
                label="Phone number"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                required
                value={v.phone}
                onChange={(e) => set('phone', e.target.value)}
                placeholder="+91"
              />
              <Input
                label="Email"
                type="email"
                inputMode="email"
                autoComplete="email"
                className="sm:col-span-2"
                value={v.email}
                onChange={(e) => set('email', e.target.value)}
              />
              <Textarea
                label="Anything else we should know?"
                className="sm:col-span-2"
                value={v.notes}
                onChange={(e) => set('notes', e.target.value)}
                placeholder="Dietary needs, mobility, celebrations, places you have already been."
              />
            </div>

            {/* Summary so people can check before committing. */}
            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-border pt-7 sm:grid-cols-4">
              {[
                { t: 'Destination', d: v.destination },
                { t: 'When', d: `${v.month} ${v.year}` },
                { t: 'Travellers', d: v.travellers },
                { t: 'Trip type', d: v.tripType },
              ].map((row) => (
                <div key={row.t}>
                  <dt className="text-[0.6875rem] uppercase tracking-[0.14em] text-faint">
                    {row.t}
                  </dt>
                  <dd className="mt-1 text-[0.875rem] text-ink">{row.d || '—'}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </div>

      {error && (
        <p role="alert" className="mt-7 text-[0.8125rem] text-clay-deep">
          {error}
        </p>
      )}

      {/* Controls */}
      <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-border pt-8">
        {step > 0 && (
          <Button type="button" variant="ghost" onClick={back}>
            Back
          </Button>
        )}

        {/* The Continue button is deliberately never dimmed when the step is
            incomplete — it stays live and answers a premature click with a
            message naming what is missing, which is clearer to act on than a
            greyed-out control that explains nothing. */}
        {step < STEPS.length - 1 ? (
          <Button type="button" size="lg" onClick={next}>
            Continue
            <ArrowRight className="h-4 w-4 transition-transform duration-400 group-hover/btn:translate-x-1" />
          </Button>
        ) : (
          <Button type="submit" size="lg" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Create My Trip'}
            {status !== 'sending' && <ArrowRight className="h-4 w-4" />}
          </Button>
        )}

        <Button
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          size="lg"
          className="ml-auto"
        >
          <WhatsApp className="h-4 w-4" />
          Rather just chat?
        </Button>
      </div>
    </form>
  )
}
