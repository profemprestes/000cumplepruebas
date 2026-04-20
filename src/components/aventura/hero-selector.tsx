import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Gamepad2 } from 'lucide-react'
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
    <div className="bg-sky-blue relative flex min-h-screen w-full flex-col px-4 py-8 sm:px-6 overflow-hidden">

      {/* Fondo de velocidad (rayas sutiles) */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#ffffff_10px,#ffffff_20px)]" />

      <header className="relative z-10 text-center pt-4">
        <div className="pixel-text bg-night text-golden-coin mx-auto inline-flex items-center gap-2 rounded-md px-4 py-2 text-[10px] tracking-widest uppercase border-2 border-night shadow-[3px_3px_0_var(--color-night)]">
          <Gamepad2 className="h-4 w-4" /> Selección de Skin
        </div>
        <h2 className="font-display text-white mt-4 text-4xl sm:text-5xl drop-shadow-[4px_4px_0_var(--color-teddy-brown)] uppercase tracking-wide">
          Elegí a tu héroe
        </h2>
      </header>

      <div className="relative z-10 mt-6 flex flex-1 items-center justify-center max-w-4xl mx-auto w-full">
        {/* Botón Anterior */}
        <button
          onClick={prev}
          aria-label="Anterior"
          className="bg-white text-night border-4 border-night rounded-xl p-3 sm:p-4 shadow-[4px_4px_0_var(--color-night)] hover:bg-gray-100 active:translate-y-1 active:shadow-none transition-all z-20"
        >
          <ChevronLeft className="h-8 w-8 sm:h-10 sm:w-10" />
        </button>

        {/* Tarjeta del Héroe */}
        <div className="mx-2 sm:mx-6 max-w-sm flex-1 relative perspective-1000">
          <AnimatePresence mode="wait">
            <motion.div
              key={hero.id}
              initial={{ opacity: 0, scale: 0.8, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: -100 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className={`flex flex-col items-center gap-4 p-6 sm:p-8 rounded-3xl border-4 border-night shadow-[8px_8px_0_var(--color-night)] ${hero.color}`}
            >
              {/* Contenedor del Avatar */}
              <div className="bg-sky-blue/20 border-night relative flex h-48 w-48 sm:h-60 sm:w-60 items-center justify-center overflow-hidden rounded-2xl border-4 shadow-inner">
                {/* Piso simulado */}
                <div className="absolute inset-x-0 bottom-0 h-6 bg-night/20" />

                <img
                  src={hero.image}
                  alt={hero.name}
                  className="animate-float relative h-[90%] w-[90%] object-contain drop-shadow-[6px_6px_0_rgba(0,0,0,0.4)]"
                  loading="eager"
                />
              </div>

              <div className="text-center w-full">
                <h3 className="font-display text-white text-3xl sm:text-4xl tracking-wide uppercase drop-shadow-[2px_2px_0_var(--color-night)]">
                  {hero.name}
                </h3>

                <div className="bg-black/30 rounded-xl p-4 mt-3 border border-white/20">
                  <p className="text-white font-bold min-h-[60px] text-sm sm:text-base italic leading-tight drop-shadow-sm">
                    "{hero.quote}"
                  </p>
                </div>
              </div>

              {/* Indicador de posición */}
              <div className="pixel-text bg-black/40 text-white px-3 py-1 rounded text-[10px] tracking-widest uppercase mt-2 font-bold">
                {idx + 1} / {HEROES.length}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Botón Siguiente */}
        <button
          onClick={next}
          aria-label="Siguiente"
          className="bg-white text-night border-4 border-night rounded-xl p-3 sm:p-4 shadow-[4px_4px_0_var(--color-night)] hover:bg-gray-100 active:translate-y-1 active:shadow-none transition-all z-20"
        >
          <ChevronRight className="h-8 w-8 sm:h-10 sm:w-10" />
        </button>
      </div>

      {/* Botón de Confirmación Principal */}
      <div className="relative z-10 mt-8 mb-6 flex justify-center w-full max-w-sm mx-auto">
        <button
          onClick={() => onConfirm(hero)}
          className="bg-grass-green text-white border-4 border-night w-full rounded-2xl px-6 py-4 font-display uppercase tracking-widest text-xl sm:text-2xl shadow-[4px_8px_0_var(--color-night)] hover:translate-y-1 hover:shadow-[4px_4px_0_var(--color-night)] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center gap-3"
        >
          🎮 ¡ELEGIR A {hero.name}!
        </button>
      </div>
    </div>
  )
}