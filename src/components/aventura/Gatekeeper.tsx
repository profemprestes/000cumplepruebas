import { motion } from 'framer-motion'
import { Gamepad2, Shield } from 'lucide-react'

export function Gatekeeper({
  onChoose,
}: {
  onChoose: (mode: 'kid' | 'adult') => void
}) {
  return (
    <div className="bg-sky-blue relative flex min-h-screen w-full flex-col items-center justify-center p-4 overflow-hidden">

      {/* Fondo decorativo (opcional, simulando partículas) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white to-transparent" />

      <header className="relative z-10 px-6 pt-8 pb-4 text-center sm:pt-12 w-full max-w-2xl">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="font-display text-white text-4xl drop-shadow-[4px_4px_0_var(--color-teddy-brown)] sm:text-6xl uppercase tracking-wider"
        >
          ¡Alto Ahí! 🛑
        </motion.h1>

        {/* Caja de diálogo estilo RPG */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white/95 backdrop-blur-sm border-4 border-teddy-brown rounded-xl p-4 sm:p-6 mt-6 mx-auto shadow-[6px_6px_0_var(--color-teddy-brown)]"
        >
          <p className="text-teddy-brown font-amble text-base sm:text-lg font-bold leading-relaxed">
            "¡Che, despertate! Facu acaba de desbloquear el Nivel 9 en KBOOM. ¿Quién solicita acceso al servidor?"
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
          icon={<Shield className="h-10 w-10 text-teddy-brown" />}
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
  const bg = color === 'sky'
    ? 'bg-grass-green text-white border-night'
    : 'bg-golden-coin text-teddy-brown border-teddy-brown'

  const shadowClass = color === 'sky' ? 'shadow-[6px_8px_0_var(--color-grass-green)]' : 'shadow-[6px_8px_0_var(--color-teddy-brown)]'

  return (
    <motion.button
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.03, y: -4 }}
      whileTap={{ scale: 0.97, y: 2 }}
      onClick={onClick}
      className={`voxel-card relative w-full max-w-md overflow-hidden p-6 text-left border-4 rounded-2xl ${bg} ${shadowClass}`}
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100 pointer-events-none">
        <div className="animate-shine absolute inset-0 bg-white/20" />
      </div>

      <div className="relative flex flex-col gap-3 h-full">
        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/30 backdrop-blur-sm border-2 border-white/50 shadow-inner">
          {icon}
        </div>

        <h2 className="font-display text-2xl tracking-wide uppercase sm:text-3xl drop-shadow-sm mt-2">
          {title}
        </h2>

        <p className="text-sm sm:text-base font-bold opacity-90 flex-1">
          {subtitle}
        </p>

        <div className="pixel-text mt-4 inline-block bg-black/20 px-3 py-2 rounded text-[10px] tracking-widest uppercase opacity-90 w-max font-bold">
          ▶ PRESIONAR START
        </div>
      </div>
    </motion.button>
  )
}