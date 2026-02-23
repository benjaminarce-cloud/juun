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
      {/* ── BACKGROUND ─────────────────────────────────────
          Replace background-image with your Cloudinary URL:
          backgroundImage: "url('https://res.cloudinary.com/dzjcndphq/image/upload/v1771879360/1A7A1582_y26zsm.jpg')"
          or local: backgroundImage: "url('https://res.cloudinary.com/dzjcndphq/image/upload/v1771879360/1A7A1582_y26zsm.jpg')"
      ────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            url('https://res.cloudinary.com/dzjcndphq/image/upload/v1771879360/1A7A1582_y26zsm.jpg'),
            radial-gradient(ellipse 70% 60% at 80% 30%, rgba(80,55,40,0.45) 0%, transparent 70%),
            radial-gradient(ellipse 50% 50% at 20% 70%, rgba(30,20,15,0.8) 0%, transparent 60%),
            linear-gradient(165deg, #1c1410 0%, #0e0c0b 55%, #16120f 100%)
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center 60%',
        }}
      />

      {/* Gradient overlay — keeps text readable over any photo */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, rgba(14,12,11,0.88) 0%, rgba(14,12,11,0.35) 45%, rgba(14,12,11,0.1) 100%)',
        }}
      />

      {/* ── CONTENT ──────────────────────────────────────── */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '780px' }}>
        <span
          style={{
            display: 'block',
            fontSize: '0.6rem',
            fontWeight: 400,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(252,251,240,0.45)',
            marginBottom: '1.5rem',
          }}
        >
          {copy.hero.eyebrow}
        </span>

                        <h1
          style={{
            lineHeight: 0.92,
            marginBottom: '1.75rem',
          }}
        >
          <span
            style={{
              display: 'block',
              fontSize: 'clamp(3.8rem, 10vw, 8.5rem)',
              fontWeight: 300,
              color: 'rgba(252,251,240,0.9)',
              letterSpacing: '-0.025em',
            }}
          >
            Energía
          </span>
          <span
            style={{
              display: 'block',
              fontSize: 'clamp(3.8rem, 10vw, 8.5rem)',
              fontWeight: 900,
              color: 'var(--linen, #fcfbf0)',
              letterSpacing: '-0.03em',
            }}
          >
            natural.
          </span>
        </h1>

        <p
          style={{
            fontSize: 'clamp(0.75rem, 1.4vw, 0.9rem)',
            fontWeight: 300,
            color: 'rgba(252,251,240,0.55)',
            letterSpacing: '0.04em',
            marginBottom: '2.5rem',
            maxWidth: '460px',
            lineHeight: 1.8,
          }}
        >
          {copy.hero.subheadline}
        </p>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '3.5rem',
          }}
        >
          <button
            onClick={() => scrollToId('comprar')}
            className="ui-btn-primary"
          >
            {copy.hero.ctaPrimary} ✦
          </button>
          <button
            onClick={() => scrollToId('ingredientes')}
            className="ui-btn-ghost"
          >
            {copy.hero.ctaSecondary} →
          </button>
        </div>

        {/* Feature strip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          {copy.hero.strip.map((item, i) => (
            <span
              key={item}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.58rem',
                fontWeight: 400,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(252,251,240,0.38)',
              }}
            >
              {i > 0 && (
                <span
                  aria-hidden="true"
                  style={{ fontSize: '0.45rem', color: 'rgba(252,251,240,0.2)' }}
                >
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
