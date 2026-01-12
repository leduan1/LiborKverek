import Hero from '@/app/components/Hero'
import ValueProps from '@/app/components/ValueProps'
import Stats from '@/app/components/Stats'
import Testimonials from '@/app/components/Testimonials'
import Features from '@/app/components/Features'
import Pricing from '@/app/components/Pricing'
import FAQ from '@/app/components/FAQ'
import CTA from '@/app/components/CTA'
import StickyCTA from '@/app/components/StickyCTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ValueProps />
      <Stats />
      <Testimonials />
      <Features />
      <Pricing />
      <FAQ />
      <CTA />
      <StickyCTA />
    </main>
  )
}

