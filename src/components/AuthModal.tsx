'use client'
import { useState } from 'react'

type Tab = 'login' | 'signup'

interface UserData {
  name: string
  email: string
  points: number
  orders: number
}

export default function AuthModal() {
  const [open, setOpen]       = useState(false)
  const [tab, setTab]         = useState<Tab>('login')
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser]       = useState<UserData | null>(null)
  const [email, setEmail]     = useState('')
  const [password, setPassword] = useState('')
  const [name, setName]       = useState('')
  const [error, setError]     = useState('')

  function handleAuth() {
    if (!email || !password) { setError('Completa todos los campos.'); return }
    // Simulated auth — replace with real backend later
    const userData: UserData = {
      name: name || email.split('@')[0],
      email,
      points: tab === 'signup' ? 50 : 120,
      orders: tab === 'signup' ? 0 : 2,
    }
    setUser(userData)
    setLoggedIn(true)
    setError('')
  }

  function handleLogout() {
    setUser(null)
    setLoggedIn(false)
    setEmail('')
    setPassword('')
    setName('')
  }

  return (
    <>
      {/* Icon trigger */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Mi cuenta"
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          padding: '0.25rem', color: 'inherit',
          display: 'flex', alignItems: 'center', position: 'relative',
        }}
      >
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="4"/>
          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
        </svg>
        {loggedIn && (
          <span style={{
            position: 'absolute', top: '-2px', right: '-2px',
            width: '7px', height: '7px', borderRadius: '50%',
            background: '#c8f04a', border: '1.5px solid #0e0c0b',
          }}/>
        )}
      </button>

      {/* Backdrop */}
      {open && (
        <div onClick={() => setOpen(false)} style={{
          position: 'fixed', inset: 0, zIndex: 999,
          background: 'rgba(10,9,8,0.75)', backdropFilter: 'blur(8px)',
        }}/>
      )}

      {/* Modal */}
      {open && (
        <div style={{
          position: 'fixed', top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          zIndex: 1000, background: '#f5f3ec', color: '#0e0c0b',
          borderRadius: '2px', padding: 'clamp(2rem,5vw,2.75rem)',
          width: 'min(440px,93vw)',
          boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
        }}>

          {/* Close */}
          <button onClick={() => setOpen(false)} style={{
            position: 'absolute', top: '1.25rem', right: '1.25rem',
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: '1rem', color: 'rgba(14,12,11,0.35)', lineHeight: 1,
          }}>✕</button>

          {/* Logo */}
          <div style={{ marginBottom: '1.75rem' }}>
            <span style={{ fontSize: '1rem', fontWeight: 900, letterSpacing: '-0.03em' }}>JÜUN</span>
            <span style={{ fontSize: '0.55rem', letterSpacing: '0.15em', marginLeft: '0.4rem', opacity: 0.35, textTransform: 'uppercase' as const }}>wellness</span>
          </div>

          {loggedIn && user ? (
            /* ── LOGGED IN VIEW ── */
            <div>
              <p style={{ fontSize: '0.65rem', opacity: 0.4, letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '0.25rem' }}>Bienvenido</p>
              <p style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '2rem' }}>{user.name}</p>

              {/* Loyalty card */}
              <div style={{
                background: '#0e0c0b', color: '#f5f3ec',
                borderRadius: '2px', padding: '1.25rem 1.5rem',
                marginBottom: '1.5rem',
              }}>
                <p style={{ fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase' as const, opacity: 0.5, marginBottom: '0.5rem' }}>Puntos JUUN</p>
                <p style={{ fontSize: '2.2rem', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1 }}>{user.points}</p>
                <p style={{ fontSize: '0.6rem', opacity: 0.4, marginTop: '0.5rem' }}>Cada compra suma. Pronto: recompensas.</p>
              </div>

              {/* Stats */}
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.75rem' }}>
                {[
                  { label: 'Pedidos', value: user.orders },
                  { label: 'Nivel', value: user.points >= 100 ? 'Elite' : 'Starter' },
                  { label: 'Estado', value: 'Activo' },
                ].map(s => (
                  <div key={s.label} style={{
                    flex: 1, background: 'rgba(14,12,11,0.05)',
                    borderRadius: '2px', padding: '0.75rem',
                    textAlign: 'center' as const,
                  }}>
                    <p style={{ fontSize: '1rem', fontWeight: 700 }}>{s.value}</p>
                    <p style={{ fontSize: '0.55rem', opacity: 0.4, letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>{s.label}</p>
                  </div>
                ))}
              </div>

              <button onClick={handleLogout} style={{
                width: '100%', padding: '0.75rem',
                background: 'none', border: '1px solid rgba(14,12,11,0.15)',
                borderRadius: '2px', fontSize: '0.65rem', fontWeight: 600,
                letterSpacing: '0.12em', textTransform: 'uppercase' as const,
                cursor: 'pointer', color: '#0e0c0b',
              }}>Cerrar sesión</button>
            </div>
          ) : (
            /* ── AUTH VIEW ── */
            <div>
              {/* Tabs */}
              <div style={{ display: 'flex', marginBottom: '2rem', borderBottom: '1px solid rgba(14,12,11,0.1)' }}>
                {(['login', 'signup'] as Tab[]).map(t => (
                  <button key={t} onClick={() => { setTab(t); setError('') }} style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    padding: '0.5rem 1rem 0.75rem',
                    fontSize: '0.65rem', fontWeight: tab === t ? 700 : 400,
                    letterSpacing: '0.12em', textTransform: 'uppercase' as const,
                    color: tab === t ? '#0e0c0b' : 'rgba(14,12,11,0.35)',
                    borderBottom: tab === t ? '2px solid #0e0c0b' : '2px solid transparent',
                    marginBottom: '-1px',
                  }}>
                    {t === 'login' ? 'Iniciar sesión' : 'Crear cuenta'}
                  </button>
                ))}
              </div>

              {/* Perks for signup */}
              {tab === 'signup' && (
                <div style={{
                  background: 'rgba(14,12,11,0.04)', borderRadius: '2px',
                  padding: '0.875rem 1rem', marginBottom: '1.25rem',
                  fontSize: '0.65rem', lineHeight: 1.7, opacity: 0.65,
                }}>
                  ✦ 50 puntos de bienvenida · Carrito guardado · Historial de pedidos · Acceso anticipado a nuevos sabores
                </div>
              )}

              {/* Fields */}
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.75rem' }}>
                {tab === 'signup' && (
                  <input placeholder="Nombre" value={name} onChange={e => setName(e.target.value)} style={inputStyle}/>
                )}
                <input placeholder="Correo electrónico" type="email" value={email} onChange={e => setEmail(e.target.value)} style={inputStyle}/>
                <input placeholder="Contraseña" type="password" value={password} onChange={e => setPassword(e.target.value)} style={inputStyle}/>
              </div>

              {error && <p style={{ fontSize: '0.65rem', color: '#c0392b', marginTop: '0.75rem' }}>{error}</p>}

              <button onClick={handleAuth} style={{
                width: '100%', marginTop: '1.25rem', padding: '0.875rem',
                background: '#0e0c0b', color: '#f5f3ec',
                border: 'none', borderRadius: '2px',
                fontSize: '0.65rem', fontWeight: 700,
                letterSpacing: '0.15em', textTransform: 'uppercase' as const,
                cursor: 'pointer',
              }}>
                {tab === 'login' ? 'Entrar' : 'Crear cuenta'}
              </button>

              {tab === 'login' && (
                <p style={{ textAlign: 'center' as const, marginTop: '0.875rem', fontSize: '0.62rem', opacity: 0.35, cursor: 'pointer' }}>
                  ¿Olvidaste tu contraseña? <span style={{ textDecoration: 'underline' }}>Recuperar</span>
                </p>
              )}

              <p style={{ textAlign: 'center' as const, marginTop: '1.75rem', fontSize: '0.58rem', opacity: 0.22, letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>
                Lanzamiento · Viernes 6 de febrero
              </p>
            </div>
          )}
        </div>
      )}
    </>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '0.75rem 1rem',
  background: 'rgba(14,12,11,0.05)',
  border: '1px solid rgba(14,12,11,0.1)',
  borderRadius: '2px', fontSize: '0.875rem',
  color: '#0e0c0b', outline: 'none', boxSizing: 'border-box',
}
