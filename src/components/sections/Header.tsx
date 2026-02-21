'use client'

import { useEffect, useState } from 'react'
import JuunLogo from '@/components/ui/JuunLogo'
import { copy } from '@/content/siteCopy'
import { scrollToId } from '@/lib/scroll'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 90,
        padding: '1.25rem var(--gutter)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'background 0.4s, backdrop-filter 0.4s, border-bottom 0.4s',
        background: scrolled ? 'rgba(252,251,240,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      {/* Logo — color flips via currentColor */}
      <a
        href="#"
        aria-label="JUUN wellness — inicio"
        style={{
          textDecoration: 'none',
          color: scrolled ? 'var(--black)' : 'var(--linen)',
          transition: 'color 0.4s',
        }}
      >
        <JuunLogo size="sm" />
      </a>

      {/* CTA */}
      <button
        onClick={() => scrollToId('comprar')}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.35rem',
          padding: '0.55rem 1.25rem',
          fontFamily: 'var(--font-unbounded), sans-serif',
          fontSize: '0.6rem',
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          border: '1px solid',
          borderRadius: '9999px',
          cursor: 'pointer',
          transition: 'background 0.3s, color 0.3s, border-color 0.3s',
          background: scrolled ? 'var(--black)' : 'var(--linen)',
          color: scrolled ? 'var(--linen)' : 'var(--black)',
          borderColor: scrolled ? 'var(--black)' : 'rgba(252,251,240,0.4)',
        }}
      >
        {copy.header.cta} ✦
      </button>
    </header>
  )
}
