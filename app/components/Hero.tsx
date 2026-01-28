'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

// Generate avatar URLs for social proof
const generateAvatarUrl = (seed: string) => {
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`
}

const avatarSeeds = [
  'alice', 'bob', 'charlie', 'diana', 'eve', 'frank', 'grace', 'henry', 
  'ivy', 'jack', 'kate', 'liam', 'mia', 'noah', 'olivia', 'paul'
]

const navigationItems = [
  { label: 'Služby', href: '#value-props' },
  { label: 'O mně', href: '#o-mne' },
  { label: 'Recenze', href: '#reviews' },
  { label: 'Proměny', href: '#promeny-klientu' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const videoId = '7rQAqhiVE18'

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const headerOffset = 100 // Offset pro fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-20">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full py-4 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex items-center justify-between bg-black/80 backdrop-blur-md rounded-2xl px-4 sm:px-6 py-4" style={{ boxShadow: '0 1px 14px #fff3' }}>
        {/* Logo */}
        <motion.a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <span className="text-white text-xl sm:text-2xl font-semibold tracking-tight">Libor Kverek</span>
          <div className="border-2 border-white rounded px-2 py-1">
            <span className="text-white text-lg sm:text-xl font-semibold">2.0</span>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigationItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(item.href)
              }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <motion.a
          href="#kontakt"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#kontakt')
          }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-2xl transition-colors duration-200"
        >
          Mám zájem
        </motion.a>

        {/* Mobile/Tablet Hamburger Button */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:hidden p-2 text-white hover:text-blue-400 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </motion.button>
        </div>

        {/* Mobile/Tablet Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
                onClick={() => setIsMenuOpen(false)}
              />
              
              {/* Menu Panel */}
              <motion.nav
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-20 right-4 w-[calc(100%-2rem)] max-w-sm bg-black/95 backdrop-blur-md rounded-2xl p-6 z-40 lg:hidden shadow-2xl"
                style={{ boxShadow: '0 1px 14px #fff3' }}
              >
                <div className="flex flex-col gap-4">
                  {navigationItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item.href)
                      }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="text-white/80 hover:text-white text-lg font-medium py-3 px-4 rounded-xl hover:bg-white/10 transition-all duration-200 border-b border-white/10 last:border-0"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                  <motion.a
                    href="#kontakt"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick('#kontakt')
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navigationItems.length * 0.05 }}
                    className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl text-center transition-colors duration-200"
                  >
                    Mám zájem
                  </motion.a>
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
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
            <div className="bg-black rounded-2xl px-6 py-4 flex items-center gap-4" style={{ boxShadow: '0 1px 14px #fff3' }}>
              {/* Avatars */}
              <div className="flex -space-x-2">
                {avatarSeeds.slice(0, 12).map((seed, index) => (
                  <div
                    key={seed}
                    className="w-8 h-8 rounded-full border-2 border-black overflow-hidden bg-gray-700"
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
                Připoj se ke 500+ klientům kteří přeměnili své tělo
              </span>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center text-sm sm:text-base lg:text-[22px] font-medium tracking-wider mb-6"
            style={{ color: 'var(--color-gray-300)' }}
          >
            Průvodce krok za krokem
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 max-w-5xl mx-auto"
          >
            Přestaň se trestat za to, že "nemáš pevnou vůli". Tvůj problém není lenost, ale špatný plán.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center text-white text-base sm:text-lg md:text-xl leading-relaxed mb-12 max-w-4xl mx-auto"
          >
            Získej strategii šitou na míru přímo tvému životu a mé osobní vedení, které ti nedovolí selhat. I když máš málo času a nulovou chuť trávit hodiny v kuchyni a posilovně.
          </motion.p>

          {/* Video Frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden"
          >
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&rel=0`}
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

