import Header from '@/components/sections/Header'
import PurchaseModule from '@/components/sections/PurchaseModule'

export default function ComprarPage() {
  return (
    <>
      <Header startOnLight />
      <main style={{ paddingTop: '8rem' }}>
        {/* PIE: Dedicated purchase route.
            WHY: Creates a standalone crawlable URL for buying intent separate from homepage anchor.
            OPTIMIZES: Purchase-intent retrieval and direct agent navigation workflows. */}
        <section id="checkout" aria-labelledby="checkout-title" style={{ maxWidth: 980, margin: '0 auto', padding: '2rem 1.5rem 1rem' }}>
          <h1 id="checkout-title">Comprar JUUN</h1>
          <p>Selecciona sabor, pack y cantidad para completar tu compra con checkout seguro desde México.</p>
        </section>
        <PurchaseModule />
      </main>
    </>
  )
}
