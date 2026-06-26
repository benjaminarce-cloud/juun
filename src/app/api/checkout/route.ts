import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const PRICES: Record<string, number> = { '1': 8900, '6': 23999, '18': 65999, '24': 79999 }
const LABELS: Record<string, string> = { '1': '1 lata', '6': '6 Pack', '18': '18 Pack', '24': '24 Pack' }
const SHIPPING_COSTS: Record<number, number> = { 6: 11999, 18: 18499, 24: 19900 }

export async function POST(req: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY
  if (!secretKey) {
    return NextResponse.json({ error: 'Stripe is not configured.' }, { status: 500 })
  }

  const stripe = new Stripe(secretKey, {
    apiVersion: '2026-01-28.clover',
  })

  const { items, totalUnitCount, shipping } = await req.json()
  const origin = req.headers.get('origin') ?? 'http://localhost:3000'

  // Delivery is restricted to a single city. The city/state are forced here and
  // never taken from the client, so the shipping address can only ever be Mexicali.
  const SHIPPING_CITY = 'Mexicali'
  const SHIPPING_STATE = 'Baja California'

  const name = typeof shipping?.name === 'string' ? shipping.name.trim() : ''
  const line1 = typeof shipping?.line1 === 'string' ? shipping.line1.trim() : ''
  const colonia = typeof shipping?.colonia === 'string' ? shipping.colonia.trim() : ''
  const postalCode = typeof shipping?.postalCode === 'string' ? shipping.postalCode.trim() : ''

  if (!name || !line1 || !colonia || !/^\d{5}$/.test(postalCode)) {
    return NextResponse.json({ error: 'Dirección de envío incompleta.' }, { status: 400 })
  }

  const line_items = items.map((item: {
    flavorLabel: string
    packKey: string
    qty: number
  }) => ({
    price_data: {
      currency: 'mxn',
      product_data: {
        name: 'JUUN Wellness · Variedad',
        description: LABELS[item.packKey],
      },
      unit_amount: PRICES[item.packKey] ?? 8900,
    },
    quantity: item.qty,
  }))

  const shippingCost = SHIPPING_COSTS[Number(totalUnitCount)]
  if (shippingCost && shippingCost > 0) {
    line_items.push({
      price_data: {
        currency: 'mxn',
        product_data: { name: 'Envío' },
        unit_amount: shippingCost,
      },
      quantity: 1,
    })
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items,
    mode: 'payment',
    success_url: origin + '/gracias?session_id={CHECKOUT_SESSION_ID}',
    cancel_url:  origin + '/#comprar',
    locale: 'es',
    // No shipping_address_collection: Stripe never shows an editable address
    // form, so the customer cannot change the destination city. We attach the
    // delivery address ourselves with the city forced to Mexicali.
    payment_intent_data: {
      shipping: {
        name,
        address: {
          line1,
          line2: colonia,
          city: SHIPPING_CITY,
          state: SHIPPING_STATE,
          postal_code: postalCode,
          country: 'MX',
        },
      },
    },
    metadata: {
      shipping_city: SHIPPING_CITY,
      shipping_line1: line1,
      shipping_colonia: colonia,
      shipping_postal_code: postalCode,
    },
  })

  return NextResponse.json({ url: session.url })
}
