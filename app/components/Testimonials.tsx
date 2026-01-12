'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Petr Novák',
    role: 'Online Fitness Kouč',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Petr',
    text: 'Před připojením k mentoringu jsem byl přetížený a můj podnik byl uvízlý. Liborův mentoring mi dal jasnost, směr a systémy, které pomohly mým tržbám růst o 35% a přidaly 50 000 sledujících.',
    rating: 5,
  },
  {
    name: 'Martina Svobodová',
    role: 'Fitness Trenérka',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Martina',
    text: 'Připojení k mentoringu bylo jednou z nejlepších rozhodnutí, které jsem udělala. Moji sledující vzrostli z 1 000 na téměř 31 000, můj emailový seznam se rozšířil na 5 000 a moji klienti vzrostli z 5 na 40.',
    rating: 5,
  },
  {
    name: 'Tomáš Dvořák',
    role: 'Online Podnikatel',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tomas',
    text: 'Před mentoringem jsem se cítil uvízlý a nevěděl, jak růst. Za pět měsíců jsem skočil z 3k na 20k sledujících a nastavil automatizované emailové systémy, které snadno přinášejí leady.',
    rating: 5,
  },
  {
    name: 'Lucie Procházková',
    role: 'Fitness Influencer',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lucie',
    text: 'Připojení k Liborově mentoringu v prosinci 2023 transformovalo můj podnik. Za pouhých několik měsíců jsem získala zpět svou investici a vyrostla na 60 000 odběratelů na YouTube a Instagramu.',
    rating: 5,
  },
  {
    name: 'Jan Horák',
    role: 'PT & Online Kouč',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jan',
    text: 'Připojení k mentoringu změnilo všechno. Za 12 měsíců jsem šel od bojování k opuštění práce a vydělávání přes 1,5M Kč v jednom měsíci. Zaměření na řešení problémů mi pomohlo rychle růst.',
    rating: 5,
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} id="testimonials" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Co Říkají{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ostatní Podnikatelé
            </span>{' '}
            O Mentoringu?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Podívejte se na to, co říká více než 600+ mentees o jejich zkušenostech
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation
            pagination={{ clickable: true }}
            loop
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg h-full border border-gray-100"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-blue-600 mb-4 opacity-50" />
                  <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}

