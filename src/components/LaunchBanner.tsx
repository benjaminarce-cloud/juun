'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

const LAUNCH = new Date('2025-02-06T10:00:00-06:00')

function pad(n: number) { return String(n).padStart(2, '0') }

export default function LaunchBanner() {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0, launched: false })
  const [email, setEmail]       = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    function tick() {
      const diff = LAUNCH.getTime() - Date.now()
      if (diff <= 0) { setTimeLeft({ d:0,h:0,m:0,s:0,launched:true }); return }
      setTimeLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
        launched: false,
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  async function handlePreorder(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    try {
      await supabase.from('waitlist').insert({ email, created_at: new Date().toISOString() })
    } catch (err) {
      console.error(err)
    }
    setSubmitted(true)
  }

  if (timeLeft.launched) return null

  return (
    <div style={{
      position:'fixed', bottom:0, left:0, right:0, zIndex:50,
      background:'#0e0c0b',
      borderTop:'1px solid rgba(255,255,255,0.07)',
      padding:'0.875rem clamp(1.5rem,5vw,4rem)',
      display:'flex', alignItems:'center',
      justifyContent:'space-between',
      flexWrap:'wrap' as const, gap:'1rem',
    }}>
      <div style={{ display:'flex', alignItems:'center', gap:'1rem' }}>
        <span style={{
          fontSize:'0.55rem', fontWeight:600,
          letterSpacing:'0.2em', textTransform:'uppercase' as const,
          color:'rgba(252,251,240,0.4)',
        }}>Lanzamiento</span>

        <div style={{ display:'flex', alignItems:'center', gap:'0.5rem' }}>
          {[
            { v: timeLeft.d, label:'d' },
            { v: timeLeft.h, label:'h' },
            { v: timeLeft.m, label:'m' },
            { v: timeLeft.s, label:'s' },
          ].map(({ v, label }, i) => (
            <div key={label} style={{ display:'flex', alignItems:'center', gap:'0.5rem' }}>
              {i > 0 && <span style={{ color:'rgba(252,251,240,0.2)', fontSize:'0.7rem' }}>:</span>}
              <div style={{ textAlign:'center' as const }}>
                <span style={{
                  fontFamily:'monospace',
                  fontSize:'clamp(1rem,2.5vw,1.4rem)',
                  fontWeight:900, color:'#f5f3ec',
                  letterSpacing:'-0.02em', lineHeight:1,
                }}>{pad(v)}</span>
                <span style={{
                  display:'block', fontSize:'0.45rem',
                  letterSpacing:'0.12em', textTransform:'uppercase' as const,
                  color:'rgba(252,251,240,0.25)', marginTop:'0.15rem',
                }}>{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {!submitted ? (
        <form onSubmit={handlePreorder} style={{ display:'flex', gap:'0.5rem', alignItems:'center' }}>
          <input
            type="email" placeholder="tu@correo.com"
            value={email} onChange={e => setEmail(e.target.value)}
            style={{
              background:'rgba(255,255,255,0.07)',
              border:'1px solid rgba(255,255,255,0.1)',
              borderRadius:'2px', padding:'0.5rem 0.875rem',
              fontSize:'0.75rem', color:'#f5f3ec', outline:'none',
              width:'clamp(160px,20vw,240px)',
            }}
          />
          <button type="submit" style={{
            background:'#f5f3ec', color:'#0e0c0b',
            border:'none', borderRadius:'2px',
            padding:'0.5rem 1rem',
            fontSize:'0.6rem', fontWeight:700,
            letterSpacing:'0.12em', textTransform:'uppercase' as const,
            cursor:'pointer', whiteSpace:'nowrap' as const,
          }}>Reservar lugar</button>
        </form>
      ) : (
        <span style={{ fontSize:'0.65rem', color:'#c8f04a', letterSpacing:'0.08em' }}>
          ✦ Listo — te avisamos el 6 de febrero
        </span>
      )}
    </div>
  )
}
