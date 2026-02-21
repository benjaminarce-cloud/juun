// ─────────────────────────────────────────────────────────
// JUUN wellness — Commerce Seam
//
// v1: stub redirect URL. When you're ready to wire a real
// provider, replace the body of buildCheckoutUrl() below.
//
// Shopify Storefront API example:
//   return `https://juunwellness.myshopify.com/cart/add?...`
//
// Stripe Payment Link example:
//   return `https://buy.stripe.com/YOUR_LINK?prefilled_quantity=${qty}`
// ─────────────────────────────────────────────────────────

export interface CheckoutSelection {
  flavorKey: string
  packKey: string
  qty: number
}

export function buildCheckoutUrl(selection: CheckoutSelection): string {
  const { flavorKey, packKey, qty } = selection

  // ── STUB ─────────────────────────────────────────────
  // Replace this URL with your real checkout endpoint.
  const base = process.env.NEXT_PUBLIC_CHECKOUT_URL ?? '#'
  const params = new URLSearchParams({
    flavor: flavorKey,
    pack:   packKey,
    qty:    String(qty),
  })

  return `${base}?${params.toString()}`
}

export function beginHostedCheckout(selection: CheckoutSelection): void {
  const url = buildCheckoutUrl(selection)
  if (url === '#' || url.startsWith('#')) {
    // Dev mode: log selection instead of redirecting
    console.info('[JUUN checkout stub]', selection)
    alert(
      `Checkout stub activo.\n\nSelección:\n• Sabor: ${selection.flavorKey}\n• Pack: ${selection.packKey}\n• Qty: ${selection.qty}\n\nConecta NEXT_PUBLIC_CHECKOUT_URL en .env.local para redirigir.`
    )
    return
  }
  window.location.href = url
}
