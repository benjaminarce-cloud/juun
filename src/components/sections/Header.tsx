'use client'
import AuthModal from '@/components/AuthModal'
import { useEffect, useState } from 'react'
import { useCart } from '@/context/CartContext'

type TabKey = 'comprar' | 'formula' | 'voces'

export default function Header({ onSelectTab }: { onSelectTab?: (tab: TabKey) => void }) {
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
      if (window.innerWidth > 768) setMenuOpen(false)
    }
    window.addEventListener('resize', closeOnDesktop)
    return () => window.removeEventListener('resize', closeOnDesktop)
  }, [])

  function selectTab(tab: TabKey) {
    onSelectTab?.(tab)
    setMenuOpen(false)
  }

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
        <a href="#comprar" className="nav-cta" onClick={() => onSelectTab?.('comprar')}>Comprar</a>
      </div>

      <div className="header-mobile-actions">
        <button className="cart-btn cart-btn-mobile" onClick={openCart} aria-label={'Carrito ' + itemCount + ' items'}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
        </button>
        <button
          className="menu-btn"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(open => !open)}
        >
          ☰
        </button>
      </div>

      <div className={'mobile-nav-backdrop' + (menuOpen ? ' open' : '')} onClick={() => setMenuOpen(false)} />
      <aside className={'mobile-nav-drawer' + (menuOpen ? ' open' : '')} aria-hidden={!menuOpen}>
        <div className="mobile-nav-head">
          <button className="mobile-nav-close" onClick={() => setMenuOpen(false)} aria-label="Cerrar menú">✕</button>
        </div>
        <div className="mobile-nav-links">
          <button className="mobile-nav-link" onClick={() => selectTab('comprar')}>COMPRAR</button>
          <button className="mobile-nav-link" onClick={() => selectTab('formula')}>FÓRMULA</button>
          <button className="mobile-nav-link" onClick={() => selectTab('voces')}>HABLAN</button>
          <div className="mobile-nav-divider" />
          <AuthModal />
        </div>
      </aside>
    </header>
  )
}
