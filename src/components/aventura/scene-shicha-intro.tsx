import { motion } from 'framer-motion'
import { DialogBox } from './dialog-box'
import { EVENT } from '@/lib/event'
import { HEROES, FACU_HERO_IMAGE } from '@/lib/heroes'

const SHICKA_IMG = HEROES.find((h) => h.id === 'shicka')!.image

export function SceneShichaIntro({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="bg-sky-blue relative flex min-h-screen w-full flex-col justify-between overflow-hidden p-6">
      {/* Nubes decorativas animadas */}
      <motion.div
        className="absolute top-12 left-6 text-6xl opacity-80"
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        ☁️
      </motion.div>
      <motion.div
        className="absolute top-32 right-8 text-5xl opacity-80"
        animate={{ x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        ☁️
      </motion.div>

      <header className="relative z-10 text-center mt-4">
        <div className="pixel-text bg-night text-golden-coin mx-auto inline-block rounded-md px-4 py-2 text-[10px] tracking-widest uppercase border-2 border-night shadow-[3px_3px_0_var(--color-night)]">
          Nivel 9 · Misión Principal
        </div>
      </header>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-end gap-6 pb-8">
        {/* Contenedor de Personajes */}
        <div className="flex items-end gap-2 sm:gap-4 -mb-4 z-20">
          <motion.img
            src={FACU_HERO_IMAGE}
            alt="Facu"
            initial={{ x: -150, opacity: 0, rotate: -10 }}
            animate={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.2 }}
            className="animate-float h-44 w-44 object-contain drop-shadow-[6px_6px_0_var(--color-night)] sm:h-56 sm:w-56"
          />
          <motion.img
            src={SHICKA_IMG}
            alt="Shicka"
            initial={{ x: 200, opacity: 0, rotate: 10 }}
            animate={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            className="animate-float h-48 w-48 object-contain drop-shadow-[6px_6px_0_var(--color-night)] sm:h-64 sm:w-64 [animation-delay:0.5s]"
          />
        </div>

        {/* Caja de Diálogo */}
        <div className="w-full max-w-2xl z-30">
          <DialogBox speaker="Shicka" emoji="🦊">
            <p className="leading-relaxed">
              ¡Excelente elección, bo! Soy <b>Shicka</b>, tu guía de exploración. Escuchame bien porque la cosa es así:
            </p>
            <p className="mt-3 leading-relaxed">
              <b>{EVENT.hero}</b> armó la base secreta en <b>KBOOM</b> para festejar el{' '}
              <b>Nivel {EVENT.level}</b> y precisamos a los mejores saltadores. ¿Te sumás al equipo?
            </p>
          </DialogBox>
        </div>

        {/* Botón de Acción */}
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={onContinue}
          className="bg-golden-coin text-night border-4 border-night rounded-xl px-8 py-4 font-display uppercase tracking-widest text-lg shadow-[4px_6px_0_var(--color-night)] hover:translate-y-1 hover:shadow-[4px_2px_0_var(--color-night)] active:translate-y-2 active:shadow-none transition-all z-30"
        >
          ▶ ¡VAMOS ARRIBA!
        </motion.button>
      </div>
    </div>
  )
}