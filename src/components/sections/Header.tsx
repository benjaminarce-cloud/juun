'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import AuthModal from '@/components/AuthModal'
import { type MouseEvent, useEffect, useRef, useState } from 'react'
import { useCart } from '@/context/CartContext'

type HeaderProps = {
  startOnLight?: boolean
}

export default function Header({ startOnLight = false }: HeaderProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const authTriggerRef = useRef<HTMLDivElement | null>(null)
  const { items, openCart } = useCart()
  const itemCount = items.reduce((sum, i) => sum + i.qty, 0)
  const headerClassName = 'header' + (startOnLight && !scrolled ? ' light-top' : '') + (scrolled ? ' scrolled' : '')
  const logoSrc = scrolled || startOnLight ? '/logo-black.png' : '/logo-white.png'

  function handleAuthClick() {
    setMenuOpen(false)
    authTriggerRef.current?.querySelector('button')?.click()
  }

  function handleLogoClick(e: MouseEvent<HTMLAnchorElement>) {
    setMenuOpen(false)
    if (pathname === '/') {
      e.preventDefault()
      window.history.replaceState(null, '', '/')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  function handleSectionLink(id: string) {
    const target = `/#${id}`
    setMenuOpen(false)

    const navigate = () => {
      if (pathname === '/') {
        window.history.replaceState(null, '', target)
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }

      router.push(target)
    }

    if (menuOpen) {
      window.setTimeout(navigate, 350)
      return
    }

    navigate()
  }

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [pathname])

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth > 900) setMenuOpen(false)
    }
    window.addEventListener('resize', closeOnDesktop)
    return () => window.removeEventListener('resize', closeOnDesktop)
  }, [])

  return (
    <header className={headerClassName}>
      <Link href="/" onClick={handleLogoClick} aria-label="JUUN wellness" className="header-logo-link header-logo-desktop" style={{ display:'flex', alignItems:'center', textDecoration:'none' }}>
        <img
          src={logoSrc}
          alt="JUUN wellness"
          style={{ height:'88px', width:'auto', transition:'opacity 0.3s' }}
        />
      </Link>

      <div className="header-actions header-actions-desktop">
        <button type="button" className="nav-cta" onClick={() => handleSectionLink('comprar')}>Comprar</button>
        <button className="cart-btn" onClick={openCart} aria-label={'Carrito ' + itemCount + ' items'}>
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
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="header-mobile-row">
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

        <Link href="/" onClick={handleLogoClick} aria-label="JUUN wellness" className="header-logo-link header-logo-mobile" style={{ display:'flex', alignItems:'center', textDecoration:'none' }}>
          <img
            src={logoSrc}
            alt="JUUN wellness"
            style={{ height:'88px', width:'auto', transition:'opacity 0.3s' }}
          />
        </Link>

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
      </div>

      <div className={'header-mobile-overlay' + (menuOpen ? ' open' : '')} onClick={() => setMenuOpen(false)} />
      <div className={'header-mobile-menu' + (menuOpen ? ' open' : '')}>
        <div className="header-mobile-menu-inner">
          <div className="header-mobile-menu-top">
            <Link href="/" onClick={handleLogoClick} aria-label="Ir al inicio" style={{ display:'flex', alignItems:'center', textDecoration:'none' }}>
              <img src="/logo-white.png" alt="JUUN wellness" style={{ height:'44px', width:'auto' }} />
            </Link>
            <button className="header-mobile-menu-close" aria-label="Cerrar menú" onClick={() => setMenuOpen(false)}>✕</button>
          </div>
          <div className="header-mobile-menu-mid">
            <div className="header-mobile-menu-primary">
              <button type="button" onClick={() => handleSectionLink('comprar')}>Comprar</button>
              <Link href="/ciencia" onClick={() => setMenuOpen(false)}>Ciencia</Link>
            </div>
            <div className="header-mobile-menu-secondary">
              <button type="button" onClick={() => handleSectionLink('formula')}>Fórmula</button>
              <button type="button" onClick={() => handleSectionLink('hablan')}>Hablan</button>
              <button type="button" onClick={handleAuthClick}>Entrar</button>
            </div>
          </div>
          <p className="header-mobile-menu-foot">@drinkjuun</p>
        </div>
      </div>
      <div ref={authTriggerRef} style={{ position:'absolute', left:'-9999px', top:'-9999px', width:'1px', height:'1px' }}>
        <AuthModal />
      </div>
    </header>
  )
}
