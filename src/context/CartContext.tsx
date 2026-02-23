'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export interface CartItem {
  flavorKey:   string
  flavorLabel: string
  packKey:     string
  qty:         number
}

interface CartContextType {
  items:     CartItem[]
  add:       (item: CartItem) => void
  remove:    (index: number) => void
  clear:     () => void
  isOpen:    boolean
  openCart:  () => void
  closeCart: () => void
  total:     number
}

const CartContext = createContext<CartContextType | null>(null)

const PACK_PRICES: Record<string, number> = { '1': 89, '6': 479, '12': 899 }

export function CartProvider({ children }: { children: ReactNode }) {
  const [items,  setItems]  = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const total = items.reduce(
    (sum, item) => sum + (PACK_PRICES[item.packKey] ?? 0) * item.qty, 0
  )

  function add(item: CartItem) {
    setItems((prev) => {
      const idx = prev.findIndex(
        (i) => i.flavorKey === item.flavorKey && i.packKey === item.packKey
      )
      if (idx >= 0) {
        const next = [...prev]
        next[idx] = { ...next[idx], qty: next[idx].qty + item.qty }
        return next
      }
      return [...prev, item]
    })
    setIsOpen(true)
  }

  function remove(index: number) {
    setItems((prev) => prev.filter((_, i) => i !== index))
  }

  function clear() { setItems([]) }

  return (
    <CartContext.Provider value={{
      items, add, remove, clear,
      isOpen,
      openCart:  () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      total,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
