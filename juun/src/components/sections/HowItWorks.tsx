import Reveal from '@/components/motion/Reveal'
import { copy } from '@/content/siteCopy'

export default function HowItWorks() {
  const { eyebrow, titleLight, titleBold, steps } = copy.como

  return (
    <section
      style={{
        paddingTop: 'var(--s-pad)',
        paddingBottom: 'var(--s-pad)',
        paddingLeft: 'var(--gutter)',
        paddingRight: 'var(--gutter)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="ui-container" style={{ padding: 0 }}>

        <Reveal>
          <div style={{ marginBottom: '4rem' }}>
            <span className="ui-eyebrow">{eyebrow}</span>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                marginTop: '0.75rem',
              }}
            >
              <span style={{ fontWeight: 300 }}>{titleLight}</span>
              {titleBold}
            </h2>
          </div>
        </Reveal>

        <div
          className="ui-grid-border"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}
        >
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={(i + 1) as 1 | 2 | 3}>
              <div
                className="ui-grid-cell"
                style={{
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 900,
                    color: 'var(--border)',
                    letterSpacing: '-0.05em',
                    lineHeight: 1,
                  }}
                >
                  {step.num}
                </div>
                <div
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {step.title}
                </div>
                <p
                  style={{
                    fontSize: '0.6rem',
                    fontWeight: 300,
                    letterSpacing: '0.04em',
                    lineHeight: 1.9,
                    color: 'var(--muted)',
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
