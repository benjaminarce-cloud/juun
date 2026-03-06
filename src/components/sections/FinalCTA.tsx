'use client'

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="cta-inner reveal">
        <div className="cta-rule" />
        <h2 className="cta-title">
          <span>| Functional </span> Energy |
        </h2>
        <a href="#comprar" style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", margin:"0 auto", padding:"1rem 2.5rem", background:"#fcfbf0", color:"#0e0c0b", textDecoration:"none", borderRadius:"99px", fontFamily:"'Unbounded', sans-serif", fontSize:"0.65rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", border:"2px solid #fcfbf0", transition:"background 0.3s, color 0.3s", cursor:"pointer" }}>
          Comprar ahora
        </a>
        <div className="cta-strip">
          <span className="cta-strip-item">Hecho en México</span>
          <a
            href="https://www.instagram.com/drinkjuun/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.55rem 1.1rem',
              border: '1px solid rgba(14,12,11,0.2)',
              borderRadius: '99px',
              textDecoration: 'none',
              color: '#0e0c0b',
              fontSize: '0.62rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              transition: 'background 0.3s, border-color 0.3s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(14,12,11,0.06)'
              ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(14,12,11,0.4)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'
              ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(14,12,11,0.2)'
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
            </svg>
            @drinkjuun
          </a>
          
        </div>
      </div>
    </section>
  )
}
