import dynamic from 'next/dynamic'
import Hero from '@/app/components/Hero'

// Lazy load components for better performance
const ValueProps = dynamic(() => import('@/app/components/ValueProps'), {
  loading: () => <div className="h-screen" />,
})
const Stats = dynamic(() => import('@/app/components/Stats'), {
  loading: () => <div className="h-screen" />,
})
const Testimonials = dynamic(() => import('@/app/components/Testimonials'), {
  loading: () => <div className="h-screen" />,
})
const Features = dynamic(() => import('@/app/components/Features'), {
  loading: () => <div className="h-screen" />,
})
const Pricing = dynamic(() => import('@/app/components/Pricing'), {
  loading: () => <div className="h-screen" />,
})
const FAQ = dynamic(() => import('@/app/components/FAQ'), {
  loading: () => <div className="h-screen" />,
})
const CTA = dynamic(() => import('@/app/components/CTA'), {
  loading: () => <div className="h-screen" />,
})
// StickyCTA is client-side only
const StickyCTA = dynamic(() => import('@/app/components/StickyCTA'), {
  loading: () => null,
})

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
