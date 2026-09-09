import { SIZE_SUFFIX, type ImageAsset } from '../data/media'

const url = (asset: ImageAsset, width: number) => `${asset.base}${SIZE_SUFFIX[width]}.jpg`

/**
 * Builds a responsive `srcset` from the widths the host actually serves for
 * this photograph, which were probed when the manifest was generated — so no
 * candidate in the list can 404.
 */
export const srcSet = (asset: ImageAsset) =>
  asset.variants.map((w) => `${url(asset, w)} ${w}w`).join(', ')

/** Largest available width — the ceiling for `sizes` calculations. */
export const maxWidth = (asset: ImageAsset) => asset.variants[asset.variants.length - 1]

/** A sensible mid-size default for browsers that ignore srcset. */
export function fallbackSrc(asset: ImageAsset) {
  const mid = asset.variants.find((w) => w >= 1024) ?? maxWidth(asset)
  return url(asset, mid)
}

/** Full-size source, used for social preview images and the lightbox. */
export const largestSrc = (asset: ImageAsset) => url(asset, maxWidth(asset))

export const aspect = (asset: ImageAsset) => asset.ratio
