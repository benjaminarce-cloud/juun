'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'

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
      <Link href="/" style={{
        padding:'0.75rem 2rem', background:'#0e0c0b', color:'#f5f3ec',
        textDecoration:'none', borderRadius:'2px',
        fontSize:'0.65rem', fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase',
      }}>Volver al inicio</Link>
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
  const rewards = [
    { pts:100,  label:'Envío gratis en tu próximo pedido' },
    { pts:200,  label:'10% de descuento permanente' },
    { pts:500,  label:'Acceso anticipado a nuevos sabores' },
    { pts:1000, label:'Caja exclusiva de temporada' },
  ] as const
  const ladderProgress = Math.min(100, Math.round((profile.points / rewards[rewards.length - 1].pts) * 100))

  return (
    <div style={{ minHeight:'100vh', background:'#f5f3ec', color:'#0e0c0b' }}>
      <section style={{ background:'#0e0c0b', color:'#f5f3ec', padding:'1.25rem clamp(1.5rem,5vw,4rem) 3.25rem' }}>
        <div style={{ maxWidth:'1100px', margin:'0 auto' }}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <Link href="/" style={{ textDecoration:'none' }}>
              <img src="/logo-white.png" alt="JUUN" style={{ height:'88px', width:'auto' }} />
            </Link>
            <button onClick={handleLogout} style={{
              background:'none', border:'none', padding:0,
              fontSize:'0.65rem', fontWeight:700, letterSpacing:'0.14em',
              textTransform:'uppercase', cursor:'pointer', color:'#f5f3ec',
            }}>Cerrar sesión</button>
          </div>

          <div style={{ marginTop:'1.5rem' }}>
            <p style={{ fontSize:'0.52rem', letterSpacing:'0.24em', textTransform:'uppercase', opacity:0.6, marginBottom:'0.8rem' }}>
              Tier · {tier}
            </p>
            <h1 style={{ fontSize:'clamp(2.3rem,7vw,5rem)', fontWeight:900, letterSpacing:'-0.04em', lineHeight:0.95, color:'#f5f3ec' }}>
              {profile.name}
            </h1>
            <p style={{ fontSize:'0.7rem', letterSpacing:'0.06em', opacity:0.58, marginTop:'0.8rem' }}>{profile.email}</p>
            {nextTier && (
              <p style={{ fontSize:'0.58rem', letterSpacing:'0.08em', opacity:0.48, marginTop:'0.9rem' }}>
                {profile.points} / {nextTier.at} pts → {nextTier.name}
              </p>
            )}
          </div>
        </div>
      </section>

      <div style={{ maxWidth:'1100px', margin:'0 auto', padding:'2.25rem clamp(1.5rem,5vw,4rem) 3rem' }}>

        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(3, minmax(0,1fr))',
          borderTop:'1px solid rgba(14,12,11,0.14)',
          borderBottom:'1px solid rgba(14,12,11,0.14)',
          marginBottom:'2.75rem',
        }}>
          {[
            { label:'Puntos JUUN', value:profile.points },
            { label:'Pedidos',     value:profile.orders },
            { label:'Estado',      value:'Activo' },
          ].map((s, i) => (
            <div key={s.label} style={{
              padding:'1.35rem 0.4rem 1.2rem',
              borderLeft: i === 0 ? 'none' : '1px solid rgba(14,12,11,0.10)',
              textAlign:'center',
            }}>
              <p style={{ fontSize:'1.7rem', fontWeight:900, letterSpacing:'-0.02em', lineHeight:1 }}>{s.value}</p>
              <p style={{ fontSize:'0.54rem', letterSpacing:'0.16em', textTransform:'uppercase', opacity:0.45, marginTop:'0.45rem' }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display:'flex', gap:'1.5rem', marginBottom:'2.35rem' }}>
          {([['overview','Resumen'],['orders','Pedidos'],['points','Puntos']] as const).map(([id,label]) => (
            <button key={id} onClick={() => setTab(id)} style={{
              background:'none', border:'none', cursor:'pointer',
              padding:'0.3rem 0.1rem 0.65rem',
              fontSize:'0.65rem', fontWeight:tab===id?700:400,
              letterSpacing:'0.1em', textTransform:'uppercase',
              color:tab===id?'#0e0c0b':'rgba(14,12,11,0.35)',
              borderBottom:tab===id?'2px solid #c8f04a':'2px solid transparent',
            }}>{label}</button>
          ))}
        </div>

        {tab === 'overview' && (
          <div style={{ padding:'0.2rem 0 0.4rem' }}>
            <p style={{ fontSize:'0.6rem', letterSpacing:'0.15em', textTransform:'uppercase', opacity:0.4, marginBottom:'1.35rem' }}>Recompensas</p>
            <div style={{ position:'relative', padding:'1.2rem 0 2.1rem' }}>
              <div style={{ height:'2px', background:'rgba(14,12,11,0.16)', position:'absolute', left:0, right:0, top:'1.3rem' }} />
              <div style={{ height:'2px', background:'#c8f04a', position:'absolute', left:0, width:`${ladderProgress}%`, top:'1.3rem' }} />
              <div style={{ display:'grid', gridTemplateColumns:'repeat(4, minmax(0,1fr))', gap:'0.65rem' }}>
                {rewards.map(r => {
                  const unlocked = profile.points >= r.pts
                  return (
                    <div key={r.pts} style={{ textAlign:'left' }}>
                      <div style={{
                        width:'12px', height:'12px', borderRadius:'50%',
                        marginBottom:'0.95rem',
                        background: unlocked ? '#c8f04a' : 'rgba(14,12,11,0.2)',
                      }} />
                      <p style={{ fontSize:'0.5rem', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', opacity:unlocked ? 0.9 : 0.32 }}>
                        {r.pts} pts
                      </p>
                      <p style={{ fontSize:'0.68rem', lineHeight:1.45, marginTop:'0.35rem', opacity:unlocked ? 0.9 : 0.42 }}>
                        {r.label}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {tab === 'orders' && (
          <div style={{ padding:'2.2rem 0.2rem', textAlign:'center', borderTop:'1px solid rgba(14,12,11,0.1)' }}>
            <p style={{ fontSize:'2.5rem', marginBottom:'0.75rem' }}>📦</p>
            <p style={{ fontWeight:700, marginBottom:'0.5rem' }}>Sin pedidos aún</p>
            <p style={{ fontSize:'0.75rem', opacity:0.4, marginBottom:'1.75rem' }}>Tus pedidos aparecerán aquí.</p>
            <Link href="/#comprar" style={{
              display:'inline-block', padding:'0.75rem 2rem',
              background:'#0e0c0b', color:'#f5f3ec', textDecoration:'none',
              fontSize:'0.65rem', fontWeight:700,
              letterSpacing:'0.15em', textTransform:'uppercase',
            }}>Comprar ahora</Link>
          </div>
        )}

        {tab === 'points' && (
          <div style={{ padding:'1.5rem 0.2rem', borderTop:'1px solid rgba(14,12,11,0.1)' }}>
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
