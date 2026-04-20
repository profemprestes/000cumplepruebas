import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { HEROES, type Hero } from '@/lib/heroes'

export function HeroSelector({
  onConfirm,
}: {
  onConfirm: (hero: Hero) => void
}) {
  const [idx, setIdx] = useState(0)
  const hero = HEROES[idx]

  const prev = () => setIdx((i) => (i - 1 + HEROES.length) % HEROES.length)
  const next = () => setIdx((i) => (i + 1) % HEROES.length)

  return (
    <div className="bg-cloud-soft flex min-h-screen w-full flex-col px-6 py-8">
      <header className="text-center">
        <div className="pixel-text bg-night text-golden-coin mx-auto inline-block rounded-md px-3 py-1 text-[10px] tracking-widest uppercase">
          Selecciona tu héroe
        </div>
        <h2 className="font-display text-night mt-3 text-3xl sm:text-4xl">
          Equipá tu personaje
        </h2>
      </header>

      <div className="relative mt-6 flex flex-1 items-center justify-center">
        <button
          onClick={prev}
          aria-label="Anterior"
          className="voxel-btn voxel-btn-teddy !p-3"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div className="mx-3 max-w-sm flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={hero.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`voxel-card flex flex-col items-center gap-4 p-6 ${hero.color}`}
            >
              <div className="bg-pixel-grid border-night relative flex h-44 w-44 items-center justify-center overflow-hidden rounded-md border-4 sm:h-52 sm:w-52">
                <div className="bg-pixel-ground absolute inset-x-0 bottom-0 h-4 opacity-70" />
                <img
                  src={hero.image}
                  alt={hero.name}
                  className="animate-float relative h-[88%] w-[88%] object-contain drop-shadow-[4px_4px_0_oklch(0.18_0.04_260/0.4)]"
                  loading="eager"
                />
              </div>
              <h3 className="font-display text-night text-3xl tracking-wide uppercase">
                {hero.name}
              </h3>
              <p className="text-night/85 min-h-[60px] text-center text-sm italic sm:text-base">
                "{hero.quote}"
              </p>
              <div className="pixel-text text-night/70 text-[10px] tracking-widest uppercase">
                {idx + 1} / {HEROES.length}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={next}
          aria-label="Siguiente"
          className="voxel-btn voxel-btn-teddy !p-3"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={() => onConfirm(hero)}
          className="voxel-btn voxel-btn-coin"
        >
          ⚔ Equipar a {hero.name}
        </button>
      </div>
    </div>
  )
}
