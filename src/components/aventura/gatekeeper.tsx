import { motion } from 'framer-motion'
import { Gamepad2, Shield } from 'lucide-react'

export function Gatekeeper({ onChoose }: { onChoose: (mode: 'kid' | 'adult') => void }) {
  return (
    <div className="bg-sky-blue relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden p-4">
      {/* Fondo decorativo (opcional, simulando partículas) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white to-transparent opacity-20" />

      <header className="relative z-10 w-full max-w-2xl px-6 pt-8 pb-4 text-center sm:pt-12">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="font-display text-4xl tracking-wider text-white uppercase drop-shadow-[4px_4px_0_var(--color-teddy-brown)] sm:text-6xl"
        >
          ¡Alto Ahí! 🛑
        </motion.h1>

        {/* Caja de diálogo estilo RPG */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="border-teddy-brown mx-auto mt-6 max-w-lg rounded-xl border-4 bg-white/95 p-4 shadow-[6px_6px_0_var(--color-teddy-brown)] backdrop-blur-sm sm:p-6"
        >
          <p className="text-teddy-brown font-amble text-center text-base leading-relaxed font-bold sm:text-lg">
            "¡Facu desbloqueó el Nivel 9 en KBOOM! ¿Quién se suma a la partida?"
          </p>
        </motion.div>
      </header>

      <div className="relative z-10 flex w-full max-w-4xl flex-col gap-6 p-6 sm:flex-row sm:items-stretch sm:justify-center sm:gap-8">
        <ModeCard
          icon={<Gamepad2 className="h-10 w-10 text-white" />}
          title="Jugador Pro"
          subtitle="Ruta Aventurero: ¡Metele a los minijuegos!"
          color="sky"
          onClick={() => onChoose('kid')}
          delay={0.3}
        />
        <ModeCard
          icon={<Shield className="text-teddy-brown h-10 w-10" />}
          title="Guardián"
          subtitle="Ruta Padres: Info rápida y logística"
          color="teddy"
          onClick={() => onChoose('adult')}
          delay={0.4}
        />
      </div>
    </div>
  )
}

function ModeCard({
  icon,
  title,
  subtitle,
  color,
  onClick,
  delay,
}: {
  icon: React.ReactNode
  title: string
  subtitle: string
  color: 'sky' | 'teddy'
  onClick: () => void
  delay: number
}) {
  // Ajustamos los colores para que resalten más al estilo videojuego
  const bg =
    color === 'sky'
      ? 'bg-grass-green text-white border-night'
      : 'bg-golden-coin text-teddy-brown border-teddy-brown'

  const shadowClass =
    color === 'sky'
      ? 'shadow-[6px_8px_0_var(--color-grass-green)]'
      : 'shadow-[6px_8px_0_var(--color-teddy-brown)]'

  return (
    <motion.button
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.03, y: -4 }}
      whileTap={{ scale: 0.97, y: 2 }}
      onClick={onClick}
      className={`voxel-card relative w-full max-w-md overflow-hidden rounded-2xl border-4 p-6 text-left ${bg} ${shadowClass}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100">
        <div className="animate-shine absolute inset-0 bg-white/20" />
      </div>

      <div className="relative flex h-full flex-col gap-3">
        <div className="flex h-16 w-16 items-center justify-center rounded-xl border-2 border-white/50 bg-white/30 shadow-inner backdrop-blur-sm">
          {icon}
        </div>

        <h2 className="font-display mt-2 text-2xl tracking-wide uppercase drop-shadow-sm sm:text-3xl">
          {title}
        </h2>

        <p className="flex-1 text-sm font-bold opacity-90 sm:text-base">{subtitle}</p>

        <div className="pixel-text mt-4 inline-block w-max rounded bg-black/20 px-3 py-2 text-[10px] font-bold tracking-widest uppercase opacity-90">
          ▶ PRESIONAR START
        </div>
      </div>
    </motion.button>
  )
}
