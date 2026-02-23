export default function Formula() {
  return (
    <section className="formula" id="formula">

      <div className="formula-hero reveal">
        <h2 className="formula-title">
          <span className="formula-title-light">La</span>
          <br />
          Fórmula.
        </h2>
        <div className="formula-intro">
          <span
            className="ui-eyebrow"
            style={{ color: 'rgba(252,251,240,0.28)', marginBottom: '1rem' }}
          >
            Lo que hay adentro
          </span>
          <p className="formula-intro-text">
            Cada ingrediente tiene un propósito. Ninguno está de adorno. La
            lista es corta porque así debe ser.
          </p>
        </div>
      </div>

      <div className="formula-body reveal reveal-d1">

        {/* Lo que SÍ lleva */}
        <div className="formula-col">
          <div className="formula-col-head">
            <span className="formula-col-title">Lo que SÍ lleva</span>
            <span className="formula-col-sub">Funcional. Reconocible.</span>
          </div>
          {[
            { name: 'L-teanina · 128 mg',           note: 'Aminoácido del té verde. Enfoque sin nerviosismo.' },
            { name: 'Cafeína de guaraná · 120 mg',   note: 'Liberación gradual. Sin el pico abrupto del café.' },
            { name: 'Probióticos · 1B UFC',           note: 'Bacillus coagulans. Microbioma primero.' },
            { name: 'Vitaminas B3, B6, B12, C, D',   note: 'El complejo que el cuerpo usa de verdad.' },
            { name: 'Fibra de agave · 3 g',           note: 'Prebiótico de origen mexicano. Alimenta lo bueno.' },
            { name: 'Alulosa',                        note: 'Dulzura real. Sin impacto glucémico.' },
          ].map(({ name, note }) => (
            <div className="formula-row" key={name}>
              <div>
                <div className="formula-ing-name">{name}</div>
                <p className="formula-ing-note">{note}</p>
              </div>
              <span className="formula-marker yes">+</span>
            </div>
          ))}
        </div>

        {/* Lo que NO lleva */}
        <div className="formula-col">
          <div className="formula-col-head">
            <span className="formula-col-title">Lo que NO lleva</span>
            <span className="formula-col-sub">Sin lo que cuestionas.</span>
          </div>
          {[
            { name: 'Sin taurina',                   note: 'La energía no necesita aminoácidos sintéticos de dudosa reputación.' },
            { name: 'Sin azúcar añadida',             note: '0g. Sin jeringas de glucosa, sin crash post-bebida.' },
            { name: 'Sin colorantes artificiales',    note: 'El color viene del saborizante natural, no de FD&C.' },
            { name: 'Sin conservadores',              note: 'Formulada para ser limpia de etiqueta a etiqueta.' },
            { name: 'Sin aspartame',                  note: 'Sin edulcorantes polémicos. La dulzura viene de alulosa.' },
            { name: 'Sin estimulantes sintéticos',    note: 'Sin guaraná artificial, sin niacina excesiva, sin el pico falso.' },
          ].map(({ name, note }) => (
            <div className="formula-row" key={name}>
              <div>
                <div className="formula-ing-name">{name}</div>
                <p className="formula-ing-note">{note}</p>
              </div>
              <span className="formula-marker no">·</span>
            </div>
          ))}
        </div>

      </div>

      {/* Photo strip — swap placeholder for Cloudinary img when ready */}
      <div className="formula-photo-strip reveal">
        <img src="https://res.cloudinary.com/dzjcndphq/image/upload/v1771879295/1A7A1849-2_bn9pv9.jpg" alt="JUUN en acción" />
        <span className="formula-photo-caption">México · Primera edición</span>
      </div>

    </section>
  )
}
