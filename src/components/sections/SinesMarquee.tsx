import { copy } from '@/content/siteCopy'

// Double the items for seamless CSS loop
const items = [...copy.sines, ...copy.sines]

export default function SinesMarquee() {
  return (
    <div
      style={{
        paddingTop: '2.25rem',
        paddingBottom: '2.25rem',
        paddingLeft: 'var(--gutter)',
        paddingRight: 'var(--gutter)',
        borderBottom: '1px solid var(--border)',
        overflow: 'hidden',
      }}
      aria-hidden="true" // decorative
    >
      <div
        className="marquee-track"
        style={{
          display: 'flex',
          gap: '3rem',
          whiteSpace: 'nowrap',
          width: 'max-content',
        }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontSize: '0.6rem',
              fontWeight: item.positive ? 600 : 400,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: item.positive ? 'var(--black)' : 'var(--muted)',
            }}
          >
            <span
              style={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                background: item.positive ? 'var(--black)' : 'var(--border)',
                flexShrink: 0,
                display: 'inline-block',
              }}
            />
            {item.label}
          </span>
        ))}
      </div>
    </div>
  )
}
