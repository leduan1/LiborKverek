'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, Star } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Mentoring Obsah a IP',
    originalPrice: 1799,
    currentPrice: 999,
    currency: 'CZK',
    popular: false,
    features: [
      'Doživotní přístup k Business Mentorship Course včetně všech modulů + nová videa produkovaná měsíčně',
      'Přístup k soukromé komunitě, kde můžete chatovat se mnou kdykoli a být interaktivní s ostatními členy',
      'Detailní úkoly na modul, abyste se mohli prakticky učit a pak aplikovat, co učím v kurzu',
      'Bonus, doživotní přístup k Black Belt Content Mastery, Email Advantage, PT Starter Kit, Silver Play Button & Chatbot n chill',
    ],
    cta: 'Připojit Se Nyní',
    installment: 'Platba ve 2 měsíčních splátkách 549 CZK',
  },
  {
    name: 'Mentoring Obsah, IP a James Discord 1-1 Přístup',
    originalPrice: 3499,
    currentPrice: 3499,
    currency: 'CZK',
    popular: true,
    features: [
      'Doživotní přístup k Business Mentorship Course včetně všech modulů + nová videa produkovaná měsíčně',
      'Přístup k soukromé komunitě, kde můžete chatovat se mnou kdykoli a být interaktivní s ostatními členy',
      'Detailní úkoly na modul, abyste se mohli prakticky učit a pak aplikovat, co učím v kurzu',
      'Bonus, doživotní přístup k Black Belt Content Mastery, Email Advantage, PT Starter Kit, Silver Play Button & Chatbot n chill',
      'Přímý přístup ke mně a naší Mentorship Community přes Discord, kde budu kritizovat, radit a podporovat vás v potřebách vašeho podnikání',
    ],
    cta: 'Připojit Se Nyní',
    installment: 'Platba ve 2 měsíčních splátkách 1849 CZK',
    badge: 'Nejpopulárnější',
  },
]

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="pricing" ref={ref} className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Připojte Se K{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Business Mentoringu
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Pokud jsem upřímný, nemůžu očekávat, že předpovím všechny vaše problémy, takže tento kurz 
            poroste s lidmi, kteří jsou jeho součástí, jak se učím vaše problémy, budu je řešit průběžně.
          </p>
          <p className="text-lg text-yellow-400 font-semibold">
            Potřebujete podepsat pouze 1 klienta, abyste získali své peníze zpět
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border-2 ${
                plan.popular ? 'border-yellow-400 scale-105 md:scale-110' : 'border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <h3 className="text-2xl md:text-3xl font-bold mb-6">{plan.name}</h3>

              <div className="mb-6">
                {plan.originalPrice > plan.currentPrice && (
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-2xl text-gray-500 line-through">
                      {plan.originalPrice.toLocaleString('cs-CZ')} {plan.currency}
                    </span>
                  </div>
                )}
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl md:text-6xl font-bold text-yellow-400">
                    {plan.currentPrice.toLocaleString('cs-CZ')}
                  </span>
                  <span className="text-xl text-gray-400">{plan.currency}</span>
                </div>
                <p className="text-sm text-gray-400 mt-2">{plan.installment}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`block w-full text-center px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:shadow-lg hover:shadow-yellow-400/50'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                }`}
              >
                {plan.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12 text-gray-400"
        >
          <p className="text-sm">
            Tento kurz je daňový odpočet pro vaši další daňovou přiznání, je to legitimní obchodní výdaj.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

