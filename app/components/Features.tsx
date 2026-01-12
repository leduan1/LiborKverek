'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown, Play, CheckCircle2 } from 'lucide-react'

const modules = [
  {
    title: 'Vybudujte Své Publikum',
    lessons: 6,
    description: 'Objevte, jak vybudovat komunitu loajálních sledujících, kteří nemohou dostat dost vašeho obsahu, a vybudovat prosperující komunitu superfanoušků.',
  },
  {
    title: 'Vytvářejte Úžasný Obsah',
    lessons: 21,
    description: 'V oceánu šedého, nudného, nudného obsahu vám ukážu, jak vyniknout jako fialová létající jednorožec v domově důchodců (bez prodeje vašich hodnot nebo nutnosti hrát šaška).',
  },
  {
    title: 'Naučte Se Prodávat Přes Email',
    lessons: 16,
    description: 'Vytvářejte emaily, které vaši sledující nemohou dočkat otevření, což vám dává přímou linku k prodejům, když jste připraveni spustit.',
  },
  {
    title: 'Pište Zabijácký Prodejní Copy',
    lessons: 11,
    description: 'Slova, která vydáváte do světa, prodávají vaši značku, přitahují lidi, kteří s vámi budou chtít pracovat, a pomáhají vám vyniknout z davu.',
  },
  {
    title: 'Vybudujte Svůj Emailový Seznam',
    lessons: 8,
    description: 'Váš emailový seznam je aktivum, které přežije každou změnu algoritmu, shadow ban a kontroverzi cancel culture. Objevíte, jak naplnit svůj seznam kvalitními leady.',
  },
  {
    title: 'Zlepšete Své Landing Pages',
    lessons: 17,
    description: 'Unavení z práce z šablon vyplňování prázdných míst? Ukážu vám, jak vytvořit úžasné landing pages, na které jste hrdí a které přeměňují zvědavé leady na platící zákazníky.',
  },
  {
    title: 'Zvyšte Poptávku Po Vašich Službách',
    lessons: 8,
    description: 'Pokud jste někdy spustili nabídku za zvuk cvrčků, nemůžete si dovolit to zmeškat. Ukážu vám, jak rozvířit své publikum, abyste mohli naplnit svůj seznam pokaždé, když spustíte.',
  },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openModule, setOpenModule] = useState<number | null>(0)

  return (
    <section id="features" ref={ref} className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Zde Je{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Všechno
            </span>{' '}
            Co Získáte V Mentoringu 2.0
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            5 Modulů. 72 Videí. Hodiny Obsahu. NULA ZBYTEČNOSTÍ
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              Doživotní Přístup
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              Nová Videa Měsíčně
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              Praktické Úkoly
            </span>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="mb-4"
            >
              <motion.button
                onClick={() => setOpenModule(openModule === index ? null : index)}
                className="w-full bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-left border border-gray-100"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">{module.title}</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                        {module.lessons} lekcí
                      </span>
                    </div>
                    <AnimatePresence>
                      {openModule === index && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-gray-600 mt-3 leading-relaxed"
                        >
                          {module.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <motion.div
                    animate={{ rotate: openModule === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-gray-400 ml-4" />
                  </motion.div>
                </div>
              </motion.button>
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
            Zobrazit Všechny Moduly
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

