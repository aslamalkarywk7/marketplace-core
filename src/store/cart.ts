/**
 * Cart Store — Zustand
 * سلة تسوق — Add / Remove / Total
 */

import { create } from 'zustand'

export interface CartItem {
  listingId: string
  title: string
  priceCents: number
  qty: number
  image?: string
}

interface CartState {
  items: CartItem[]
  add: (item: Omit<CartItem, 'qty'>, qty?: number) => void
  remove: (listingId: string) => void
  clear: () => void
  totalCents: () => number
  count: () => number
}

export const useCart = create<CartState>((set, get) => ({
  items: [],

  add: (item, qty = 1) => {
    const existing = get().items.find(i => i.listingId === item.listingId)
    if (existing) {
      set({
        items: get().items.map(i =>
          i.listingId === item.listingId ? { ...i, qty: i.qty + qty } : i
        )
      })
    } else {
      set({ items: [...get().items, { ...item, qty }] })
    }
  },

  remove: (listingId) => {
    set({ items: get().items.filter(i => i.listingId !== listingId) })
  },

  clear: () => set({ items: [] }),

  totalCents: () => get().items.reduce((s, i) => s + i.priceCents * i.qty, 0),
  count: () => get().items.reduce((s, i) => s + i.qty, 0)
}))
