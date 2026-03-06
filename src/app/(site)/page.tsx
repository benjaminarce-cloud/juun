'use client'

import { useState } from 'react'
import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import ValueProps from '@/components/sections/ValueProps'
import PurchaseModule from '@/components/sections/PurchaseModule'
import Formula from '@/components/sections/Formula'
import SinesMarquee from '@/components/sections/SinesMarquee'
import SocialProof from '@/components/sections/SocialProof'
import FinalCTA from '@/components/sections/FinalCTA'

type TabKey = 'comprar' | 'formula' | 'voces'

export default function Page() {
  const [activeTab, setActiveTab] = useState<TabKey>('comprar')

  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="tab-switcher-wrap">
          <div className="tab-switcher">
            <button className={'tab-switcher-btn' + (activeTab === 'comprar' ? ' active' : '')} onClick={() => setActiveTab('comprar')}>Comprar</button>
            <button className={'tab-switcher-btn' + (activeTab === 'formula' ? ' active' : '')} onClick={() => setActiveTab('formula')}>La Fórmula</button>
            <button className={'tab-switcher-btn' + (activeTab === 'voces' ? ' active' : '')} onClick={() => setActiveTab('voces')}>La Gente Habla</button>
          </div>
        </div>

        {activeTab === 'comprar' && (
          <>
            <ValueProps />
            <section className="tab-photo-break reveal">
              <img src="https://res.cloudinary.com/dzjcndphq/image/upload/f_auto,q_auto,w_1400/v1771879034/1A7A2258_lpbzr1.jpg" alt="Comunidad JUUN en movimiento" loading="eager" style={{ objectPosition: 'center 18%' }} />
            </section>
            <section className="tab-photo-break tab-photo-break-compact reveal">
              <img src="https://res.cloudinary.com/dzjcndphq/image/upload/f_auto,q_auto,w_1000/v1771879321/1A7A1920_w4e5fq.jpg" alt="JUUN energía diaria" loading="eager" style={{ objectPosition: 'center 80%' }} />
            </section>
            <PurchaseModule />
            <FinalCTA />
          </>
        )}

        {activeTab === 'formula' && (
          <>
            <Formula />
            <FinalCTA />
          </>
        )}

        {activeTab === 'voces' && (
          <>
            <section className="tab-photo-break reveal">
              <img src="https://res.cloudinary.com/dzjcndphq/image/upload/f_auto,q_auto,w_1000/v1771879236/1A7A1501_gl2s01.jpg" alt="JUUN comunidad" loading="eager" style={{ objectPosition: 'center 15%' }} />
            </section>
            <SinesMarquee />
            <SocialProof />
            <section className="tab-photo-break tab-photo-break-compact reveal">
              <img src="https://res.cloudinary.com/dzjcndphq/image/upload/f_auto,q_auto,w_1000/v1771879033/1A7A2184_bm4koh.jpg" alt="JUUN moments" loading="eager" style={{ objectPosition: 'center 20%' }} />
            </section>
            <FinalCTA />
          </>
        )}
      </main>
    </>
  )
}
