import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const PRICES: Record<string, number> = { '1': 8900, '6': 24000, '18': 64999, '24': 79999 }
const LABELS: Record<string, string> = { '1': '1 lata', '6': '6 Pack', '18': '18 Pack', '24': '24 Pack' }
const SHIPPING_COSTS: Record<number, number> = { 6: 11999, 18: 16799, 24: 18080 }

export async function POST(req: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY
  if (!secretKey) {
    return NextResponse.json({ error: 'Stripe is not configured.' }, { status: 500 })
  }

  const stripe = new Stripe(secretKey, {
    apiVersion: '2026-01-28.clover',
  })

  const { items, totalUnitCount } = await req.json()
  const origin = req.headers.get('origin') ?? 'http://localhost:3000'

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
    shipping_address_collection: { allowed_countries: ['MX'] },
  })

  return NextResponse.json({ url: session.url })
}
