'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Není 2 500 Kč měsíčně moc?',
    answer: 'Pojďme počítat. Osobní trenér ve fitku stojí cca 800–1000 Kč za hodinu. Kdybys s ním cvičil 8x měsíčně, zaplatíš až 8 000 Kč a to bez jídelníčku a podpory na telefonu. Mých 2 500 Kč je investice cca 80 Kč na den. To je méně než jedno kafe a sendvič na pumpě. Otázka zní: Stojí ti tvé zdraví, sebevědomí a energie za cenu jednoho kafe denně?',
  },
  {
    question: 'Musím chodit do fitka?',
    answer: 'Nemusíš. Pokud chceš cvičit doma, sestavím ti plnohodnotný plán na doma. Pokud máš rád fitko, využijeme ho naplno. Plán se přizpůsobí tobě, ne naopak.',
  },
  {
    question: 'Mám zdravotní omezení (bolest zad, kolen). Vadí to?',
    answer: 'Naopak, je to důvod začít cvičit chytře. Díky mým zkušenostem upravíme cviky tak, abychom problémové partie nepřetěžovali, ale naopak posílili a zbavili tě bolesti.',
  },
  {
    question: 'Budu si muset vařit zvlášť pro sebe a pro rodinu?',
    answer: 'Vůbec ne. Mám rád efektivitu. Ukážu ti, jak jíst zdravě a chutně tak, aby to mohla jíst celá rodina, nebo jak si jídlo snadno upravit. Nechci, abys strávil půl dne u plotny v kuchyni.',
  },
  {
    question: 'Co když to na mě nebude fungovat?',
    answer: 'Za 500+ klientů jsem nezažil nikoho, kdo by poctivě dodržoval plán, komunikoval se mnou a neměl výsledky. Pokud budeš upřímný a budeš makat, výsledky přijdou. Garantuji ti, že do toho dám 100 %. To samé čekám od tebe.',
  },
]

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" ref={ref} className="pt-20 md:pt-32" style={{ backgroundColor: '#0e0f12' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Často se mě ptáte (FAQ)
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="mb-4"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-black rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-left border border-gray-800 overflow-hidden"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-bold text-white pr-8">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  </motion.div>
                </div>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, maxHeight: 0 }}
                      animate={{ opacity: 1, maxHeight: 1000 }}
                      exit={{ opacity: 0, maxHeight: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        ease: [0.4, 0, 0.2, 1],
                        opacity: { duration: 0.3 }
                      }}
                      className="mt-4 pt-4 border-t border-gray-800 overflow-hidden"
                    >
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="#kontakt"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-blue-600/25"
          >
            Chci proměnu
          </a>
        </motion.div>
      </div>
    </section>
  )
}

