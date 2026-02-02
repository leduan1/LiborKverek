'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Dumbbell, UtensilsCrossed, MessageCircle, TrendingUp } from 'lucide-react'

const offerings = [
  {
    icon: Dumbbell,
    title: 'Tréninkový plán na míru tvému životu',
    description: 'Ať už chceš cvičit doma s vlastní vahou, nebo chodíš do fitka. Plán sestavím tak, aby tě bavil, byl bezpečný a hlavně efektivní. Cíl: Maximální výsledky za minimální nutný čas.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Flexibilní stravovací strategie',
    subtitle: '(Jídlo, ne dieta)',
    description: 'Zapomeň na kuře na vodě s rýží 5x denně. Naučím tě jíst tak, abys dosáhl svých cílů a přitom si jídlo užíval. Jdeš na oslavu? Naučím tě, jak si ji užít a nepokazit progres.',
  },
  {
    icon: MessageCircle,
    title: 'Moji plnou podporu a Mentoring',
    subtitle: '(WhatsApp)',
    description: 'Tohle je to nejcennější. Máš otázku v obchodě s potravinami? Cítíš, že na tebe jde krize? Jsem tu pro tebe na WhatsAppu. Většina lidí selže na první překážce – my ji společně překonáme.',
  },
  {
    icon: TrendingUp,
    title: 'Pravidelná kontrola',
    subtitle: '(Check-in)',
    description: 'Každý týden zkontrolujeme váhu, míry a pocity. Váha stojí? Upravíme to. Jsi unavený? Zvolníme. Nikdy nejedeš na "autopilota".',
  },
]

export default function About() {
  const ref = useRef(null)
  const offeringsRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const isOfferingsInView = useInView(offeringsRef, { once: true, margin: '-100px' })

  return (
    <section id="o-mne" ref={ref} className="pt-20 md:pt-32 pb-20 md:pb-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          {/* Image - First on mobile, second on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2 flex justify-start lg:justify-end"
          >
            <div className="relative rounded-2xl overflow-hidden w-1/2 lg:w-full">
              <img
                src="/IMG_9932.PNG"
                alt="Libor Kverek"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </motion.div>

          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-2 lg:order-1"
          >
            {/* Small Heading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 text-sm sm:text-base lg:text-[22px] font-medium tracking-wider"
            >
              O mně
            </motion.p>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
            >
              Jmenuji se Libor Kverek.<br />
              <span className="text-[#00edff]">A vím, proč jsi doteď neuspěl.</span>
            </motion.h2>

            {/* Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed"
            >
              <p>
                Není to tvoje chyba. Fitness průmysl tě léta krmí extrémy. Nutí tě vybírat si mezi hladověním u "zaručených diet" nebo otročením v posilovně. Možná jsi to zkoušel a narazil jsi na tvrdou pravdu: <strong className="text-white">Extrémy ti zničí život, ale dlouhodobé výsledky nepřinesou.</strong>
              </p>
              <p>
                Já nejsem další teoretik se skripty, ani instagramový model. Jsem profesionál s praxí, který odtrénoval <strong className="text-white">přes 500 reálných klientů.</strong> Každý z nich byl jiný, měl jiné tělo a startovní čáru, ale všichni hledali to samé: výsledky, které konečně vydrží.
              </p>
              <p>
                Můj přístup je o <strong className="text-white">efektivitě.</strong> Nabízím ti zkratku. Místo let pokusů a omylů ti dám přesnou mapu. Ušetříš peníze za nefunkční doplňky a ušetříš si frustraci z diet, které nikam nevedou. Mým cílem je nastavit tvůj režim tak, aby cvičení a jídelníček tvůj život obohatilo a hlavně zkvalitnilo, ne aby se stalo tvým věznitelem.
              </p>
              <p>
                Nebudu ti lhát o zázračných pilulkách. Bude to vyžadovat práci. Ale slibuji ti, že to bude ta <strong className="text-white">nejefektivnější práce, jakou jsi kdy udělal.</strong> Čekej ode mě upřímnost, vedení a strategii, která tě dostane z bodu A do bodu B tou <strong className="text-white">nejkratší možnou cestou.</strong>
              </p>
              <p className="text-[#00edff] font-medium">
                Tvé tělo je jediný dopravní prostředek, který máš na celý život. Pojďme se o něj postarat tak, jak si zaslouží.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* What I Offer Section */}
        <div ref={offeringsRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isOfferingsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Co ti nabízím
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isOfferingsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#00edff]/20 rounded-xl flex items-center justify-center">
                    <offering.icon size={24} className="text-[#00edff]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-1">
                      {offering.title}
                    </h4>
                    {offering.subtitle && (
                      <p className="text-[#00edff] text-sm font-medium mb-2">
                        {offering.subtitle}
                      </p>
                    )}
                    <p className="text-gray-400 leading-relaxed">
                      {offering.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

