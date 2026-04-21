import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock, Shirt, ExternalLink } from 'lucide-react'
import { EVENT, RSVP_KIDS_MSG, whatsappLink } from '@/lib/event'
import type { Hero } from '@/lib/heroes'
import { Countdown } from './countdown'

export function MissionPanel({
  hero,
  onContinue,
}: {
  hero: Hero | null
  onContinue: () => void
}) {
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
    <div className="bg-night-grid min-h-screen w-full px-5 py-8 text-white">
      <header className="mx-auto max-w-2xl text-center">
        <div className="pixel-text bg-golden-coin text-night mx-auto inline-block rounded-md px-3 py-1 text-[10px] tracking-widest uppercase">
          Panel de Misión · Nivel {EVENT.level}
        </div>
        <h2 className="font-display text-golden-coin mt-3 text-3xl sm:text-4xl">
          OBJETIVOS DEL NIVEL
        </h2>
        {hero && (
          <div className="mt-3 flex items-center justify-center gap-2">
            <img
              src={hero.image}
              alt={hero.name}
              className="h-10 w-10 object-contain"
            />
            <p className="text-sm text-white/80">
              Héroe equipado:{' '}
              <span className="font-display text-golden-coin">{hero.name}</span>
            </p>
          </div>
        )}
      </header>

      <div className="mx-auto mt-8 max-w-2xl">
        <div className="pixel-text mb-3 text-center text-[10px] tracking-widest text-white/70 uppercase">
          ⏳ Tiempo hasta el inicio
        </div>
        <Countdown targetISO={EVENT.dateISO} />
      </div>

      <div className="mx-auto mt-8 grid max-w-2xl gap-3">
        {objectives.map((o, i) => (
          <motion.div
            key={o.label}
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.08 }}
            className="voxel-card flex items-center gap-3 p-4 [background:oklch(0.24_0.05_260)] text-[oklch(0.99_0_0)]"
          >
            <div className="bg-sky-blue text-night flex h-11 w-11 shrink-0 items-center justify-center rounded-md">
              {o.icon}
            </div>
            <div className="min-w-0">
              <div className="pixel-text text-golden-coin text-[10px] tracking-widest uppercase">
                {o.label}
              </div>
              <div className="text-sm sm:text-base">{o.value}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center gap-3">
        <a
          href={whatsappLink(RSVP_KIDS_MSG)}
          target="_blank"
          rel="noreferrer"
          className="voxel-btn voxel-btn-grass w-full sm:w-auto"
        >
          ✅ CONFIRMAR MISIÓN
          <ExternalLink className="h-4 w-4" />
        </a>
        <button
          onClick={onContinue}
          className="voxel-btn voxel-btn-coin w-full sm:w-auto"
        >
          🎁 Ver inventario
        </button>
      </div>
    </div>
  )
}
