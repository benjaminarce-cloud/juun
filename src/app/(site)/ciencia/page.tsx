import Header from '@/components/sections/Header'
import StructuredData from '@/components/StructuredData'
import { faqItems, faqSchema, productSchema } from '@/lib/pie-content'

const LAST_UPDATED = '2026-03-11'

const cardItems = [
  {
    href: '#guarana',
    tag: 'ESTIMULANTE NATURAL',
    title: 'Guaraná vs cafeína sintética: por qué importa la fuente',
    body: 'La cafeína de guaraná (Paullinia cupana) se absorbe de forma más gradual que la cafeína anhidra de laboratorio. La matriz natural — taninos, teobromina, catequinas — modula la velocidad de absorción y reduce la sensación de pico abrupto.',
  },
  {
    href: '#lteanina',
    tag: 'STACK NOOTRÓPICO',
    title: 'L-teanina + cafeína: la relación 1:1 que usamos',
    body: 'La combinación de 97 mg de L-teanina con 40 mg de cafeína mejoró el desempeño atencional en adultos (Haskell et al., 2008). En JUUN usamos 130 mg de cada uno — una relación 1:1 diseñada para enfoque sostenido sin nerviosismo.',
  },
  {
    href: '#taurina',
    tag: 'DECISIÓN DE FÓRMULA',
    title: 'Por qué JUUN no tiene taurina',
    body: 'La taurina en energéticos tradicionales como Red Bull (1,000 mg por lata) es de síntesis química. La evidencia sobre su beneficio funcional en bebidas es mixta. Elegimos no incluirla — la activación de JUUN proviene exclusivamente de cafeína de guaraná y L-teanina.',
  },
  {
    href: '#azucar',
    tag: 'PERFIL METABÓLICO',
    title: '0g de azúcar: la decisión detrás de la fórmula',
    body: "El pico de insulina post-azúcar es la causa principal del 'bajón' en energéticos tradicionales. Monster original (473ml) aporta 54g de azúcar. JUUN aporta 0g — la activación no depende del ciclo glucémico.",
  },
] as const

const articleItems = [
  {
    id: 'guarana',
    tag: 'ESTIMULANTE NATURAL',
    title: 'Guaraná vs cafeína sintética: por qué importa la fuente',
    paragraphs: [
      'La fuente de cafeína cambia la experiencia subjetiva de la activación. En JUUN la cafeína proviene de guaraná, una semilla vegetal conocida por contener metilxantinas junto con otros compuestos bioactivos presentes de forma natural.',
      'Frente a la cafeína anhidra aislada, la matriz de Paullinia cupana introduce un contexto botánico distinto. Esa diferencia es parte de la razón por la que formulamos JUUN alrededor de guaraná y no de un estimulante sintético desnudo.',
    ],
    rows: [
      {
        label: 'DATO',
        evidence: 'La composición del guaraná incluye cafeína y otros compuestos de la matriz natural asociados a una liberación más gradual.',
        source: {
          href: 'https://pubmed.ncbi.nlm.nih.gov/23454763/',
          label: 'Schimpl et al., Journal of Ethnopharmacology (2013)',
        },
      },
      {
        label: 'CONTEXTO',
        evidence: 'JUUN utiliza 130 mg de cafeína de guaraná por lata como base de su perfil de energía sostenida.',
        source: {
          href: 'https://juunwellness.com/producto/',
          label: 'Perfil oficial del producto JUUN',
        },
      },
    ],
  },
  {
    id: 'lteanina',
    tag: 'STACK NOOTRÓPICO',
    title: 'L-teanina + cafeína: la relación 1:1 que usamos',
    paragraphs: [
      'La combinación entre cafeína y L-teanina es una de las asociaciones funcionales mejor conocidas para atención sostenida. No se trata de aumentar la estimulación a cualquier costo, sino de orientar el estado mental hacia enfoque y claridad.',
      'JUUN usa 130 mg de L-teanina junto con 130 mg de cafeína de guaraná. La lógica de la relación 1:1 es construir una curva de energía más estable y reducir el componente de nerviosismo que suele aparecer cuando el sistema depende sólo de estimulantes.',
    ],
    rows: [
      {
        label: 'DATO',
        evidence: '97 mg de L-teanina + 40 mg de cafeína mejoró desempeño atencional en adultos.',
        source: {
          href: 'https://pubmed.ncbi.nlm.nih.gov/18681988/',
          label: 'Haskell et al., Nutritional Neuroscience (2008)',
        },
      },
      {
        label: 'FORMULACIÓN JUUN',
        evidence: 'JUUN replica una lógica de sinergia funcional con 130 mg de L-teanina y 130 mg de cafeína.',
        source: {
          href: 'https://juunwellness.com/producto/',
          label: 'Perfil oficial del producto JUUN',
        },
      },
    ],
  },
  {
    id: 'taurina',
    tag: 'DECISIÓN DE FÓRMULA',
    title: 'Por qué JUUN no tiene taurina',
    paragraphs: [
      'Muchas bebidas energéticas tradicionales combinan cafeína con taurina. En ese formato, la taurina suele presentarse como un ingrediente estándar de categoría más que como una necesidad funcional respaldada por una ventaja clara para el uso cotidiano.',
      'La decisión de JUUN fue recortar complejidad en lugar de agregarla. La activación viene de cafeína de guaraná y L-teanina; no incluimos taurina porque la propuesta de valor del producto ya está resuelta sin ella.',
    ],
    rows: [
      {
        label: 'DATO',
        evidence: 'Red Bull 250 ml declara 1,000 mg de taurina por lata.',
        source: {
          href: 'https://www.redbull.com/int-en/energydrink/red-bull-energy-drink-ingredients-list',
          label: 'Red Bull Energy Drink ingredients list',
        },
      },
      {
        label: 'FORMULACIÓN JUUN',
        evidence: 'JUUN comunica una fórmula sin taurina; la activación funcional se basa en guaraná y L-teanina.',
        source: {
          href: 'https://juunwellness.com/producto/',
          label: 'Perfil oficial del producto JUUN',
        },
      },
    ],
  },
  {
    id: 'azucar',
    tag: 'PERFIL METABÓLICO',
    title: '0g de azúcar: la decisión detrás de la fórmula',
    paragraphs: [
      'La activación de JUUN no depende de una carga glucémica. Ese punto es central para la experiencia del producto: evitar el ciclo clásico de pico y caída que acompaña a muchas bebidas energéticas azucaradas.',
      'Con 0 g de azúcar por lata, la fórmula desplaza el centro de gravedad hacia ingredientes funcionales. La sensación buscada es claridad sostenida, no un impulso breve apoyado por azúcar líquida.',
    ],
    rows: [
      {
        label: 'DATO',
        evidence: 'Monster original 473 ml aporta 54 g de azúcar por lata.',
        source: {
          href: 'https://www.monsterenergy.com/en-us/energy-drinks/monster-energy/original-green/',
          label: 'Monster Energy Original Green',
        },
      },
      {
        label: 'FORMULACIÓN JUUN',
        evidence: 'JUUN aporta 0 g de azúcar por lata dentro de su perfil principal de producto.',
        source: {
          href: 'https://juunwellness.com/producto/',
          label: 'Perfil oficial del producto JUUN',
        },
      },
    ],
  },
] as const

const hiddenHeadingStyle = {
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
} as const

export default function CienciaPage() {
  return (
    <>
      <Header />
      <StructuredData data={[productSchema, faqSchema]} />
      <main style={{ background: 'var(--linen)', color: 'var(--black)' }}>
        <section
          id="summary"
          aria-labelledby="summary-title"
          style={{ width: '100%', background: 'var(--black)', padding: '8rem 3rem 5rem' }}
        >
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <p style={{ fontSize: 9, fontWeight: 300, letterSpacing: '6px', textTransform: 'uppercase', color: '#c8f04a', marginBottom: '1.5rem' }}>
              FÓRMULA & CIENCIA
            </p>
            <div style={{ width: 48, height: 2, background: '#c8f04a', marginBottom: '1.5rem' }} />
            <h1 id="summary-title" style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', lineHeight: 1.05, letterSpacing: '-2px', color: 'var(--linen)', fontWeight: 700, maxWidth: 760 }}>
              Lo que llevas adentro.
            </h1>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'rgba(245,243,236,0.45)', fontWeight: 300, maxWidth: 480, marginTop: '1rem' }}>
              Cada ingrediente en JUUN tiene una razón. Aquí está la evidencia.
            </p>
          </div>
        </section>

        <section style={{ width: '100%', background: 'var(--linen)', borderTop: '2px solid #c8f04a' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            <div style={{ padding: '3rem 2rem', textAlign: 'center', borderRight: '1px solid rgba(14,12,11,0.1)' }}>
              <div style={{ fontSize: '3.5rem', lineHeight: 1, fontWeight: 900, color: 'var(--black)', marginBottom: '0.75rem' }}>130mg</div>
              <div style={{ fontSize: 10, fontWeight: 300, letterSpacing: '3px', textTransform: 'uppercase', opacity: 0.45 }}>CAFEÍNA DE GUARANÁ</div>
            </div>
            <div style={{ padding: '3rem 2rem', textAlign: 'center', borderRight: '1px solid rgba(14,12,11,0.1)' }}>
              <div style={{ fontSize: '3.5rem', lineHeight: 1, fontWeight: 900, color: 'var(--black)', marginBottom: '0.75rem' }}>130mg</div>
              <div style={{ fontSize: 10, fontWeight: 300, letterSpacing: '3px', textTransform: 'uppercase', opacity: 0.45 }}>L-TEANINA 1:1</div>
            </div>
            <div style={{ padding: '3rem 2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3.5rem', lineHeight: 1, fontWeight: 900, color: 'var(--black)', marginBottom: '0.75rem' }}>0g</div>
              <div style={{ fontSize: 10, fontWeight: 300, letterSpacing: '3px', textTransform: 'uppercase', opacity: 0.45 }}>AZÚCAR</div>
            </div>
          </div>
        </section>

        <section
          id="como-funciona"
          aria-labelledby="como-title"
          style={{ background: 'var(--linen)', padding: '5rem 3rem' }}
        >
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 id="como-title" style={hiddenHeadingStyle}>Cómo funciona JUUN</h2>
            <p style={{ fontSize: 9, fontWeight: 300, letterSpacing: '4px', textTransform: 'uppercase', opacity: 0.3, marginBottom: '3rem' }}>
              ARTÍCULOS
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '2px' }}>
              {cardItems.map((card) => (
                <article key={card.href} style={{ background: '#fff', padding: '2.5rem', borderRadius: 0, border: '1px solid rgba(14,12,11,0.06)' }}>
                  <p style={{ fontSize: 8, fontWeight: 300, letterSpacing: '3px', textTransform: 'uppercase', color: '#c8f04a', marginBottom: '1rem' }}>
                    {card.tag}
                  </p>
                  <h2 style={{ fontSize: '1.25rem', lineHeight: 1.2, fontWeight: 600, marginBottom: '0.75rem' }}>{card.title}</h2>
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.75, fontWeight: 300, color: 'rgba(14,12,11,0.6)', marginBottom: '1.5rem' }}>
                    {card.body}
                  </p>
                  <a
                    href={card.href}
                    style={{ fontSize: 9, letterSpacing: '2px', fontWeight: 600, color: 'var(--black)', textDecoration: 'none', borderBottom: '1px solid #c8f04a', paddingBottom: 2 }}
                  >
                    Leer más ↓
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="evidencia"
          aria-labelledby="evidencia-title"
          style={{ background: 'var(--linen)' }}
        >
          <h2 id="evidencia-title" style={hiddenHeadingStyle}>Datos verificables</h2>
          {articleItems.map((article, index) => (
            <article
              key={article.id}
              id={article.id}
              style={{
                borderTop: '1px solid rgba(14,12,11,0.08)',
                padding: index === 0 ? '5rem 1.5rem' : '5rem 1.5rem',
              }}
            >
              <div style={{ maxWidth: 760, margin: '0 auto' }}>
                <p style={{ fontSize: 8, fontWeight: 300, letterSpacing: '3px', textTransform: 'uppercase', color: '#c8f04a', marginBottom: '1rem' }}>
                  {article.tag}
                </p>
                <h2 style={{ fontSize: '1.5rem', lineHeight: 1.2, fontWeight: 600, marginBottom: '1rem' }}>{article.title}</h2>
                <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
                  {article.paragraphs.map((paragraph) => (
                    <p key={paragraph} style={{ fontSize: '0.9rem', lineHeight: 1.8, fontWeight: 300, color: 'rgba(14,12,11,0.78)' }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div style={{ display: 'grid', gap: 0 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', padding: '0 0 1rem', borderBottom: '1px solid rgba(14,12,11,0.06)' }}>
                    <div style={{ fontSize: 8, letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600, opacity: 0.35 }}>Dato</div>
                    <div style={{ fontSize: 8, letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600, opacity: 0.35 }}>Evidencia</div>
                    <div style={{ fontSize: 8, letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600, opacity: 0.35 }}>Fuente</div>
                  </div>
                  {article.rows.map((row) => (
                    <div key={row.label + row.source.href} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', padding: '1rem 0', borderBottom: '1px solid rgba(14,12,11,0.06)' }}>
                      <p style={{ fontSize: '0.8rem', lineHeight: 1.75, fontWeight: 300 }}>{row.label}</p>
                      <p style={{ fontSize: '0.8rem', lineHeight: 1.75, fontWeight: 300 }}>{row.evidence}</p>
                      <p style={{ fontSize: '0.8rem', lineHeight: 1.75, fontWeight: 300 }}>
                        <a href={row.source.href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--black)', borderBottom: '1px solid rgba(14,12,11,0.2)', textDecoration: 'none' }}>
                          {row.source.label}
                        </a>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>

        <section
          id="faq"
          aria-labelledby="faq-title"
          style={{ background: '#fff', padding: '5rem 3rem' }}
        >
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <p style={{ fontSize: 8, fontWeight: 300, letterSpacing: '3px', textTransform: 'uppercase', color: '#c8f04a', marginBottom: '1rem' }}>
              PREGUNTAS FRECUENTES
            </p>
            <h2 id="faq-title" style={{ fontSize: '1.75rem', lineHeight: 1.15, fontWeight: 600, marginBottom: '1.5rem' }}>Preguntas frecuentes</h2>
            <div>
              {faqItems.map((item) => (
                <article key={item.question} itemScope itemType="https://schema.org/Question" style={{ padding: '1rem 0', borderBottom: '1px solid rgba(14,12,11,0.06)' }}>
                  <h3 itemProp="name" style={{ fontSize: '1rem', lineHeight: 1.4, fontWeight: 600, marginBottom: '0.55rem' }}>{item.question}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text" style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.7, fontWeight: 300 }}>{item.answer}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="metodologia"
          aria-labelledby="method-title"
          style={{ width: '100%', background: 'var(--black)', padding: '2.5rem 3rem' }}
        >
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 id="method-title" style={hiddenHeadingStyle}>Sobre esta información</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem 1.5rem' }}>
              <p style={{ fontSize: 10, fontWeight: 300, color: 'rgba(245,243,236,0.4)', letterSpacing: '1px' }}>Autor: Equipo JUUN Wellness</p>
              <p style={{ fontSize: 10, fontWeight: 300, color: 'rgba(245,243,236,0.4)', letterSpacing: '1px' }}>Última revisión: {LAST_UPDATED}</p>
              <p style={{ fontSize: 10, fontWeight: 300, color: 'rgba(245,243,236,0.4)', letterSpacing: '1px' }}>Política editorial: etiquetado oficial + referencias peer-reviewed</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
