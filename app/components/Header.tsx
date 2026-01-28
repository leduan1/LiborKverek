'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const navigationItems = [
  { label: 'Služby', href: '/#value-props' },
  { label: 'O mně', href: '/#o-mne' },
  { label: 'Recenze', href: '/#reviews' },
  { label: 'Proměny', href: '/#promeny-klientu' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Kontakt', href: '/#kontakt' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full py-4 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex items-center justify-between bg-black/80 backdrop-blur-md rounded-2xl px-4 sm:px-6 py-4" style={{ boxShadow: '0 1px 14px #fff3' }}>
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/"
            className="flex items-center gap-2 cursor-pointer"
          >
            <span className="text-white text-xl sm:text-2xl font-semibold tracking-tight">Libor Kverek</span>
            <div className="border-2 border-white rounded px-2 py-1">
              <span className="text-white text-lg sm:text-xl font-semibold">2.0</span>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigationItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Link
                href={item.href}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/#kontakt"
            className="hidden lg:block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-2xl transition-colors duration-200"
          >
            Mám zájem
          </Link>
        </motion.div>

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
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-white/80 hover:text-white text-lg font-medium py-3 px-4 rounded-xl hover:bg-white/10 transition-all duration-200 border-b border-white/10 last:border-0"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigationItems.length * 0.05 }}
                >
                  <Link
                    href="/#kontakt"
                    onClick={() => setIsMenuOpen(false)}
                    className="block mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl text-center transition-colors duration-200"
                  >
                    Mám zájem
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
