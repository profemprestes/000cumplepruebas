import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Gamepad2 } from 'lucide-react'
import { HEROES, type Hero } from '@/lib/heroes'

export function HeroSelector({ onConfirm }: { onConfirm: (hero: Hero) => void }) {
  const [idx, setIdx] = useState(0)
  const hero = HEROES[idx]

  const prev = () => setIdx((i) => (i - 1 + HEROES.length) % HEROES.length)
  const next = () => setIdx((i) => (i + 1) % HEROES.length)

  return (
    <div className="bg-sky-blue relative flex min-h-screen w-full flex-col overflow-hidden px-4 py-8 sm:px-6">
      {/* Fondo de velocidad (rayas sutiles) */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#ffffff_10px,#ffffff_20px)] opacity-10" />

      <header className="relative z-10 pt-4 text-center">
        <div className="pixel-text bg-night text-golden-coin border-night mx-auto inline-flex items-center gap-2 rounded-md border-2 px-4 py-2 text-[10px] tracking-widest uppercase shadow-[3px_3px_0_var(--color-night)]">
          <Gamepad2 className="h-4 w-4" /> Selección de Skin
        </div>
        <h2 className="font-display mt-4 text-4xl tracking-wide text-white uppercase drop-shadow-[4px_4px_0_var(--color-teddy-brown)] sm:text-5xl">
          Elegí a tu héroe
        </h2>
      </header>

      <div className="relative z-10 mx-auto mt-6 flex w-full max-w-6xl flex-1 items-center justify-center gap-4 lg:gap-12">
        {/* Botón Anterior */}
        <button
          onClick={prev}
          aria-label="Anterior"
          className="text-night border-night z-20 rounded-xl border-4 bg-white p-3 shadow-[4px_4px_0_var(--color-night)] transition-all hover:bg-gray-100 active:translate-y-1 active:shadow-none sm:p-4 lg:p-6"
        >
          <ChevronLeft className="h-8 w-8 sm:h-10 sm:w-10 lg:h-14 lg:w-14" />
        </button>

        {/* Tarjeta del Héroe */}
        <div className="perspective-1000 relative mx-2 max-w-sm flex-1 sm:mx-6 lg:max-w-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={hero.id}
              initial={{ opacity: 0, scale: 0.8, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: -100 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className={`border-night flex flex-col items-center gap-6 rounded-3xl border-4 p-6 shadow-[10px_10px_0_var(--color-night)] sm:p-8 lg:p-10 ${hero.color}`}
            >
              {/* Contenedor del Avatar */}
              <div className="bg-sky-blue/20 border-night relative flex h-48 w-48 items-center justify-center overflow-hidden rounded-2xl border-4 shadow-inner sm:h-60 sm:w-60 lg:h-72 lg:w-72">
                {/* Piso simulado */}
                <div className="bg-night/20 absolute inset-x-0 bottom-0 h-8" />

                <img
                  src={hero.image}
                  alt={hero.name}
                  className="animate-float relative h-[90%] w-[90%] object-contain drop-shadow-[8px_8px_0_rgba(0,0,0,0.4)]"
                  loading="eager"
                />
              </div>

              <div className="w-full text-center">
                <h3 className="font-display text-3xl tracking-wide text-white uppercase drop-shadow-[2px_2px_0_#000] sm:text-4xl lg:text-5xl">
                  {hero.name}
                </h3>

                <div className="mt-4 rounded-xl border border-white/20 bg-black/30 p-4 lg:p-6">
                  <p className="min-h-[60px] text-sm leading-tight font-bold text-white italic drop-shadow-sm sm:text-base lg:text-lg">
                    "{hero.quote}"
                  </p>
                </div>
              </div>

              {/* Indicador de posición */}
              <div className="pixel-text mt-2 rounded bg-black/40 px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase sm:text-xs">
                {idx + 1} / {HEROES.length}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Botón Siguiente */}
        <button
          onClick={next}
          aria-label="Siguiente"
          className="text-night border-night z-20 rounded-xl border-4 bg-white p-3 shadow-[4px_4px_0_var(--color-night)] transition-all hover:bg-gray-100 active:translate-y-1 active:shadow-none sm:p-4 lg:p-6"
        >
          <ChevronRight className="h-8 w-8 sm:h-10 sm:w-10 lg:h-14 lg:w-14" />
        </button>
      </div>

      {/* Botón de Confirmación Principal */}
      <div className="relative z-10 mx-auto mt-8 mb-6 flex w-full max-w-sm justify-center lg:max-w-md">
        <button
          onClick={() => onConfirm(hero)}
          className="bg-grass-green border-night font-display flex w-full items-center justify-center gap-3 rounded-2xl border-4 px-6 py-4 text-xl tracking-widest text-white uppercase shadow-[4px_8px_0_var(--color-night)] transition-all hover:translate-y-1 hover:shadow-[4px_4px_0_var(--color-night)] active:translate-y-2 active:shadow-none sm:text-2xl lg:py-5 lg:text-3xl"
        >
          🎮 ¡EQUIPAR!
        </button>
      </div>
    </div>
  )
}
