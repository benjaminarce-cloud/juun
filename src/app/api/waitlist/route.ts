// Run in Supabase SQL editor:
// CREATE TABLE waitlist (
//   id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
//   email text UNIQUE NOT NULL,
//   created_at timestamptz DEFAULT now(),
//   source text
// );

import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

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

    return NextResponse.json({ status: 'success' }, { status: 200 })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
