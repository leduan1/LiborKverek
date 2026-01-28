'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Dumbbell, Utensils, MessageCircle, CheckCircle, ClipboardList, BarChart3, Rocket, Settings, Trophy } from 'lucide-react'
import { GlowingEffect } from '@/components/ui/glowing-effect'

const offerings = [
  {
    icon: Dumbbell,
    title: 'Tréninkový plán na míru tvému životu',
    description: 'Ať už chceš cvičit doma s vlastní vahou, máš jen pár činek, nebo chodíš do plně vybaveného fitka. Plán sestavím tak, aby tě bavil, byl bezpečný a hlavně efektivní.',
    highlight: 'Cíl: Maximální výsledky za minimální nutný čas. Žádné zbytečné hodiny v posilovně.',
  },
  {
    icon: Utensils,
    title: 'Flexibilní stravovací strategie (Jídlo, ne dieta)',
    description: 'Zapomeň na kuře s rýží na vodě 5x denně. Zapomeň na zákazy pečiva. Naučím tě jíst tak, abys dosáhl svých cílů a přitom si jídlo užíval.',
    bullets: [
      'Chceš hubnout? Nastavíme kalorický deficit, kde nebudeš hladovět.',
      'Chceš svaly? Nastavíme jídelníček pro růst svalů.',
      'Jdeš na oslavu? Naučím tě, jak si ji užít a nepokazit progres.',
    ],
  },
  {
    icon: MessageCircle,
    title: 'Moji plnou podporu a Mentoring (WhatsApp)',
    description: 'Tohle je to nejcennější. Máš otázku? Nevíš si rady v obchodě s potravinami? Cítíš, že na tebe jde krize? Jsem tu pro tebe na WhatsAppu.',
    highlight: 'Realita: Většina lidí selže, když narazí na první překážku. Ty mi napíšeš a my tu překážku společně překonáme.',
  },
  {
    icon: CheckCircle,
    title: 'Pravidelné kontroly (Check-in)',
    description: 'Každý týden mi pošleš kontrolu. Zkontrolujeme váhu, míry, pocity a fotky.',
    bullets: [
      'Váha stojí? Upravíme to.',
      'Cítíš se unavený? Zvolníme.',
      'Zlepšuješ se rychle? Přidáme.',
    ],
    highlight: 'Nikdy nejedeš na "autopilota". Plán se vyvíjí s tebou.',
  },
]

const processSteps = [
  {
    icon: ClipboardList,
    title: 'Vyplníš dotazník',
    description: 'Zjistím vše o tvém zdraví, cílech, možnostech a jídle, které máš (a nemáš) rád.',
  },
  {
    icon: BarChart3,
    title: 'Analýza a Plán',
    description: 'Během pár dní pro tebe vytvořím kompletní podklady přímo tobě na míru.',
  },
  {
    icon: Rocket,
    title: 'Start',
    description: 'Začínáš makat. Máš jasný plán, víš co jíst, víš jak cvičit (máš videa k technice).',
  },
  {
    icon: Settings,
    title: 'Optimalizace',
    description: 'Jsme v kontaktu. Ladíme detaily, aby ti životní styl sedl jako ulitý.',
  },
  {
    icon: Trophy,
    title: 'Výsledek',
    description: 'Za 3 až 6 měsíců se podíváš do zrcadla a nepoznáš se. Nejen fyzicky, ale i psychicky.',
  },
]

interface GridItemProps {
  icon: React.ReactNode
  title: string
  description: string
  highlight?: string
  bullets?: string[]
  index: number
  isInView: boolean
}

const GridItem = ({ icon, title, description, highlight, bullets, index, isInView }: GridItemProps) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className="min-h-[16rem] list-none"
    >
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-gray-700 p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
          variant="blue"
        />
        <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl border-[0.75px] border-gray-800 bg-gray-900/50 p-6 shadow-sm md:p-6">
          <div className="relative flex flex-1 flex-col gap-4">
            <div className="w-fit rounded-lg border-[0.75px] border-gray-700 bg-gray-900 p-3">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="text-xl leading-tight font-bold tracking-tight md:text-2xl text-white">
                {title}
              </h3>
              <p className="text-sm leading-relaxed md:text-base text-gray-400">
                {description}
              </p>
              {bullets && (
                <ul className="space-y-1.5 pt-1">
                  {bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="text-blue-400 mt-0.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
              {highlight && (
                <p className="text-blue-400 font-medium text-sm pt-2">
                  {highlight}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.li>
  )
}

export default function WhatIOffer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="co-nabizim" ref={ref} className="pt-20 md:pt-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gray-400 text-sm sm:text-base lg:text-[22px] font-medium tracking-wider mb-4">
            Co ti nabízím
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Tohle není jen &quot;další plán&quot;. Nabízím ti Partnerství.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Tohle není e-book, který si stáhneš a zapomeneš na něj. Nabízím ti kompletní{' '}
            <span className="text-white font-semibold">Online Coaching 1:1</span>. Znamená to, že se stávám tvým osobním mentorem.
            Jsem tvůj &quot;bodyguard&quot; proti chybám a tvá &quot;externí pevná vůle&quot;, když ta tvoje dochází.
          </p>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-xl md:text-2xl font-semibold text-white mb-12"
        >
          Podívej se, co přesně naše spolupráce obsahuje:
        </motion.p>

        {/* Offerings Grid with Glowing Effect - 2x2 equal grid */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-20">
          {offerings.map((offering, index) => {
            const Icon = offering.icon
            return (
              <GridItem
                key={index}
                icon={<Icon className="h-5 w-5 text-blue-400" />}
                title={offering.title}
                description={offering.description}
                highlight={offering.highlight}
                bullets={offering.bullets}
                index={index}
                isInView={isInView}
              />
            )
          })}
        </ul>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Jak to bude probíhat?
          </h3>
          <p className="text-lg text-gray-400">
            Cesta ke změně krok za krokem:
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 transform -translate-y-1/2 opacity-30" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.5 + 0.1 * index }}
                  className="relative"
                >
                  <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-gray-700 p-2">
                    <GlowingEffect
                      spread={30}
                      glow={true}
                      disabled={false}
                      proximity={48}
                      inactiveZone={0.01}
                      borderWidth={2}
                      variant="blue"
                    />
                    <div className="relative bg-black/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center h-full">
                      {/* Step Number */}
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm z-10">
                        {index + 1}
                      </div>
                      {/* Icon */}
                      <div className="w-14 h-14 mx-auto mb-4 bg-gray-900 border border-gray-700 rounded-xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-blue-400" />
                      </div>
                      {/* Title */}
                      <h4 className="text-lg font-bold text-white mb-2">
                        {step.title}
                      </h4>
                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
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
