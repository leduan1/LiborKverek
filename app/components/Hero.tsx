'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface Countdown {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function Hero() {
  const [countdown, setCountdown] = useState<Countdown>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    // Set target date (e.g., 7 days from now)
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 7)

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const scrollToNext = () => {
    const nextSection = document.getElementById('value-props')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-sm font-semibold text-yellow-400 mb-4 tracking-wider uppercase">
              Speciální Nabídka Končí Za:
            </p>
            <div className="flex justify-center items-center gap-4 md:gap-6">
              <CountdownBox value={countdown.days} label="d" />
              <span className="text-white text-2xl md:text-4xl font-bold">:</span>
              <CountdownBox value={countdown.hours} label="h" />
              <span className="text-white text-2xl md:text-4xl font-bold">:</span>
              <CountdownBox value={countdown.minutes} label="m" />
              <span className="text-white text-2xl md:text-4xl font-bold">:</span>
              <CountdownBox value={countdown.seconds} label="s" />
            </div>
            <p className="text-yellow-400 text-lg md:text-xl font-bold mt-4">
              Speciální Nabídka: Získejte až 50% slevu
            </p>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Růst Vašeho Fitness Podnikání{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Systémy & Strategie
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Růst vašeho online fitness podnikání nemusí být složitý. Ukážu vám, jak vytvořit značku, 
            vybudovat publikum a získat armádu loajálních, platících klientů{' '}
            <span className="text-yellow-400 font-semibold">bez ztráty let hraním na slepo</span>.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Zjistit Více
            </motion.a>
            <motion.a
              href="#features"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              Prohlédnout Program
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToNext}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center text-white"
          >
            <span className="text-sm mb-2">Scroll</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function CountdownBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="bg-black/50 backdrop-blur-sm border border-yellow-400/30 rounded-lg p-4 md:p-6 min-w-[70px] md:min-w-[100px]">
      <div className="text-3xl md:text-5xl font-bold text-yellow-400 mb-1">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">{label}</div>
    </div>
  )
}

