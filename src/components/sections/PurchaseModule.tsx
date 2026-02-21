'use client'

import { useState, useEffect } from 'react'
import Pill from '@/components/ui/Pill'
import { copy } from '@/content/siteCopy'
import { FLAVORS, PACKS, DEFAULT_FLAVOR_KEY, DEFAULT_PACK_KEY, DEFAULT_QTY, MAX_QTY } from '@/content/products'
import { beginHostedCheckout } from '@/lib/commerce'
import Reveal from '@/components/motion/Reveal'

export default function PurchaseModule() {
  const [flavorKey, setFlavorKey] = useState(DEFAULT_FLAVOR_KEY)
  const [packKey, setPackKey]     = useState(DEFAULT_PACK_KEY)
  const [qty, setQty]             = useState(DEFAULT_QTY)

  const activeFlavor = FLAVORS.find(f => f.key === flavorKey) ?? FLAVORS[0]
  const activePack   = PACKS.find(p => p.key === packKey) ?? PACKS[1]

  // Inject flavor CSS variables onto :root when selection changes
  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--f-from', activeFlavor.gradient.from)
    root.style.setProperty('--f-to',   activeFlavor.gradient.to)
    root.style.setProperty('--f-glow', activeFlavor.glow)
    root.style.setProperty('--f-text', activeFlavor.accentText)
  }, [activeFlavor])

  const summary = copy.purchase.summaryTemplate(
    activePack.label,
    activeFlavor.label,
    qty
  )

  const p = copy.purchase

  return (
    <section
      id="comprar"
      style={{
        paddingTop: 'var(--s-pad)',
        paddingBottom: 'var(--s-pad)',
        paddingLeft: 'var(--gutter)',
        paddingRight: 'var(--gutter)',
        background: 'var(--linen)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background 0.6s',
      }}
    >
      {/* Ambient glow driven by flavor */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: `radial-gradient(circle, var(--f-glow) 0%, transparent 70%)`,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 0,
          transition: 'background 0.6s',
        }}
      />

      <div
        className="ui-container"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(2rem, 6vw, 6rem)',
          alignItems: 'center',
          padding: 0,
        }}
      >

        {/* ── CAN SHOWCASE ─────────────────────────────── */}
        <Reveal>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem',
            }}
          >
            {/* Can */}
            <div
              style={{
                position: 'relative',
                width: '140px',
                height: '380px',
                filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.18))',
              }}
            >
              {/* Can body with flavor gradient */}
              <div
                className="ui-can-gradient"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '8px 8px 14px 14px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Condensation highlight */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    left: '18%',
                    top: '5%',
                    width: '12%',
                    height: '82%',
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.22), rgba(255,255,255,0.04))',
                    borderRadius: '99px',
                    filter: 'blur(3px)',
                  }}
                />
                {/* Top seam */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0,
                    height: '18px',
                    background: 'rgba(0,0,0,0.15)',
                    borderRadius: '8px 8px 0 0',
                  }}
                />

                {/* Label content */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: '24px',
                    gap: '0.35rem',
                  }}
                >
                  <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', letterSpacing: '0.15rem' }}>
                    ✦ ✧
                  </span>
                  <span style={{ fontSize: '1.7rem', fontWeight: 900, color: 'rgba(255,255,255,0.92)', letterSpacing: '-0.02em', lineHeight: 1 }}>
                    JUUN
                  </span>
                  <span style={{ fontSize: '0.4rem', fontWeight: 300, letterSpacing: '0.25em', color: 'rgba(255,255,255,0.6)', textTransform: 'lowercase' }}>
                    wellness
                  </span>
                  <span style={{ fontSize: '0.5rem', fontWeight: 600, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.75)', textTransform: 'lowercase', marginTop: '1rem' }}>
                    {activeFlavor.canLabel}
                  </span>
                </div>

                {/* Volume */}
                <span
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontSize: '0.38rem',
                    fontWeight: 300,
                    letterSpacing: '0.15em',
                    color: 'rgba(255,255,255,0.45)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  355 mL
                </span>
              </div>
            </div>

            {/* Flavor name below can */}
            <span
              style={{
                fontSize: '0.62rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                color: 'var(--f-text)',
                textTransform: 'lowercase',
                transition: 'color 0.4s',
              }}
            >
              {activeFlavor.label}
            </span>
          </div>
        </Reveal>

        {/* ── CONFIGURATOR ──────────────────────────────── */}
        <Reveal delay={2}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.25rem' }}>

            {/* Title */}
            <div>
              <span className="ui-eyebrow">{p.eyebrow}</span>
              <h2
                style={{
                  fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  marginTop: '1rem',
                }}
              >
                <span style={{ fontWeight: 300 }}>{p.titleLight}</span>
                {p.titleBold}
              </h2>
              <p
                style={{
                  marginTop: '0.75rem',
                  fontSize: '0.6rem',
                  fontWeight: 300,
                  letterSpacing: '0.04em',
                  color: 'var(--muted)',
                  lineHeight: 1.8,
                }}
              >
                {p.subtitle}
              </p>
            </div>

            {/* Flavor */}
            <div>
              <span
                style={{
                  display: 'block',
                  fontSize: '0.55rem',
                  fontWeight: 600,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  marginBottom: '0.75rem',
                }}
              >
                {p.flavorLabel}
              </span>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {FLAVORS.map(f => (
                  <Pill
                    key={f.key}
                    variant="flavor"
                    active={f.key === flavorKey}
                    onClick={() => setFlavorKey(f.key)}
                    aria-pressed={f.key === flavorKey}
                  >
                    {f.label}
                  </Pill>
                ))}
              </div>
            </div>

            {/* Pack */}
            <div>
              <span
                style={{
                  display: 'block',
                  fontSize: '0.55rem',
                  fontWeight: 600,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  marginBottom: '0.75rem',
                }}
              >
                {p.packLabel}
              </span>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {PACKS.map(pack => (
                  <Pill
                    key={pack.key}
                    variant="pack"
                    active={pack.key === packKey}
                    note={pack.note}
                    onClick={() => setPackKey(pack.key)}
                    aria-pressed={pack.key === packKey}
                  >
                    {pack.label}
                  </Pill>
                ))}
              </div>
            </div>

            {/* Qty */}
            <div>
              <span
                style={{
                  display: 'block',
                  fontSize: '0.55rem',
                  fontWeight: 600,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  marginBottom: '0.75rem',
                }}
              >
                {p.qtyLabel}
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <button
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  aria-label="Reducir cantidad"
                  style={{
                    width: '34px', height: '34px',
                    borderRadius: '50%',
                    border: '1px solid var(--border)',
                    background: 'transparent',
                    fontSize: '1rem',
                    color: 'var(--black)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    lineHeight: 1,
                    fontFamily: 'inherit',
                    transition: 'background 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLButtonElement
                    el.style.background = 'var(--black)'
                    el.style.color = 'var(--linen)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLButtonElement
                    el.style.background = 'transparent'
                    el.style.color = 'var(--black)'
                  }}
                >
                  −
                </button>
                <span
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    minWidth: '2ch',
                    textAlign: 'center',
                  }}
                >
                  {qty}
                </span>
                <button
                  onClick={() => setQty(q => Math.min(MAX_QTY, q + 1))}
                  aria-label="Aumentar cantidad"
                  style={{
                    width: '34px', height: '34px',
                    borderRadius: '50%',
                    border: '1px solid var(--border)',
                    background: 'transparent',
                    fontSize: '1rem',
                    color: 'var(--black)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    lineHeight: 1,
                    fontFamily: 'inherit',
                    transition: 'background 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLButtonElement
                    el.style.background = 'var(--black)'
                    el.style.color = 'var(--linen)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLButtonElement
                    el.style.background = 'transparent'
                    el.style.color = 'var(--black)'
                  }}
                >
                  +
                </button>
              </div>
            </div>

            {/* Buy */}
            <div>
              <p
                style={{
                  fontSize: '0.55rem',
                  fontWeight: 300,
                  letterSpacing: '0.06em',
                  color: 'var(--muted)',
                  marginBottom: '1.25rem',
                }}
              >
                {summary}
              </p>
              <button
                onClick={() => beginHostedCheckout({ flavorKey, packKey, qty })}
                className="ui-btn-dark"
                style={{ width: '100%', fontSize: '0.7rem' }}
              >
                {p.buyBtn} ✦
              </button>
            </div>

            {/* Footer */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {[p.footerSecure, p.footerShipping].map(item => (
                <span
                  key={item}
                  style={{
                    fontSize: '0.52rem',
                    fontWeight: 300,
                    letterSpacing: '0.06em',
                    color: 'var(--muted)',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  )
}
