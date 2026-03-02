'use client'
import { useState } from 'react'

export default function AuthModal() {
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Cuenta"
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          padding: '0.25rem', color: 'inherit',
          display: 'flex', alignItems: 'center',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="4"/>
          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
        </svg>
      </button>

      {open && (
        <div onClick={() => setOpen(false)} style={{
          position: 'fixed', inset: 0, zIndex: 999,
          background: 'rgba(10,9,8,0.7)', backdropFilter: 'blur(6px)',
        }} />
      )}

      {open && (
        <div style={{
          position: 'fixed', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1000, background: '#f5f3ec', color: '#0e0c0b',
          borderRadius: '2px', padding: 'clamp(2rem,5vw,3rem)',
          width: 'min(420px, 92vw)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
        }}>
          <button onClick={() => setOpen(false)} style={{
            position: 'absolute', top: '1.25rem', right: '1.25rem',
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: '1.2rem', color: 'rgba(14,12,11,0.4)',
          }}>✕</button>

          <div style={{ marginBottom: '2rem' }}>
            <span style={{ fontSize: '1.1rem', fontWeight: 900, letterSpacing: '-0.03em' }}>JÜUN</span>
            <span style={{ fontSize: '0.6rem', fontWeight: 400, letterSpacing: '0.15em', marginLeft: '0.4rem', opacity: 0.4, textTransform: 'uppercase' as const }}>wellness</span>
          </div>

          <div style={{ display: 'flex', marginBottom: '2rem', borderBottom: '1px solid rgba(14,12,11,0.12)' }}>
            {(['login', 'signup'] as const).map(m => (
              <button key={m} onClick={() => setMode(m)} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '0.5rem 1rem 0.75rem',
                fontSize: '0.7rem', fontWeight: mode === m ? 700 : 400,
                letterSpacing: '0.12em', textTransform: 'uppercase' as const,
                color: mode === m ? '#0e0c0b' : 'rgba(14,12,11,0.35)',
                borderBottom: mode === m ? '2px solid #0e0c0b' : '2px solid transparent',
                marginBottom: '-1px',
              }}>
                {m === 'login' ? 'Iniciar sesión' : 'Crear cuenta'}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '1rem' }}>
            {mode === 'signup' && (
              <input placeholder="Nombre" value={name} onChange={e => setName(e.target.value)} style={inputStyle} />
            )}
            <input placeholder="Correo electrónico" type="email" value={email} onChange={e => setEmail(e.target.value)} style={inputStyle} />
            <input placeholder="Contraseña" type="password" value={password} onChange={e => setPassword(e.target.value)} style={inputStyle} />
          </div>

          <button style={{
            width: '100%', marginTop: '1.5rem', padding: '0.85rem',
            background: '#0e0c0b', color: '#f5f3ec',
            border: 'none', borderRadius: '2px',
            fontSize: '0.65rem', fontWeight: 700,
            letterSpacing: '0.15em', textTransform: 'uppercase' as const,
            cursor: 'pointer',
          }}>
            {mode === 'login' ? 'Entrar' : 'Crear cuenta'}
          </button>

          {mode === 'login' && (
            <p style={{ textAlign: 'center' as const, marginTop: '1rem', fontSize: '0.65rem', opacity: 0.4 }}>
              ¿Olvidaste tu contraseña?{' '}
              <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Recuperar</span>
            </p>
          )}

          <p style={{ textAlign: 'center' as const, marginTop: '1.5rem', fontSize: '0.6rem', opacity: 0.3, letterSpacing: '0.05em' }}>
            Lanzamiento: viernes 6 de febrero
          </p>
        </div>
      )}
    </>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '0.75rem 1rem',
  background: 'rgba(14,12,11,0.05)',
  border: '1px solid rgba(14,12,11,0.12)',
  borderRadius: '2px', fontSize: '0.85rem',
  color: '#0e0c0b', outline: 'none', boxSizing: 'border-box',
}
