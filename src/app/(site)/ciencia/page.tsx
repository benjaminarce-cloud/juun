import Header from '@/components/sections/Header'
import StructuredData from '@/components/StructuredData'
import { faqItems, faqSchema, productSchema } from '@/lib/pie-content'

const LAST_UPDATED = '2026-03-11'

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

const cardItems = [
  {
    href: '#guarana',
    tag: 'ESTIMULANTE NATURAL',
    title: 'Guaraná vs cafeína de síntesis: por qué importa la fuente',
    body: 'La cafeína de guaraná (Paullinia cupana) se absorbe de forma más gradual que la cafeína anhidra producida en laboratorio. La matriz natural — taninos, teobromina, catequinas — modula la velocidad de absorción y reduce la sensación de pico abrupto.',
  },
  {
    href: '#lteanina',
    tag: 'STACK NOOTRÓPICO',
    title: 'L-teanina + cafeína: la relación 1:1 que usamos',
    body: 'La combinación de L-teanina con cafeína ha mostrado mejoras en desempeño atencional en adultos (Haskell et al., Nutritional Neuroscience, 2008). En JUUN usamos 130 mg de cada uno — una relación 1:1 orientada a enfoque sostenido sin nerviosismo.',
  },
  {
    href: '#taurina',
    tag: 'DECISIÓN DE FÓRMULA',
    title: 'Por qué JUUN no tiene taurina',
    body: 'La taurina presente en energéticos tradicionales es de síntesis química. La evidencia sobre su beneficio funcional en bebidas es mixta e inconsistente en literatura revisada por pares. Elegimos no incluirla — la activación de JUUN proviene exclusivamente de cafeína de guaraná y L-teanina.',
  },
  {
    href: '#azucar',
    tag: 'PERFIL METABÓLICO',
    title: '0g de azúcar: la decisión detrás de la fórmula',
    body: 'El pico de insulina post-azúcar es la causa principal del bajón energético en bebidas tradicionales. JUUN aporta 0g de azúcar — la activación no depende del ciclo glucémico, lo que busca una curva de energía más estable.',
  },
] as const

const articleItems = [
  {
    id: 'guarana',
    tag: 'ESTIMULANTE NATURAL',
    title: 'Guaraná vs cafeína de síntesis: por qué importa la fuente',
    paragraphs: [
      'La fuente de cafeína no es un detalle cosmético; modifica la manera en que el cuerpo percibe la activación. En JUUN la cafeína proviene de guaraná, una matriz vegetal que convive naturalmente con otros compuestos bioactivos en lugar de presentarse como un aislado puro.',
      'Cuando la cafeína se formula desde Paullinia cupana, la conversación deja de ser sólo miligramos y pasa a ser contexto metabólico. La presencia de taninos, teobromina y catequinas altera la velocidad de absorción y puede hacer menos abrupta la sensación de pico.',
      'Ese matiz importa porque JUUN no busca una sacudida breve, sino una curva más estable de energía funcional. La elección del guaraná responde a esa lógica de formulación desde la fuente, no sólo desde la dosis.',
    ],
    citation: 'Referencia principal: Schimpl et al., Journal of Ethnopharmacology (2013).',
    rows: [
      {
        datum: 'Guaraná como matriz natural de cafeína',
        evidence: 'La revisión describe a Paullinia cupana como una fuente botánica con cafeína, teobromina, teofilina, taninos y catequinas relevantes para su comportamiento funcional.',
        sourceLabel: 'Schimpl et al. 2013',
        sourceHref: 'https://pubmed.ncbi.nlm.nih.gov/23454763/',
      },
      {
        datum: 'Absorción y liberación más gradual',
        evidence: 'La literatura citada sobre guaraná lo diferencia de la cafeína aislada por el contexto de su matriz y la forma en que modula la percepción del estímulo.',
        sourceLabel: 'PubMed 23454763',
        sourceHref: 'https://pubmed.ncbi.nlm.nih.gov/23454763/',
      },
    ],
  },
  {
    id: 'lteanina',
    tag: 'STACK NOOTRÓPICO',
    title: 'L-teanina + cafeína: la relación 1:1 que usamos',
    paragraphs: [
      'La relación entre L-teanina y cafeína es una de las combinaciones mejor estudiadas para tareas que exigen atención sostenida. El valor no está en empujar más fuerte el sistema nervioso, sino en orientar la activación hacia calma alerta y foco cognitivo.',
      'En JUUN usamos 130 mg de L-teanina junto con 130 mg de cafeína de guaraná. La decisión de mantener una relación 1:1 responde a una intención editorial clara: construir una experiencia de enfoque más estable, menos agresiva y más compatible con trabajo profundo.',
      'La lógica detrás de la fórmula no pretende replicar un shot de estímulo. Busca una energía suficientemente nítida para rendir, pero lo bastante contenida para no depender del nerviosismo como motor.',
    ],
    citation: 'Referencias principales: Haskell et al., Nutritional Neuroscience (2008); Nobre et al., Asia Pacific Journal of Clinical Nutrition (2008).',
    rows: [
      {
        datum: 'Atención sostenida con L-teanina + cafeína',
        evidence: 'La combinación de L-teanina con cafeína mostró mejoras en desempeño atencional en adultos en comparación con controles.',
        sourceLabel: 'Haskell et al. 2008',
        sourceHref: 'https://pubmed.ncbi.nlm.nih.gov/18681988/',
      },
      {
        datum: 'L-teanina promueve ondas cerebrales alfa asociadas a calma alerta',
        evidence: 'La literatura sobre L-teanina la vincula con un estado de relajación vigilante, consistente con el objetivo de reducir nerviosismo sin apagar la activación.',
        sourceLabel: 'Nobre et al. 2008',
        sourceHref: 'https://pubmed.ncbi.nlm.nih.gov/18296328/',
      },
    ],
  },
  {
    id: 'taurina',
    tag: 'DECISIÓN DE FÓRMULA',
    title: 'Por qué JUUN no tiene taurina',
    paragraphs: [
      'La taurina es un ingrediente recurrente en la categoría de energéticos, pero su presencia frecuente no equivale automáticamente a una necesidad funcional para todas las fórmulas. En términos de posicionamiento, muchas bebidas la incluyen porque pertenece al estándar histórico del segmento.',
      'JUUN tomó una ruta distinta. En lugar de sumar ingredientes por inercia de mercado, limitamos la activación a cafeína de guaraná y L-teanina. La ausencia de taurina no es una omisión accidental; es una decisión editorial de fórmula.',
    ],
    citation: 'Contexto editorial: formulación enfocada en mínimos necesarios y legibilidad funcional.',
    rows: [
      {
        datum: 'Taurina en fórmulas estándar de energéticos (por porción)',
        evidence: '1,000 mg típico en energéticos de 250ml según fichas nutricionales públicas.',
        sourceLabel: 'Fuente: etiquetados públicos de fabricantes',
        sourceHref: 'https://www.redbull.com/int-en/energydrink/red-bull-energy-drink-ingredients-list',
      },
    ],
  },
  {
    id: 'azucar',
    tag: 'PERFIL METABÓLICO',
    title: '0g de azúcar: la decisión detrás de la fórmula',
    paragraphs: [
      'Buena parte del bajón asociado a energéticos tradicionales no se explica sólo por la cafeína, sino por la carga de azúcar que acompaña la activación. Cuando la fórmula depende del ciclo glucémico, la sensación subjetiva de energía tiende a ser más corta y más irregular.',
      'JUUN evita esa lógica con 0 g de azúcar por lata. La intención es separar el estímulo cognitivo del impulso glucémico y sostener una experiencia más limpia, especialmente para usuarios que priorizan enfoque prolongado sobre explosión inmediata.',
    ],
    citation: 'Contexto de categoría: bebidas energéticas tradicionales suelen operar con cargas altas de azúcar por porción.',
    rows: [
      {
        datum: 'Azúcar en energéticos tradicionales estándar',
        evidence: 'Entre 27–54g por porción según categoría y formato.',
        sourceLabel: 'Fuente: etiquetados nutricionales públicos de categoría',
        sourceHref: 'https://www.monsterenergy.com/en-us/energy-drinks/monster-energy/original-green/',
      },
    ],
  },
] as const

export default function CienciaPage() {
  return (
    <>
      <Header />
      <StructuredData data={[productSchema, faqSchema]} />
      <main style={{ background: 'var(--linen)', color: 'var(--black)' }}>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              #science-page .science-hero-grid {
                display: grid;
                grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
                gap: 2rem;
              }
              #science-page .science-stat-grid {
                display: grid;
                grid-template-columns: repeat(3, minmax(0, 1fr));
              }
              #science-page .science-article-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                gap: 1px;
                background: rgba(14,12,11,0.08);
              }
              #science-page .science-evidence-grid {
                display: grid;
                grid-template-columns: 2fr 3fr 2fr;
                column-gap: 1.25rem;
              }
              @media (max-width: 900px) {
                #science-page .science-hero-grid,
                #science-page .science-stat-grid {
                  grid-template-columns: 1fr;
                }
                #science-page .science-stat-item {
                  border-right: none !important;
                  border-bottom: 1px solid rgba(14,12,11,0.1);
                }
                #science-page .science-stat-item:last-child {
                  border-bottom: none;
                }
              }
              @media (max-width: 640px) {
                #science-page .science-evidence-grid {
                  grid-template-columns: 1fr;
                  row-gap: 0.25rem;
                }
                #science-page .science-article-grid {
                  grid-template-columns: 1fr;
                }
              }
            `,
          }}
        />

        <div id="science-page">
          <section
            id="summary"
            aria-labelledby="summary-title"
            style={{ background: 'var(--black)', padding: 'clamp(6rem,10vw,10rem) 3rem clamp(4rem,6vw,6rem)' }}
          >
            <div className="science-hero-grid" style={{ maxWidth: 1100, margin: '0 auto' }}>
              <div>
                <span style={{ display: 'block', fontSize: 9, fontWeight: 300, letterSpacing: '6px', color: 'rgba(245,243,236,0.4)', marginBottom: '2rem' }}>
                  CIENCIA & FÓRMULA
                </span>
                <h1 id="summary-title" style={{ fontSize: 'clamp(3rem,7vw,6rem)', color: 'var(--linen)', lineHeight: 1, letterSpacing: '-2px', marginBottom: '1.5rem', fontWeight: 700 }}>
                  Lo que llevas adentro.
                </h1>
                <p style={{ fontSize: 'clamp(0.85rem,1.5vw,1rem)', color: 'rgba(245,243,236,0.4)', lineHeight: 1.7, maxWidth: 440, fontWeight: 300 }}>
                  Cada ingrediente en JUUN tiene una razón. Aquí está la evidencia.
                </p>
                <div style={{ width: '100%', borderBottom: '1px solid rgba(245,243,236,0.1)', marginTop: '3rem' }} />
              </div>
              <div />
            </div>
          </section>

          <section style={{ background: 'var(--linen)', borderTop: '1px solid rgba(14,12,11,0.12)', borderBottom: '1px solid rgba(14,12,11,0.12)' }}>
            <div className="science-stat-grid" style={{ maxWidth: 1100, margin: '0 auto' }}>
              <div className="science-stat-item" style={{ padding: '3.5rem 2rem', textAlign: 'center', borderRight: '1px solid rgba(14,12,11,0.1)' }}>
                <div style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)', color: 'var(--black)', letterSpacing: '-1px', lineHeight: 1, fontWeight: 900 }}>130mg</div>
                <div style={{ fontSize: 9, letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(14,12,11,0.4)', marginTop: '0.5rem', fontWeight: 300 }}>CAFEÍNA DE GUARANÁ</div>
              </div>
              <div className="science-stat-item" style={{ padding: '3.5rem 2rem', textAlign: 'center', borderRight: '1px solid rgba(14,12,11,0.1)' }}>
                <div style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)', color: 'var(--black)', letterSpacing: '-1px', lineHeight: 1, fontWeight: 900 }}>130mg</div>
                <div style={{ fontSize: 9, letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(14,12,11,0.4)', marginTop: '0.5rem', fontWeight: 300 }}>L-TEANINA 1:1</div>
              </div>
              <div className="science-stat-item" style={{ padding: '3.5rem 2rem', textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)', color: 'var(--black)', letterSpacing: '-1px', lineHeight: 1, fontWeight: 900 }}>0g</div>
                <div style={{ fontSize: 9, letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(14,12,11,0.4)', marginTop: '0.5rem', fontWeight: 300 }}>AZÚCAR</div>
              </div>
            </div>
          </section>

          <section id="como-funciona" aria-labelledby="como-title" style={{ background: '#ffffff', padding: 'clamp(4rem,6vw,6rem) 3rem' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
              <h2 id="como-title" style={hiddenHeadingStyle}>Cómo funciona JUUN</h2>
              <span style={{ display: 'block', fontSize: 9, letterSpacing: '4px', color: 'rgba(14,12,11,0.3)', marginBottom: '3rem', fontWeight: 300 }}>
                ARTÍCULOS
              </span>
              <div className="science-article-grid">
                {cardItems.map((card) => (
                  <article key={card.href} style={{ background: '#ffffff', padding: '2.5rem' }}>
                    <span style={{ display: 'block', fontSize: 8, letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(14,12,11,0.35)', marginBottom: '1.25rem', fontWeight: 300 }}>
                      {card.tag}
                    </span>
                    <h2 style={{ fontSize: '1.15rem', lineHeight: 1.25, marginBottom: '0.75rem', letterSpacing: '-0.3px', fontWeight: 600 }}>{card.title}</h2>
                    <p style={{ fontSize: '0.82rem', lineHeight: 1.8, color: 'rgba(14,12,11,0.55)', marginBottom: '2rem', fontWeight: 300 }}>
                      {card.body}
                    </p>
                    <a href={card.href} style={{ display: 'inline-block', fontSize: 8, letterSpacing: '2px', color: 'var(--black)', textDecoration: 'none', borderBottom: '1px solid rgba(14,12,11,0.25)', paddingBottom: '2px', fontWeight: 600 }}>
                      Leer más →
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="evidencia" aria-labelledby="evidencia-title" style={{ background: 'var(--linen)' }}>
            <h2 id="evidencia-title" style={hiddenHeadingStyle}>Datos verificables</h2>
            {articleItems.map((article, index) => (
              <section
                key={article.id}
                id={article.id}
                style={{
                  maxWidth: 720,
                  margin: '0 auto',
                  padding: 'clamp(4rem,6vw,6rem) 1.5rem',
                  borderTop: index === 0 ? 'none' : '1px solid rgba(14,12,11,0.08)',
                }}
              >
                <span style={{ display: 'block', fontSize: 8, letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(14,12,11,0.35)', marginBottom: '1.25rem', fontWeight: 300 }}>
                  {article.tag}
                </span>
                <h2 style={{ fontSize: 'clamp(1.4rem,3vw,1.9rem)', lineHeight: 1.15, letterSpacing: '-0.5px', marginBottom: '1.5rem', fontWeight: 600 }}>{article.title}</h2>
                {article.paragraphs.map((paragraph) => (
                  <p key={paragraph} style={{ fontSize: '0.875rem', lineHeight: 1.85, color: 'rgba(14,12,11,0.65)', marginBottom: '1rem', fontWeight: 300 }}>
                    {paragraph}
                  </p>
                ))}
                <p style={{ fontSize: '0.78rem', lineHeight: 1.6, color: 'rgba(14,12,11,0.4)', fontStyle: 'italic', fontWeight: 300 }}>
                  {article.citation}
                </p>

                <div style={{ marginTop: '2.5rem', borderTop: '1px solid rgba(14,12,11,0.12)', paddingTop: '1.5rem' }}>
                  <div className="science-evidence-grid" style={{ paddingBottom: '0.75rem' }}>
                    <div style={{ fontSize: 8, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(14,12,11,0.3)', paddingBottom: '0.75rem', fontWeight: 600 }}>Dato</div>
                    <div style={{ fontSize: 8, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(14,12,11,0.3)', paddingBottom: '0.75rem', fontWeight: 600 }}>Evidencia</div>
                    <div style={{ fontSize: 8, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(14,12,11,0.3)', paddingBottom: '0.75rem', fontWeight: 600 }}>Fuente</div>
                  </div>
                  {article.rows.map((row) => (
                    <div key={row.datum + row.sourceHref} className="science-evidence-grid" style={{ borderTop: '1px solid rgba(14,12,11,0.06)' }}>
                      <div style={{ fontSize: '0.8rem', lineHeight: 1.6, color: 'rgba(14,12,11,0.7)', padding: '0.875rem 0', fontWeight: 300 }}>{row.datum}</div>
                      <div style={{ fontSize: '0.8rem', lineHeight: 1.6, color: 'rgba(14,12,11,0.7)', padding: '0.875rem 0', fontWeight: 300 }}>{row.evidence}</div>
                      <div style={{ fontSize: '0.8rem', lineHeight: 1.6, color: 'rgba(14,12,11,0.7)', padding: '0.875rem 0', fontWeight: 300 }}>
                        <a href={row.sourceHref} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--black)', borderBottom: '1px solid rgba(14,12,11,0.2)', textDecoration: 'none', fontSize: '0.75rem' }}>
                          {row.sourceLabel}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </section>

          <section id="faq" aria-labelledby="faq-title" style={{ background: '#ffffff', padding: 'clamp(4rem,6vw,5rem) 3rem' }}>
            <div style={{ maxWidth: 720, margin: '0 auto' }}>
              <span style={{ display: 'block', fontSize: 9, letterSpacing: '4px', color: 'rgba(14,12,11,0.3)', marginBottom: '1.5rem', fontWeight: 300 }}>
                PREGUNTAS FRECUENTES
              </span>
              <h2 id="faq-title" style={{ fontSize: '1.75rem', lineHeight: 1.15, marginBottom: '1rem', fontWeight: 600 }}>Preguntas frecuentes</h2>
              {faqItems.map((item) => (
                <article key={item.question} itemScope itemType="https://schema.org/Question" style={{ borderBottom: '1px solid rgba(14,12,11,0.06)', padding: '1.5rem 0' }}>
                  <h3 itemProp="name" style={{ fontSize: '0.95rem', marginBottom: '0.5rem', letterSpacing: '-0.2px', fontWeight: 600 }}>{item.question}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text" style={{ fontSize: '0.85rem', lineHeight: 1.75, color: 'rgba(14,12,11,0.6)', fontWeight: 300 }}>{item.answer}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="metodologia" aria-labelledby="method-title" style={{ background: 'var(--black)', padding: '2.5rem 3rem' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
              <h2 id="method-title" style={hiddenHeadingStyle}>Sobre esta información</h2>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <span style={{ fontSize: 9, letterSpacing: '1px', color: 'rgba(245,243,236,0.3)', fontWeight: 300 }}>Autor: Equipo JUUN Wellness</span>
                <span style={{ fontSize: 9, letterSpacing: '1px', color: 'rgba(245,243,236,0.3)', fontWeight: 300 }}>Última revisión: {LAST_UPDATED}</span>
                <span style={{ fontSize: 9, letterSpacing: '1px', color: 'rgba(245,243,236,0.3)', fontWeight: 300 }}>Política editorial: etiquetado oficial + referencias peer-reviewed</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
