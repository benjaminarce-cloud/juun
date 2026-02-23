'use client'

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="cta-inner reveal">
        <div className="cta-rule" />
        <h2 className="cta-title">
          <span>Hazlo </span>ritual.
        </h2>
        <p className="cta-sub">Primera edición limitada. Mientras haya.</p>
        <a href="#comprar" className="btn-primary" style={{ margin: '0 auto' }}>
          Comprar ahora
        </a>
        <div className="cta-strip">
          <span className="cta-strip-item">Hecho en México</span>
          <span className="cta-strip-item">@drinkjuun</span>
          
        </div>
      </div>
    </section>
  )
}
