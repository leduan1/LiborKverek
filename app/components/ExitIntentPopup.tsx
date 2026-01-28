'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  const showPopup = useCallback(() => {
    if (!hasShown) {
      setIsVisible(true)
      setHasShown(true)
    }
  }, [hasShown])

  useEffect(() => {
    // Method 1: Mouse leaves the document through the top
    const handleMouseOut = (e: MouseEvent) => {
      // Check if mouse is leaving the viewport from the top
      if (e.clientY <= 0 && !e.relatedTarget) {
        showPopup()
      }
    }

    // Method 2: Mouse moves to the very top of the page
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY <= 10) {
        showPopup()
      }
    }

    document.addEventListener('mouseout', handleMouseOut)
    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mouseout', handleMouseOut)
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [hasShown, showPopup])

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleCtaClick = () => {
    setIsVisible(false)
    const contactSection = document.getElementById('kontakt')
    if (contactSection) {
      const headerOffset = 100
      const elementPosition = contactSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-2xl rounded-2xl p-6 md:p-10 z-[101] shadow-2xl border border-gray-700 overflow-hidden"
          >
            {/* Dark background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
            {/* Background image of Libor - on top with low opacity */}
            <div
              className="absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage: 'url(/IMG_9932.PNG)',
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
              }}
            />
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Zavřít"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content */}
            <div className="relative z-10 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8">
                Přestaň o změně jen snít. Udělej ji.
              </h2>

              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Stojíš na rozcestí a máš dvě možnosti:
              </p>

              <div className="space-y-6 text-left mb-10">
                {/* Cesta "Jako dřív" */}
                <div className="bg-red-950/30 border border-red-900/50 rounded-xl p-5">
                  <h3 className="text-lg font-bold text-red-400 mb-2">
                    Cesta &quot;Jako dřív&quot;
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Zavřeš tuhle stránku. Zítra si dáš k snídani koblihu, zkusíš další náhodnou dietu
                    a za půl roku budeš na stejném místě. Frustrovaný, bez energie a nespokojený
                    s tím, co vidíš v zrcadle.
                  </p>
                </div>

                {/* Cesta "Změna" */}
                <div className="bg-green-950/30 border border-green-900/50 rounded-xl p-5">
                  <h3 className="text-lg font-bold text-green-400 mb-2">
                    Cesta &quot;Změna&quot;
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Klikneš na tlačítko níže. Svěříš se do rukou profesionála. Začneš pracovat
                    na systému, který funguje. A za 3 měsíce si budeš kupovat nové oblečení,
                    protože to staré ti bude padat.
                  </p>
                </div>
              </div>

              {/* Motivational text */}
              <p className="text-lg md:text-xl font-semibold text-white mb-6">
                Cesta k tvému novému já začíná jedním rozhodnutím. Udělej ho teď.
              </p>

              {/* Price info */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-8">
                <p className="text-white font-bold text-lg mb-2">
                  Cena: 2 500 Kč / měsíc
                </p>
                <p className="text-gray-400 text-sm">
                  Žádné skryté poplatky. Žádné dlouhodobé úvazky. Spolupráci můžeš kdykoliv ukončit, ale věř mi, až uvidíš výsledky, nebudeš chtít.
                </p>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleCtaClick}
                className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-blue-600/25 mb-6"
              >
                CHCI ZMĚNIT SVOU POSTAVU TEĎ!
              </button>

              {/* Signature */}
              <p className="text-gray-400 text-sm">
                Těším se na naši spolupráci.<br />
                <span className="text-white font-semibold">Libor Kverek</span> — Tvůj trenér a mentor
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
