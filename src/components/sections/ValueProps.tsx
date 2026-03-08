'use client'

export default function ValueProps() {
  return (
    <section className="beneficios">
      <div className="value-props-split">
        <div>
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
              <div className="prop-title-cell"><div className="prop-name">Energía limpia</div></div>
              <div className="prop-desc-cell"><p className="prop-desc">Cafeína de guaraná. Energía que dura, sin bajón.</p></div>
            </div>
            <div className="prop-row reveal reveal-d2">
              <span className="prop-num">02</span>
              <div className="prop-title-cell"><div className="prop-name">Claridad mental</div></div>
              <div className="prop-desc-cell"><p className="prop-desc">L-teanina 130 mg. Enfoque claro, sin ansiedad.</p></div>
            </div>
            <div className="prop-row reveal reveal-d3">
              <span className="prop-num">03</span>
              <div className="prop-title-cell"><div className="prop-name">Ingredientes reales</div></div>
              <div className="prop-desc-cell"><p className="prop-desc">Sin conservadores ni artificiales. Etiqueta clara, fórmula real.</p></div>
            </div>
          </div>
        </div>
        <div className="value-props-photo-wrap">
          <img
            src="https://res.cloudinary.com/dzjcndphq/image/upload/f_auto,q_auto,w_900/v1771879163/1A7A1317_mvd47a.jpg"
            alt="JUUN lifestyle"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
          />
        </div>
      </div>
      <style>{`
        .value-props-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: start;
          gap: 0;
        }
        .value-props-photo-wrap {
          position: sticky;
          top: 80px;
          height: 70vh;
          overflow: hidden;
        }
        @media (max-width: 768px) {
          .value-props-split {
            grid-template-columns: 1fr;
          }
          .value-props-photo-wrap {
            position: relative;
            top: 0;
            height: 60vh;
          }
        }
      `}</style>
    </section>
  )
}
