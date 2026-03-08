import type { Metadata } from 'next'
import LaunchBanner from '@/components/LaunchBanner'
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
  description: 'Naturalmente funcional. Energía limpia, sin consecuencias.',
  metadataBase: new URL('https://juunwellness.com'),
  openGraph: {
    title: 'JUUN wellness — Energía natural',
    description: 'Naturalmente funcional. Energía limpia, sin consecuencias.',
    url: 'https://juunwellness.com',
    siteName: 'JUUN wellness',
    images: [
      {
        url: 'https://res.cloudinary.com/dzjcndphq/image/upload/w_1200,h_630,c_fill,g_face,f_jpg,q_80/v1771879078/1A7A1536_d2prez.jpg',
        width: 1200,
        height: 630,
        alt: 'JUUN wellness — Energía natural',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JUUN wellness — Energía natural',
    description: 'Naturalmente funcional. Energía limpia, sin consecuencias.',
    images: ['https://res.cloudinary.com/dzjcndphq/image/upload/w_1200,h_630,c_fill,g_face,f_jpg,q_80/v1771879078/1A7A1536_d2prez.jpg'],
  },
  icons: {
    icon: '/logo-black.png',
    apple: '/logo-black.png',
  },
}

import { CartProvider } from '@/context/CartContext'
import CartDrawer from '@/components/CartDrawer'
import RevealObserver from '@/components/RevealObserver'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={unbounded.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        {/* Preconnect for font performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={unbounded.className}><CartProvider>{children}<CartDrawer /></CartProvider>  <RevealObserver />
          <LaunchBanner />
    </body>
    </html>
  )
}
