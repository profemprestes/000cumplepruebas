import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock, Shirt, ExternalLink } from 'lucide-react'
import { EVENT, RSVP_KIDS_MSG, whatsappLink } from '@/lib/event'
import type { Hero } from '@/lib/heroes'
import { Countdown } from './countdown'

export function MissionPanel({ hero, onContinue }: { hero: Hero | null; onContinue: () => void }) {
  const objectives = [
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Ubicación',
      value: `${EVENT.venue} — ${EVENT.address}`,
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      label: 'Fecha',
      value: EVENT.dateLabel,
    },
    {
      icon: <Clock className="h-5 w-5" />,
      label: 'Horario',
      value: EVENT.timeLabel,
    },
    {
      icon: <Shirt className="h-5 w-5" />,
      label: 'Ítem obligatorio',
      value: EVENT.condition,
    },
  ]

  return (
    <div className="bg-sky-blue relative min-h-screen w-full overflow-hidden px-5 py-8 text-night">
      {/* Nubes decorativas */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/20 to-transparent opacity-50" />

      <header className="relative z-10 mx-auto max-w-2xl text-center">
        <div className="pixel-text bg-night text-golden-coin border-night mx-auto inline-block rounded-md border-2 px-3 py-1 text-[10px] tracking-widest uppercase shadow-[3px_3px_0_var(--color-night)]">
          Panel de Misión · Nivel {EVENT.level}
        </div>
        <h2 className="font-display text-white mt-3 text-3xl drop-shadow-[3px_3px_0_var(--color-night)] sm:text-5xl">
          OBJETIVOS DEL NIVEL
        </h2>
        {hero && (
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="border-night flex h-14 w-14 items-center justify-center rounded-xl border-4 bg-white shadow-[2px_2px_0_var(--color-night)]">
              <img src={hero.image} alt={hero.name} className="h-10 w-10 object-contain" />
            </div>
            <p className="text-sm font-bold text-night/80">
              Héroe equipado: <span className="font-display text-night text-lg">{hero.name}</span>
            </p>
          </div>
        )}
      </header>

      <div className="relative z-10 mx-auto mt-8 max-w-2xl">
        <div className="pixel-text mb-3 text-center text-[10px] font-bold tracking-widest text-night/60 uppercase">
          ⏳ Tiempo hasta el inicio
        </div>
        <Countdown targetISO={EVENT.dateISO} />
      </div>

      <div className="relative z-10 mx-auto mt-8 grid max-w-2xl gap-4">
        {objectives.map((o, i) => (
          <motion.div
            key={o.label}
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.08 }}
            className="voxel-card bg-white flex items-center gap-4 border-night p-4 shadow-[5px_5px_0_var(--color-night)]"
          >
            <div className="bg-sky-blue border-night text-night flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-4 shadow-[2px_2px_0_var(--color-night)]">
              {o.icon}
            </div>
            <div className="min-w-0">
              <div className="pixel-text text-night/50 text-[10px] font-bold tracking-widest uppercase">
                {o.label}
              </div>
              <div className="text-night text-base font-bold sm:text-lg">{o.value}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mx-auto mt-10 flex max-w-2xl flex-col items-center gap-4">
        <a
          href={whatsappLink(RSVP_KIDS_MSG)}
          target="_blank"
          rel="noreferrer"
          className="voxel-btn voxel-btn-grass w-full shadow-[5px_5px_0_var(--color-night)] sm:w-auto"
        >
          ✅ CONFIRMAR MISIÓN
          <ExternalLink className="h-5 w-5" />
        </a>
        <button
          onClick={onContinue}
          className="voxel-btn voxel-btn-coin w-full shadow-[5px_5px_0_var(--color-night)] sm:w-auto"
        >
          🎁 VER INVENTARIO
        </button>
      </div>
    </div>
  )
}
