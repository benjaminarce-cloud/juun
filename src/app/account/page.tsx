'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

interface Profile {
  id: string
  name: string
  email: string
  points: number
  orders: number
}

export default function AccountPage() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const [notLoggedIn, setNotLoggedIn] = useState(false)
  const [tab, setTab] = useState<'overview' | 'orders' | 'points'>('overview')

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (!session) {
        setNotLoggedIn(true)
        setLoading(false)
        return
      }
      const { data } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single()
      setProfile(data)
      setLoading(false)
    })
  }, [])

  async function handleLogout() {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  if (loading) return (
    <div style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', background:'#f5f3ec' }}>
      <span style={{ fontSize:'0.7rem', letterSpacing:'0.2em', textTransform:'uppercase', opacity:0.4 }}>Cargando...</span>
    </div>
  )

  if (notLoggedIn) return (
    <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', background:'#f5f3ec', gap:'1.5rem' }}>
      <img src="/logo-black.png" alt="JUUN" style={{ height:'48px' }} />
      <p style={{ fontSize:'0.75rem', opacity:0.5 }}>Necesitas iniciar sesión para ver tu cuenta.</p>
      <a href="/" style={{
        padding:'0.75rem 2rem', background:'#0e0c0b', color:'#f5f3ec',
        textDecoration:'none', borderRadius:'2px',
        fontSize:'0.65rem', fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase',
      }}>Volver al inicio</a>
    </div>
  )

  if (!profile) return (
    <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', background:'#f5f3ec', gap:'1rem' }}>
      <img src="/logo-black.png" alt="JUUN" style={{ height:'48px' }} />
      <p style={{ fontSize:'0.75rem', opacity:0.5 }}>No se encontró tu perfil.</p>
      <button onClick={handleLogout} style={{ padding:'0.6rem 1.5rem', background:'#0e0c0b', color:'#f5f3ec', border:'none', borderRadius:'2px', fontSize:'0.65rem', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', cursor:'pointer' }}>Salir</button>
    </div>
  )

  const tier = profile.points >= 500 ? 'Elite' : profile.points >= 200 ? 'Pro' : profile.points >= 100 ? 'Active' : 'Starter'
  const nextTier = profile.points >= 500 ? null : profile.points >= 200 ? { name:'Elite', at:500 } : profile.points >= 100 ? { name:'Pro', at:200 } : { name:'Active', at:100 }
  const progress = nextTier ? Math.round((profile.points / nextTier.at) * 100) : 100

  return (
    <div style={{ minHeight:'100vh', background:'#f5f3ec', color:'#0e0c0b' }}>

      {/* Top nav */}
      <div style={{
        position:'sticky', top:0, zIndex:10,
        background:'rgba(245,243,236,0.95)', backdropFilter:'blur(12px)',
        borderBottom:'1px solid rgba(14,12,11,0.08)',
        padding:'1rem clamp(1.5rem,5vw,4rem)',
        display:'flex', alignItems:'center', justifyContent:'space-between',
      }}>
        <a href="/" style={{ textDecoration:'none' }}>
          <img src="/logo-black.png" alt="JUUN" style={{ height:'40px', width:'auto' }} />
        </a>
        <button onClick={handleLogout} style={{
          background:'none', border:'1px solid rgba(14,12,11,0.15)',
          borderRadius:'99px', padding:'0.45rem 1.25rem',
          fontSize:'0.6rem', fontWeight:600, letterSpacing:'0.12em',
          textTransform:'uppercase', cursor:'pointer', color:'#0e0c0b',
        }}>Cerrar sesión</button>
      </div>

      <div style={{ maxWidth:'900px', margin:'0 auto', padding:'3rem clamp(1.5rem,5vw,4rem)' }}>

        {/* Hero row */}
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', flexWrap:'wrap', gap:'2rem', marginBottom:'3rem' }}>
          <div>
            <p style={{ fontSize:'0.6rem', letterSpacing:'0.2em', textTransform:'uppercase', opacity:0.35, marginBottom:'0.5rem' }}>Mi cuenta</p>
            <h1 style={{ fontSize:'clamp(2rem,5vw,3rem)', fontWeight:900, letterSpacing:'-0.03em', lineHeight:1 }}>{profile.name}</h1>
            <p style={{ fontSize:'0.75rem', opacity:0.35, marginTop:'0.5rem' }}>{profile.email}</p>
          </div>

          <div style={{ background:'#0e0c0b', color:'#f5f3ec', borderRadius:'2px', padding:'1.25rem 1.75rem', minWidth:'180px' }}>
            <p style={{ fontSize:'0.5rem', letterSpacing:'0.2em', textTransform:'uppercase', opacity:0.4, marginBottom:'0.25rem' }}>Nivel</p>
            <p style={{ fontSize:'1.6rem', fontWeight:900, letterSpacing:'-0.02em', lineHeight:1 }}>{tier}</p>
            {nextTier && (
              <div style={{ marginTop:'0.875rem' }}>
                <div style={{ height:'2px', background:'rgba(255,255,255,0.1)', borderRadius:'99px', overflow:'hidden' }}>
                  <div style={{ height:'100%', width:`${progress}%`, background:'#c8f04a' }} />
                </div>
                <p style={{ fontSize:'0.5rem', opacity:0.35, marginTop:'0.4rem' }}>{profile.points} / {nextTier.at} pts → {nextTier.name}</p>
              </div>
            )}
          </div>
        </div>

        {/* Stats */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))', gap:'1rem', marginBottom:'3rem' }}>
          {[
            { label:'Puntos JUUN', value:profile.points, note:'Por cada compra' },
            { label:'Pedidos',     value:profile.orders,  note:'Historial' },
            { label:'Estado',      value:'Activo',         note:'Cuenta verificada' },
          ].map(s => (
            <div key={s.label} style={{ background:'white', borderRadius:'2px', padding:'1.25rem 1.5rem', border:'1px solid rgba(14,12,11,0.06)' }}>
              <p style={{ fontSize:'0.55rem', letterSpacing:'0.15em', textTransform:'uppercase', opacity:0.35, marginBottom:'0.5rem' }}>{s.label}</p>
              <p style={{ fontSize:'1.75rem', fontWeight:900, letterSpacing:'-0.02em', lineHeight:1 }}>{s.value}</p>
              <p style={{ fontSize:'0.6rem', opacity:0.3, marginTop:'0.4rem' }}>{s.note}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display:'flex', borderBottom:'1px solid rgba(14,12,11,0.1)', marginBottom:'2.5rem' }}>
          {([['overview','Resumen'],['orders','Pedidos'],['points','Puntos']] as const).map(([id,label]) => (
            <button key={id} onClick={() => setTab(id)} style={{
              background:'none', border:'none', cursor:'pointer',
              padding:'0.6rem 1.25rem 0.85rem',
              fontSize:'0.65rem', fontWeight:tab===id?700:400,
              letterSpacing:'0.1em', textTransform:'uppercase',
              color:tab===id?'#0e0c0b':'rgba(14,12,11,0.35)',
              borderBottom:tab===id?'2px solid #0e0c0b':'2px solid transparent',
              marginBottom:'-1px',
            }}>{label}</button>
          ))}
        </div>

        {tab === 'overview' && (
          <div style={{ background:'white', borderRadius:'2px', padding:'2rem', border:'1px solid rgba(14,12,11,0.06)' }}>
            <p style={{ fontSize:'0.6rem', letterSpacing:'0.15em', textTransform:'uppercase', opacity:0.4, marginBottom:'1.25rem' }}>Recompensas</p>
            {[
              { pts:100,  label:'Envío gratis en tu próximo pedido' },
              { pts:200,  label:'10% de descuento permanente' },
              { pts:500,  label:'Acceso anticipado a nuevos sabores' },
              { pts:1000, label:'Caja exclusiva de temporada' },
            ].map(r => (
              <div key={r.pts} style={{
                display:'flex', alignItems:'center', gap:'1rem',
                padding:'0.875rem 0', borderBottom:'1px solid rgba(14,12,11,0.05)',
                opacity:profile.points >= r.pts ? 1 : 0.4,
              }}>
                <span style={{
                  fontSize:'0.65rem', fontWeight:700, minWidth:'52px',
                  padding:'0.2rem 0.5rem', borderRadius:'2px', textAlign:'center',
                  background: profile.points >= r.pts ? '#0e0c0b' : 'rgba(14,12,11,0.07)',
                  color: profile.points >= r.pts ? '#c8f04a' : '#0e0c0b',
                }}>{r.pts}</span>
                <span style={{ fontSize:'0.85rem', flex:1 }}>{r.label}</span>
                {profile.points >= r.pts && <span style={{ fontSize:'0.6rem', color:'#2d7a2d', fontWeight:600 }}>✓</span>}
              </div>
            ))}
          </div>
        )}

        {tab === 'orders' && (
          <div style={{ background:'white', borderRadius:'2px', padding:'3rem 2rem', border:'1px solid rgba(14,12,11,0.06)', textAlign:'center' }}>
            <p style={{ fontSize:'2.5rem', marginBottom:'0.75rem' }}>📦</p>
            <p style={{ fontWeight:700, marginBottom:'0.5rem' }}>Sin pedidos aún</p>
            <p style={{ fontSize:'0.75rem', opacity:0.4, marginBottom:'1.75rem' }}>Tus pedidos aparecerán aquí.</p>
            <a href="/#comprar" style={{
              display:'inline-block', padding:'0.75rem 2rem',
              background:'#0e0c0b', color:'#f5f3ec', textDecoration:'none',
              borderRadius:'2px', fontSize:'0.65rem', fontWeight:700,
              letterSpacing:'0.15em', textTransform:'uppercase',
            }}>Comprar ahora</a>
          </div>
        )}

        {tab === 'points' && (
          <div style={{ background:'white', borderRadius:'2px', padding:'2rem', border:'1px solid rgba(14,12,11,0.06)' }}>
            <p style={{ fontSize:'0.6rem', letterSpacing:'0.15em', textTransform:'uppercase', opacity:0.4, marginBottom:'1.25rem' }}>Historial</p>
            <div style={{ display:'flex', alignItems:'center', gap:'1rem', padding:'0.875rem 0' }}>
              <span style={{ fontSize:'0.85rem', fontWeight:700, color:'#2d7a2d', minWidth:'40px' }}>+50</span>
              <div>
                <p style={{ fontSize:'0.85rem', fontWeight:500 }}>Bienvenido a JUUN</p>
                <p style={{ fontSize:'0.65rem', opacity:0.35 }}>Puntos de registro</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
