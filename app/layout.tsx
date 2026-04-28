import type { Metadata } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// Police titres
const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  display: 'swap'
});

// Police texte
const openSans = Open_Sans({ 
  subsets: ["latin"],
  variable: '--font-open-sans',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'EG Quad Location | Location de Quads - La Valette-du-Var',
  description: 'Location de quads pour des expériences outdoor mêlant aventure, nature et adrénaline. Explorez des paysages exceptionnels en toute liberté.',
  keywords: 'quad, location quad, aventure, outdoor, La Valette-du-Var, Var, PACA',
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${montserrat.variable} ${openSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}