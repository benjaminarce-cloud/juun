'use client'

export default function ValueProps() {
  return (
    <section className="beneficios">
      <div className="beneficios-header reveal">
        <div>
          <span className="ui-eyebrow">Por qué JUUN</span>
          <h2 className="beneficios-title" style={{ marginTop: '1rem' }}>
            <span>Energía que </span>dura.
          </h2>
        </div>
      </div>

      <div className="prop-rows">
        <div className="prop-row reveal reveal-d1">
          <span className="prop-num">01</span>
          <div className="prop-title-cell">
            <div className="prop-name">Energía limpia</div>
          </div>
          <div className="prop-desc-cell">
            <p className="prop-desc">
              Impulso natural con cafeína de guaraná. Sin químicos
              impronunciables, solo energía fluida que no te abandona.
            </p>
          </div>
        </div>

        <div className="prop-row reveal reveal-d2">
          <span className="prop-num">02</span>
          <div className="prop-title-cell">
            <div className="prop-name">Claridad mental</div>
          </div>
          <div className="prop-desc-cell">
            <p className="prop-desc">
              Enfoque profundo sin ansiedad. Formulado con L-teanina para que
              tu mente trabaje a su máximo nivel.
            </p>
          </div>
        </div>

        <div className="prop-row reveal reveal-d3">
          <span className="prop-num">03</span>
          <div className="prop-title-cell">
            <div className="prop-name">Ingredientes reales</div>
          </div>
          <div className="prop-desc-cell">
            <p className="prop-desc">
              Lo que ves es lo que bebes. Sin conservadores ni trucos
              artificiales, solo elementos que tu cuerpo reconoce.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
