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
            className="value-props-photo"
            src="https://res.cloudinary.com/dzjcndphq/image/upload/f_auto,q_auto,w_900/v1771879236/1A7A1501_gl2s01.jpg"
            alt="JUUN lifestyle"
          />
        </div>
      </div>
      <style>{`
        .value-props-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: stretch;
          gap: 0;
        }
        .value-props-photo-wrap {
          height: 100%;
          min-height: 60vh;
          overflow: hidden;
        }
        .value-props-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 50%;
        }
        @media (max-width: 768px) {
          .value-props-split {
            grid-template-columns: 1fr;
          }
          .value-props-photo-wrap {
            height: 48svh;
            min-height: 20rem;
          }
          .value-props-photo {
            object-position: center 42%;
          }
        }
        @media (max-width: 480px) {
          .value-props-photo-wrap {
            height: 42svh;
            min-height: 16rem;
          }
          .value-props-photo {
            object-position: center 38%;
          }
        }
      `}</style>
    </section>
  )
}
