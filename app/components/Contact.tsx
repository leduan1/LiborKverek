'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ChevronDown } from 'lucide-react'

const planNames: Record<string, string> = {
  'coaching': 'COACHING',
  'jidelnicek': 'JÍDELNÍČEK',
  'treninkovy-plan': 'TRÉNINKOVÝ PLÁN',
}

const services = [
  'COACHING',
  'JÍDELNÍČEK',
  'TRÉNINKOVÝ PLÁN',
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedPlan, setSelectedPlan] = useState<string>('')
  const [formData, setFormData] = useState({
    service: '',
    fullName: '',
    email: '',
    phone: '',
    age: '',
    weight: '',
    height: '',
    occupation: '',
    physicalActivity: '',
    ambitions: '',
    dietaryHabits: '',
    consent: false,
  })

  useEffect(() => {
    // Získat plan z URL parametrů
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const plan = params.get('plan')
      if (plan && planNames[plan]) {
        setSelectedPlan(plan)
        setFormData((prev) => ({ ...prev, service: planNames[plan] }))
        // Scrollovat na sekci kontaktu
        setTimeout(() => {
          const contactSection = document.getElementById('kontakt')
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 100)
      }
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Zde bude logika pro odeslání formuláře
    console.log('Form submitted:', formData)
    // TODO: Přidat odesílání formuláře
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value
    setFormData({
      ...formData,
      [e.target.name]: value,
    })
  }

  return (
    <section id="kontakt" ref={ref} className="py-20 md:py-32" style={{ backgroundColor: '#0e0f12' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gray-400 text-sm sm:text-base lg:text-[22px] font-medium tracking-wider uppercase mb-4">
            JSI READY UDĚLAT ZMĚNU?
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Vyber si službu a vyplň<br />krátký formulář
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Service Selection */}
            <div>
              <label htmlFor="service" className="block text-gray-300 font-medium mb-2">
                Vyber si službu
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-600 appearance-none cursor-pointer"
                  style={{ backgroundColor: 'rgb(29, 32, 37)' }}
                >
                  <option value="">Vyber si službu...</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-gray-300 font-medium mb-2">
                    Celé jméno
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    style={{ backgroundColor: 'rgb(29, 32, 37)' }}
                    placeholder="Zadej celé jméno"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-300 font-medium mb-2">
                    Telefonní číslo
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    style={{ backgroundColor: 'rgb(29, 32, 37)' }}
                    placeholder="Telefonní číslo"
                  />
                </div>

                <div>
                  <label htmlFor="weight" className="block text-gray-300 font-medium mb-2">
                    Hmotnost
                  </label>
                  <input
                    type="text"
                    id="weight"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    style={{ backgroundColor: 'rgb(29, 32, 37)' }}
                    placeholder="Tvá hmotnost (nejlépe nalačno)"
                  />
                </div>

                <div>
                  <label htmlFor="occupation" className="block text-gray-300 font-medium mb-2">
                    Povolání
                  </label>
                  <input
                    type="text"
                    id="occupation"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    style={{ backgroundColor: 'rgb(29, 32, 37)' }}
                    placeholder="Tvé povolání (nebo studium)"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    style={{ backgroundColor: 'rgb(29, 32, 37)' }}
                    placeholder="Zadej svůj email"
                  />
                </div>

                <div>
                  <label htmlFor="age" className="block text-gray-300 font-medium mb-2">
                    Věk
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    style={{ backgroundColor: 'rgb(29, 32, 37)' }}
                    placeholder="Zadej svůj věk"
                  />
                </div>

                <div>
                  <label htmlFor="height" className="block text-gray-300 font-medium mb-2">
                    Výška
                  </label>
                  <input
                    type="text"
                    id="height"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    style={{ backgroundColor: 'rgb(29, 32, 37)' }}
                    placeholder="Tvá výška"
                  />
                </div>

                <div>
                  <label htmlFor="physicalActivity" className="block text-gray-300 font-medium mb-2">
                    Fyzická aktivita / jak často, jak dlouho? Sporty?
                  </label>
                  <input
                    type="text"
                    id="physicalActivity"
                    name="physicalActivity"
                    value={formData.physicalActivity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    style={{ backgroundColor: 'rgb(29, 32, 37)' }}
                    placeholder="Zadej fyzickou aktivitu"
                  />
                </div>
              </div>
            </div>

            {/* Ambitions Text Area */}
            <div>
              <label htmlFor="ambitions" className="block text-gray-300 font-medium mb-2">
                Jaké máš se svojí postavou ambice, co bys s ní chtěl dělat?
              </label>
              <textarea
                id="ambitions"
                name="ambitions"
                value={formData.ambitions}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-y"
                style={{ backgroundColor: 'rgb(29, 32, 37)' }}
                placeholder="Redukce tuku/hmotnosti, nabírání svalů, zlepšení kondice, náprava pohybového aparátu, etc."
              />
            </div>

            {/* Dietary Habits Text Area */}
            <div>
              <label htmlFor="dietaryHabits" className="block text-gray-300 font-medium mb-2">
                Jaké máš stravovací návyky? Alergie? Co ti chutná/nechutná?
              </label>
              <textarea
                id="dietaryHabits"
                name="dietaryHabits"
                value={formData.dietaryHabits}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-y"
                style={{ backgroundColor: 'rgb(29, 32, 37)' }}
                placeholder="Kolikrát denně jíš, zda sleduješ macra, zda sleduješ kalorie, co ti chutná, co ti nechutná, alergie, etc."
              />
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
                className="mt-1 w-5 h-5 rounded border-gray-700 text-blue-600 focus:ring-2 focus:ring-blue-600 cursor-pointer"
                style={{ backgroundColor: 'rgb(29, 32, 37)' }}
              />
              <label htmlFor="consent" className="text-gray-300 text-sm md:text-base cursor-pointer">
                Souhlasím se{' '}
                <a href="#" className="text-blue-500 hover:text-blue-400 underline">
                  smluvními podmínkami a zásadami ochrany osobních údajů
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-xl transition-colors duration-200"
            >
              Odeslat
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
