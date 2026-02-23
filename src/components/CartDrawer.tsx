'use client'

import { useCart } from '@/context/CartContext'

const PACK_PRICES: Record<string, number> = { '1': 89, '6': 479, '12': 899 }
const PACK_LABELS: Record<string, string> = { '1': '1 lata', '6': '6 Pack', '12': '12 Pack' }

export default function CartDrawer() {
  const { items, remove, clear, isOpen, closeCart, total } = useCart()

  async function handleCheckout() {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items }),
    })
    const data = await res.json()
    if (data.url) window.location.href = data.url
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
    </>
  )
}
