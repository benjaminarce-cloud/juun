// Required env var: RESEND_API_KEY — add to Vercel Environment Variables
// Run in Supabase SQL editor:
// CREATE TABLE waitlist (
//   id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
//   email text UNIQUE NOT NULL,
//   created_at timestamptz DEFAULT now(),
//   source text
// );

import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { supabase } from '@/lib/supabase'

const resend = new Resend(process.env.RESEND_API_KEY)
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string }
    const email = body.email?.trim().toLowerCase()

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const { error } = await supabase.from('waitlist').insert({
      email,
      created_at: new Date().toISOString(),
      source: 'coming_soon_overlay',
    })

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json({ status: 'already_exists' }, { status: 200 })
      }

      throw error
    }

    try {
      await resend.emails.send({
        from: 'JUUN Wellness <hola@juunwellness.com>',
        to: [email],
        subject: 'Estás en la lista. ✦',
        html: `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>JUUN Wellness</title></head><body style="margin:0;padding:0;background:#f5f3ec;font-family:sans-serif;"><table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f3ec;padding:48px 24px;"><tr><td align="center"><table width="100%" cellpadding="0" cellspacing="0" style="max-width:480px;background:#f5f3ec;"><tr><td style="padding-bottom:40px;"><img src="https://juunwellness.com/logo-black.png" alt="JUUN" height="36" style="display:block;"></td></tr><tr><td style="border-top:1px solid rgba(14,12,11,0.1);padding-bottom:40px;"></td></tr><tr><td style="padding-bottom:16px;"><p style="margin:0;font-size:10px;letter-spacing:6px;color:rgba(14,12,11,0.35);text-transform:uppercase;">Confirmación</p></td></tr><tr><td style="padding-bottom:24px;"><h1 style="margin:0;font-size:32px;font-weight:700;color:#0e0c0b;line-height:1.1;letter-spacing:-1px;">Estás en la lista.</h1></td></tr><tr><td style="padding-bottom:40px;"><p style="margin:0;font-size:14px;line-height:1.8;color:rgba(14,12,11,0.6);">Te avisamos en cuanto JUUN esté disponible. Mientras tanto, gracias por ser parte de la primera edición.</p></td></tr><tr><td style="background:#0e0c0b;padding:24px;"><table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="border-right:1px solid rgba(245,243,236,0.1);padding:0 16px 0 0;"><p style="margin:0;font-size:20px;font-weight:900;color:#f5f3ec;letter-spacing:-1px;">130mg</p><p style="margin:4px 0 0;font-size:8px;letter-spacing:2px;color:rgba(245,243,236,0.35);text-transform:uppercase;">Cafeína</p></td><td align="center" style="border-right:1px solid rgba(245,243,236,0.1);padding:0 16px;"><p style="margin:0;font-size:20px;font-weight:900;color:#f5f3ec;letter-spacing:-1px;">130mg</p><p style="margin:4px 0 0;font-size:8px;letter-spacing:2px;color:rgba(245,243,236,0.35);text-transform:uppercase;">L-Teanina</p></td><td align="center" style="padding:0 0 0 16px;"><p style="margin:0;font-size:20px;font-weight:900;color:#f5f3ec;letter-spacing:-1px;">0g</p><p style="margin:4px 0 0;font-size:8px;letter-spacing:2px;color:rgba(245,243,236,0.35);text-transform:uppercase;">Azúcar</p></td></tr></table></td></tr><tr><td style="padding-bottom:40px;"></td></tr><tr><td style="border-top:1px solid rgba(14,12,11,0.08);padding-top:24px;"><p style="margin:0;font-size:9px;letter-spacing:2px;color:rgba(14,12,11,0.25);text-transform:uppercase;">JUUN Wellness · Primera Edición · juunwellness.com</p></td></tr></table></td></tr></table></body></html>`,
      })
    } catch (emailError) {
      console.error('[Resend] Failed to send confirmation:', emailError)
    }

    return NextResponse.json({ status: 'success' }, { status: 200 })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
