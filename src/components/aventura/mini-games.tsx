import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X, Trophy } from 'lucide-react'
import { FACU_HERO_IMAGE } from '@/lib/heroes'
import { QUESTIONS } from '@/lib/questions'

export function MiniGames({ onContinue }: { onContinue: (score: number) => void }) {
  const [idx, setIdx] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const q = QUESTIONS[idx]
  const isCorrect = picked !== null && picked === q.correctIdx

  const onPick = (i: number) => {
    if (picked !== null) return
    setPicked(i)
    if (i === q.correctIdx) setScore((s) => s + 1)
  }

  const next = () => {
    if (idx + 1 >= QUESTIONS.length) {
      setDone(true)
      return
    }
    setIdx(idx + 1)
    setPicked(null)
  }

  if (done) {
    const perfect = score === QUESTIONS.length
    return (
      <div className="bg-sky-blue relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 py-10 text-night">
        {/* Nubes decorativas */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/20 to-transparent opacity-50" />

        <header className="relative z-10 mb-6 text-center">
          <div className="pixel-text bg-night text-golden-coin border-night mx-auto inline-block rounded-md border-2 px-3 py-1 text-[10px] tracking-widest uppercase shadow-[3px_3px_0_var(--color-night)]">
            Trivia completada
          </div>
        </header>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="voxel-card relative z-10 flex w-full max-w-sm flex-col items-center bg-white p-8 text-center"
        >
          <motion.img
            src={FACU_HERO_IMAGE}
            alt="Facu"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="animate-float h-40 w-40 object-contain drop-shadow-[4px_4px_0_var(--color-golden-coin)] sm:h-48 sm:w-48"
          />

          <h2 className="font-display text-night mt-6 text-3xl sm:text-4xl">
            {perfect ? '¡PUNTAJE PERFECTO!' : '¡BIEN AHÍ, AVENTURERO!'}
          </h2>

          <div className="mt-4 flex items-center gap-2 text-2xl">
            <Trophy className="text-golden-coin h-8 w-8 drop-shadow-[1px_1px_0_var(--color-night)]" />
            <span className="font-display tabular-nums text-night">
              {score} / {QUESTIONS.length}
            </span>
          </div>

          <p className="mt-4 text-sm font-bold text-night/70">
            Sumaste XP de Facu-Lover. Ya estás listo para el panel de misión.
          </p>

          <button onClick={() => onContinue(score)} className="voxel-btn voxel-btn-coin mt-8 w-full">
            ▶ CONTINUAR
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="bg-sky-blue relative flex min-h-screen w-full flex-col px-5 py-8 text-night overflow-hidden">
      {/* Nubes */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/20 to-transparent opacity-50" />

      <header className="relative z-10 mx-auto w-full max-w-xl text-center">
        <div className="pixel-text bg-night text-golden-coin border-night mx-auto inline-block rounded-md border-2 px-3 py-1 text-[10px] tracking-widest uppercase shadow-[3px_3px_0_var(--color-night)]">
          Mini-juego · Trivia Facu
        </div>
        <h2 className="font-display text-white mt-3 text-2xl drop-shadow-[3px_3px_0_var(--color-night)] sm:text-4xl">
          ¿Cuánto sabés?
        </h2>
        <div className="mt-4 flex items-center justify-center gap-2">
          {QUESTIONS.map((_, i) => (
            <span
              key={i}
              className={`border-night h-3 w-8 rounded-sm border-2 shadow-[2px_2px_0_var(--color-night)] ${i < idx ? 'bg-grass-green' : i === idx ? 'bg-golden-coin' : 'bg-white'
                }`}
            />
          ))}
        </div>
        <div className="pixel-text mt-3 text-[10px] font-bold tracking-widest text-night/80 uppercase">
          Pregunta {idx + 1} / {QUESTIONS.length} · Score {score}
        </div>
      </header>

      <div className="mx-auto mt-6 w-full max-w-xl flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
            className="voxel-card bg-card text-card-foreground p-5"
          >
            <p className="font-display text-lg leading-snug sm:text-xl">{q.q}</p>
            <div className="mt-4 grid gap-2">
              {q.options.map((opt, i) => {
                const isPicked = picked === i
                const reveal = picked !== null
                const isRight = i === q.correctIdx
                const tone = !reveal
                  ? 'bg-white hover:bg-sky-blue/30 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_var(--color-night)] active:translate-y-0.5 active:shadow-none transition-all duration-200'
                  : isRight
                    ? 'bg-grass-green text-white shadow-[4px_4px_0_0_var(--color-night)] -translate-y-0.5'
                    : isPicked
                      ? 'bg-destructive text-white translate-y-0.5'
                      : 'bg-gray-100 opacity-60'
                return (
                  <button
                    key={i}
                    onClick={() => onPick(i)}
                    disabled={picked !== null}
                    className={`border-night flex items-center justify-between rounded-md border-4 px-3 py-2 text-left text-sm transition-all sm:text-base ${tone}`}
                  >
                    <span>{opt}</span>
                    {reveal && isRight && <Check className="h-5 w-5" />}
                    {reveal && isPicked && !isRight && <X className="h-5 w-5" />}
                  </button>
                )
              })}
            </div>

            {picked !== null && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-night/50 mt-4 rounded-md border-2 bg-white/5 p-3 text-xs sm:text-sm"
                role="status"
                aria-live="polite"
              >
                <span className="pixel-text text-golden-coin mr-2">
                  {isCorrect ? '✓ CORRECTO' : '✗ CASI'}
                </span>
                {q.hint}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-5 flex justify-end">
          <button
            onClick={next}
            disabled={picked === null}
            className="voxel-btn voxel-btn-coin disabled:cursor-not-allowed disabled:opacity-50"
            aria-disabled={picked === null}
            title={picked === null ? 'Seleccioná una respuesta para continuar' : 'Siguiente'}
          >
            {idx + 1 >= QUESTIONS.length ? '▶ Ver resultado' : '▶ Siguiente'}
          </button>
        </div>
      </div>
    </div>
  )
}
