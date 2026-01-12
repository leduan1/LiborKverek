'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Pro koho je tento kurz?',
    answer: 'Tento kurz je určen pro jakéhokoli majitele podniku, který chce prodávat více online. Kondenzuje roky poznatků, aby vám ukázal, jak vybudovat publikum a monetizovat pomocí osvědčených blueprintů, které stále používám dodnes.',
  },
  {
    question: 'Bojím se, že nedostanu online klienty, pomůže mi to?',
    answer: 'Ano - klíčové zaměření kurzu je, jak získat více klientů. Kurz pokrývá všechny aspekty získávání a konverze online klientů pomocí osvědčených strategií a systémů.',
  },
  {
    question: 'Jaké jsou nové moduly, které přicházejí?',
    answer: 'Vždy hledám způsoby, jak zlepšit kurz přidáním nových modulů a nových kurzů na základě zpětné vazby komunity. Kurz roste s lidmi, kteří jsou jeho součástí.',
  },
  {
    question: 'Je to pouze pro Českou republiku?',
    answer: 'Ne, toto je pro kohokoli na světě, kdo chce začít, škálovat a růst svůj online podnik. Všechny strategie jsou aplikovatelné globálně.',
  },
  {
    question: 'Budu moci mluvit s Liborem?',
    answer: 'Ano - budu v komunitě odpovídat na jakékoli otázky a můžete si rezervovat 1-2-1 hovor se mnou za dodatečný poplatek.',
  },
  {
    question: 'Je to pouze pro kouče?',
    answer: 'Obsah uvnitř Mentoringu 2.0 se vztahuje na JAKÉHOKOLI majitele podniku, který chce vybudovat online přítomnost.',
  },
  {
    question: 'Už mám nějaké zkušenosti online. Může mi to pomoci?',
    answer: 'Budeme s vámi pracovat na zlepšení vašich silných stránek a supernabití vašich slabých stránek. Pokud chcete růst online, tento kurz vám pomůže právě to udělat.',
  },
]

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" ref={ref} className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Často Kladené{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Otázky
            </span>
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
                className="w-full bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-left border border-gray-200"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 pr-8">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-gray-600 flex-shrink-0" />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-gray-200"
                    >
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

