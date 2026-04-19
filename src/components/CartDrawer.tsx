'use client'

import { useState } from 'react'
import { useCart } from '@/context/CartContext'

const PACK_PRICES: Record<string, number> = { '1': 89, '6': 240, '12': 436.99, '24': 998.99 }
const PACK_LABELS: Record<string, string> = { '1': '1 lata', '6': '6 Pack', '12': '12 Pack', '24': '24 Pack' }

export default function CartDrawer() {
  const { items, remove, clear, isOpen, closeCart, total } = useCart()
  const [isCityGateOpen, setIsCityGateOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const totalUnitCount = items.reduce((sum, item) => sum + Number(item.packKey) * item.qty, 0)

  const shippingSummary = totalUnitCount === 24
    ? { label: 'Envío: Gratis', color: 'var(--black)' }
    : totalUnitCount === 12
      ? { label: 'Envío: $149.99 MXN', color: 'rgba(14,12,11,0.6)' }
      : totalUnitCount === 6
        ? { label: 'Envío: $109.99 MXN', color: 'rgba(14,12,11,0.6)' }
        : { label: 'Envío: calculado al finalizar', color: 'rgba(14,12,11,0.6)' }

  async function proceedToCheckout() {
    setIsSubmitting(true)
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items }),
    })
    const data = await res.json()
    if (data.url) window.location.href = data.url
    setIsSubmitting(false)
  }

  function handleCheckout() {
    setIsCityGateOpen(true)
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
                    <span className="cart-item-name">{item.flavorLabel}</span>
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
              <div>
                <div
                  style={{
                    fontFamily: 'Unbounded',
                    fontWeight: 300,
                    fontSize: '11px',
                    letterSpacing: '1px',
                    color: shippingSummary.color,
                  }}
                >
                  {shippingSummary.label}
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
            background: 'rgba(14,12,11,0.28)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            zIndex: 80,
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '420px',
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
              ¿Tu pedido es para Monterrey o Mexicali? Por el momento solo enviamos a estas ciudades.
            </p>
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
                disabled={isSubmitting}
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
                  cursor: isSubmitting ? 'default' : 'pointer',
                  opacity: isSubmitting ? 0.7 : 1,
                }}
              >
                Sí, continuar
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
