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
    height: '',
    weight: '',
    currentGoals: '',
    primaryGoal90Days: '',
    startDate: '',
    cooperationLength: '',
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

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          service: '',
          fullName: '',
          email: '',
          phone: '',
          age: '',
          height: '',
          weight: '',
          currentGoals: '',
          primaryGoal90Days: '',
          startDate: '',
          cooperationLength: '',
          consent: false,
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Submit error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value
    setFormData({
      ...formData,
      [e.target.name]: value,
    })
  }

  return (
    <section id="kontakt" ref={ref} className="pt-20 md:pt-32 pb-20 md:pb-32" style={{ backgroundColor: '#0e0f12' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gray-400 text-sm sm:text-base lg:text-[22px] font-medium tracking-wider mb-4">
            JSI READY UDĚLAT ZMĚNU?
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Vyber si službu a vyplň<br />krátký formulář
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
          <form
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
                  required
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
                    Tel. číslo
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
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                    E-mail
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
                    placeholder="Tvá hmotnost"
                  />
                </div>
              </div>
            </div>

            {/* Current Goals */}
            <div>
              <label htmlFor="currentGoals" className="block text-gray-300 font-medium mb-2">
                Aktuální cíle
              </label>
              <input
                type="text"
                id="currentGoals"
                name="currentGoals"
                value={formData.currentGoals}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                style={{ backgroundColor: 'rgb(29, 32, 37)' }}
                placeholder="Jaké jsou tvé aktuální cíle?"
              />
            </div>

            {/* Two Column Layout for Start Date and Cooperation Length */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="startDate" className="block text-gray-300 font-medium mb-2">
                  Kdy bys chtěl začít?
                </label>
                <input
                  type="text"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  style={{ backgroundColor: 'rgb(29, 32, 37)' }}
                  placeholder="Např. co nejdříve, od příštího týdne..."
                />
              </div>

              <div>
                <label htmlFor="cooperationLength" className="block text-gray-300 font-medium mb-2">
                  Jak dlouhou spolupráci si celkově představuješ?
                </label>
                <input
                  type="text"
                  id="cooperationLength"
                  name="cooperationLength"
                  value={formData.cooperationLength}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  style={{ backgroundColor: 'rgb(29, 32, 37)' }}
                  placeholder="Např. 3 měsíce, půl roku..."
                />
              </div>
            </div>

            {/* Primary Goal 90 Days */}
            <div>
              <label htmlFor="primaryGoal90Days" className="block text-gray-300 font-medium mb-2">
                Jaký je tvůj primární cíl pro následujících 90 dní? (Buď co nejvíce konkrétní)
              </label>
              <textarea
                id="primaryGoal90Days"
                name="primaryGoal90Days"
                value={formData.primaryGoal90Days}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-y"
                style={{ backgroundColor: 'rgb(29, 32, 37)' }}
                placeholder="Popiš svůj hlavní cíl co nejkonkrétněji..."
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
                <a href="/podminky" target="_blank" className="text-blue-500 hover:text-blue-400 underline">
                  smluvními podmínkami a zásadami ochrany osobních údajů
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold text-lg rounded-xl transition-colors duration-200"
            >
              {isSubmitting ? 'Odesílám...' : 'Odeslat'}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-600/20 border border-green-500 rounded-xl text-green-400 text-center">
                Formulář byl úspěšně odeslán! Brzy se ti ozvu.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-600/20 border border-red-500 rounded-xl text-red-400 text-center">
                Při odesílání došlo k chybě. Zkus to prosím znovu nebo mě kontaktuj přímo.
              </div>
            )}
          </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
