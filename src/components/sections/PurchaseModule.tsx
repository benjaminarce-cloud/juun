'use client'

import { useState } from 'react'
import { useCart } from '@/context/CartContext'

const FLAVORS = {
  frambuesa: { from: '#c94b8b', to: '#7a1538', glow: 'rgba(201,75,139,0.25)', text: '#b03070', label: 'frambuesa · acai', photo: 'https://res.cloudinary.com/dzjcndphq/image/upload/v1772580639/acai_cfpbet.jpg' },
  fresa:     { from: '#dba0b8', to: '#5a9e72', glow: 'rgba(90,158,114,0.25)',  text: '#3e8055', label: 'fresa · menta',    photo: 'https://res.cloudinary.com/dzjcndphq/image/upload/v1772579093/LAU02926_yevizb.jpg' },
  naranja:   { from: '#f5a623', to: '#c97c10', glow: 'rgba(245,166,35,0.25)',  text: '#b06010', label: 'naranja · mango',  photo: 'https://res.cloudinary.com/dzjcndphq/image/upload/v1772580639/mango_zdhx4z.jpg' },
} as const

type FlavorKey = keyof typeof FLAVORS
type Pack = '6' | '18' | '24'

const PACK_OPTIONS: Array<{
  key: Pack
  price: string
}> = [
  { key: '6', price: '$240.00 MXN' },
  { key: '18', price: '$649.99 MXN' },
  { key: '24', price: '$799.99 MXN' },
]

export default function PurchaseModule() {
  const [pack,   setPack]   = useState<Pack>('6')
  const [qty,    setQty]    = useState(1)
  const { add } = useCart()

  const flavor: FlavorKey = 'frambuesa'
  const f = FLAVORS[flavor]
  const selectedPack = PACK_OPTIONS.find(({ key }) => key === pack) ?? PACK_OPTIONS[0]

  const cssVars = {
    '--f-from': f.from,
    '--f-to':   f.to,
    '--f-glow': f.glow,
    '--f-text': f.text,
  } as React.CSSProperties

  const packLabel = pack + ' Pack'
  const summary = packLabel + ' · Variedad · Cantidad ' + qty

  function handleAdd() {
    add({ flavorKey: 'variedad', flavorLabel: 'JUUN Wellness · Variedad', packKey: pack, qty })
  }

  return (
    <section id="comprar" style={cssVars}>
      <div className="buy-inner container">

        <div className="product-photo-slot reveal" style={{position:"relative", overflow:"hidden"}}>
          {(Object.keys(FLAVORS) as FlavorKey[]).map(key => (
            <img
              key={key}
              src={FLAVORS[key].photo}
              alt={FLAVORS[key].label}
              style={{
                position:'absolute', inset:0,
                width:'100%', height:'100%',
                objectFit:'cover',
                opacity: flavor === key ? 1 : 0,
                transition:'opacity 0.4s ease',
                pointerEvents:'none',
              }}
            />
          ))}
          <span className="photo-flavor-label">{f.label}</span>
        </div>

        <div className="config reveal reveal-d2">
          <div>
            <span className="ui-eyebrow">Primera edición</span>
            <h2 className="config-title" style={{ marginTop: '1rem' }}>
              <span>Elige tu </span>JUUN.
            </h2>
            <p className="config-sub">Checkout seguro. Envío desde México.</p>
          </div>

          <div className="config-group">
            <span
              style={{
                fontFamily: 'Unbounded',
                fontWeight: 300,
                fontSize: '9px',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: 'rgba(14,12,11,0.45)',
                marginBottom: '0.75rem',
                display: 'block',
              }}
            >
              Sabor
            </span>
            <div>
              {(Object.keys(FLAVORS) as FlavorKey[]).map((key) => (
                <span
                  key={key}
                  style={{
                    display: 'inline-block',
                    padding: '6px 14px',
                    border: '1px solid rgba(14,12,11,0.15)',
                    fontSize: '11px',
                    fontFamily: 'inherit',
                    fontWeight: 300,
                    color: 'rgba(14,12,11,0.5)',
                    marginRight: '6px',
                    marginBottom: '6px',
                    cursor: 'default',
                  }}
                >
                  {FLAVORS[key].label}
                </span>
              ))}
              <span
                style={{
                  fontFamily: 'Unbounded',
                  fontWeight: 300,
                  fontSize: '9px',
                  color: 'rgba(14,12,11,0.35)',
                  letterSpacing: '1px',
                  marginTop: '0.5rem',
                  display: 'block',
                }}
              >
                Cada pack incluye variedad de los tres sabores.
              </span>
            </div>
          </div>

          <div className="config-group">
            <span className="config-label">Pack</span>
            <div className="pack-pills">
              {PACK_OPTIONS.map(({ key }) => (
                <button
                  key={key}
                  className={'pack-pill' + (pack === key ? ' active' : '')}
                  onClick={() => setPack(key)}
                  style={{ position: 'relative' }}
                >
                  <span>
                    {key}
                  </span>
                  {key === '18' || key === '24' ? (
                    <span
                      style={{
                        position: 'absolute',
                        top: '-1px',
                        right: '-1px',
                        background: pack === key ? '#f5f3ec' : '#0e0c0b',
                        color: pack === key ? '#0e0c0b' : '#f5f3ec',
                        fontSize: '7px',
                        fontWeight: 700,
                        letterSpacing: '1.5px',
                        padding: '3px 6px',
                        lineHeight: 1,
                        fontFamily: 'inherit',
                        pointerEvents: 'none',
                      }}
                    >
                      {key === '18' ? '15% OFF' : '20% OFF'}
                    </span>
                  ) : null}
                </button>
              ))}
            </div>
          </div>

          <div className="config-group">
            <span className="config-label">Cantidad</span>
            <div className="qty-row">
              <button className="qty-btn" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Reducir">-</button>
              <span className="qty-display">{qty}</span>
              <button className="qty-btn" onClick={() => setQty((q) => Math.min(10, q + 1))} aria-label="Aumentar">+</button>
            </div>
          </div>

          <div>
            <p className="config-summary">{summary}</p>
            <div style={{ marginTop: '1rem' }}>
              <div
                style={{
                  fontFamily: 'Unbounded',
                  fontWeight: 300,
                  fontSize: 'clamp(24px, 4vw, 34px)',
                  letterSpacing: '-0.04em',
                  color: 'var(--black)',
                }}
              >
                {selectedPack.price}
              </div>
            </div>
            <button className="btn-buy" onClick={handleAdd}>
              Agregar al carrito
            </button>
          </div>

          <div className="buy-footer">
            <span className="buy-footer-item">Checkout seguro</span>
            <span className="buy-footer-item">Envío desde México</span>
          </div>
        </div>

      </div>
    </section>
  )
}
