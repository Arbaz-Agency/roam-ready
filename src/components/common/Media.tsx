import { useState } from 'react'
import { media, type MediaKey } from '../../data/media'
import { fallbackSrc, srcSet } from '../../utils/image'
import { cn } from '../../utils/cn'

interface MediaProps {
  /** Key into the photography manifest — never a raw URL. */
  name: MediaKey
  alt: string
  /** Tailwind aspect utility, e.g. "aspect-[4/5]". Omit to fill the parent. */
  aspect?: string
  className?: string
  imgClassName?: string
  /** The `sizes` attribute. Get this right and the browser downloads far less. */
  sizes?: string
  /** LCP images only — everything else stays lazy. */
  priority?: boolean
  /** Adds the scale-out reveal. Off for above-the-fold images. */
  reveal?: boolean
  /** Zoom on hover of the nearest `.group` ancestor. */
  hoverZoom?: boolean
  rounded?: string
  /** Absolutely fills its positioned parent — used by full-bleed heroes. */
  fill?: boolean
}

/**
 * The single image primitive.
 *
 * Every photograph on the site renders through here, which is what makes the
 * art direction consistent: one loading strategy, one reveal, one failure mode.
 * On error we fall back to a warm brand-tinted panel rather than a broken icon,
 * so a dead CDN degrades quietly instead of wrecking the layout.
 */
export function Media({
  name,
  alt,
  aspect,
  className,
  imgClassName,
  sizes = '100vw',
  priority = false,
  reveal = true,
  hoverZoom = false,
  rounded,
  fill = false,
}: MediaProps) {
  const asset = media[name]
  const [failed, setFailed] = useState(false)

  return (
    <div
      className={cn(
        'overflow-hidden bg-shell',
        // Exactly one position utility — emitting `relative` alongside
        // `absolute` lets the cascade pick the wrong one and drops the image
        // back into normal flow, which collapses every full-bleed hero.
        fill ? 'absolute inset-0 h-full w-full' : 'relative',
        aspect,
        rounded,
        className,
      )}
      // Reserves layout space before the image arrives — no CLS. A filled or
      // explicitly-proportioned box already has its size, so it needs none.
      style={aspect || fill ? undefined : { aspectRatio: asset.ratio }}
      {...(reveal && !priority ? { 'data-reveal-image': '' } : {})}
    >
      {failed ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-sand via-shell to-stone/40"
        />
      ) : (
        <img
          src={fallbackSrc(asset)}
          srcSet={srcSet(asset)}
          sizes={sizes}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          fetchPriority={priority ? 'high' : 'auto'}
          onError={() => setFailed(true)}
          className={cn(
            'h-full w-full object-cover',
            hoverZoom &&
              'transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.045]',
            imgClassName,
          )}
        />
      )}
    </div>
  )
}
