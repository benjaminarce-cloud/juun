'use client'

const testimonials = [
  {
    quote: (
      <>
        &ldquo;Se siente premium, no empalagosa, no intensa.{' '}
        <strong>Justo limpia.</strong>&rdquo;
      </>
    ),
    author: 'Beta tester · México',
  },
  {
    quote: (
      <>
        &ldquo;El tipo de energía que puedo{' '}
        <strong>repetir todos los días</strong> sin sentirme mal al
        final.&rdquo;
      </>
    ),
    author: 'Corredora · CDMX',
  },
  {
    quote: (
      <>
        &ldquo;El empaque ya lo decía todo, y la bebida{' '}
        <strong>lo cumplió.</strong> Pocas veces pasa eso.&rdquo;
      </>
    ),
    author: 'Diseñador · Guadalajara',
  },
]

export default function SocialProof() {
  return (
    <section className="voces">
      <div className="voces-inner">
        <span className="ui-eyebrow voces-eyebrow">Primeras voces</span>
        <h2 className="voces-title">
          <span>La gente </span>habla.
        </h2>
        <div className="testimonials">
          {testimonials.map((t, i) => (
            <div
              className={`testi reveal reveal-d${i + 1}`}
              key={i}
            >
              <p className="testi-quote">{t.quote}</p>
              <div className="testi-author">{t.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
