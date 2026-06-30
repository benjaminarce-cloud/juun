import type { Metadata } from 'next'
import Header from '@/components/sections/Header'

export const metadata: Metadata = {
  title: 'Aviso de Privacidad | JUUN Wellness',
  description: 'Aviso de privacidad de JUUN Wellness conforme a la LFPDPPP.',
  alternates: { canonical: 'https://juunwellness.com/privacidad' },
  robots: { index: true, follow: true },
}

export default function PrivacidadPage() {
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
      <p style={eyebrow}>Aviso de Privacidad</p>
      <h1 style={title}>Tus datos,<br /><span style={{ fontWeight: 300 }}>protegidos.</span></h1>
      <p style={meta}>Última actualización: 30 de junio de 2026</p>

      <hr style={rule} />

      <Section heading="1. Responsable del tratamiento">
        <p style={body}>
          GRUPO AVIAX S. DE R.L. DE C.V. ("JUUN Wellness"), con domicilio en Mexicali, Baja California, México, es responsable del tratamiento de sus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
        </p>
        <p style={body}>Contacto: <a href="mailto:hola@juunwellness.com" style={link}>hola@juunwellness.com</a></p>
      </Section>

      <Section heading="2. Datos que recabamos">
        <p style={body}>Recabamos los siguientes datos personales:</p>
        <ul style={list}>
          <li>Nombre completo</li>
          <li>Dirección de correo electrónico</li>
          <li>Dirección de envío (calle, colonia, código postal, ciudad)</li>
          <li>Datos de pago (procesados directamente por Stripe; JUUN Wellness no almacena información de tarjetas)</li>
        </ul>
      </Section>

      <Section heading="3. Finalidades del tratamiento">
        <p style={body}>Sus datos se utilizan para:</p>
        <ul style={list}>
          <li>Procesar y entregar su pedido</li>
          <li>Enviarle confirmaciones y actualizaciones de su compra</li>
          <li>Notificarle sobre el lanzamiento de nuevos productos (solo si se registró en la lista de espera)</li>
          <li>Cumplir con obligaciones legales y fiscales</li>
        </ul>
      </Section>

      <Section heading="4. Transferencia de datos">
        <p style={body}>
          Sus datos pueden ser compartidos con terceros únicamente para cumplir las finalidades descritas: procesadores de pago (Stripe), servicios de envío y plataformas de comunicación (Resend). No vendemos ni cedemos sus datos a terceros con fines publicitarios.
        </p>
      </Section>

      <Section heading="5. Cookies">
        <p style={body}>
          Este sitio utiliza cookies técnicas necesarias para el funcionamiento del carrito de compras y análisis de uso del sitio. No utilizamos cookies de seguimiento publicitario de terceros.
        </p>
      </Section>

      <Section heading="6. Derechos ARCO">
        <p style={body}>
          Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales (derechos ARCO). Para ejercerlos, envíe una solicitud a <a href="mailto:hola@juunwellness.com" style={link}>hola@juunwellness.com</a>. Atenderemos su solicitud en un plazo máximo de 20 días hábiles.
        </p>
      </Section>

      <Section heading="7. Cambios a este aviso">
        <p style={body}>
          Nos reservamos el derecho de modificar este aviso en cualquier momento. Cualquier cambio será publicado en esta página con la fecha de actualización correspondiente.
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
const list: React.CSSProperties = {
  fontSize: '14px', lineHeight: 1.8, color: 'rgba(35,31,32,0.75)',
  paddingLeft: '1.25rem', marginBottom: '0.75rem',
}
const link: React.CSSProperties = {
  color: '#231f20', textDecoration: 'underline',
}
