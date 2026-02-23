'use client'

import { useEffect, useState } from 'react'
import { useCart } from '@/context/CartContext'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { items, openCart } = useCart()
  const itemCount = items.reduce((sum, i) => sum + i.qty, 0)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={'header' + (scrolled ? ' scrolled' : '')}>
      <a href="#" className="logo" aria-label="JUUN wellness">
        <span className="logo-mark">
          JÜ<span className="logo-star">✦</span>UN
        </span>
        <span className="logo-sub">wellness</span>
      </a>

      <div className="header-actions">
        <button
          className="cart-btn"
          onClick={openCart}
          aria-label={'Carrito ' + itemCount + ' items'}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          {itemCount > 0 && (
            <span className="cart-badge">{itemCount}</span>
          )}
        </button>

        <a href="#comprar" className="nav-cta">Comprar</a>
      </div>
    </header>
  )
}
