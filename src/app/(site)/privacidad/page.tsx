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
            <div style={{ color: '#231f20', fontFamily: 'inherit' }}>
              <p style={eyebrow}>Aviso de Privacidad</p>
              <h1 style={title}>Tus datos,<br /><span style={{ fontWeight: 300 }}>protegidos.</span></h1>
              <p style={meta}>Última actualización: 30 de junio de 2026</p>
              <hr style={rule} />

              <Section heading="1. Responsable del tratamiento de sus datos personales">
                <p style={body}><strong>GRUPO AVIAX S. DE R.L. DE C.V.</strong> ("JUUN Wellness"), con domicilio en Mexicali, Baja California, México, es responsable del tratamiento de sus datos personales conforme a la <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares</strong> vigente, publicada en el Diario Oficial de la Federación el 20 de marzo de 2025, y demás normatividad aplicable.</p>
                <p style={body}>Para cualquier asunto relacionado con sus datos personales, puede contactarnos en: <a href="mailto:servicio.cliente@juunwellness.com" style={link}>servicio.cliente@juunwellness.com</a></p>
              </Section>

              <Section heading="2. Datos personales que recabamos">
                <p style={body}>Para las finalidades descritas en este aviso, podemos recabar los siguientes datos personales:</p>
                <ul style={list}>
                  <li>Nombre completo</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Dirección de envío (calle, número, colonia, código postal, ciudad y estado)</li>
                  <li>Teléfono de contacto (en su caso)</li>
                  <li>Datos de la transacción (productos adquiridos, monto, fecha)</li>
                </ul>
                <p style={body}><strong>Datos de pago:</strong> Los datos de su tarjeta son recabados y procesados directamente por nuestro procesador de pagos (Stripe). JUUN Wellness <strong>no recopila, no almacena ni tiene acceso</strong> a los datos completos de su tarjeta.</p>
                <p style={body}>No recabamos datos personales sensibles.</p>
              </Section>

              <Section heading="3. Finalidades del tratamiento">
                <p style={body}><strong>Finalidades primarias</strong> (necesarias para la relación con usted; no requieren consentimiento adicional):</p>
                <ul style={list}>
                  <li>Procesar, gestionar y entregar su pedido</li>
                  <li>Emitir comprobantes y dar seguimiento a la compra</li>
                  <li>Enviar confirmaciones y actualizaciones sobre el estado de su pedido</li>
                  <li>Atender aclaraciones, quejas o solicitudes de servicio al cliente</li>
                  <li>Cumplir con obligaciones legales, fiscales y contables</li>
                </ul>
                <p style={body}><strong>Finalidades secundarias</strong> (requieren su consentimiento y no condicionan la compra):</p>
                <ul style={list}>
                  <li>Notificarle sobre el lanzamiento de nuevos productos, promociones y novedades, únicamente si usted se registró voluntariamente en nuestra lista de espera o aceptó recibir dichas comunicaciones.</li>
                </ul>
                <p style={body}>Si no desea que sus datos se utilicen para las finalidades secundarias, puede manifestarlo en cualquier momento escribiendo a <a href="mailto:servicio.cliente@juunwellness.com" style={link}>servicio.cliente@juunwellness.com</a>. La negativa para el uso de sus datos con fines secundarios no será motivo para negarle los servicios contratados.</p>
              </Section>

              <Section heading="4. Encargados y transferencias">
                <p style={body}>Para cumplir las finalidades anteriores, sus datos pueden ser tratados por terceros que nos prestan servicios (encargados), únicamente conforme a nuestras instrucciones y con las medidas de protección correspondientes:</p>
                <ul style={list}>
                  <li><strong>Stripe</strong> — procesamiento de pagos</li>
                  <li><strong>Resend</strong> — envío de correos transaccionales y de notificación</li>
                  <li><strong>Supabase / Vercel</strong> — alojamiento e infraestructura del sitio</li>
                  <li>Empresas de mensajería y paquetería — para la entrega de su pedido</li>
                </ul>
                <p style={body}>JUUN Wellness <strong>no vende, renta ni cede</strong> sus datos personales a terceros con fines publicitarios. Cualquier transferencia que requiera su consentimiento le será informada previamente.</p>
              </Section>

              <Section heading="5. Medios para ejercer sus derechos (Derechos ARCO)">
                <p style={body}>Usted, o su representante legal, tiene derecho a <strong>Acceder</strong> a sus datos personales, <strong>Rectificarlos</strong> cuando sean inexactos o incompletos, <strong>Cancelarlos</strong> cuando considere que no se requieren para las finalidades señaladas, y <strong>Oponerse</strong> a su tratamiento para fines específicos (Derechos ARCO).</p>
                <p style={body}>Para ejercer cualquiera de estos derechos, envíe su solicitud a <a href="mailto:servicio.cliente@juunwellness.com" style={link}>servicio.cliente@juunwellness.com</a>, indicando:</p>
                <ul style={list}>
                  <li>Su nombre completo y un medio para comunicarle la respuesta</li>
                  <li>Descripción clara y precisa del derecho que desea ejercer y de los datos involucrados</li>
                  <li>Cualquier documento que acredite su identidad o, en su caso, la representación legal</li>
                </ul>
                <p style={body}>Daremos respuesta a su solicitud en un plazo máximo de <strong>20 días hábiles</strong>. Asimismo, usted puede revocar el consentimiento que nos haya otorgado, así como limitar el uso o divulgación de sus datos, a través del mismo medio.</p>
              </Section>

              <Section heading="6. Conservación de datos">
                <p style={body}>Conservaremos sus datos personales únicamente durante el tiempo necesario para cumplir las finalidades descritas y las obligaciones legales y fiscales aplicables. Una vez concluidos dichos plazos, sus datos serán cancelados conforme a la normatividad vigente.</p>
              </Section>

              <Section heading="7. Cookies y tecnologías de rastreo">
                <p style={body}>Este sitio utiliza cookies y tecnologías similares necesarias para el funcionamiento del carrito de compras, la sesión del usuario y el análisis del uso del sitio. No utilizamos cookies de publicidad de seguimiento de terceros. Usted puede deshabilitar las cookies desde la configuración de su navegador, considerando que algunas funciones del sitio podrían verse afectadas.</p>
              </Section>

              <Section heading="8. Autoridad en materia de protección de datos">
                <p style={body}>Si usted considera que su derecho a la protección de datos personales ha sido vulnerado, puede acudir ante la autoridad competente en materia de protección de datos personales en posesión de los particulares, conforme a la legislación vigente.</p>
              </Section>

              <Section heading="9. Cambios al aviso de privacidad">
                <p style={body}>Nos reservamos el derecho de modificar o actualizar el presente Aviso de Privacidad en cualquier momento, para atender novedades legislativas, prácticas internas o nuevos requerimientos. Cualquier cambio será publicado en esta página, indicándose la fecha de última actualización.</p>
              </Section>

              <p style={{ ...meta, marginTop: '2rem' }}>Para cualquier duda sobre el tratamiento de sus datos personales, contáctenos en <a href="mailto:servicio.cliente@juunwellness.com" style={link}>servicio.cliente@juunwellness.com</a></p>
            </div>
          </div>
        </section>
      </main>
    </>
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

const eyebrow: React.CSSProperties = { fontSize: '10px', fontWeight: 300, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(35,31,32,0.4)', marginBottom: '1rem' }
const title: React.CSSProperties = { fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1rem' }
const meta: React.CSSProperties = { fontSize: '11px', color: 'rgba(35,31,32,0.4)', marginBottom: '2rem' }
const rule: React.CSSProperties = { border: 'none', borderTop: '1px solid rgba(35,31,32,0.1)', marginBottom: '2.5rem' }
const sectionHeading: React.CSSProperties = { fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.75rem', color: '#231f20' }
const body: React.CSSProperties = { fontSize: '14px', lineHeight: 1.8, color: 'rgba(35,31,32,0.75)', marginBottom: '0.75rem' }
const list: React.CSSProperties = { fontSize: '14px', lineHeight: 1.8, color: 'rgba(35,31,32,0.75)', paddingLeft: '1.25rem', marginBottom: '0.75rem' }
const link: React.CSSProperties = { color: '#231f20', textDecoration: 'underline' }
