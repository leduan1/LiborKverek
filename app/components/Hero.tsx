'use client'

import { motion } from 'framer-motion'

// Generate avatar URLs for social proof
const generateAvatarUrl = (seed: string) => {
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`
}

const avatarSeeds = [
  'alice', 'bob', 'charlie', 'diana', 'eve', 'frank', 'grace', 'henry', 
  'ivy', 'jack', 'kate', 'liam', 'mia', 'noah', 'olivia', 'paul'
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Header */}
      <header className="relative z-20 w-full px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2"
        >
          <span className="text-white text-2xl font-semibold tracking-tight">mentorship</span>
          <div className="border-2 border-white rounded px-2 py-1">
            <span className="text-white text-xl font-semibold">2.0</span>
          </div>
        </motion.div>

        {/* Shop All Button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
        >
          Obchod
        </motion.button>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-6xl mx-auto">
          {/* Social Proof Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 flex items-center justify-center"
          >
            <div className="bg-gray-800 rounded-lg px-6 py-4 flex items-center gap-4">
              {/* Avatars */}
              <div className="flex -space-x-2">
                {avatarSeeds.slice(0, 12).map((seed, index) => (
                  <div
                    key={seed}
                    className="w-8 h-8 rounded-full border-2 border-gray-800 overflow-hidden bg-gray-700"
                    style={{ zIndex: avatarSeeds.length - index }}
                  >
                    <img
                      src={generateAvatarUrl(seed)}
                      alt={`Avatar ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              {/* Text */}
              <span className="text-white text-sm sm:text-base font-medium whitespace-nowrap">
                Připojte se k 12 000+ online trenérům a majitelům fitness podniků
              </span>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center text-white text-sm sm:text-base font-medium tracking-wider uppercase mb-6"
          >
            PRŮVODCE KROK ZA KROKEM
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 max-w-5xl mx-auto"
          >
            Rozviňte Své Fitness Podnikání Pomocí Systémů & Strategií, Které Jsem Osobně Použil K Dosažení 8-Místných Tržeb V Online Prodeji.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center text-white text-base sm:text-lg md:text-xl leading-relaxed mb-12 max-w-4xl mx-auto"
          >
            Budování vaší online přítomnosti nemusí působit podvodně, transakčně nebo neautenticky. Ukážu vám, jak vytvořit značku pro vaše fitness podnikání online, vybudovat publikum a vytvořit armádu loajálních, platících klientů bez ztráty let hraním na slepo.
          </motion.p>

          {/* Video Frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden"
          >
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/7rQAqhiVE18?si=_0ugcEKZ7HyfSNUg"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

