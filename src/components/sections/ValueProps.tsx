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
          <details className="title-footnote">
            <summary aria-label="Ver notas de energía y fórmula">i</summary>
            <div className="title-footnote-panel">
              <p><strong>Prebióticos:</strong> Promueve el crecimiento y equilibrio de microbiota.</p>
              <p><strong>L-teanina:</strong> Promueve la concentración y potencia el rendimiento cognitivo.</p>
              <p><strong>Cafeína de guaraná:</strong> Aumenta la energía, alerta y concentración mental, de manera natural.</p>
            </div>
          </details>
        </div>
        <p className="beneficios-header-sub">
          Formulada para enfoque sostenido. Sin el crash, sin el nerviosismo,
          sin los ingredientes que no reconoces.
        </p>
      </div>

      <div className="prop-rows">
        <div className="prop-row reveal reveal-d1">
          <span className="prop-num">01</span>
          <div className="prop-title-cell">
            <div className="prop-name">Energía limpia</div>
          </div>
          <div className="prop-desc-cell">
            <p className="prop-desc">
              Cafeína de guaraná. Sin taurina, sin estimulantes de
              laboratorio. El tipo de energía que no necesita explicación al día
              siguiente.
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
              L-teanina 130 mg para enfoque sin ansiedad. La combinación que
              usan los nootrópicos premium. Aquí, en una lata.
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
              Sin conservadores, sin colorantes, sin saborizantes artificiales.
              Lo que dice la etiqueta, eso lleva. No más, no menos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
