'use client'

import { copy } from '@/content/siteCopy'
import { scrollToId } from '@/lib/scroll'

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: `0 var(--gutter) clamp(3.5rem, 8vh, 5.5rem)`,
        overflow: 'hidden',
        background: '#0e0c0b',
      }}
    >
      {/* ── PHOTO BACKGROUND ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('https://res.cloudinary.com/dzjcndphq/image/upload/v1771879360/1A7A1582_y26zsm.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 60%',
        }}
      />

      {/* ── CINEMATIC GRADIENT ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(10,9,8,0.95) 0%, rgba(10,9,8,0.5) 40%, rgba(10,9,8,0.15) 100%)',
        }}
      />

      {/* ── FILM GRAIN ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
          opacity: 0.04,
          mixBlendMode: 'overlay',
          pointerEvents: 'none',
        }}
      />

      {/* ── CONTENT — right aligned ── */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '820px',
        marginLeft: 'auto',
        textAlign: 'right' as const,
      }}>

        {/* Tagline */}
        <span style={{
          display: 'block',
          fontSize: '0.6rem',
          fontWeight: 400,
          letterSpacing: '0.25em',
          textTransform: 'uppercase' as const,
          color: 'rgba(252,251,240,0.4)',
          marginBottom: '1.75rem',
        }}>
          ✦ Energía funcional · Hecho en México
        </span>

        {/* Headline */}
        <h1 style={{ lineHeight: 0.9, marginBottom: '2rem' }}>
          <span style={{
            display: 'block',
            fontSize: 'clamp(4rem, 10.5vw, 9rem)',
            fontWeight: 300,
            color: 'rgba(252,251,240,0.88)',
            letterSpacing: '-0.025em',
          }}>
            Energía
          </span>
          <span style={{
            display: 'block',
            fontSize: 'clamp(4rem, 10.5vw, 9rem)',
            fontWeight: 900,
            color: 'var(--linen, #fcfbf0)',
            letterSpacing: '-0.035em',
          }}>
            natural.
          </span>
        </h1>

        {/* CTAs */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap' as const,
          marginBottom: '3rem',
          justifyContent: 'flex-end',
        }}>
          <button onClick={() => scrollToId('comprar')} className="ui-btn-primary">
            {copy.hero.ctaPrimary} ✦
          </button>
          <button onClick={() => scrollToId('ingredientes')} className="ui-btn-ghost">
            {copy.hero.ctaSecondary} →
          </button>
        </div>

        {/* Feature strip */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap' as const,
          justifyContent: 'flex-end',
        }}>
          {copy.hero.strip.map((item, i) => (
            <span key={item} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.58rem',
              fontWeight: 400,
              letterSpacing: '0.1em',
              textTransform: 'uppercase' as const,
              color: 'rgba(252,251,240,0.35)',
            }}>
              {i > 0 && (
                <span aria-hidden="true" style={{ fontSize: '0.4rem', color: 'rgba(252,251,240,0.18)' }}>
                  ✦
                </span>
              )}
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
