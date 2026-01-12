'use client'

import { motion, useInView, useMotionValue, animate } from 'framer-motion'
import { useRef, useState, useMemo, useEffect } from 'react'
import Image from 'next/image'

const transformationImages = [
  '/promeny/35e0f8cc-b059-48e9-a3ec-1ff4b1249823.jpg',
  '/promeny/36719fa9-137e-4e62-88fd-2bd5e687801d.jpg',
  '/promeny/4.png',
  '/promeny/5.png',
  '/promeny/5a13a66e-d363-4d9a-8d85-ee30d9b6768f.jpg',
  '/promeny/6 měsíců.JPEG',
  '/promeny/6.png',
  '/promeny/7.png',
  '/promeny/8D667785-2B7C-455B-9279-012300A594AB.JPEG',
  '/promeny/9ee5315c-40ca-49ec-8dec-2829e9dc3d91.jpg',
  '/promeny/9F23887B-58EF-4204-8EAE-4DECE7360208.jpg',
  '/promeny/a5ea6192-238b-4417-be61-63314e4b8123.jpg',
  '/promeny/aa44986d-6633-4598-a08f-d727a038b75e.jpg',
  '/promeny/b558dae2-dedf-41ee-b9bb-bf5e2f243b93.jpg',
  '/promeny/B58C6C95-33A7-42A8-A1FD-21E4DD7D6202.JPEG',
  '/promeny/bb8fdb34-393c-4dbd-bd87-2037e767d27d.jpg',
  '/promeny/Black Elegant Women Fitness Instagram Post.JPEG',
  '/promeny/Blue White Modern Collage Instagram Post.png',
  '/promeny/C48800E5-D157-4741-83F3-9734F651D7FC.jpg',
  '/promeny/c85539a5-833b-40f9-ab41-47ffed7e49f0.jpg',
  '/promeny/E42EF959-A831-4CB4-9A11-BCFDA8D9E91D.jpg',
  '/promeny/e79e37d3-ed24-4e3e-9d6f-a2ecb0dd01c5.jpg',
  '/promeny/F50B00DA-860B-44ED-BF0C-6302772DF814.JPEG',
  '/promeny/f8f89208-0be0-4056-81f4-0a5097694e8f.jpg',
  '/promeny/IMG_6879.JPEG',
  '/promeny/IMG_6880.JPEG',
  '/promeny/IMG_6881.JPEG',
  '/promeny/IMG_6882.JPEG',
  '/promeny/IMG_6980.PNG',
  '/promeny/IMG_8533.JPG',
  '/promeny/IMG_8546.JPG',
  '/promeny/Kopie návrhu Blue White Modern Collage Instagram Post.zip - 1.JPEG',
  '/promeny/Kopie návrhu Blue White Modern Collage Instagram Post.zip - 1.png',
  '/promeny/Kopie návrhu Blue White Modern Collage Instagram Post.zip - 2.png',
  '/promeny/Návrh bez názvu.JPEG',
  '/promeny/Terka před zboku.JPEG',
  '/promeny/Vojta proměna.png',
  '/promeny/Zdeněk před.jpg',
]

export default function ClientTransformations() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isHoveredRow1, setIsHoveredRow1] = useState(false)
  const [isHoveredRow2, setIsHoveredRow2] = useState(false)
  const x1 = useMotionValue(0)
  const x2 = useMotionValue(0)
  const animation1Ref = useRef<any>(null)
  const animation2Ref = useRef<any>(null)

  // Rozdělíme obrázky mezi 2 marquee tak, aby se neopakovaly
  const imagesPerRow = Math.ceil(transformationImages.length / 2)
  const row1Images = transformationImages.slice(0, imagesPerRow)
  const row2Images = transformationImages.slice(imagesPerRow)

  // Duplikujeme pro plynulý loop
  const duplicatedRow1Images = useMemo(() => [...row1Images, ...row1Images], [row1Images])
  const duplicatedRow2Images = useMemo(() => [...row2Images, ...row2Images], [row2Images])
  
  // Vypočítáme šířku jednoho obrázku včetně gapu
  const imageWidth = 300
  const gap = 24
  const totalWidthRow1 = useMemo(() => {
    if (row1Images.length === 0) return 0
    return (imageWidth + gap) * row1Images.length
  }, [row1Images.length])
  const totalWidthRow2 = useMemo(() => {
    if (row2Images.length === 0) return 0
    return (imageWidth + gap) * row2Images.length
  }, [row2Images.length])

  // Spustit animace při načtení
  useEffect(() => {
    if (!isInView) return

    // První řada - zleva doprava
    animation1Ref.current = animate(x1, -totalWidthRow1, {
      repeat: Infinity,
      repeatType: 'loop',
      duration: 100,
      ease: 'linear',
    })

    // Druhá řada - zprava doleva (opačný směr) - použijeme kladné hodnoty protože direction: 'rtl' invertuje směr
    animation2Ref.current = animate(x2, totalWidthRow2, {
      repeat: Infinity,
      repeatType: 'loop',
      duration: 100,
      ease: 'linear',
    })

    return () => {
      if (animation1Ref.current) animation1Ref.current.stop()
      if (animation2Ref.current) animation2Ref.current.stop()
    }
  }, [isInView, totalWidthRow1, totalWidthRow2, x1, x2])

  // Pozastavit/pokračovat při hoveru
  useEffect(() => {
    if (!isInView) return

    if (isHoveredRow1) {
      if (animation1Ref.current) {
        animation1Ref.current.stop()
      }
    } else {
      // Pokračovat od aktuální pozice - použijeme cyklickou animaci
      const currentX = x1.get()
      // Vypočítáme offset pro plynulé pokračování
      const offset = currentX % totalWidthRow1
      const startX = offset - totalWidthRow1
      animation1Ref.current = animate(x1, startX - totalWidthRow1, {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 100,
        ease: 'linear',
        from: startX,
      })
    }
  }, [isHoveredRow1, totalWidthRow1, x1, isInView])

  useEffect(() => {
    if (!isInView) return

    if (isHoveredRow2) {
      if (animation2Ref.current) {
        animation2Ref.current.stop()
      }
    } else {
      // Pokračovat od aktuální pozice (opačný směr) - použijeme cyklickou animaci
      const currentX = x2.get()
      // Vypočítáme offset pro plynulé pokračování
      // Protože používáme direction: 'rtl' a kladné hodnoty, offset je jiný
      const offset = currentX % totalWidthRow2
      const startX = offset < 0 ? offset + totalWidthRow2 : offset
      animation2Ref.current = animate(x2, startX + totalWidthRow2, {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 100,
        ease: 'linear',
        from: startX,
      })
    }
  }, [isHoveredRow2, totalWidthRow2, x2, isInView])

  return (
    <section id="promeny-klientu" ref={ref} className="py-20 md:py-32" style={{ backgroundColor: '#0e0f12' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gray-400 text-sm sm:text-base lg:text-[22px] font-medium tracking-wider uppercase mb-4">
            PROMĚNY KLIENTŮ
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Skutečné proměny, skutečné výsledky
          </h2>
        </motion.div>

        {/* First Row - Left to Right */}
        <div 
          className="overflow-hidden mb-6"
          onMouseEnter={() => setIsHoveredRow1(true)}
          onMouseLeave={() => setIsHoveredRow1(false)}
        >
          <motion.div
            className="flex gap-6"
            style={{ width: 'max-content', x: x1 }}
          >
            {duplicatedRow1Images.map((imagePath, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 w-[300px] h-[400px] relative rounded-xl overflow-hidden bg-black"
                style={{ minWidth: '300px', minHeight: '400px', maxWidth: '300px', maxHeight: '400px' }}
              >
                <Image
                  src={imagePath}
                  alt={`Transformation ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="300px"
                  loading="lazy"
                  quality={75}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second Row - Right to Left (opposite direction) */}
        <div 
          className="overflow-hidden"
          onMouseEnter={() => setIsHoveredRow2(true)}
          onMouseLeave={() => setIsHoveredRow2(false)}
          style={{ direction: 'rtl' }}
        >
          <motion.div
            className="flex gap-6"
            style={{ width: 'max-content', x: x2, direction: 'ltr' }}
          >
            {duplicatedRow2Images.map((imagePath, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 w-[300px] h-[400px] relative rounded-xl overflow-hidden bg-black"
                style={{ minWidth: '300px', minHeight: '400px', maxWidth: '300px', maxHeight: '400px' }}
              >
                <Image
                  src={imagePath}
                  alt={`Transformation ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="300px"
                  loading="lazy"
                  quality={75}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

