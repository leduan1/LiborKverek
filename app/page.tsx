import dynamic from 'next/dynamic'
import Hero from '@/app/components/Hero'

// Lazy load components for better performance
const About = dynamic(() => import('@/app/components/About'), {
  loading: () => <div className="h-screen" />,
})
const ValueProps = dynamic(() => import('@/app/components/ValueProps'), {
  loading: () => <div className="h-screen" />,
})
const Reviews = dynamic(() => import('@/app/components/Reviews'), {
  loading: () => <div className="h-screen" />,
})
const ClientTransformations = dynamic(() => import('@/app/components/ClientTransformations'), {
  loading: () => <div className="h-screen" />,
})
const FAQ = dynamic(() => import('@/app/components/FAQ'), {
  loading: () => <div className="h-screen" />,
})
const Contact = dynamic(() => import('@/app/components/Contact'), {
  loading: () => <div className="h-screen" />,
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative" style={{ background: 'linear-gradient(to bottom right, #000000, #111827, #000000)', backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
        <Hero />
        <ValueProps />
        <About />
      </div>
      <Reviews />
      <ClientTransformations />
      <FAQ />
      <Contact />
    </main>
  )
}
