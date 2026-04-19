'use client'

import { useState } from 'react'
import { useCart } from '@/context/CartContext'

const FLAVORS = {
  frambuesa: { from: '#c94b8b', to: '#7a1538', glow: 'rgba(201,75,139,0.25)', text: '#b03070', label: 'frambuesa · acai', photo: 'https://res.cloudinary.com/dzjcndphq/image/upload/v1772580639/acai_cfpbet.jpg' },
  fresa:     { from: '#dba0b8', to: '#5a9e72', glow: 'rgba(90,158,114,0.25)',  text: '#3e8055', label: 'fresa · menta',    photo: 'https://res.cloudinary.com/dzjcndphq/image/upload/v1772579093/LAU02926_yevizb.jpg' },
  naranja:   { from: '#f5a623', to: '#c97c10', glow: 'rgba(245,166,35,0.25)',  text: '#b06010', label: 'naranja · mango',  photo: 'https://res.cloudinary.com/dzjcndphq/image/upload/v1772580639/mango_zdhx4z.jpg' },
} as const

type FlavorKey = keyof typeof FLAVORS
type Pack = '6' | '12' | '24'

const PACK_OPTIONS: Array<{
  key: Pack
  note: string
  price: string
  shippingLabel: string
  freeShipping?: boolean
}> = [
  { key: '6', note: 'Más popular', price: '$240.00 MXN', shippingLabel: 'Envío: $109.99 MXN' },
  { key: '12', note: 'Mejor valor', price: '$436.99 MXN', shippingLabel: 'Envío: $149.99 MXN' },
  { key: '24', note: 'El ritual', price: '$998.99 MXN', shippingLabel: 'Envío: Gratis', freeShipping: true },
]

export default function PurchaseModule() {
  const [flavor, setFlavor] = useState<FlavorKey>('frambuesa')
  const [pack,   setPack]   = useState<Pack>('6')
  const [qty,    setQty]    = useState(1)
  const { add } = useCart()

  const f = FLAVORS[flavor]
  const selectedPack = PACK_OPTIONS.find(({ key }) => key === pack) ?? PACK_OPTIONS[0]

  const cssVars = {
    '--f-from': f.from,
    '--f-to':   f.to,
    '--f-glow': f.glow,
    '--f-text': f.text,
  } as React.CSSProperties

  const packLabel = pack + ' Pack'
  const summary = packLabel + ' · ' + f.label + ' · Cantidad ' + qty

  function handleAdd() {
    add({ flavorKey: flavor, flavorLabel: f.label, packKey: pack, qty })
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
            <span className="config-label">Sabor</span>
            <div className="flavor-pills">
              {(Object.keys(FLAVORS) as FlavorKey[]).map((key) => (
                <button
                  key={key}
                  className={'flavor-pill' + (flavor === key ? ' active' : '')}
                  onClick={() => setFlavor(key)}
                >
                  {FLAVORS[key].label}
                </button>
              ))}
            </div>
          </div>

          <div className="config-group">
            <span className="config-label">Pack</span>
            <div className="pack-pills">
              {PACK_OPTIONS.map(({ key, note, freeShipping }) => (
                <button
                  key={key}
                  className={'pack-pill' + (pack === key ? ' active' : '')}
                  onClick={() => setPack(key)}
                >
                  <span>
                    {key}
                    {freeShipping ? (
                      <span
                        style={{
                          display: 'inline-block',
                          background: 'var(--black)',
                          color: 'var(--linen)',
                          fontSize: '7px',
                          letterSpacing: '2px',
                          padding: '2px 6px',
                          borderRadius: '2px',
                          fontFamily: 'Unbounded',
                          fontWeight: 300,
                          marginLeft: '6px',
                          verticalAlign: 'middle',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        ENVÍO GRATIS
                      </span>
                    ) : null}
                  </span>
                  <span className="pack-note">{note}</span>
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
              <div
                style={{
                  fontFamily: 'Unbounded',
                  fontWeight: 300,
                  fontSize: '10px',
                  letterSpacing: '1px',
                  color: selectedPack.freeShipping ? 'var(--black)' : 'rgba(14,12,11,0.5)',
                  marginTop: '0.5rem',
                }}
              >
                {selectedPack.shippingLabel}
              </div>
              <div
                style={{
                  fontFamily: 'Unbounded',
                  fontWeight: 300,
                  fontSize: '9px',
                  color: 'rgba(14,12,11,0.35)',
                  letterSpacing: '1px',
                  marginTop: '0.25rem',
                }}
              >
                Precios incluyen IVA
              </div>
              <div
                style={{
                  fontFamily: 'Unbounded',
                  fontWeight: 300,
                  fontSize: '9px',
                  color: 'rgba(14,12,11,0.35)',
                  letterSpacing: '1px',
                  marginTop: '0.25rem',
                }}
              >
                Envíos a Monterrey y Mexicali
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
