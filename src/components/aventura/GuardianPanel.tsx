import { motion } from 'framer-motion'
import {
  Calendar,
  MapPin,
  Clock,
  Shirt,
  Mail,
  Instagram,
  ExternalLink,
} from 'lucide-react'
import { EVENT, RSVP_PARENTS_MSG, whatsappLink } from '@/lib/event'

export function GuardianPanel({ onContinue }: { onContinue: () => void }) {
  const rows = [
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
      icon: <MapPin className="h-5 w-5" />,
      label: 'Lugar',
      value: `${EVENT.venue} — ${EVENT.address}`,
    },
    {
      icon: <Shirt className="h-5 w-5" />,
      label: 'Importante',
      value: EVENT.condition,
    },
  ]

  return (
    <div className="bg-background min-h-screen w-full px-5 py-8">
      <header className="mx-auto max-w-2xl text-center">
        <div className="pixel-text bg-teddy-brown mx-auto inline-block rounded-md px-3 py-1 text-[10px] tracking-widest text-white uppercase">
          Modo Guardián
        </div>
        <h2 className="font-display text-foreground mt-3 text-3xl sm:text-4xl">
          Cumple de {EVENT.hero}
        </h2>
        <p className="text-muted-foreground mt-1 text-sm">
          Toda la info, sin vueltas.
        </p>
      </header>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="voxel-card divide-foreground/10 mx-auto mt-6 max-w-2xl divide-y overflow-hidden"
      >
        {rows.map((r) => (
          <div key={r.label} className="flex items-center gap-3 p-4">
            <div className="bg-sky-blue text-night flex h-10 w-10 shrink-0 items-center justify-center rounded-md">
              {r.icon}
            </div>
            <div className="min-w-0">
              <div className="text-muted-foreground text-xs tracking-wide uppercase">
                {r.label}
              </div>
              <div className="text-sm sm:text-base">{r.value}</div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Map */}
      <div className="voxel-card mx-auto mt-5 max-w-2xl overflow-hidden p-0">
        <iframe
          title="Mapa KBOOM"
          src={EVENT.mapsEmbed}
          className="h-56 w-full sm:h-72"
          loading="lazy"
        />
        <a
          href={EVENT.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="bg-night text-golden-coin flex items-center justify-center gap-2 px-4 py-3 text-sm"
        >
          Abrir en Google Maps <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      {/* Contacto */}
      <div className="mx-auto mt-5 grid max-w-2xl gap-3 sm:grid-cols-2">
        <a
          href={`mailto:${EVENT.email}`}
          className="voxel-card voxel-card-hover flex items-center gap-3 p-4"
        >
          <Mail className="text-sky-blue-deep h-5 w-5" />
          <div className="min-w-0">
            <div className="text-muted-foreground text-xs tracking-wide uppercase">
              Email
            </div>
            <div className="truncate text-sm">{EVENT.email}</div>
          </div>
        </a>
        <a
          href={EVENT.instagram}
          target="_blank"
          rel="noreferrer"
          className="voxel-card voxel-card-hover flex items-center gap-3 p-4"
        >
          <Instagram className="text-teddy-brown-deep h-5 w-5" />
          <div className="min-w-0">
            <div className="text-muted-foreground text-xs tracking-wide uppercase">
              Instagram
            </div>
            <div className="truncate text-sm">{EVENT.instagramHandle}</div>
          </div>
        </a>
      </div>

      <div className="mx-auto mt-7 flex max-w-2xl flex-col items-center gap-3">
        <a
          href={whatsappLink(RSVP_PARENTS_MSG)}
          target="_blank"
          rel="noreferrer"
          className="voxel-btn voxel-btn-grass w-full sm:w-auto"
        >
          ✅ Confirmar asistencia por WhatsApp
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
