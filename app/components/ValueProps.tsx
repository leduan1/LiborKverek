'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, ArrowRight } from 'lucide-react'

const pricingPlans = [
  {
    title: 'COACHING+',
    titleColor: 'text-blue-400',
    slug: 'coaching-plus',
    features: [
      '1 společný trénink měsíčně',
      'Jídelníček',
      'Tréninkový plán na míru',
      'Video vysvětlivky cviků',
      '2x týdně kontroly',
      'WhatsApp chat',
    ],
    price: '2500,- / 1 měsíc',
  },
  {
    title: 'COACHING CLASSIC',
    titleColor: 'text-white',
    slug: 'coaching-classic',
    features: [
      'Jídelníček',
      'Tréninkový plán na míru',
      'Video vysvětlivky cviků',
      '2x týdně kontroly',
      'WhatsApp chat',
    ],
    price: '2000,- / 1 měsíc',
  },
  {
    title: 'COACHING STUDENT',
    titleColor: 'text-white',
    slug: 'coaching-student',
    features: [
      'Jídelníček',
      'Tréninkový plán na míru',
      'Video vysvětlivky cviků',
      '2x týdně kontroly',
      'WhatsApp chat',
    ],
    price: '2000,- / 1. měsíc, dále 1500,-',
  },
  {
    title: 'PORADENSTVÍ',
    titleColor: 'text-white',
    slug: 'poradenstvi',
    features: [
      'Suplementace',
      'Optimalizace zdraví',
      'Odběry',
    ],
    price: '2500,- / 1 měsíc',
  },
  {
    title: 'JÍDELNÍČEK',
    titleColor: 'text-white',
    slug: 'jidelnicek',
    features: [
      '12 variant pro každé jídlo',
      'Náročnost přípravy dle chuti',
      'Jídla na míru chutím',
      '2x týdně kontroly',
      'WhatsApp chat',
    ],
    price: '1500,- / 1 měsíc',
  },
  {
    title: 'TRÉNINKOVÝ PLÁN',
    titleColor: 'text-white',
    slug: 'treninkovy-plan',
    features: [
      'Jednorázový',
      'Na míru dle stanovených cílů',
      'Na míru dle vybavení',
      'Na míru dle časových možností',
    ],
    price: '2000,-',
  },
]

export default function ValueProps() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="value-props" ref={ref} className="py-20 md:py-32 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-white text-sm sm:text-base font-medium tracking-wider uppercase mb-4">
            DOSÁHNI SVÉHO POTENCIÁLU
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            ONLINE COACHING
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              <div className="rounded-2xl p-6 md:p-8 shadow-lg transition-all duration-300 border border-gray-700 h-full flex flex-col" style={{ backgroundColor: 'rgb(29, 32, 37)' }}>
                <h3 className={`text-xl md:text-2xl font-bold ${plan.titleColor} mb-6`}>
                  {plan.title}
                </h3>
                
                <ul className="flex-1 space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <p className="text-white text-lg md:text-xl font-bold mb-4">
                    {plan.price.includes(' / ') ? (
                      (() => {
                        const parts = plan.price.split(' / ');
                        const afterSlash = parts[1];
                        if (afterSlash.includes(', dále')) {
                          const [monthPart, furtherPart] = afterSlash.split(', dále');
                          return (
                            <>
                              <span>{parts[0]}</span>
                              <span className="text-gray-400 text-sm md:text-base font-normal"> / {monthPart}, dále</span>
                              <span className="text-white text-lg md:text-xl font-bold">{furtherPart}</span>
                            </>
                          );
                        }
                        return (
                          <>
                            <span>{parts[0]}</span>
                            <span className="text-gray-400 text-sm md:text-base font-normal"> / {afterSlash}</span>
                          </>
                        );
                      })()
                    ) : (
                      plan.price
                    )}
                  </p>
                  <a
                    href={`#kontakt?plan=${plan.slug}`}
                    className="w-full px-6 py-3 bg-blue-600 hover:opacity-90 text-white font-medium rounded-2xl flex items-center justify-center gap-2 transition-opacity duration-200 cursor-pointer"
                  >
                    MÁM ZÁJEM
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

