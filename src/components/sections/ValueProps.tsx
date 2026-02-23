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
              Cafeína de guaraná y té verde. Sin taurina, sin estimulantes de
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
              L-teanina 128 mg para enfoque sin ansiedad. La combinación que
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
