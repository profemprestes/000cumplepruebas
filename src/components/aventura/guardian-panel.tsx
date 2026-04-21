import { motion } from 'framer-motion'
import {
  Calendar,
  MapPin,
  Clock,
  Shirt,
  Mail,
  Instagram,
  ExternalLink,
  Shield,
} from 'lucide-react'
import { EVENT, RSVP_PARENTS_MSG, whatsappLink } from '@/lib/event'

export function GuardianPanel({ onContinue }: { onContinue: () => void }) {
  const rows = [
    {
      icon: <Calendar className="h-5 w-5" />,
      label: 'Fecha',
      value: EVENT.dateLabel,
      highlight: false,
    },
    {
      icon: <Clock className="h-5 w-5" />,
      label: 'Horario',
      value: EVENT.timeLabel,
      highlight: false,
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Lugar',
      value: `${EVENT.venue} — ${EVENT.address}`,
      highlight: false,
    },
    {
      icon: <Shirt className="h-5 w-5" />,
      label: 'Importante',
      value: EVENT.condition,
      highlight: true, // Para resaltar el tema de las medias
    },
  ]

  return (
    <div className="bg-sky-blue/30 min-h-screen w-full px-4 py-8 sm:px-6">
      <header className="mx-auto max-w-2xl text-center">
        <div className="pixel-text bg-teddy-brown mx-auto inline-flex items-center gap-2 rounded-md px-4 py-2 text-[10px] tracking-widest text-white uppercase border-2 border-night shadow-[3px_3px_0_#000]">
          <Shield className="h-4 w-4" /> Modo Guardián
        </div>
        <h2 className="font-display text-night mt-4 text-3xl sm:text-5xl drop-shadow-[2px_2px_0_#fff]">
          Misión: Nivel {EVENT.level}
        </h2>
        <p className="text-night/80 mt-2 font-bold text-sm sm:text-base">
          Toda la logística de la base, directa y sin vueltas.
        </p>
      </header>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="voxel-card bg-white border-4 border-night shadow-[6px_6px_0_var(--color-teddy-brown-deep)] divide-night/10 mx-auto mt-8 max-w-2xl divide-y overflow-hidden rounded-xl"
      >
        {rows.map((r) => (
          <div
            key={r.label}
            className={`flex items-center gap-4 p-4 sm:p-5 ${r.highlight ? 'bg-golden-coin/15' : ''}`}
          >
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-night shadow-[2px_2px_0_#000] ${r.highlight ? 'bg-golden-coin text-night' : 'bg-sky-blue text-night'}`}>
              {r.icon}
            </div>
            <div className="min-w-0">
              <div className="text-night/60 font-bold text-xs tracking-wide uppercase">
                {r.label}
              </div>
              <div className={`text-sm sm:text-base font-bold ${r.highlight ? 'text-red-600' : 'text-night'}`}>
                {r.value}
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Mapa (Radar) */}
      <div className="voxel-card bg-white border-4 border-night shadow-[6px_6px_0_var(--color-teddy-brown-deep)] mx-auto mt-6 max-w-2xl overflow-hidden p-0 rounded-xl">
        <iframe
          title="Mapa KBOOM"
          src={EVENT.mapsEmbed}
          className="h-56 w-full sm:h-72 grayscale-20 contrast-125"
          loading="lazy"
        />
        <a
          href={EVENT.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="bg-night text-golden-coin hover:text-white transition-colors flex items-center justify-center gap-2 px-4 py-4 text-sm font-bold uppercase tracking-wider"
        >
          <MapPin className="h-4 w-4" /> Abrir en Google Maps <ExternalLink className="h-4 w-4 ml-1" />
        </a>
      </div>

      {/* Contacto del Local */}
      <div className="mx-auto mt-6 grid max-w-2xl gap-4 sm:grid-cols-2">
        <a
          href={`mailto:${EVENT.email}`}
          className="voxel-card voxel-card-hover bg-white border-4 border-night shadow-[4px_4px_0_var(--color-teddy-brown-deep)] flex items-center gap-3 p-4 rounded-xl"
        >
          <Mail className="text-sky-blue h-6 w-6 drop-shadow-sm" />
          <div className="min-w-0">
            <div className="text-night/60 font-bold text-xs tracking-wide uppercase">
              Email Base
            </div>
            <div className="truncate text-sm font-bold text-night">{EVENT.email}</div>
          </div>
        </a>
        <a
          href={EVENT.instagram}
          target="_blank"
          rel="noreferrer"
          className="voxel-card voxel-card-hover bg-white border-4 border-night shadow-[4px_4px_0_var(--color-teddy-brown-deep)] flex items-center gap-3 p-4 rounded-xl"
        >
          <Instagram className="text-rosa h-6 w-6 drop-shadow-sm" />
          <div className="min-w-0">
            <div className="text-night/60 font-bold text-xs tracking-wide uppercase">
              Instagram
            </div>
            <div className="truncate text-sm font-bold text-night">{EVENT.instagramHandle}</div>
          </div>
        </a>
      </div>

      {/* Botones de Acción */}
      <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-4">
        <a
          href={whatsappLink(RSVP_PARENTS_MSG)}
          target="_blank"
          rel="noreferrer"
          className="bg-grass-green text-white border-4 border-night rounded-xl px-6 py-4 w-full sm:w-auto font-display uppercase tracking-widest text-lg sm:text-xl shadow-[4px_6px_0_var(--color-night)] hover:translate-y-1 hover:shadow-[4px_2px_0_var(--color-night)] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center gap-3"
        >
          ✅ Confirmar Asistencia
        </a>
        <button
          onClick={onContinue}
          className="bg-golden-coin text-night border-4 border-night rounded-xl px-6 py-4 w-full sm:w-auto font-display uppercase tracking-widest text-base sm:text-lg shadow-[4px_4px_0_var(--color-night)] hover:translate-y-1 hover:shadow-[4px_2px_0_var(--color-night)] active:translate-y-2 active:shadow-none transition-all"
        >
          🎁 Ver Guía SOBRE MI
        </button>
      </div>
    </div>
  )
}