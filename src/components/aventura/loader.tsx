import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FACU_HERO_IMAGE } from '@/lib/heroes'

const PHRASES = [
  'Cargando Hubbearvillage...',
  'Despertando a Shicka...',
  'Sincronizando mundos...',
  'Listo para la aventura.',
]

export function Loader({ onStart }: { onStart: () => void }) {
  const [progress, setProgress] = useState(0)
  const [phraseIdx, setPhraseIdx] = useState(0)
  const ready = progress >= 100

  useEffect(() => {
    const i = window.setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          window.clearInterval(i)
          return 100
        }
        return Math.min(100, p + 2 + Math.random() * 4)
      })
    }, 90)
    return () => window.clearInterval(i)
  }, [])

  useEffect(() => {
    const idx = Math.min(PHRASES.length - 1, Math.floor((progress / 100) * PHRASES.length))
    setPhraseIdx(idx)
  }, [progress])

  useEffect(() => {
    if (!ready) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') onStart()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [ready, onStart])

  return (
    <div className="bg-sky-blue relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6">
      {/* Nubes decorativas */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/20 to-transparent opacity-50" />

      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-8 flex flex-col items-center gap-3"
      >
        <div className="voxel-card bg-white animate-pulse-glow flex h-32 w-32 items-center justify-center border-night sm:h-36 sm:w-36">
          <img
            src={FACU_HERO_IMAGE}
            alt="Facu"
            className="animate-float h-28 w-28 object-contain sm:h-32 sm:w-32"
            loading="eager"
          />
        </div>
        <h1 className="font-display text-white text-3xl drop-shadow-[3px_3px_0_var(--color-night)] sm:text-4xl">
          FACU · NIVEL 9
        </h1>
      </motion.div>

      <div className="relative z-10 w-full max-w-md">
        <div className="voxel-card bg-white overflow-hidden border-night p-1">
          <div className="relative h-5 w-full overflow-hidden rounded-sm bg-night/5">
            <motion.div
              className="from-grass-green to-golden-coin h-full bg-linear-to-r shadow-inner"
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'linear', duration: 0.1 }}
            />
            <div className="animate-shine pointer-events-none absolute inset-0" />
          </div>
        </div>
        <div className="pixel-text mt-3 flex items-center justify-between text-[10px] tracking-widest text-night uppercase">
          <span className="font-bold">{PHRASES[phraseIdx]}</span>
          <span className="font-bold">{Math.floor(progress)}%</span>
        </div>
      </div>

      {ready && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={onStart}
          className="voxel-btn voxel-btn-coin animate-blink mt-12 text-base sm:text-xl"
          aria-label="Empezar aventura"
        >
          ▶ COMENZAR
        </motion.button>
      )}
    </div>
  )
}
