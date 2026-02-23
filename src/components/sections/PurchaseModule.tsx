'use client'

import { useState } from 'react'
import { useCart } from '@/context/CartContext'

const FLAVORS = {
  frambuesa: { from: '#c94b8b', to: '#7a1538', glow: 'rgba(201,75,139,0.10)', text: '#b03070', label: 'frambuesa · acai' },
  fresa:     { from: '#dba0b8', to: '#5a9e72', glow: 'rgba(90,158,114,0.09)',  text: '#3e8055', label: 'fresa · menta' },
  naranja:   { from: '#f5a623', to: '#c97c10', glow: 'rgba(245,166,35,0.10)',  text: '#b06010', label: 'naranja · mango' },
} as const

type FlavorKey = keyof typeof FLAVORS
type Pack = '1' | '6' | '12'

export default function PurchaseModule() {
  const [flavor, setFlavor] = useState<FlavorKey>('frambuesa')
  const [pack,   setPack]   = useState<Pack>('6')
  const [qty,    setQty]    = useState(1)
  const { add } = useCart()

  const f = FLAVORS[flavor]

  const cssVars = {
    '--f-from': f.from,
    '--f-to':   f.to,
    '--f-glow': f.glow,
    '--f-text': f.text,
  } as React.CSSProperties

  const packLabel = pack === '1' ? '1 lata' : pack + ' Pack'
  const summary = packLabel + ' · ' + f.label + ' · Qty ' + qty + ' · Precio y envío en el checkout.'

  function handleAdd() {
    add({ flavorKey: flavor, flavorLabel: f.label, packKey: pack, qty })
  }

  return (
    <section id="comprar" style={cssVars}>
      <div className="buy-inner container">

        <div className="product-photo-slot reveal">
          <img src="https://res.cloudinary.com/dzjcndphq/image/upload/v1771879034/1A7A2258_lpbzr1.jpg" alt="JUUN wellness" style={{width:"100%",height:"100%",objectFit:"cover"}} />
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
              {(['1', '6', '12'] as Pack[]).map((p) => (
                <button
                  key={p}
                  className={'pack-pill' + (pack === p ? ' active' : '')}
                  onClick={() => setPack(p)}
                >
                  {p === '1' ? 'Individual' : p + ' Pack'}
                  <span className="pack-note">
                    {p === '1' ? '1 lata' : p === '6' ? 'Más popular' : 'Mejor valor'}
                  </span>
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
