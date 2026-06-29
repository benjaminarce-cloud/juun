'use client'

import { useState } from 'react'
import { useCart } from '@/context/CartContext'

const PACK_PRICES: Record<string, number> = { '1': 89, '6': 240, '18': 720, '24': 900 }
const PACK_LABELS: Record<string, string> = { '1': '1 lata', '6': '6 Pack', '18': '18 Pack', '24': '24 Pack' }

// Delivery is restricted to a single city. These are fixed on the client and
// re-forced on the server so the customer can never ship anywhere else.
const FIXED_CITY = 'Mexicali'
const FIXED_STATE = 'Baja California'

const EMPTY_SHIPPING = { name: '', line1: '', colonia: '', postalCode: '' }

export default function CartDrawer() {
  const { items, remove, clear, isOpen, closeCart, total } = useCart()
  const [isCityGateOpen, setIsCityGateOpen] = useState(false)
  const [shipping, setShipping] = useState(EMPTY_SHIPPING)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const totalUnitCount = items.reduce((sum, item) => sum + Number(item.packKey) * item.qty, 0)

  const isShippingValid =
    shipping.name.trim().length > 1 &&
    shipping.line1.trim().length > 2 &&
    shipping.colonia.trim().length > 1 &&
    /^\d{5}$/.test(shipping.postalCode.trim())

  function setField(field: keyof typeof EMPTY_SHIPPING, value: string) {
    setShipping((prev) => ({ ...prev, [field]: value }))
  }

  async function proceedToCheckout() {
    if (!isShippingValid) return
    setIsSubmitting(true)
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items, totalUnitCount, shipping }),
    })
    const data = await res.json()
    if (data.url) window.location.href = data.url
    setIsSubmitting(false)
  }

  function handleCheckout() {
    setShipping(EMPTY_SHIPPING)
    setIsCityGateOpen(true)
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'Unbounded',
    fontWeight: 300,
    fontSize: '10px',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'rgba(14,12,11,0.65)',
    marginBottom: '6px',
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    boxSizing: 'border-box',
    appearance: 'none',
    border: '1px solid rgba(14,12,11,0.2)',
    background: 'var(--linen)',
    color: 'var(--black)',
    fontFamily: 'Unbounded',
    fontWeight: 300,
    fontSize: '12px',
    letterSpacing: '0.04em',
    padding: '12px 14px',
  }

  const drawerClass = 'cart-drawer' + (isOpen ? ' cart-drawer--open' : '')

  return (
    <>
      {isOpen && (
        <div className="cart-backdrop" onClick={closeCart} aria-hidden="true" />
      )}
      <aside className={drawerClass} aria-label="Carrito">
        <div className="cart-drawer-header">
          <span className="cart-drawer-title">Carrito</span>
          <button className="cart-close-btn" onClick={closeCart} aria-label="Cerrar">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M1 1l12 12M13 1L1 13"/>
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">Tu carrito está vacío.</div>
        ) : (
          <>
            <ul className="cart-items">
              {items.map((item, i) => (
                <li key={i} className="cart-item">
                  <div className="cart-item-info">
                    <span className="cart-item-name">JUUN Wellness · Variedad</span>
                    <span className="cart-item-sub">
                      {PACK_LABELS[item.packKey]} x {item.qty}
                    </span>
                  </div>
                  <div className="cart-item-right">
                    <span className="cart-item-price">
                      ${(PACK_PRICES[item.packKey] * item.qty).toLocaleString('es-MX')} MXN
                    </span>
                    <button
                      className="cart-item-remove"
                      onClick={() => remove(i)}
                      aria-label="Eliminar"
                    >
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M1 1l12 12M13 1L1 13"/>
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-footer">
              <div className="cart-total">
                <span>Total</span>
                <span>${total.toLocaleString('es-MX')} MXN</span>
              </div>
              <button className="btn-checkout" onClick={handleCheckout}>
                Proceder al checkout
              </button>
              <button className="cart-clear-btn" onClick={clear}>
                Vaciar carrito
              </button>
            </div>
          </>
        )}
      </aside>
      {isCityGateOpen ? (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(14,12,11,0.75)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
          }}
        >
          <div
            style={{
              zIndex: 100000,
              position: 'relative',
              width: '100%',
              maxWidth: '420px',
              maxHeight: '90vh',
              overflowY: 'auto',
              background: 'var(--linen)',
              padding: '28px 24px',
              boxShadow: '0 24px 60px rgba(14,12,11,0.16)',
            }}
          >
            <p
              style={{
                fontFamily: 'Unbounded',
                fontWeight: 300,
                fontSize: '12px',
                lineHeight: 1.7,
                letterSpacing: '0.04em',
                color: 'var(--black)',
                margin: 0,
              }}
            >
              Por el momento solo enviamos a Mexicali. Ingresa tu dirección de envío.
            </p>

            <div style={{ marginTop: '1.5rem' }}>
              <label style={labelStyle} htmlFor="ship-name">Nombre de quien recibe</label>
              <input
                id="ship-name"
                type="text"
                autoComplete="name"
                value={shipping.name}
                onChange={(e) => setField('name', e.target.value)}
                disabled={isSubmitting}
                style={inputStyle}
              />
            </div>

            <div style={{ marginTop: '14px' }}>
              <label style={labelStyle} htmlFor="ship-line1">Calle y número</label>
              <input
                id="ship-line1"
                type="text"
                autoComplete="address-line1"
                value={shipping.line1}
                onChange={(e) => setField('line1', e.target.value)}
                disabled={isSubmitting}
                style={inputStyle}
              />
            </div>

            <div style={{ marginTop: '14px' }}>
              <label style={labelStyle} htmlFor="ship-colonia">Colonia</label>
              <input
                id="ship-colonia"
                type="text"
                autoComplete="address-line2"
                value={shipping.colonia}
                onChange={(e) => setField('colonia', e.target.value)}
                disabled={isSubmitting}
                style={inputStyle}
              />
            </div>

            <div style={{ display: 'flex', gap: '12px', marginTop: '14px' }}>
              <div style={{ flex: 1 }}>
                <label style={labelStyle} htmlFor="ship-cp">Código postal</label>
                <input
                  id="ship-cp"
                  type="text"
                  inputMode="numeric"
                  autoComplete="postal-code"
                  maxLength={5}
                  value={shipping.postalCode}
                  onChange={(e) => setField('postalCode', e.target.value.replace(/\D/g, ''))}
                  disabled={isSubmitting}
                  style={inputStyle}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={labelStyle} htmlFor="ship-city">Ciudad</label>
                <input
                  id="ship-city"
                  type="text"
                  value={FIXED_CITY}
                  readOnly
                  aria-readonly="true"
                  style={{ ...inputStyle, color: 'rgba(14,12,11,0.55)', cursor: 'not-allowed' }}
                />
              </div>
            </div>

            <div style={{ marginTop: '14px' }}>
              <label style={labelStyle} htmlFor="ship-state">Estado</label>
              <input
                id="ship-state"
                type="text"
                value={FIXED_STATE}
                readOnly
                aria-readonly="true"
                style={{ ...inputStyle, color: 'rgba(14,12,11,0.55)', cursor: 'not-allowed' }}
              />
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginTop: '1.5rem',
              }}
            >
              <button
                onClick={proceedToCheckout}
                disabled={isSubmitting || !isShippingValid}
                style={{
                  border: 'none',
                  background: 'var(--black)',
                  color: 'var(--linen)',
                  fontFamily: 'Unbounded',
                  fontWeight: 300,
                  fontSize: '10px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  padding: '12px 18px',
                  cursor: isSubmitting || !isShippingValid ? 'default' : 'pointer',
                  opacity: isSubmitting || !isShippingValid ? 0.5 : 1,
                }}
              >
                Continuar
              </button>
              <button
                onClick={() => setIsCityGateOpen(false)}
                disabled={isSubmitting}
                style={{
                  border: 'none',
                  background: 'transparent',
                  color: 'rgba(14,12,11,0.65)',
                  fontFamily: 'Unbounded',
                  fontWeight: 300,
                  fontSize: '10px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  padding: 0,
                  cursor: isSubmitting ? 'default' : 'pointer',
                }}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
