import Reveal from '@/components/motion/Reveal'
import { copy } from '@/content/siteCopy'

export default function Ingredients() {
  const { eyebrow, titleLight, titleBold, yes, no } = copy.ingredientes

  return (
    <section
      id="ingredientes"
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

        <Reveal delay={1}>
          <div
            className="ui-grid-border"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}
          >
            {/* YES column */}
            <div className="ui-grid-cell">
              <div
                style={{
                  padding: '1.25rem 2rem',
                  borderBottom: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  {yes.heading}
                </span>
                <span
                  style={{
                    padding: '0.2rem 0.6rem',
                    borderRadius: '99px',
                    fontSize: '0.45rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    background: '#e8f5e9',
                    color: '#2e7d32',
                  }}
                >
                  {yes.badge}
                </span>
              </div>
              {yes.items.map(item => (
                <div
                  key={item.name}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    padding: '1.4rem 2rem',
                    borderBottom: '1px solid var(--border)',
                    gap: '1rem',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#f5f4e8' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}
                >
                  <div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '-0.01em' }}>
                      {item.name}
                    </div>
                    <p style={{ fontSize: '0.55rem', fontWeight: 300, letterSpacing: '0.04em', color: 'var(--muted)', marginTop: '0.25rem', lineHeight: 1.6 }}>
                      {item.note}
                    </p>
                  </div>
                  <span style={{ fontSize: '1rem', flexShrink: 0, marginTop: '0.1rem' }}>{item.icon}</span>
                </div>
              ))}
            </div>

            {/* NO column */}
            <div className="ui-grid-cell">
              <div
                style={{
                  padding: '1.25rem 2rem',
                  borderBottom: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  {no.heading}
                </span>
                <span
                  style={{
                    padding: '0.2rem 0.6rem',
                    borderRadius: '99px',
                    fontSize: '0.45rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    background: '#ffebee',
                    color: '#c62828',
                  }}
                >
                  {no.badge}
                </span>
              </div>
              {no.items.map(item => (
                <div
                  key={item.name}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    padding: '1.4rem 2rem',
                    borderBottom: '1px solid var(--border)',
                    gap: '1rem',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#f5f4e8' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}
                >
                  <div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '-0.01em' }}>
                      {item.name}
                    </div>
                    <p style={{ fontSize: '0.55rem', fontWeight: 300, letterSpacing: '0.04em', color: 'var(--muted)', marginTop: '0.25rem', lineHeight: 1.6 }}>
                      {item.note}
                    </p>
                  </div>
                  <span style={{ fontSize: '1rem', flexShrink: 0, marginTop: '0.1rem' }}>{item.icon}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
