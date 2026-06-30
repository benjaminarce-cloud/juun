'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('juun_cookies_accepted')) {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem('juun_cookies_accepted', '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0,
      background: '#0e0c0b', color: '#f5f3ec',
      padding: '16px 24px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      gap: '16px', flexWrap: 'wrap',
      zIndex: 99999,
      fontFamily: 'inherit',
    }}>
      <p style={{
        margin: 0, fontSize: '11px', lineHeight: 1.6,
        color: 'rgba(245,243,236,0.7)', fontWeight: 300,
        letterSpacing: '0.02em',
      }}>
        Usamos cookies para el funcionamiento del sitio.{' '}
        <Link href="/privacidad" style={{ color: '#f5f3ec', textDecoration: 'underline' }}>
          Aviso de privacidad
        </Link>
      </p>
      <button
        onClick={accept}
        style={{
          background: '#f5f3ec', color: '#0e0c0b',
          border: 'none', cursor: 'pointer',
          fontFamily: 'inherit', fontWeight: 700,
          fontSize: '10px', letterSpacing: '0.18em',
          textTransform: 'uppercase', padding: '10px 20px',
          whiteSpace: 'nowrap', flexShrink: 0,
        }}
      >
        Aceptar
      </button>
    </div>
  )
}
