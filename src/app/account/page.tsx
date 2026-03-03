'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

interface Profile {
  id: string
  name: string
  email: string
  points: number
  orders: number
}

export default function AccountPage() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading]  = useState(true)
  const [tab, setTab]          = useState<'overview' | 'orders' | 'points'>('overview')
  const router = useRouter()

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (!session) { router.push('/'); return }
      const { data } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single()
      setProfile(data)
      setLoading(false)
    })
  }, [router])

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (loading) return (
    <div style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', background:'#0e0c0b' }}>
      <span style={{ color:'rgba(252,251,240,0.4)', fontSize:'0.7rem', letterSpacing:'0.2em', textTransform:'uppercase' }}>Cargando...</span>
    </div>
  )

  if (!profile) return null

  const tier = profile.points >= 500 ? 'Elite' : profile.points >= 200 ? 'Pro' : profile.points >= 100 ? 'Active' : 'Starter'
  const nextTier = profile.points >= 500 ? null : profile.points >= 200 ? { name: 'Elite', at: 500 } : profile.points >= 100 ? { name: 'Pro', at: 200 } : { name: 'Active', at: 100 }
  const progress = nextTier ? Math.round((profile.points / nextTier.at) * 100) : 100

  return (
    <div style={{ minHeight:'100vh', background:'#f5f3ec', color:'#0e0c0b' }}>

      {/* Header */}
      <div style={{
        position:'sticky', top:0, zIndex:10,
        background:'rgba(245,243,236,0.92)', backdropFilter:'blur(12px)',
        borderBottom:'1px solid rgba(14,12,11,0.08)',
        padding:'1rem clamp(1.5rem,5vw,4rem)',
        display:'flex', alignItems:'center', justifyContent:'space-between',
      }}>
        <a href="/" style={{ textDecoration:'none' }}>
          <img src="/logo-black.png" alt="JUUN" style={{ height:'40px', width:'auto' }} />
        </a>
        <button onClick={handleLogout} style={{
          background:'none', border:'1px solid rgba(14,12,11,0.15)',
          borderRadius:'99px', padding:'0.45rem 1rem',
          fontSize:'0.6rem', fontWeight:600, letterSpacing:'0.12em',
          textTransform:'uppercase', cursor:'pointer', color:'#0e0c0b',
        }}>Cerrar sesión</button>
      </div>

      <div style={{ maxWidth:'900px', margin:'0 auto', padding:'3rem clamp(1.5rem,5vw,4rem)' }}>

        {/* Hero row */}
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', flexWrap:'wrap', gap:'2rem', marginBottom:'3rem' }}>
          <div>
            <p style={{ fontSize:'0.6rem', letterSpacing:'0.2em', textTransform:'uppercase', opacity:0.4, marginBottom:'0.5rem' }}>Mi cuenta</p>
            <h1 style={{ fontSize:'clamp(1.8rem,4vw,2.8rem)', fontWeight:900, letterSpacing:'-0.03em', lineHeight:1 }}>{profile.name}</h1>
            <p style={{ fontSize:'0.75rem', opacity:0.4, marginTop:'0.4rem' }}>{profile.email}</p>
          </div>

          {/* Tier badge */}
          <div style={{
            background:'#0e0c0b', color:'#f5f3ec',
            borderRadius:'2px', padding:'1rem 1.5rem', minWidth:'160px',
          }}>
            <p style={{ fontSize:'0.5rem', letterSpacing:'0.2em', textTransform:'uppercase', opacity:0.4, marginBottom:'0.25rem' }}>Nivel</p>
            <p style={{ fontSize:'1.4rem', fontWeight:900, letterSpacing:'-0.02em' }}>{tier}</p>
            {nextTier && (
              <div style={{ marginTop:'0.75rem' }}>
                <div style={{ height:'2px', background:'rgba(255,255,255,0.1)', borderRadius:'1px', overflow:'hidden' }}>
                  <div style={{ height:'100%', width:`${progress}%`, background:'#c8f04a', transition:'width 0.6s' }} />
                </div>
                <p style={{ fontSize:'0.5rem', opacity:0.35, marginTop:'0.35rem' }}>{profile.points} / {nextTier.at} pts → {nextTier.name}</p>
              </div>
            )}
          </div>
        </div>

        {/* Stats row */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1rem', marginBottom:'3rem' }}>
          {[
            { label:'Puntos JUUN', value: profile.points, sub:'Por cada compra' },
            { label:'Pedidos',     value: profile.orders, sub:'Historial completo' },
            { label:'Estado',      value: 'Activo',       sub:'Cuenta verificada' },
          ].map(s => (
            <div key={s.label} style={{
              background:'white', borderRadius:'2px',
              padding:'1.25rem 1.5rem',
              border:'1px solid rgba(14,12,11,0.06)',
            }}>
              <p style={{ fontSize:'0.55rem', letterSpacing:'0.15em', textTransform:'uppercase', opacity:0.4, marginBottom:'0.5rem' }}>{s.label}</p>
              <p style={{ fontSize:'1.6rem', fontWeight:900, letterSpacing:'-0.02em', lineHeight:1 }}>{s.value}</p>
              <p style={{ fontSize:'0.6rem', opacity:0.3, marginTop:'0.4rem' }}>{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display:'flex', gap:'0', borderBottom:'1px solid rgba(14,12,11,0.1)', marginBottom:'2.5rem' }}>
          {([
            { id:'overview', label:'Resumen' },
            { id:'orders',   label:'Pedidos' },
            { id:'points',   label:'Puntos' },
          ] as const).map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              background:'none', border:'none', cursor:'pointer',
              padding:'0.6rem 1.25rem 0.85rem',
              fontSize:'0.65rem', fontWeight: tab===t.id ? 700 : 400,
              letterSpacing:'0.1em', textTransform:'uppercase',
              color: tab===t.id ? '#0e0c0b' : 'rgba(14,12,11,0.35)',
              borderBottom: tab===t.id ? '2px solid #0e0c0b' : '2px solid transparent',
              marginBottom:'-1px',
            }}>{t.label}</button>
          ))}
        </div>

        {/* Tab content */}
        {tab === 'overview' && (
          <div style={{ display:'grid', gap:'1.5rem' }}>
            <div style={{ background:'white', borderRadius:'2px', padding:'2rem', border:'1px solid rgba(14,12,11,0.06)' }}>
              <p style={{ fontSize:'0.6rem', letterSpacing:'0.15em', textTransform:'uppercase', opacity:0.4, marginBottom:'1rem' }}>Próximas recompensas</p>
              {[
                { pts:100,  label:'Envío gratis en tu próximo pedido' },
                { pts:200,  label:'10% de descuento permanente' },
                { pts:500,  label:'Acceso anticipado a nuevos sabores' },
                { pts:1000, label:'Caja exclusiva de temporada' },
              ].map(r => (
                <div key={r.pts} style={{
                  display:'flex', alignItems:'center', gap:'1rem',
                  padding:'0.75rem 0', borderBottom:'1px solid rgba(14,12,11,0.05)',
                  opacity: profile.points >= r.pts ? 1 : 0.45,
                }}>
                  <span style={{ fontSize:'0.7rem', fontWeight:700, minWidth:'48px', color: profile.points >= r.pts ? '#c8f04a' : 'inherit', background: profile.points >= r.pts ? '#0e0c0b' : 'rgba(14,12,11,0.06)', padding:'0.2rem 0.5rem', borderRadius:'2px' }}>{r.pts}</span>
                  <span style={{ fontSize:'0.8rem' }}>{r.label}</span>
                  {profile.points >= r.pts && <span style={{ marginLeft:'auto', fontSize:'0.6rem', color:'green' }}>✓ Desbloqueado</span>}
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'orders' && (
          <div style={{ background:'white', borderRadius:'2px', padding:'2rem', border:'1px solid rgba(14,12,11,0.06)', textAlign:'center' }}>
            <p style={{ fontSize:'2rem', marginBottom:'0.5rem' }}>📦</p>
            <p style={{ fontWeight:700, marginBottom:'0.5rem' }}>Sin pedidos aún</p>
            <p style={{ fontSize:'0.75rem', opacity:0.4, marginBottom:'1.5rem' }}>Tus pedidos aparecerán aquí una vez que compres.</p>
            <a href="/#comprar" style={{
              display:'inline-block', padding:'0.75rem 2rem',
              background:'#0e0c0b', color:'#f5f3ec',
              textDecoration:'none', borderRadius:'2px',
              fontSize:'0.65rem', fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase',
            }}>Comprar ahora</a>
          </div>
        )}

        {tab === 'points' && (
          <div style={{ display:'grid', gap:'1rem' }}>
            <div style={{ background:'white', borderRadius:'2px', padding:'2rem', border:'1px solid rgba(14,12,11,0.06)' }}>
              <p style={{ fontSize:'0.6rem', letterSpacing:'0.15em', textTransform:'uppercase', opacity:0.4, marginBottom:'1.5rem' }}>Historial de puntos</p>
              <div style={{ display:'flex', alignItems:'center', gap:'1rem', padding:'0.75rem 0' }}>
                <span style={{ fontSize:'0.8rem', fontWeight:700, color:'green' }}>+50</span>
                <div>
                  <p style={{ fontSize:'0.8rem', fontWeight:500 }}>Bienvenido a JUUN</p>
                  <p style={{ fontSize:'0.65rem', opacity:0.4 }}>Puntos de registro</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
