import type { Metadata } from 'next'
import { Unbounded } from 'next/font/google'
import './globals.css'

const unbounded = Unbounded({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '900'],
  variable: '--font-unbounded',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'JUUN wellness — Energía natural',
  description:
    'Bebida energética funcional. Sin taurina, sin azúcar añadida, sin sellos de advertencia. Cafeína natural, L-teanina, probióticos y 9 vitaminas. Hecho en México.',
  keywords: ['bebida energética', 'funcional', 'sin azúcar', 'sin taurina', 'México', 'wellness'],
  openGraph: {
    title: 'JUUN wellness',
    description: 'Naturalmente funcional. Energía limpia, sin consecuencias.',
    siteName: 'JUUN wellness',
    locale: 'es_MX',
    type: 'website',
  },
}

import RevealObserver from '@/components/RevealObserver'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={unbounded.variable}>
      <head>
        {/* Preconnect for font performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={unbounded.className}>{children}  <RevealObserver />
    </body>
    </html>
  )
}
