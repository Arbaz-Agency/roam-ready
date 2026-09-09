/** ₹42,500 — Indian digit grouping, no decimals. */
export const inr = (value: number) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)

/** "01", "02" … used for editorial numbering. */
export const pad2 = (n: number) => String(n).padStart(2, '0')
