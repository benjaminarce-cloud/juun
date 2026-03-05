'use client'

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="cta-inner reveal">
        <div className="cta-rule" />
        <h2 className="cta-title">
          <span>Hazlo </span>ritual.
        </h2>
        <a href="#comprar" style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", margin:"0 auto", padding:"1rem 2.5rem", background:"#fcfbf0", color:"#0e0c0b", textDecoration:"none", borderRadius:"99px", fontFamily:"'Unbounded', sans-serif", fontSize:"0.65rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", border:"2px solid #fcfbf0", transition:"background 0.3s, color 0.3s", cursor:"pointer" }}>
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
