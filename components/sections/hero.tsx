"use client"

import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { TextRotate } from "@/components/ui/text-rotate"
import Floating, { FloatingElement } from "@/components/ui/parallax-floating"

const carImages = [
  {
    url: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80&fit=crop&auto=format",
    alt: "BMW Serie 8",
  },
  {
    url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80&fit=crop&auto=format",
    alt: "Porsche 911 Carrera",
  },
  {
    url: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&q=80&fit=crop&auto=format",
    alt: "Audi R8 V10",
  },
  {
    url: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80&fit=crop&auto=format",
    alt: "Range Rover Sport",
  },
  {
    url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80&fit=crop&auto=format",
    alt: "Luxury coupé",
  },
]

const rotatingWords = ["NUEVO", "FINANCIADO", "SOÑADO", "IDEAL"]

export function Hero() {
  return (
    <section className="w-full h-screen overflow-hidden flex flex-col items-center justify-center relative bg-c-bg">
      {/* Floating car images — parallax layer */}
      <Floating sensitivity={-0.5} className="h-full">
        <FloatingElement depth={0.5} className="top-[18%] left-[2%] md:top-[22%] md:left-[4%]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="-rotate-[4deg]"
          >
            <Image
              src={carImages[0].url}
              alt={carImages[0].alt}
              width={220}
              height={148}
              className="object-cover shadow-2xl w-24 h-16 sm:w-32 sm:h-24 md:w-44 md:h-32 lg:w-52 lg:h-36"
              unoptimized
            />
          </motion.div>
        </FloatingElement>

        <FloatingElement depth={1} className="top-[4%] left-[10%] md:top-[8%] md:left-[12%]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="-rotate-[10deg]"
          >
            <Image
              src={carImages[1].url}
              alt={carImages[1].alt}
              width={300}
              height={200}
              className="object-cover shadow-2xl w-28 h-20 sm:w-40 sm:h-28 md:w-52 md:h-36 lg:w-60 lg:h-40"
              unoptimized
            />
          </motion.div>
        </FloatingElement>

        <FloatingElement depth={3} className="top-[72%] left-[4%] md:top-[68%] md:left-[6%]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="rotate-[5deg]"
          >
            <Image
              src={carImages[2].url}
              alt={carImages[2].alt}
              width={280}
              height={280}
              className="object-cover shadow-2xl w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-64 lg:h-64"
              unoptimized
            />
          </motion.div>
        </FloatingElement>

        <FloatingElement depth={1.5} className="top-[2%] left-[80%] md:top-[4%] md:left-[78%]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="rotate-[8deg]"
          >
            <Image
              src={carImages[3].url}
              alt={carImages[3].alt}
              width={280}
              height={200}
              className="object-cover shadow-2xl w-36 h-24 sm:w-52 sm:h-36 md:w-64 md:h-44 lg:w-72 lg:h-48"
              unoptimized
            />
          </motion.div>
        </FloatingElement>

        <FloatingElement depth={2} className="top-[65%] left-[76%] md:top-[62%] md:left-[78%]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="rotate-[16deg]"
          >
            <Image
              src={carImages[4].url}
              alt={carImages[4].alt}
              width={260}
              height={260}
              className="object-cover shadow-2xl w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-64 lg:h-64"
              unoptimized
            />
          </motion.div>
        </FloatingElement>
      </Floating>

      {/* Central content */}
      <div className="relative z-50 flex flex-col items-center text-center px-6 pointer-events-none w-[90vw] sm:w-[360px] md:w-[480px] lg:w-[560px]">
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="w-5 h-px bg-c-accent block" />
          <span className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-c-text-3 font-body">
            Vehículos de ocasión
          </span>
          <span className="w-5 h-px bg-c-accent block" />
        </motion.div>

        {/* Main headline — last static word + rotating term share one line */}
        <motion.h1
          className="font-display leading-none tracking-display text-center"
          style={{ fontSize: "clamp(2.4rem, 6vw, 4.8rem)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span className="block w-full">CONSIGUE HOY TU</span>
          <span className="mt-0 flex w-full min-w-0 flex-wrap items-baseline justify-center gap-x-[0.2em]">
            <span className="shrink-0">COCHE</span>
            <motion.span
              className="min-w-0 inline-flex max-w-full overflow-hidden pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <TextRotate
                texts={rotatingWords}
                mainClassName="text-c-accent inline-flex"
                staggerDuration={0.04}
                staggerFrom="last"
                rotationInterval={2800}
                transition={{ type: "spring", damping: 28, stiffness: 320 }}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-110%", opacity: 0 }}
              />
            </motion.span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="font-body text-c-text-2 mt-8 text-base sm:text-lg leading-relaxed max-w-sm"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
        >
          Selección rigurosa de vehículos premium. Confianza total, transparencia absoluta.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex gap-3 mt-10 pointer-events-auto flex-wrap justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link
            href="#vehiculos"
            className="font-body text-sm font-semibold tracking-wide bg-c-text text-white px-7 py-3 rounded-none transition-colors hover:bg-c-accent"
          >
            Ver catálogo
          </Link>
          <Link
            href="#contacto"
            className="font-body text-sm font-medium text-c-text-2 px-7 py-3 rounded-none border border-c-border transition-colors hover:border-c-text hover:text-c-text"
          >
            Asesoramiento
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
