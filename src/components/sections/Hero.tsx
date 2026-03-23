'use client'

import { copy } from '@/content/siteCopy'
import { useEffect, useRef } from 'react'
import { scrollToId } from '@/lib/scroll'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Try to play immediately
    const tryPlay = () => {
      video.play().catch(() => {})
    }

    tryPlay()

    // iOS Safari fallback — play on first touch anywhere
    const onTouch = () => {
      tryPlay()
      document.removeEventListener('touchstart', onTouch)
    }
    document.addEventListener('touchstart', onTouch, { passive: true })

    return () => document.removeEventListener('touchstart', onTouch)
  }, [])

  return (
    <section className="hero">
      {/* ── VIDEO BACKGROUND ── */}
      <video
        className="hero-bg-video"
        ref={videoRef}
        aria-hidden="true"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://res.cloudinary.com/dzjcndphq/video/upload/f_webm,q_auto,vc_vp9/v1772489175/BUD_HORIZONTAL_DRINK_a0ephg.mov" type="video/webm" />
        <source src="https://res.cloudinary.com/dzjcndphq/video/upload/f_mp4,q_auto,vc_h264/v1772489175/BUD_HORIZONTAL_DRINK_a0ephg.mov" type="video/mp4" />
      </video>

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

      {/* ── CONTENT ── */}
      <div className="hero-content">

        {/* Tagline */}
        <span className="hero-eyebrow">
          {copy.hero.eyebrow}
        </span>

        {/* Headline */}
        <h1 className="hero-title">
          <span className="hero-title-line hero-title-line--light" style={{
            display: 'block',
            fontSize: 'clamp(2.4rem, 6vw, 5.5rem)',
            fontWeight: 300,
            color: 'rgba(252,251,240,0.88)',
            letterSpacing: '-0.025em',
          }}>
            Bebida
          </span>
          <span className="hero-title-line hero-title-line--bold" style={{
            display: 'block',
            fontSize: 'clamp(2.4rem, 6vw, 5.5rem)',
            fontWeight: 900,
            color: 'var(--linen, #fcfbf0)',
            letterSpacing: '-0.035em',
          }}>
            funcional.
          </span>
        </h1>

        {/* CTAs */}
        <div className="hero-actions">
          <button onClick={() => scrollToId('comprar')} className="ui-btn-primary">
            {copy.hero.ctaPrimary} ✦
          </button>

        </div>

        {/* Feature strip */}
        <div className="hero-strip">
          {copy.hero.strip.map((item, i) => (
            <span key={item} className="hero-strip-item">
              {i > 0 && (
                <span aria-hidden="true" className="hero-strip-separator">
                  ✦
                </span>
              )}
              {item}
            </span>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @media (max-width: 768px) {
          .hero .hero-bg-video {
            object-position: center center;
          }
        }
      `}</style>
    </section>
  )
}
