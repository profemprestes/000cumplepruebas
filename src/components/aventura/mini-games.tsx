import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X, Trophy } from 'lucide-react'
import { FACU_HERO_IMAGE } from '@/lib/heroes'

type Question = {
  q: string
  options: string[]
  correctIdx: number
  hint: string
}

// Trivia sencilla sobre Facu (cumpleañero, Nivel 9)
const QUESTIONS: Question[] = [
  {
    q: '¿Qué nivel desbloquea Facu en este cumple?',
    options: ['Nivel 7', 'Nivel 8', 'Nivel 9', 'Nivel 10'],
    correctIdx: 2,
    hint: 'El nombre de la misión lo grita 😉',
  },
  {
    q: '¿Cuál es el reino favorito de Facu?',
    options: ['Mario World', 'Hubbearvillage', 'Hyrule', 'Minecraftia'],
    correctIdx: 1,
    hint: 'Suena a oso peludo + pueblo.',
  },
  {
    q: '¿Qué hay que llevar SÍ o SÍ a la misión?',
    options: [
      'Patines',
      'Medias y ropa cómoda',
      'Capa de superhéroe',
      'Linterna',
    ],
    correctIdx: 1,
    hint: 'Pista: KBOOM tiene piso especial.',
  },
  {
    q: '¿Quién es la guía oficial del Reino?',
    options: ['Baaren', 'Toast', 'Shicka', 'Mirabeja'],
    correctIdx: 2,
    hint: 'Te recibió en la cinemática.',
  },
]

export function MiniGames({
  onContinue,
}: {
  onContinue: (score: number) => void
}) {
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
      <div className="bg-night-grid relative flex min-h-screen w-full flex-col items-center justify-center px-6 py-10 text-white">
        <motion.img
          src={FACU_HERO_IMAGE}
          alt="Facu"
          initial={{ scale: 0.6, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: 'spring', duration: 0.7 }}
          className="h-44 w-44 object-contain drop-shadow-[4px_4px_0_var(--color-golden-coin)] sm:h-56 sm:w-56"
        />
        <div className="pixel-text bg-golden-coin text-night mt-4 inline-block rounded-md px-3 py-1 text-[10px] tracking-widest uppercase">
          Trivia completada
        </div>
        <h2 className="font-display text-golden-coin mt-3 text-center text-3xl sm:text-4xl">
          {perfect ? '¡PUNTAJE PERFECTO!' : '¡BIEN AHÍ, AVENTURERO!'}
        </h2>
        <div className="mt-4 flex items-center gap-2 text-lg">
          <Trophy className="text-golden-coin h-6 w-6" />
          <span className="font-display tabular-nums">
            {score} / {QUESTIONS.length}
          </span>
        </div>
        <p className="mt-2 max-w-md text-center text-sm text-white/80">
          Sumaste XP de Facu-Lover. Ya estás listo para el panel de misión.
        </p>
        <button
          onClick={() => onContinue(score)}
          className="voxel-btn voxel-btn-coin mt-8"
        >
          ▶ Continuar al briefing
        </button>
      </div>
    )
  }

  return (
    <div className="bg-night-grid relative flex min-h-screen w-full flex-col px-5 py-8 text-white">
      <header className="mx-auto w-full max-w-xl text-center">
        <div className="pixel-text bg-golden-coin text-night mx-auto inline-block rounded-md px-3 py-1 text-[10px] tracking-widest uppercase">
          Mini-juego · Trivia Facu
        </div>
        <h2 className="font-display text-golden-coin mt-3 text-2xl sm:text-3xl">
          ¿Cuánto sabés del cumpleañero?
        </h2>
        <div className="mt-3 flex items-center justify-center gap-2">
          {QUESTIONS.map((_, i) => (
            <span
              key={i}
              className={`border-night h-2 w-8 rounded-sm border-2 ${
                i < idx
                  ? 'bg-grass-green'
                  : i === idx
                    ? 'bg-golden-coin'
                    : 'bg-white/20'
              }`}
            />
          ))}
        </div>
        <div className="pixel-text mt-2 text-[10px] tracking-widest text-white/70 uppercase">
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
            className="voxel-card p-5 bg-card text-card-foreground"
          >
            <p className="font-display text-lg leading-snug sm:text-xl">
              {q.q}
            </p>
            <div className="mt-4 grid gap-2">
              {q.options.map((opt, i) => {
                const isPicked = picked === i
                const reveal = picked !== null
                const isRight = i === q.correctIdx
                const tone = !reveal
                  ? 'bg-white/5 hover:bg-sky-blue/30 hover:-translate-y-0.5 hover:shadow-[2px_2px_0_0_var(--night)] active:translate-y-0.5 active:shadow-none transition-all duration-200'
                  : isRight
                    ? 'bg-grass-green text-night shadow-[2px_2px_0_0_var(--night)] -translate-y-0.5'
                    : isPicked
                      ? 'bg-destructive text-white translate-y-0.5'
                      : 'bg-white/5 opacity-40'
                return (
                  <button
                    key={i}
                    onClick={() => onPick(i)}
                    disabled={picked !== null}
                    className={`border-night flex items-center justify-between rounded-md border-4 px-3 py-2 text-left text-sm transition-all sm:text-base ${tone}`}
                  >
                    <span>{opt}</span>
                    {reveal && isRight && <Check className="h-5 w-5" />}
                    {reveal && isPicked && !isRight && (
                      <X className="h-5 w-5" />
                    )}
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
            title={
              picked === null
                ? 'Seleccioná una respuesta para continuar'
                : 'Siguiente'
            }
          >
            {idx + 1 >= QUESTIONS.length ? '▶ Ver resultado' : '▶ Siguiente'}
          </button>
        </div>
      </div>
    </div>
  )
}
