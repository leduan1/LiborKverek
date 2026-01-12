'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Users, TrendingUp, Award, Target } from 'lucide-react'

const stats = [
  { icon: Users, value: 50000, label: 'Sledujících Online', suffix: '+' },
  { icon: TrendingUp, value: 4, label: '7-Místné Podniky', suffix: 'x' },
  { icon: Award, value: 3, label: 'Best Selling Autor', suffix: 'x' },
  { icon: Target, value: 8, label: 'Místné Tržby', suffix: ' číslic' },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count.toLocaleString('cs-CZ')}{suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Více 7-Místných Podniků.{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Stovky Milionů
            </span>{' '}
            Dosáhnutých Lidí.
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Neučím nápady z učebnice. Vše, co objevíte o budování, škálování a budování 
            budoucnosti vašeho podnikání v Mentoringu 2.0, pochází z tvrdě získaných zkušeností z reálného světa.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-yellow-400/20 to-orange-500/20 mb-4">
                <stat.icon className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

