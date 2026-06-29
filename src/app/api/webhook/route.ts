import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const PACK_LABELS: Record<string, string> = {
  '1': '1 lata',
  '6': '6 Pack',
  '18': '18 Pack',
  '24': '24 Pack',
}

export async function POST(req: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!secretKey || !webhookSecret) {
    return NextResponse.json({ error: 'Not configured.' }, { status: 500 })
  }

  const stripe = new Stripe(secretKey, { apiVersion: '2026-01-28.clover' })

  const body = await req.text()
  const sig = req.headers.get('stripe-signature') ?? ''

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
  } catch {
    return NextResponse.json({ error: 'Invalid signature.' }, { status: 400 })
  }

  if (event.type !== 'checkout.session.completed') {
    return NextResponse.json({ received: true })
  }

  const session = event.data.object as Stripe.Checkout.Session
  const email = session.customer_details?.email
  const name = session.customer_details?.name ?? 'Cliente'

  if (!email) {
    return NextResponse.json({ received: true })
  }

  // Pull line items to build order summary
  const lineItemsPage = await stripe.checkout.sessions.listLineItems(session.id, { limit: 10 })
  const items = lineItemsPage.data

  const reference = session.id.slice(-8).toUpperCase()

  const shippingLine1 = session.metadata?.shipping_line1 ?? ''
  const shippingColonia = session.metadata?.shipping_colonia ?? ''
  const shippingPostal = session.metadata?.shipping_postal_code ?? ''
  const shippingCity = session.metadata?.shipping_city ?? 'Mexicali'

  const itemsHtml = items
    .filter((i) => i.description !== 'Envío')
    .map((i) => {
      const packKey = Object.entries(PACK_LABELS).find(([, v]) => v === i.description)?.[0]
      const label = packKey ? PACK_LABELS[packKey] : i.description
      const amount = ((i.amount_total ?? 0) / 100).toFixed(2)
      return `
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #ece9de;font-size:13px;color:#231f20;">JUUN Wellness · Variedad — ${label}</td>
          <td style="padding:10px 0;border-bottom:1px solid #ece9de;font-size:13px;color:#231f20;text-align:right;">$${amount} MXN</td>
        </tr>`
    })
    .join('')

  const shipping = items.find((i) => i.description === 'Envío')
  const shippingAmount = shipping ? ((shipping.amount_total ?? 0) / 100).toFixed(2) : null
  const total = ((session.amount_total ?? 0) / 100).toFixed(2)

  const html = `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f3ec;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f3ec;padding:40px 20px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#fcfbf0;border:1px solid #ece9de;">

        <!-- Header -->
        <tr>
          <td style="padding:36px 40px 28px;border-bottom:1px solid #ece9de;">
            <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:rgba(35,31,32,0.4);">JUUN Wellness</p>
            <h1 style="margin:16px 0 0;font-size:26px;font-weight:300;letter-spacing:-0.03em;color:#231f20;line-height:1.2;">
              Pedido<br>confirmado.
            </h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:28px 40px;">
            <p style="margin:0 0 20px;font-size:13px;line-height:1.7;color:rgba(35,31,32,0.7);">
              Hola ${name}, gracias por tu compra. Recibimos tu pedido y lo estaremos preparando para entrega en Mexicali.
            </p>

            <!-- Order ref -->
            <p style="margin:0 0 28px;font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:rgba(35,31,32,0.35);">
              Referencia · ${reference}
            </p>

            <!-- Items table -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:8px;">
              ${itemsHtml}
              ${shippingAmount ? `
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #ece9de;font-size:13px;color:rgba(35,31,32,0.6);">Envío</td>
                <td style="padding:10px 0;border-bottom:1px solid #ece9de;font-size:13px;color:rgba(35,31,32,0.6);text-align:right;">$${shippingAmount} MXN</td>
              </tr>` : ''}
              <tr>
                <td style="padding:14px 0 0;font-size:13px;font-weight:700;color:#231f20;">Total</td>
                <td style="padding:14px 0 0;font-size:13px;font-weight:700;color:#231f20;text-align:right;">$${total} MXN</td>
              </tr>
            </table>

            <!-- Shipping address -->
            ${shippingLine1 ? `
            <div style="margin-top:28px;padding:16px 20px;background:#f5f3ec;border:1px solid #ece9de;">
              <p style="margin:0 0 8px;font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:rgba(35,31,32,0.4);">Dirección de entrega</p>
              <p style="margin:0;font-size:12px;line-height:1.7;color:#231f20;">
                ${shippingLine1}<br>
                ${shippingColonia}<br>
                ${shippingCity}, BC ${shippingPostal}<br>
                México
              </p>
            </div>` : ''}

            <p style="margin:28px 0 0;font-size:12px;line-height:1.7;color:rgba(35,31,32,0.55);">
              Nos pondremos en contacto contigo para coordinar la entrega. Si tienes alguna pregunta, responde a este correo.
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 40px;border-top:1px solid #ece9de;">
            <p style="margin:0;font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:rgba(35,31,32,0.3);">
              JUUN Wellness · Hecho en México
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`

  await resend.emails.send({
    from: 'JUUN Wellness <hola@juunwellness.com>',
    to: email,
    subject: `Pedido confirmado · ${reference}`,
    html,
  })

  return NextResponse.json({ received: true })
}
