'use client'

import { copy } from '@/content/siteCopy'
import { scrollToId } from '@/lib/scroll'

export default function FinalCTA() {
  const { stars, titleLight, titleBold, subtitle, cta, strip } = copy.finalCta
  const footer = copy.footer

  return (
    <>
      {/* ── FINAL CTA ─────────────────────────────────── */}
      <section
        style={{
          paddingTop: 'var(--s-pad)',
          paddingBottom: 'var(--s-pad)',
          paddingLeft: 'var(--gutter)',
          paddingRight: 'var(--gutter)',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Giant watermark */}
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            fontSize: 'clamp(8rem, 25vw, 20rem)',
            fontWeight: 900,
            letterSpacing: '-0.05em',
            color: 'rgba(35,31,32,0.03)',
            pointerEvents: 'none',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            whiteSpace: 'nowrap',
            userSelect: 'none',
          }}
        >
          JUUN
        </span>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              fontSize: '1.2rem',
              color: 'var(--muted)',
              letterSpacing: '0.4rem',
              marginBottom: '2rem',
            }}
          >
            {stars}
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 6vw, 5rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 1.0,
              marginBottom: '0.5rem',
            }}
          >
            <span style={{ fontWeight: 300 }}>{titleLight}</span>
            {titleBold}
          </h2>

          <p
            style={{
              fontSize: 'clamp(0.65rem, 1.2vw, 0.8rem)',
              fontWeight: 300,
              letterSpacing: '0.08em',
              color: 'var(--muted)',
              marginBottom: '3rem',
              lineHeight: 1.8,
            }}
          >
            {subtitle}
          </p>

          <button
            onClick={() => scrollToId('comprar')}
            className="ui-btn-dark"
            style={{ margin: '0 auto' }}
          >
            {cta} ✦
          </button>

          <div
            style={{
              marginTop: '3rem',
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {strip.map((item, i) => (
              <span
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2rem',
                  fontSize: '0.55rem',
                  fontWeight: 300,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                }}
              >
                {i > 0 && (
                  <span aria-hidden="true" style={{ color: 'var(--border)' }}>·</span>
                )}
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────── */}
      <footer
        style={{
          padding: '2rem var(--gutter)',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <span
          style={{
            fontSize: '0.7rem',
            fontWeight: 900,
            letterSpacing: '-0.01em',
            color: 'var(--black)',
          }}
        >
          JUUN{' '}
          <span
            style={{
              fontWeight: 300,
              fontSize: '0.55rem',
              letterSpacing: '0.15em',
            }}
          >
            wellness
          </span>
        </span>

        <nav
          style={{ display: 'flex', gap: '1.5rem' }}
          aria-label="Footer navigation"
        >
          {footer.links.map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{
                fontSize: '0.52rem',
                fontWeight: 400,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--black)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--muted)' }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <span
          style={{
            fontSize: '0.52rem',
            fontWeight: 300,
            letterSpacing: '0.08em',
            color: 'var(--muted)',
          }}
        >
          {footer.copy}
        </span>
      </footer>
    </>
  )
}
