export default function Formula() {
  const ingredients = [
    {
      name: 'L-teanina · 130 mg',
      note: 'Promueve la concentración y potencia el rendimiento cognitivo.',
    },
    {
      name: 'Cafeína de guaraná · 130 mg',
      note: 'Aumenta la energía, alerta y concentración mental, de manera natural.',
    },
    {
      name: 'Prebióticos · 1B UFC',
      note: 'Promueve el crecimiento y equilibrio de microbiota.',
    },
    {
      name: 'Vitamina D, complejo B y C',
      note: 'El complejo que el cuerpo usa de verdad.',
    },
    {
      name: 'Saborizantes naturales',
      note: 'Nada artificial. El sabor viene de ingredientes reales.',
    },
    {
      name: 'Alulosa + Stevia',
      note: 'Dulzura limpia con un perfil más balanceado.',
    },
  ]

  return (
    <section className="formula" id="formula">

      <div className="formula-hero reveal">
        <h2 className="formula-title">
          <span className="formula-title-light">La</span>
          <br />
          Fórmula.
        </h2>
      </div>

      <div className="formula-body reveal reveal-d1">
        <div className="formula-col formula-col-full">
          <div className="formula-col-head">
            <span className="formula-col-title">Lo que lleva</span>
            <span className="formula-col-sub">Funcional. Reconocible.</span>
          </div>
          <div className="formula-list-grid">
            {ingredients.map(({ name, note }) => (
              <div className="formula-row" key={name}>
                <div>
                  <div className="formula-ing-name">{name}</div>
                  <details className="formula-note-toggle">
                    <summary aria-label={'Ver detalle de ' + name}>i</summary>
                    <p className="formula-ing-note">{note}</p>
                  </details>
                </div>
                <span className="formula-marker yes">+</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Photo strip — swap placeholder for Cloudinary img when ready */}
      <div className="formula-photo-strip reveal">
        <img src="https://res.cloudinary.com/dzjcndphq/image/upload/f_auto,q_auto,w_1400/v1771879252/1A7A1582_y26zsm.jpg" alt="JUUN en acción" style={{objectPosition:"center 70%", width:"100%", height:"100%", objectFit:"cover", display:"block"}} />
        <span className="formula-photo-caption">México · Primera edición</span>
      </div>

    </section>
  )
}
