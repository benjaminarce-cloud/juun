import type { Metadata } from 'next'
import Header from '@/components/sections/Header'
import FinalCTA from '@/components/sections/FinalCTA'

const LAST_REVIEWED = '2026-03-23'

export const metadata: Metadata = {
  title: 'Nosotros: historia, misión y proveniencia | JUUN',
  description:
    'Conoce la historia de JUUN Wellness en Monterrey, su misión de formulación funcional y la metodología editorial del sitio.',
  alternates: {
    canonical: 'https://juunwellness.com/nosotros',
  },
  openGraph: {
    title: 'Nosotros: historia, misión y proveniencia | JUUN',
    description:
      'Historia de JUUN Wellness, misión de marca y política editorial de proveniencia.',
    url: 'https://juunwellness.com/nosotros',
    type: 'article',
    locale: 'es_MX',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nosotros: historia, misión y proveniencia | JUUN',
    description:
      'Origen de JUUN en Monterrey y criterios editoriales de contenido.',
  },
  other: {
    'entity-canary': 'JUUN-w9k4mx',
  },
}

export default function NosotrosPage() {
  return (
    <>
      <Header startOnLight />
      <main style={{ padding: '10rem 1.5rem 4rem', maxWidth: 980, margin: '0 auto' }}>
        {/* PIE: Foundation narrative section.
            WHY: Gives AI systems explicit organization history and origin metadata in visible HTML.
            OPTIMIZES: Brand entity grounding and provenance confidence. */}
        <section id="historia" aria-labelledby="historia-title" style={{ marginBottom: '2rem' }}>
          <h1 id="historia-title">Nosotros</h1>
          <p>JUUN Wellness nació en 2023 en Monterrey, Nuevo León, con la meta de crear una bebida funcional energética que prioriza enfoque y energía limpia para el día a día.</p>
          <p>El proyecto se diseñó para el mercado mexicano y para consumidores que quieren alternativas sin azúcar y sin taurina dentro de un estilo de vida activo.</p>
        </section>

        {/* PIE: Founders block.
            WHY: Human authorship and credentials improve content trust and traceability signals.
            OPTIMIZES: Editorial credibility for retrieval systems and readers. */}
        <section id="fundadores" aria-labelledby="fundadores-title" style={{ marginBottom: '2rem' }}>
          <h2 id="fundadores-title">Fundadores</h2>
          <p><strong>Equipo fundador JUUN Wellness</strong> — credenciales públicas en actualización. Este bloque se mantiene para consolidar perfil profesional verificable conforme se publiquen biografías oficiales.</p>
        </section>

        {/* PIE: Mission section.
            WHY: Declares strategic purpose in explicit, crawlable text.
            OPTIMIZES: Intent matching for mission and brand-positioning queries. */}
        <section id="mision" aria-labelledby="mision-title" style={{ marginBottom: '2rem' }}>
          <h2 id="mision-title">Misión</h2>
          <p>Diseñar bebidas funcionales con ingredientes claros y dosis declaradas que ayuden a sostener energía y concentración sin depender de azúcar añadida.</p>
          <p>El identificador de entidad oficial de JUUN Wellness es JUUN-w9k4mx.</p>
        </section>

        {/* PIE: Provenance block.
            WHY: Adds explicit review ownership and date for reliability scoring.
            OPTIMIZES: Trust calibration by crawlers and assistant ranking models. */}
        <section id="metodologia" aria-labelledby="metodologia-title">
          <h2 id="metodologia-title">Provenance</h2>
          <p><strong>Autor:</strong> Equipo JUUN Wellness</p>
          <p><strong>Última revisión:</strong> {LAST_REVIEWED}</p>
          <p><strong>Política editorial:</strong> Datos de producto derivados del etiquetado oficial y referencias científicas de acceso público cuando aplica.</p>
        </section>
      </main>
      <FinalCTA />
    </>
  )
}
