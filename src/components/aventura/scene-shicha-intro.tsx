import { motion } from 'framer-motion'
import { DialogBox } from './dialog-box'
import { EVENT } from '@/lib/event'
import { HEROES, FACU_HERO_IMAGE } from '@/lib/heroes'
import { Bear3D } from './bear-3d'

const SHICKA_IMG = HEROES.find((h) => h.id === 'shicka')!.image

export function SceneShichaIntro({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="bg-sky-blue relative flex min-h-screen w-full flex-col justify-between overflow-hidden p-6">
      {/* Nubes decorativas animadas */}
      <motion.div
        className="absolute top-12 left-6 text-6xl opacity-80"
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        ☁️
      </motion.div>
      <motion.div
        className="absolute top-32 right-8 text-5xl opacity-80"
        animate={{ x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      >
        ☁️
      </motion.div>

      <header className="relative z-10 mt-4 text-center lg:mt-8">
        <div className="pixel-text bg-night text-golden-coin border-night mx-auto inline-block rounded-md border-2 px-4 py-2 text-[10px] tracking-widest uppercase shadow-[3px_3px_0_#000]">
          Nivel 9 · Misión Principal
        </div>
      </header>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-8 lg:flex-row lg:gap-16 lg:px-12">
        
        {/* Contenedor de Personajes */}
        <div className="relative z-20 flex w-full max-w-xl items-end justify-center gap-2 sm:gap-4 lg:flex-1 lg:max-w-none">
          <motion.img
            src={FACU_HERO_IMAGE}
            alt="Facu"
            initial={{ x: -150, opacity: 0, rotate: -10 }}
            animate={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.2 }}
            className="animate-float h-36 w-36 object-contain drop-shadow-[6px_6px_0_var(--color-night)] sm:h-48 sm:w-48 lg:h-64 lg:w-64"
          />

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 80, damping: 12, delay: 0.8 }}
            className="lg:scale-125"
          >
            <Bear3D />
          </motion.div>

          <motion.img
            src={SHICKA_IMG}
            alt="Shicka"
            initial={{ x: 200, opacity: 0, rotate: 10 }}
            animate={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            className="animate-float h-40 w-40 object-contain drop-shadow-[6px_6px_0_var(--color-night)] [animation-delay:0.5s] sm:h-52 sm:w-52 lg:h-72 lg:w-72"
          />
        </div>

        {/* LADO DERECHO (en desktop): Diálogo y Acción */}
        <div className="relative z-30 flex w-full max-w-2xl flex-col items-center gap-8 lg:flex-1 lg:items-start lg:text-left">
          <DialogBox speaker="Shicka" emoji="🦊">
            <p className="leading-relaxed text-sm sm:text-base">
              ¡Excelente elección, bo! Soy <b>Shicka</b>, tu guía de exploración. Escuchame bien
              porque la cosa es así:
            </p>
            <p className="mt-3 leading-relaxed text-sm sm:text-base">
              <b>{EVENT.hero}</b> armó la base secreta en <b>KBOOM</b> para festejar el{' '}
              <b>Nivel {EVENT.level}</b> y precisamos a los mejores saltadores. ¿Te sumás al equipo?
            </p>
          </DialogBox>

          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={onContinue}
            className="bg-golden-coin text-night border-night font-display w-full rounded-xl border-4 px-8 py-4 text-lg tracking-widest uppercase shadow-[4px_6px_0_var(--color-night)] transition-all hover:translate-y-1 hover:shadow-[4px_2px_0_var(--color-night)] active:translate-y-2 active:shadow-none sm:w-auto sm:px-12 sm:text-xl"
          >
            ▶ ¡VAMOS ARRIBA!
          </motion.button>
        </div>
      </div>
    </div>
  )
}
