import type { Metadata } from 'next'
import Header from '@/components/sections/Header'
import Link from 'next/link'

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
            <div style={{ color: '#231f20', fontFamily: 'inherit' }}>
              <p style={eyebrow}>Términos y Condiciones</p>
              <h1 style={title}>Condiciones<br /><span style={{ fontWeight: 300 }}>de compra.</span></h1>
              <p style={meta}>Última actualización: 30 de junio de 2026</p>
              <hr style={rule} />

              <Section heading="1. Aceptación de los términos">
                <p style={body}>Al acceder a juunwellness.com y/o realizar una compra, usted declara ser mayor de edad (18 años o más) y acepta íntegramente estos Términos y Condiciones. Si no está de acuerdo con cualquiera de sus disposiciones, le pedimos abstenerse de utilizar el sitio o realizar compras.</p>
              </Section>

              <Section heading="2. Identidad del responsable">
                <p style={body}>El sitio juunwellness.com y la marca JUUN Wellness son operados por <strong>GRUPO AVIAX S. DE R.L. DE C.V.</strong> ("JUUN Wellness", "nosotros"), con domicilio en Mexicali, Baja California, México.</p>
                <p style={body}>Para cualquier aclaración, queja o solicitud, puede contactarnos en: <a href="mailto:servicio.cliente@juunwellness.com" style={link}>servicio.cliente@juunwellness.com</a></p>
              </Section>

              <Section heading="3. Naturaleza del producto">
                <p style={body}>JUUN Wellness comercializa una bebida funcional energética carbonatada de consumo humano, presentada en lata, formulada con cafeína de origen vegetal (guaraná), L-teanina, vitamina B12, electrolitos (potasio y magnesio) y sin azúcar añadida ni taurina.</p>
                <p style={body}>El producto cumple con la normatividad mexicana aplicable de etiquetado de alimentos y bebidas no alcohólicas preenvasados (NOM-051-SCFI/SSA1-2010 y su modificación). La información nutrimental, lista de ingredientes y leyendas precautorias correspondientes se encuentran impresas en el envase del producto y prevalecen sobre cualquier descripción publicada en el sitio web.</p>
              </Section>

              <Section heading="4. Advertencias de consumo">
                <p style={body}>JUUN es una bebida con cafeína. Le pedimos consumirla de forma responsable y tener en cuenta lo siguiente:</p>
                <ul style={list}>
                  <li><strong>No recomendado para menores de edad.</strong> El producto no debe ser consumido por personas menores de 18 años.</li>
                  <li><strong>No recomendado</strong> para mujeres embarazadas o en periodo de lactancia, ni para personas sensibles a la cafeína.</li>
                  <li>Las personas con condiciones cardiovasculares, hipertensión, ansiedad u otras condiciones médicas, o que tomen medicamentos, deben consultar a un profesional de la salud antes de consumir el producto.</li>
                  <li>JUUN <strong>no es un medicamento</strong> ni sustituye una alimentación equilibrada, la hidratación adecuada ni el descanso. No se le atribuye ninguna propiedad terapéutica, curativa o de tratamiento de enfermedad alguna.</li>
                  <li>Consuma con moderación. No se recomienda exceder el consumo diario de cafeína sugerido para adultos sanos.</li>
                </ul>
              </Section>

              <Section heading="5. Precios y pagos">
                <p style={body}>Todos los precios se muestran en pesos mexicanos (MXN) e <strong>incluyen IVA</strong>. Los costos de envío, cuando apliquen, se muestran de forma desglosada durante el proceso de compra, antes de confirmar el pago.</p>
                <p style={body}>Nos reservamos el derecho de modificar precios en cualquier momento y sin previo aviso. El precio aplicable será el vigente al momento de confirmar el pedido. Los productos están sujetos a disponibilidad de inventario.</p>
              </Section>

              <Section heading="6. Proceso de compra">
                <p style={body}>Las compras se realizan a través de nuestra tienda en línea. El pago se procesa de forma segura mediante <strong>Stripe</strong>. JUUN Wellness no almacena ni tiene acceso a los datos completos de su tarjeta. Una vez confirmado el pago, usted recibirá un correo electrónico de confirmación con los detalles de su pedido. La confirmación del pedido no garantiza la disponibilidad del producto; en caso de imposibilidad de surtir el pedido, le notificaremos y reembolsaremos el monto correspondiente.</p>
              </Section>

              <Section heading="7. Envíos">
                <p style={body}>Actualmente realizamos envíos únicamente dentro de las ciudades de <strong>Mexicali, Baja California y Monterrey, Nuevo León</strong>. Los pedidos cuya dirección de entrega se encuentre fuera de estas zonas no podrán ser procesados.</p>
                <p style={body}>Los costos y tiempos de entrega se indican durante el proceso de compra y pueden variar según la zona. Los tiempos de entrega son estimados y serán coordinados directamente con el cliente. JUUN Wellness no será responsable por retrasos atribuibles a causas ajenas a su control, incluyendo caso fortuito o fuerza mayor.</p>
              </Section>

              <Section heading="8. Devoluciones, garantías y cancelaciones">
                <p style={body}>Por tratarse de un producto alimenticio de consumo humano, y por razones de higiene y seguridad, no se aceptan devoluciones ni cambios una vez entregado el producto, salvo en los supuestos descritos a continuación.</p>
                <p style={body}>Si usted recibe un producto en mal estado, dañado, caducado o distinto al solicitado, le pedimos contactarnos dentro de las <strong>48 horas</strong> siguientes a la recepción del pedido al correo <a href="mailto:servicio.cliente@juunwellness.com" style={link}>servicio.cliente@juunwellness.com</a>, adjuntando fotografías y su número de pedido. Una vez verificado el caso, repondremos el producto o reembolsaremos el monto correspondiente, según corresponda.</p>
                <p style={body}>Lo anterior se establece sin perjuicio de los derechos que la <strong>Ley Federal de Protección al Consumidor</strong> otorga a los consumidores, los cuales se respetan en todo momento.</p>
              </Section>

              <Section heading="9. Lista de espera y comunicaciones">
                <p style={body}>Si usted se registra en nuestra lista de espera, utilizaremos su correo electrónico únicamente para notificarle sobre el lanzamiento y disponibilidad de productos. Puede solicitar su baja en cualquier momento. El tratamiento de sus datos se rige por nuestro <Link href="/privacidad" style={link}>Aviso de Privacidad</Link>.</p>
              </Section>

              <Section heading="10. Propiedad intelectual">
                <p style={body}>Todo el contenido del sitio —incluyendo, sin limitación, la marca JUUN Wellness, logotipos, nombres comerciales, imágenes, fotografías, textos, ilustraciones, diseño y código— es propiedad de GRUPO AVIAX S. DE R.L. DE C.V. o se utiliza con la debida autorización, y está protegido por las leyes de propiedad intelectual aplicables. Queda prohibida su reproducción, distribución o uso total o parcial sin autorización previa y por escrito.</p>
              </Section>

              <Section heading="11. Uso del sitio">
                <p style={body}>Usted se compromete a utilizar el sitio de forma lícita y a no realizar conductas que puedan dañar, inhabilitar o sobrecargar el sitio, ni intentar acceder sin autorización a sus sistemas. La información publicada en la sección de Ciencia y en el sitio en general tiene fines informativos y no constituye asesoría médica ni nutricional personalizada.</p>
              </Section>

              <Section heading="12. Limitación de responsabilidad">
                <p style={body}>En la máxima medida permitida por la ley aplicable, JUUN Wellness no será responsable por daños indirectos, incidentales, especiales o consecuentes derivados del uso del sitio o del consumo del producto cuando este se realice de forma contraria a las advertencias e instrucciones señaladas. La responsabilidad máxima de JUUN Wellness se limita al monto efectivamente pagado por el pedido que dio origen a la reclamación. Ninguna disposición de estos términos limita la responsabilidad que no pueda excluirse conforme a la ley.</p>
              </Section>

              <Section heading="13. Legislación aplicable y jurisdicción">
                <p style={body}>Estos Términos y Condiciones se rigen por las leyes de los Estados Unidos Mexicanos. Para la interpretación y cumplimiento de los mismos, las partes se someten a la jurisdicción de los tribunales competentes de Mexicali, Baja California, sin perjuicio del derecho del consumidor de acudir ante la Procuraduría Federal del Consumidor (PROFECO) en los términos de la ley.</p>
              </Section>

              <Section heading="14. Modificaciones">
                <p style={body}>Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios entrarán en vigor a partir de su publicación en esta página, indicándose la fecha de última actualización. Le recomendamos revisar periódicamente este documento.</p>
              </Section>

              <p style={{ ...meta, marginTop: '2rem' }}>Para cualquier duda sobre estos Términos y Condiciones, contáctenos en <a href="mailto:servicio.cliente@juunwellness.com" style={link}>servicio.cliente@juunwellness.com</a></p>
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
