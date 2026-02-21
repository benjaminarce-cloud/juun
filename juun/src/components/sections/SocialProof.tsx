import Reveal from '@/components/motion/Reveal'
import { copy } from '@/content/siteCopy'

export default function SocialProof() {
  const { eyebrow, titleLight, titleBold, testimonials } = copy.voces

  return (
    <section
      style={{
        paddingTop: 'var(--s-pad)',
        paddingBottom: 'var(--s-pad)',
        paddingLeft: 'var(--gutter)',
        paddingRight: 'var(--gutter)',
        borderTop: '1px solid var(--border)',
        background: 'var(--black)',
        color: 'var(--linen)',
      }}
    >
      <div className="ui-container" style={{ padding: 0 }}>

        <Reveal>
          <div style={{ marginBottom: '3.5rem' }}>
            <span
              style={{
                display: 'block',
                fontSize: '0.6rem',
                fontWeight: 400,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'rgba(252,251,240,0.35)',
              }}
            >
              {eyebrow}
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                marginTop: '0.75rem',
                color: 'var(--linen)',
              }}
            >
              <span style={{ fontWeight: 300 }}>{titleLight}</span>
              {titleBold}
            </h2>
          </div>
        </Reveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: 'rgba(252,251,240,0.08)',
            border: '1px solid rgba(252,251,240,0.08)',
          }}
        >
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={(i + 1) as 1 | 2 | 3}>
              <div
                style={{
                  background: 'var(--black)',
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  height: '100%',
                  transition: 'background 0.25s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#2d2927' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--black)' }}
              >
                <div style={{ color: 'var(--linen)', fontSize: '0.65rem', letterSpacing: '0.15em' }}>
                  ✦ ✦ ✦ ✦ ✦
                </div>
                <p
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 300,
                    letterSpacing: '0.03em',
                    lineHeight: 1.85,
                    color: 'rgba(252,251,240,0.78)',
                    flex: 1,
                  }}
                >
                  {t.quote}{' '}
                  {t.highlight && (
                    <strong style={{ fontWeight: 700, color: 'var(--linen)' }}>
                      {t.highlight}
                    </strong>
                  )}
                  {t.quoteSuffix ? ` ${t.quoteSuffix}` : ''}
                </p>
                <div
                  style={{
                    fontSize: '0.52rem',
                    fontWeight: 400,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'rgba(252,251,240,0.35)',
                  }}
                >
                  {t.author}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
