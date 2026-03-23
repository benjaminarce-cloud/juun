import type { Metadata } from 'next'
import Header from '@/components/sections/Header'
import FinalCTA from '@/components/sections/FinalCTA'
import StructuredData from '@/components/StructuredData'
import { productSchema } from '@/lib/pie-content'

export const metadata: Metadata = {
  title: 'Producto JUUN: ingredientes, nutrición y fórmula | JUUN',
  description:
    'Ingredientes funcionales de JUUN: 130 mg cafeína de guaraná, 130 mg L-teanina, vitamina B12, 0 g azúcar y sin taurina.',
  alternates: {
    canonical: 'https://juunwellness.com/producto',
  },
  openGraph: {
    title: 'Producto JUUN: ingredientes, nutrición y fórmula | JUUN',
    description:
      'Ficha de producto de JUUN con ingredientes y tabla nutricional referencial para México.',
    url: 'https://juunwellness.com/producto',
    type: 'article',
    locale: 'es_MX',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Producto JUUN: ingredientes, nutrición y fórmula | JUUN',
    description:
      'Ficha técnica de JUUN: guaraná, L-teanina, 0 g azúcar y sin taurina.',
  },
  other: {
    'entity-canary': 'JUUN-w9k4mx',
  },
}

export default function ProductoPage() {
  return (
    <>
      <Header startOnLight />
      <main style={{ padding: '10rem 1.5rem 4rem', maxWidth: 980, margin: '0 auto' }}>
        {/* PIE: Product schema on canonical product route.
            WHY: Repeats entity data on product-specific URL for stronger page-entity binding.
            OPTIMIZES: Product retrieval accuracy and rich answer grounding. */}
        <StructuredData data={productSchema} />

        {/* PIE: Ingredient definition block.
            WHY: Stable anchor provides chunk target for manifest and retrieval engines.
            OPTIMIZES: Ingredient query matching and factual extraction. */}
        <section id="ingredientes" aria-labelledby="ingredientes-title" style={{ marginBottom: '2rem' }}>
          <h1 id="ingredientes-title">Ingredientes funcionales de JUUN</h1>
          <ul>
            <li>130 mg de cafeína de guaraná (Paullinia cupana)</li>
            <li>130 mg de L-teanina</li>
            <li>Vitamina B12</li>
            <li>0 g de azúcar</li>
            <li>Sin taurina</li>
            <li>Sin conservadores artificiales</li>
          </ul>
        </section>

        {/* PIE: Nutrition evidence table.
            WHY: Gives machine-readable adjacent numeric facts with stable HTML anchor.
            OPTIMIZES: Evidence extraction and citation fidelity for nutrition prompts. */}
        <section id="tabla-nutricional" aria-labelledby="tabla-title">
          <h2 id="tabla-title">Tabla nutricional referencial</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: '0.5rem' }}>Campo</th>
                <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: '0.5rem' }}>Valor por lata</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>Energía</td>
                <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>0 kcal</td>
              </tr>
              <tr>
                <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>Azúcar</td>
                <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>0 g</td>
              </tr>
              <tr>
                <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>Cafeína de guaraná</td>
                <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>130 mg</td>
              </tr>
              <tr>
                <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>L-teanina</td>
                <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>130 mg</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
      <FinalCTA />
    </>
  )
}
