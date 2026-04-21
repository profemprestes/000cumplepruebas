import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock, Shirt, Mail, Instagram, ExternalLink, Shield } from 'lucide-react'
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
    <div className="bg-sky-blue relative min-h-screen w-full overflow-hidden px-4 py-8 sm:px-6">
      {/* Fondo con nubes decorativas (estilo Cielo/Día) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 60, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="bg-cloud-soft absolute top-20 -left-20 h-80 w-80 rounded-full blur-3xl opacity-40"
        />
        <motion.div
          animate={{ x: [0, -50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="bg-white/30 absolute bottom-40 -right-20 h-96 w-96 rounded-full blur-[100px]"
        />
      </div>

      <header className="relative z-10 mx-auto max-w-2xl text-center">
        <div className="pixel-text bg-teddy-brown border-night mx-auto inline-flex items-center gap-2 rounded-md border-2 px-4 py-2 text-[10px] tracking-widest text-white uppercase shadow-[3px_3px_0_#000]">
          <Shield className="h-4 w-4" /> Modo Guardián
        </div>
        <h2 className="font-display text-night mt-4 text-3xl drop-shadow-[2px_2px_0_#fff] sm:text-5xl">
          Misión: Nivel {EVENT.level}
        </h2>
        <p className="text-night/80 mt-2 text-sm font-bold sm:text-base">
          Toda la logística de la base, directa y sin vueltas.
        </p>
      </header>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="voxel-card border-night divide-night/10 relative z-10 mx-auto mt-8 max-w-2xl divide-y overflow-hidden rounded-xl border-4 bg-white shadow-[6px_6px_0_var(--color-teddy-brown)]"
      >
        {rows.map((r) => (
          <div
            key={r.label}
            className={`flex items-center gap-4 p-4 sm:p-5 ${r.highlight ? 'bg-golden-coin/15' : ''}`}
          >
            <div
              className={`border-night flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 shadow-[2px_2px_0_#000] ${r.highlight ? 'bg-golden-coin text-night' : 'bg-sky-blue text-night'}`}
            >
              {r.icon}
            </div>
            <div className="min-w-0">
              <div className="text-night/60 text-xs font-bold tracking-wide uppercase">
                {r.label}
              </div>
              <div
                className={`text-sm font-bold sm:text-base ${r.highlight ? 'text-destructive' : 'text-night'}`}
              >
                {r.value}
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Mapa (Radar) */}
      <div className="voxel-card border-night relative z-10 mx-auto mt-6 max-w-2xl overflow-hidden rounded-xl border-4 bg-white p-0 shadow-[6px_6px_0_var(--color-teddy-brown)]">
        <iframe
          title="Mapa KBOOM"
          src={EVENT.mapsEmbed}
          className="h-56 w-full contrast-125 grayscale-20 sm:h-72"
          loading="lazy"
        />
        <a
          href={EVENT.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="bg-night text-golden-coin flex items-center justify-center gap-2 px-4 py-4 text-sm font-bold tracking-wider uppercase transition-colors hover:text-white"
        >
          <MapPin className="h-4 w-4" /> Abrir en Google Maps{' '}
          <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </div>

      {/* Contacto del Local */}
      <div className="relative z-10 mx-auto mt-6 grid max-w-2xl gap-4 sm:grid-cols-2">
        <a
          href={`mailto:${EVENT.email}`}
          className="voxel-card voxel-card-hover border-night flex items-center gap-3 rounded-xl border-4 bg-white p-4 shadow-[4px_4px_0_var(--color-teddy-brown)]"
        >
          <Mail className="text-sky-blue h-6 w-6" />
          <div className="min-w-0">
            <div className="text-night/60 text-xs font-bold tracking-wide uppercase">
              Email Base
            </div>
            <div className="text-night truncate text-sm font-bold">{EVENT.email}</div>
          </div>
        </a>
        <a
          href={EVENT.instagram}
          target="_blank"
          rel="noreferrer"
          className="voxel-card voxel-card-hover border-night flex items-center gap-3 rounded-xl border-4 bg-white p-4 shadow-[4px_4px_0_var(--color-teddy-brown)]"
        >
          <Instagram className="text-rosa h-6 w-6" />
          <div className="min-w-0">
            <div className="text-night/60 text-xs font-bold tracking-wide uppercase">Instagram</div>
            <div className="text-night truncate text-sm font-bold">{EVENT.instagramHandle}</div>
          </div>
        </a>
      </div>

      {/* Botones de Acción */}
      <div className="relative z-10 mx-auto mt-10 flex max-w-2xl flex-col items-center gap-4">
        <a
          href={whatsappLink(RSVP_PARENTS_MSG)}
          target="_blank"
          rel="noreferrer"
          className="bg-grass-green border-night font-display flex w-full items-center justify-center gap-3 rounded-xl border-4 px-6 py-4 text-lg tracking-widest text-white uppercase shadow-[4px_6px_0_var(--color-night)] transition-all hover:translate-y-1 hover:shadow-[4px_2px_0_var(--color-night)] active:translate-y-2 active:shadow-none sm:w-auto sm:text-xl"
        >
          ✅ Confirmar Asistencia
        </a>
        <button
          onClick={onContinue}
          className="bg-golden-coin text-night border-night font-display w-full rounded-xl border-4 px-6 py-4 text-base tracking-widest uppercase shadow-[4px_4px_0_var(--color-night)] transition-all hover:translate-y-1 hover:shadow-[4px_2px_0_var(--color-night)] active:translate-y-2 active:shadow-none sm:w-auto sm:text-lg"
        >
          🎁 Ver Guía SOBRE MI
        </button>
      </div>
    </div>
  )
}
