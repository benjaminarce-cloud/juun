import Reveal from '@/components/motion/Reveal'
import { copy } from '@/content/siteCopy'

export default function ValueProps() {
  const { eyebrow, titleLight, titleBold, subtitle, props } = copy.beneficios

  return (
    <section
      style={{
        paddingTop: 'var(--s-pad)',
        paddingBottom: 'var(--s-pad)',
        paddingLeft: 'var(--gutter)',
        paddingRight: 'var(--gutter)',
      }}
    >
      <div className="ui-container" style={{ padding: 0 }}>

        {/* Header row */}
        <Reveal>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: '4rem',
              gap: '2rem',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <span className="ui-eyebrow">{eyebrow}</span>
              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  marginTop: '0.75rem',
                  maxWidth: '420px',
                }}
              >
                <span style={{ fontWeight: 300 }}>{titleLight}</span>
                {titleBold}
              </h2>
            </div>
            <p
              style={{
                fontSize: '0.62rem',
                fontWeight: 300,
                color: 'var(--muted)',
                letterSpacing: '0.04em',
                lineHeight: 1.9,
                maxWidth: '320px',
              }}
            >
              {subtitle}
            </p>
          </div>
        </Reveal>

        {/* Grid */}
        <div
          className="ui-grid-border"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
          }}
        >
          {props.map((prop, i) => (
            <Reveal
              key={prop.name}
              delay={(i + 1) as 1 | 2 | 3 | 4}
            >
              <div
                className="ui-grid-cell"
                style={{
                  padding: '2.5rem 1.75rem',
                  transition: 'background 0.25s',
                }}
                onMouseEnter={e => {
                  ;(e.currentTarget as HTMLElement).style.background = '#f5f4e8'
                }}
                onMouseLeave={e => {
                  ;(e.currentTarget as HTMLElement).style.background = 'var(--linen)'
                }}
              >
                <span
                  style={{ fontSize: '1.4rem', marginBottom: '1.5rem', display: 'block' }}
                >
                  {prop.icon}
                </span>
                <div
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                    marginBottom: '0.65rem',
                  }}
                >
                  {prop.name}
                </div>
                <p
                  style={{
                    fontSize: '0.6rem',
                    fontWeight: 300,
                    letterSpacing: '0.05em',
                    lineHeight: 1.8,
                    color: 'var(--muted)',
                  }}
                >
                  {prop.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
