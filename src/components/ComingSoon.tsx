'use client'
/* eslint-disable @next/next/no-img-element */

import type { CSSProperties, FormEvent } from 'react'
import { useMemo, useState } from 'react'

type SubmitState = 'idle' | 'loading' | 'success' | 'already_exists' | 'error'

const backdropStyle: CSSProperties = {
  position: 'fixed',
  inset: 0,
  zIndex: 9000,
  background: 'rgba(14,12,11,0.55)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1.5rem',
}

const cardStyle: CSSProperties = {
  background: 'var(--linen)',
  maxWidth: '480px',
  width: '100%',
  padding: 'clamp(2.5rem, 6vw, 4rem)',
  position: 'relative',
}

const inputBaseStyle: CSSProperties = {
  fontFamily: 'var(--font-unbounded), sans-serif',
  fontWeight: 300,
  fontSize: '0.85rem',
  padding: '0.875rem 1rem',
  border: '1px solid rgba(14,12,11,0.15)',
  background: 'white',
  outline: 'none',
  width: '100%',
  borderRadius: 0,
  color: 'var(--black)',
  transition: 'border-color 160ms ease',
}

const buttonBaseStyle: CSSProperties = {
  fontFamily: 'var(--font-unbounded), sans-serif',
  fontWeight: 600,
  fontSize: '9px',
  letterSpacing: '3px',
  background: 'var(--black)',
  color: 'var(--linen)',
  padding: '0.875rem 1rem',
  border: 'none',
  borderRadius: 0,
  cursor: 'pointer',
  width: '100%',
  transition: 'opacity 160ms ease',
}

const messageStyle: CSSProperties = {
  fontFamily: 'var(--font-unbounded), sans-serif',
  fontWeight: 300,
  fontSize: '0.85rem',
  lineHeight: 1.7,
}

export default function ComingSoon() {
  const [email, setEmail] = useState('')
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [isButtonHovered, setIsButtonHovered] = useState(false)

  const feedback = useMemo(() => {
    if (submitState === 'success') {
      return {
        message: '✦ Te avisamos en cuanto lancemos.',
        color: 'rgba(14,12,11,0.6)',
      }
    }

    if (submitState === 'already_exists') {
      return {
        message: 'Ya estás en la lista. ✦',
        color: 'rgba(14,12,11,0.6)',
      }
    }

    if (submitState === 'error') {
      return {
        message: 'Algo salió mal. Intenta de nuevo.',
        color: '#c0392b',
      }
    }

    return null
  }, [submitState])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (submitState === 'loading') {
      return
    }

    setSubmitState('loading')

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      })

      const payload = (await response.json()) as { status?: string }

      if (!response.ok) {
        setSubmitState('error')
        return
      }

      if (payload.status === 'already_exists') {
        setSubmitState('already_exists')
        return
      }

      if (payload.status === 'success') {
        setSubmitState('success')
        setEmail('')
        return
      }

      setSubmitState('error')
    } catch {
      setSubmitState('error')
    }
  }

  const showForm = submitState !== 'success' && submitState !== 'already_exists'

  return (
    <div style={backdropStyle}>
      <div style={cardStyle}>
        <img
          src="/logo-black.png"
          alt="JUUN"
          style={{ height: '48px', width: 'auto', marginBottom: '2.5rem' }}
        />

        <span
          style={{
            fontFamily: 'var(--font-unbounded), sans-serif',
            fontWeight: 300,
            fontSize: '9px',
            letterSpacing: '6px',
            color: 'rgba(14,12,11,0.35)',
            marginBottom: '1rem',
            display: 'block',
          }}
        >
          MUY PRONTO
        </span>

        <h1
          style={{
            fontFamily: 'var(--font-unbounded), sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
            lineHeight: 1.1,
            letterSpacing: '-1px',
            color: 'var(--black)',
            marginBottom: '1rem',
          }}
        >
          Energía funcional.
          <br />
          Hecho en México.
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-unbounded), sans-serif',
            fontWeight: 300,
            fontSize: '0.82rem',
            lineHeight: 1.7,
            color: 'rgba(14,12,11,0.5)',
            marginBottom: '2rem',
          }}
        >
          Sé el primero en saber cuándo lanzamos.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {showForm ? (
            <form
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
            >
              <input
                type="email"
                placeholder="tu@correo.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
                autoComplete="email"
                spellCheck={false}
                style={{
                  ...inputBaseStyle,
                  borderColor: isInputFocused ? 'rgba(14,12,11,0.5)' : 'rgba(14,12,11,0.15)',
                }}
              />
              <button
                type="submit"
                disabled={submitState === 'loading'}
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
                style={{
                  ...buttonBaseStyle,
                  opacity: isButtonHovered ? 0.85 : 1,
                }}
              >
                {submitState === 'loading' ? 'ENVIANDO...' : 'NOTIFÍCAME'}
              </button>
            </form>
          ) : null}

          {feedback ? (
            <p aria-live="polite" style={{ ...messageStyle, color: feedback.color }}>
              {feedback.message}
            </p>
          ) : null}
        </div>

        <span
          style={{
            fontFamily: 'var(--font-unbounded), sans-serif',
            fontWeight: 300,
            fontSize: '8px',
            letterSpacing: '3px',
            color: 'rgba(14,12,11,0.25)',
            marginTop: '2.5rem',
            display: 'block',
          }}
        >
          JUUN Wellness · Primera Edición
        </span>
      </div>
    </div>
  )
}
