'use client'
import AuthModal from '@/components/AuthModal'
import { useEffect, useState } from 'react'
import { useCart } from '@/context/CartContext'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { items, openCart } = useCart()
  const itemCount = items.reduce((sum, i) => sum + i.qty, 0)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth > 900) setMenuOpen(false)
    }
    window.addEventListener('resize', closeOnDesktop)
    return () => window.removeEventListener('resize', closeOnDesktop)
  }, [])

  return (
    <header className={'header' + (scrolled ? ' scrolled' : '')}>
      <a href="#" aria-label="JUUN wellness" className="header-logo-link" style={{ display:'flex', alignItems:'center', textDecoration:'none' }}>
        <img
          src={scrolled ? '/logo-black.png' : '/logo-white.png'}
          alt="JUUN wellness"
          style={{ height:'88px', width:'auto', transition:'opacity 0.3s' }}
        />
      </a>

      <div className="header-actions header-actions-desktop">
        <AuthModal scrolled={scrolled} />
        <button className="cart-btn" onClick={openCart} aria-label={'Carrito ' + itemCount + ' items'}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
        </button>
        <a href="#comprar" className="nav-cta">Comprar</a>
      </div>

      <div className="header-mobile-controls">
        <button
          className="menu-btn"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(open => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="header-mobile-cart">
        <button className="cart-btn cart-btn-mobile" onClick={openCart} aria-label={'Carrito ' + itemCount + ' items'}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
        </button>
      </div>

      {menuOpen && (
        <div className="header-mobile-menu">
          <a href="#comprar" className="nav-cta" onClick={() => setMenuOpen(false)}>Comprar</a>
          <button className="cart-btn cart-btn-mobile" onClick={() => { openCart(); setMenuOpen(false) }} aria-label={'Carrito ' + itemCount + ' items'}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
          </button>
        </div>
      )}
    </header>
  )
}
