'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Video, Mail, FileText } from 'lucide-react'

const valueProps = [
  {
    icon: Video,
    title: 'Vytvářejte Obsah, Který Zastaví Scrollování',
    description: 'Objevte, jak vytvářet hodnotný, přesvědčivý obsah, který vaši ideální klienti nemohou ignorovat a který vás odliší od ChatGPT robotů.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Mail,
    title: 'Vytvářejte Ziskové Emailové Kampaně',
    description: 'Automatizujte proces "poznávání" vašich leadů, přestaňte spoléhat na algoritmus, který vám přináší klienty, a vysílejte svou osobní značku bez ruční práce (včetně prodejů).',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: FileText,
    title: 'Pište Online Aktiva, Která Prodávají Za Vás',
    description: 'Vytáhněte se z prodejních hovorů vytvořením webových stránek, které říkají vašim ideálním klientům, co prodáváte, proč to potřebují, proč vám mají věřit a jak zaplatit.',
    color: 'from-orange-500 to-red-500',
  },
]

export default function ValueProps() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="value-props" ref={ref} className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Naučte Se 3{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Nejvyšší Pákové
            </span>{' '}
            Online Dovednosti
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Přitahujte a konvertujte své ideální klienty na autopilota pomocí pečlivě vytvořeného 
            magnetického prodejního obsahu, který přitahuje vaše perfektní klienty z miliard lidí po celém světě.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${prop.color} mb-6`}>
                  <prop.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{prop.title}</h3>
                <p className="text-gray-600 leading-relaxed">{prop.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Připojit Se K Mentoringu
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

