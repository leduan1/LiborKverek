'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="o-mne" ref={ref} className="py-20 md:py-32 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Small Heading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm sm:text-base font-medium tracking-wider uppercase"
              style={{ color: 'var(--color-gray-300)' }}
            >
              O MNĚ
            </motion.p>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            >
              KDO JSEM?
            </motion.h2>

            {/* Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed"
            >
              <p>
                Pomáhat lidem ve fitness bylo vždy mým snem. Mám přes 500 spokojených klientů (99% spokojenost) a můj cíl není soutěžní powerlifting, ale vzdělávání lidí v oblasti cvičení, výživy a anabolik.
              </p>
              <p>
                Chci pomoci lidem zlepšit jejich postavu a znalosti o fitness, a to jak fyzicky, tak mentálně, protože cvičení zahrnuje jak tělo, tak mysl. Zaměřuji se na vytváření udržitelných plánů šitých na míru individuálním chutím — nečekej kuře a rýži 6x denně.
              </p>
            </motion.div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6"
            >
              <div className="text-3xl md:text-4xl italic text-white mb-2">
                Libor Kverek
              </div>
              <div className="text-gray-400 text-sm md:text-base mt-1">
                Trenér, model, sexsymbol
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/IMG_9932.PNG"
                alt="Libor Kverek"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

