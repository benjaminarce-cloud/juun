import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

const PRICES: Record<string, number> = { '1': 8900, '6': 47900, '12': 89900 }
const LABELS: Record<string, string> = { '1': '1 lata', '6': '6 Pack', '12': '12 Pack' }

export async function POST(req: NextRequest) {
  const { items } = await req.json()
  const origin = req.headers.get('origin') ?? 'http://localhost:3000'

  const line_items = items.map((item: {
    flavorLabel: string
    packKey: string
    qty: number
  }) => ({
    price_data: {
      currency: 'mxn',
      product_data: {
        name: 'JUUN wellness ' + item.flavorLabel,
        description: LABELS[item.packKey],
      },
      unit_amount: PRICES[item.packKey] ?? 8900,
    },
    quantity: item.qty,
  }))

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
