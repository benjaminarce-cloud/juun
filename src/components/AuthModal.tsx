'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import type { User } from '@supabase/supabase-js'

type Tab = 'login' | 'signup'
interface Profile { id:string; name:string; email:string; points:number; orders:number }

export default function AuthModal({ scrolled = false }: { scrolled?: boolean }) {
  const [open, setOpen]           = useState(false)
  const [tab, setTab]             = useState<Tab>('login')
  const [user, setUser]           = useState<User | null>(null)
  const [profile, setProfile]     = useState<Profile | null>(null)
  const [email, setEmail]         = useState('')
  const [password, setPassword]   = useState('')
  const [name, setName]           = useState('')
  const [loading, setLoading]     = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const [error, setError]         = useState('')

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      if (session?.user) fetchProfile(session.user.id)
    })
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null)
      if (session?.user) fetchProfile(session.user.id)
      else setProfile(null)
    })
    return () => subscription.unsubscribe()
  }, [])

  async function fetchProfile(uid: string) {
    const { data } = await supabase.from('profiles').select('*').eq('id', uid).single()
    if (data) setProfile(data)
  }

  async function handleAuth() {
    setLoading(true); setError('')
    try {
      if (tab === 'signup') {
        const { data, error: err } = await supabase.auth.signUp({
          email, password,
          options: { emailRedirectTo: window.location.origin + '/account' }
        })
        if (err) throw err
        if (data.user) {
          await supabase.from('profiles').insert({
            id: data.user.id,
            name: name || email.split('@')[0],
            email, points: 50, orders: 0,
          })
        }
        setEmailSent(true)
      } else {
        const { error: err } = await supabase.auth.signInWithPassword({ email, password })
        if (err) throw err
        setOpen(false)
      }
      setEmail(''); setPassword(''); setName('')
    } catch (err: any) {
      setError(err.message || 'Error. Intenta de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  function handleTriggerClick() {
    if (user) window.location.href = '/account'
    else setOpen(true)
  }

  const inp: React.CSSProperties = {
    width:'100%', padding:'0.75rem 1rem',
    background:'rgba(14,12,11,0.05)',
    border:'1px solid rgba(14,12,11,0.1)',
    borderRadius:'2px', fontSize:'0.875rem',
    color:'#0e0c0b', outline:'none', boxSizing:'border-box',
  }

  return (
    <>
      {/* Trigger button */}
      <button onClick={handleTriggerClick} aria-label="Mi cuenta" style={{
        display:'inline-flex', alignItems:'center', justifyContent:'center',
        gap:'0.4rem', padding:'0.55rem 1rem',
        fontFamily:"'Unbounded', sans-serif",
        fontSize:'0.58rem', fontWeight:600,
        letterSpacing:'0.14em', textTransform:'uppercase' as const,
        borderRadius:'99px', cursor:'pointer',
        transition:'background 0.3s, color 0.3s, border-color 0.3s',
        position:'relative',
        background: scrolled ? '#fcfbf0' : 'transparent',
        color: scrolled ? '#231f20' : '#fcfbf0',
        border: scrolled ? '1px solid #231f20' : '1px solid rgba(252,251,240,0.25)',
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="4"/>
          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
        </svg>
        {user ? 'Mi cuenta' : 'Entrar'}
        {user && (
          <span style={{
            position:'absolute', top:'2px', right:'2px',
            width:'6px', height:'6px', borderRadius:'50%',
            background:'#c8f04a',
          }}/>
        )}
      </button>

      {/* Full-screen overlay — covers everything, always centered */}
      {open && (
        <div style={{
          position:'fixed', inset:0,
          zIndex:9999,
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          background:'rgba(10,9,8,0.75)',
          backdropFilter:'blur(8px)',
          WebkitBackdropFilter:'blur(8px)',
          padding:'1rem',
        }} onClick={() => setOpen(false)}>

          {/* Modal card — stop propagation so clicking inside doesn't close */}
          <div onClick={e => e.stopPropagation()} style={{
            background:'#f5f3ec', color:'#0e0c0b',
            borderRadius:'2px',
            padding:'clamp(2rem,5vw,2.75rem)',
            width:'100%', maxWidth:'440px',
            maxHeight:'90vh', overflowY:'auto',
            boxShadow:'0 40px 100px rgba(0,0,0,0.5)',
            position:'relative',
          }}>

            {/* Close */}
            <button onClick={() => setOpen(false)} style={{
              position:'absolute', top:'1.25rem', right:'1.25rem',
              background:'none', border:'none', cursor:'pointer',
              fontSize:'1rem', color:'rgba(14,12,11,0.35)', lineHeight:1,
            }}>✕</button>

            {/* Logo */}
            <div style={{ marginBottom:'1.75rem' }}>
              <img src="/logo-black.png" alt="JUUN wellness" style={{ height:'30px', width:'auto' }} />
            </div>

            {emailSent ? (
              <div style={{ textAlign:'center' as const, padding:'1rem 0' }}>
                <p style={{ fontSize:'2rem', marginBottom:'1rem' }}>📬</p>
                <p style={{ fontWeight:700, marginBottom:'0.5rem' }}>Revisa tu correo</p>
                <p style={{ fontSize:'0.75rem', opacity:0.5, marginBottom:'1.5rem', lineHeight:1.6 }}>
                  Te enviamos un link de confirmación. Confírmalo y luego inicia sesión.
                </p>
                <button onClick={() => { setEmailSent(false); setTab('login') }} style={{
                  background:'#0e0c0b', color:'#f5f3ec', border:'none',
                  borderRadius:'2px', padding:'0.75rem 2rem',
                  fontSize:'0.65rem', fontWeight:700, letterSpacing:'0.15em',
                  textTransform:'uppercase' as const, cursor:'pointer',
                }}>Iniciar sesión</button>
              </div>
            ) : (
              <>
                {/* Tabs */}
                <div style={{ display:'flex', marginBottom:'2rem', borderBottom:'1px solid rgba(14,12,11,0.1)' }}>
                  {(['login','signup'] as Tab[]).map(t => (
                    <button key={t} onClick={() => { setTab(t); setError('') }} style={{
                      background:'none', border:'none', cursor:'pointer',
                      padding:'0.5rem 1rem 0.75rem',
                      fontSize:'0.65rem', fontWeight:tab===t?700:400,
                      letterSpacing:'0.12em', textTransform:'uppercase' as const,
                      color:tab===t?'#0e0c0b':'rgba(14,12,11,0.35)',
                      borderBottom:tab===t?'2px solid #0e0c0b':'2px solid transparent',
                      marginBottom:'-1px',
                    }}>{t==='login'?'Iniciar sesión':'Crear cuenta'}</button>
                  ))}
                </div>

                {tab==='signup' && (
                  <div style={{
                    background:'rgba(14,12,11,0.04)', borderRadius:'2px',
                    padding:'0.875rem 1rem', marginBottom:'1.25rem',
                    fontSize:'0.65rem', lineHeight:1.7, opacity:0.65,
                  }}>
                    ✦ 50 puntos de bienvenida · Carrito guardado · Acceso anticipado
                  </div>
                )}

                <div style={{ display:'flex', flexDirection:'column' as const, gap:'0.75rem' }}>
                  {tab==='signup' && (
                    <input placeholder="Nombre" value={name} onChange={e=>setName(e.target.value)} style={inp}/>
                  )}
                  <input placeholder="Correo electrónico" type="email" value={email} onChange={e=>setEmail(e.target.value)} style={inp}/>
                  <input placeholder="Contraseña" type="password" value={password} onChange={e=>setPassword(e.target.value)} style={inp}/>
                </div>

                {error && <p style={{ fontSize:'0.65rem', color:'#c0392b', marginTop:'0.75rem' }}>{error}</p>}

                <button onClick={handleAuth} disabled={loading} style={{
                  width:'100%', marginTop:'1.25rem', padding:'0.875rem',
                  background:'#0e0c0b', color:'#f5f3ec',
                  border:'none', borderRadius:'2px',
                  fontSize:'0.65rem', fontWeight:700,
                  letterSpacing:'0.15em', textTransform:'uppercase' as const,
                  cursor:loading?'not-allowed':'pointer', opacity:loading?0.7:1,
                }}>{loading ? '...' : tab==='login' ? 'Entrar' : 'Crear cuenta'}</button>

                {tab==='login' && (
                  <p style={{ textAlign:'center' as const, marginTop:'0.875rem', fontSize:'0.62rem', opacity:0.35 }}>
                    ¿Olvidaste tu contraseña?{' '}
                    <span onClick={async () => {
                      if (!email) { setError('Ingresa tu correo primero.'); return }
                      await supabase.auth.resetPasswordForEmail(email, { redirectTo: window.location.origin + '/account' })
                      setError('Revisa tu correo para resetear tu contraseña.')
                    }} style={{ textDecoration:'underline', cursor:'pointer' }}>Recuperar</span>
                  </p>
                )}

                <p style={{ textAlign:'center' as const, marginTop:'1.75rem', fontSize:'0.58rem', opacity:0.22, letterSpacing:'0.08em', textTransform:'uppercase' as const }}>
                  Lanzamiento · Viernes 6 de febrero
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
