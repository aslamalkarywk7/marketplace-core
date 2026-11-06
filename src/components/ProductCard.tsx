/**
 * ProductCard — Amazon-like product card
 *  ┌─────────────┐
 *  │   صورة      │
 *  │ تويوتا 2022 │
 *  │ 850,000 ج.م │
 *  │ ⭐⭐⭐⭐☆    │
 *  │ [أضف للسلة] │
 *  └─────────────┘
 */

import type { Listing } from '@prisma/client'

interface Props {
  listing: Listing & { seller?: { name: string | null } }
  onAddToCart?: (id: string) => void
}

export function formatPrice(cents: number, currency = 'EGP') {
  return `${(cents / 100).toLocaleString('ar-EG')} ${currency}`
}

export function ProductCard({ listing, onAddToCart }: Props) {
  return (
    <article className="flex flex-col rounded-lg border border-gray-200 bg-white p-3 shadow-sm transition hover:shadow-md">
      <a href={`/listing/${listing.id}`} className="mb-2 aspect-square overflow-hidden rounded bg-gray-100">
        <img
          src={listing.images?.[0] ?? '/placeholder.jpg'}
          alt={listing.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </a>

      <h3 className="line-clamp-2 text-sm font-medium">{listing.title}</h3>
      <p className="text-xs text-gray-500">{listing.location ?? 'مصر'}</p>

      <p className="mt-1 text-lg font-bold text-[#b12704]">
        {formatPrice(listing.priceCents, listing.currency)}
      </p>

      <p className="text-xs text-gray-600">⭐⭐⭐⭐☆ (127) • {listing.condition ?? 'جديد'}</p>

      <div className="mt-3">
        <button
          onClick={() => onAddToCart?.(listing.id)}
          className="w-full rounded-full bg-[#ffd814] py-2 text-sm font-medium hover:bg-[#f7ca00]"
        >
          أضف للسلة 🛒
        </button>
      </div>
    </article>
  )
}
