import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Libor Kverek - Fitness Mentoring',
  description: 'Růst vašeho fitness podnikání pomocí systémů a strategií, které jsem osobně použil k dosažení 8-místných tržeb.',
  keywords: ['fitness', 'mentoring', 'online podnikání', 'fitness kouč', 'business'],
  authors: [{ name: 'Libor Kverek' }],
  openGraph: {
    title: 'Libor Kverek - Fitness Mentoring',
    description: 'Růst vašeho fitness podnikání pomocí systémů a strategií',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://api.dicebear.com" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
