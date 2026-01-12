import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Libor Kverek - Fitness Mentoring',
  description: 'Růst vašeho fitness podnikání pomocí systémů a strategií, které jsem osobně použil k dosažení 8-místných tržeb.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}

