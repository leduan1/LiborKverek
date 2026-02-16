import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://liborkverek.vercel.app'),
  title: 'Online Coaching | Libor Kverek',
  description: 'Pomáhám lidem dosáhnout jejich fitness cílů pomocí individuálního online koučinku. Více než 500+ spokojených klientů a prokazatelné výsledky.',
  keywords: ['fitness', 'online kouč', 'osobní trenér', 'hubnutí', 'nabírání svalů', 'fitness mentoring', 'Libor Kverek'],
  authors: [{ name: 'Libor Kverek' }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: 'Online Coaching | Libor Kverek',
    description: 'Pomáhám lidem dosáhnout jejich fitness cílů pomocí individuálního online koučinku. Více než 500+ spokojených klientů.',
    type: 'website',
    images: [
      {
        url: '/IMG_9932.PNG',
        width: 1200,
        height: 630,
        alt: 'Libor Kverek - Online Fitness Kouč',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Coaching | Libor Kverek',
    description: 'Pomáhám lidem dosáhnout jejich fitness cílů pomocí individuálního online koučinku.',
    images: ['/IMG_9932.PNG'],
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NK71LJNY70"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NK71LJNY70');
          `}
        </Script>
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1981621535752632');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1981621535752632&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  )
}
