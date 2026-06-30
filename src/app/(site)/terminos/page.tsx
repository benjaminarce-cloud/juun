import type { Metadata } from 'next'
import Header from '@/components/sections/Header'

export const metadata: Metadata = {
  title: 'Términos y Condiciones | JUUN Wellness',
  description: 'Términos y condiciones de compra de JUUN Wellness.',
  alternates: { canonical: 'https://juunwellness.com/terminos' },
  robots: { index: true, follow: true },
}

export default function TerminosPage() {
  return (
    <>
      <Header startOnLight />
      <main>
        <section style={{ paddingTop: '9rem', paddingBottom: '6rem' }}>
          <div className="container" style={{ maxWidth: '720px', margin: '0 auto' }}>
            <Legal />
          </div>
        </section>
      </main>
    </>
  )
}

function Legal() {
  return (
    <div style={{ color: '#231f20', fontFamily: 'inherit' }}>
      <p style={eyebrow}>Términos y Condiciones</p>
      <h1 style={title}>Condiciones<br /><span style={{ fontWeight: 300 }}>de compra.</span></h1>
      <p style={meta}>Última actualización: 30 de junio de 2026</p>

      <hr style={rule} />

      <Section heading="1. Aceptación">
        <p style={body}>
          Al realizar una compra en juunwellness.com, usted acepta estos términos y condiciones en su totalidad. Si no está de acuerdo con alguno de ellos, le pedimos no continuar con la compra.
        </p>
      </Section>

      <Section heading="2. Responsable">
        <p style={body}>
          GRUPO AVIAX S. DE R.L. DE C.V. ("JUUN Wellness"), con domicilio en Mexicali, Baja California, México. Contacto: <a href="mailto:hola@juunwellness.com" style={link}>hola@juunwellness.com</a>
        </p>
      </Section>

      <Section heading="3. Productos">
        <p style={body}>
          JUUN Wellness comercializa bebidas funcionales energéticas en presentación de lata. Los productos son de consumo humano y están sujetos a disponibilidad de inventario. Nos reservamos el derecho de modificar precios sin previo aviso.
        </p>
      </Section>

      <Section heading="4. Proceso de compra">
        <p style={body}>
          Las compras se realizan a través de nuestra tienda en línea. El pago se procesa de forma segura mediante Stripe. Una vez confirmado el pago, recibirá un correo de confirmación con los detalles de su pedido.
        </p>
      </Section>

      <Section heading="5. Envíos">
        <p style={body}>
          Por el momento, los envíos están limitados exclusivamente a la ciudad de Mexicali, Baja California. Los costos de envío se muestran en el proceso de compra antes de confirmar el pago. Los tiempos de entrega pueden variar y serán coordinados directamente con el cliente.
        </p>
      </Section>

      <Section heading="6. Devoluciones y cancelaciones">
        <p style={body}>
          Debido a la naturaleza del producto (bebida de consumo humano), todas las ventas son finales. No se aceptan devoluciones ni cancelaciones una vez procesado el pago. En caso de recibir un producto en mal estado o incorrecto, contáctenos a <a href="mailto:hola@juunwellness.com" style={link}>hola@juunwellness.com</a> dentro de las 24 horas siguientes a la recepción del pedido.
        </p>
      </Section>

      <Section heading="7. Propiedad intelectual">
        <p style={body}>
          Todo el contenido de este sitio — incluyendo logotipos, imágenes, textos y diseño — es propiedad de GRUPO AVIAX S. DE R.L. DE C.V. Queda prohibida su reproducción total o parcial sin autorización expresa.
        </p>
      </Section>

      <Section heading="8. Limitación de responsabilidad">
        <p style={body}>
          JUUN Wellness no será responsable por daños indirectos, incidentales o consecuentes derivados del uso de nuestros productos o sitio web. Nuestra responsabilidad máxima se limita al monto pagado por el pedido en cuestión.
        </p>
      </Section>

      <Section heading="9. Ley aplicable">
        <p style={body}>
          Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier controversia será resuelta ante los tribunales competentes de Mexicali, Baja California.
        </p>
      </Section>

      <Section heading="10. Cambios a estos términos">
        <p style={body}>
          Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor al momento de su publicación en esta página.
        </p>
      </Section>
    </div>
  )
}

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <h2 style={sectionHeading}>{heading}</h2>
      {children}
    </div>
  )
}

const eyebrow: React.CSSProperties = {
  fontSize: '10px', fontWeight: 300, letterSpacing: '0.22em',
  textTransform: 'uppercase', color: 'rgba(35,31,32,0.4)', marginBottom: '1rem',
}
const title: React.CSSProperties = {
  fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, letterSpacing: '-0.04em',
  lineHeight: 1.1, marginBottom: '1rem',
}
const meta: React.CSSProperties = {
  fontSize: '11px', color: 'rgba(35,31,32,0.4)', marginBottom: '2rem',
}
const rule: React.CSSProperties = {
  border: 'none', borderTop: '1px solid rgba(35,31,32,0.1)', marginBottom: '2.5rem',
}
const sectionHeading: React.CSSProperties = {
  fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em',
  textTransform: 'uppercase', marginBottom: '0.75rem', color: '#231f20',
}
const body: React.CSSProperties = {
  fontSize: '14px', lineHeight: 1.8, color: 'rgba(35,31,32,0.75)', marginBottom: '0.75rem',
}
const link: React.CSSProperties = {
  color: '#231f20', textDecoration: 'underline',
}
