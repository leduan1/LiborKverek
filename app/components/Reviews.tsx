'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react'

const reviewImages = [
  '/recenze/A7E4CD29-EDB3-462A-9BA9-E5328677AF2D.jpg',
  '/recenze/IMG_2651.JPEG',
  '/recenze/IMG_2676.JPEG',
  '/recenze/IMG_2677.JPEG',
  '/recenze/IMG_2872.JPEG',
  '/recenze/IMG_2881.JPEG',
  '/recenze/IMG_4708.JPEG',
  '/recenze/IMG_5915.JPEG',
  '/recenze/IMG_5921.JPEG',
  '/recenze/IMG_6637.JPEG',
  '/recenze/IMG_6645.JPEG',
  '/recenze/IMG_6650.JPEG',
  '/recenze/IMG_6979.PNG',
  '/recenze/IMG_6980.PNG',
  '/recenze/IMG_7661.JPEG',
  '/recenze/IMG_7801.JPEG',
  '/recenze/IMG_7936.JPEG',
  '/recenze/IMG_7937.JPEG',
  '/recenze/IMG_8207.JPEG',
  '/recenze/IMG_8208.JPEG',
]

export default function Reviews() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  const openModal = (index: number) => {
    setCurrentImageIndex(index)
    setIsModalOpen(true)
    setIsZoomed(false)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setIsZoomed(false)
    document.body.style.overflow = 'unset'
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % reviewImages.length)
    setIsZoomed(false)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + reviewImages.length) % reviewImages.length)
    setIsZoomed(false)
  }

  const toggleZoom = () => {
    setIsZoomed((prev) => !prev)
  }

  useEffect(() => {
    if (!isModalOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal()
      } else if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => {
          setIsZoomed(false)
          return (prev - 1 + reviewImages.length) % reviewImages.length
        })
      } else if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => {
          setIsZoomed(false)
          return (prev + 1) % reviewImages.length
        })
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen])

  return (
    <section id="reviews" ref={ref} className="py-20 md:py-32" style={{ backgroundColor: '#0e0f12' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gray-400 text-sm sm:text-base lg:text-[22px] font-medium tracking-wider uppercase mb-4">
            Recenze klientů
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Výsledky, které si každý klient odnese
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewImages.map((imagePath, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-black rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center p-3 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="relative w-full aspect-[3/4] max-h-[700px]">
                <Image
                  src={imagePath}
                  alt={`Review ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal with Carousel */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/80 hover:bg-black rounded-full flex items-center justify-center text-white transition-colors duration-200"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Zoom Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                toggleZoom()
              }}
              className="absolute top-4 left-4 z-10 w-12 h-12 bg-black/80 hover:bg-black rounded-full flex items-center justify-center text-white transition-colors duration-200"
              aria-label={isZoomed ? 'Zoom out' : 'Zoom in'}
            >
              {isZoomed ? <ZoomOut className="w-6 h-6" /> : <ZoomIn className="w-6 h-6" />}
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/80 hover:bg-black rounded-full flex items-center justify-center text-white transition-colors duration-200"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/80 hover:bg-black rounded-full flex items-center justify-center text-white transition-colors duration-200"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full max-w-5xl max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`relative w-full h-full ${isZoomed ? 'scale-150' : 'scale-100'} transition-transform duration-300`}>
                <Image
                  src={reviewImages[currentImageIndex]}
                  alt={`Review ${currentImageIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
              </div>
            </motion.div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-black/80 px-4 py-2 rounded-full text-white text-sm">
              {currentImageIndex + 1} / {reviewImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

