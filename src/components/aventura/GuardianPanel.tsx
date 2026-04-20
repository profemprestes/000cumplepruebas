import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Shirt, Mail, Instagram, ExternalLink } from "lucide-react";
import { EVENT, RSVP_PARENTS_MSG, whatsappLink } from "@/lib/event";

export function GuardianPanel({ onContinue }: { onContinue: () => void }) {
  const rows = [
    { icon: <Calendar className="h-5 w-5" />, label: "Fecha", value: EVENT.dateLabel },
    { icon: <Clock className="h-5 w-5" />, label: "Horario", value: EVENT.timeLabel },
    { icon: <MapPin className="h-5 w-5" />, label: "Lugar", value: `${EVENT.venue} — ${EVENT.address}` },
    { icon: <Shirt className="h-5 w-5" />, label: "Importante", value: EVENT.condition },
  ];

  return (
    <div className="min-h-screen w-full bg-background px-5 py-8">
      <header className="mx-auto max-w-2xl text-center">
        <div className="pixel-text mx-auto inline-block rounded-md bg-teddy-brown px-3 py-1 text-[10px] uppercase tracking-widest text-white">
          Modo Guardián
        </div>
        <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">
          Cumple de {EVENT.hero}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">Toda la info, sin vueltas.</p>
      </header>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="voxel-card mx-auto mt-6 max-w-2xl divide-y divide-foreground/10 overflow-hidden"
      >
        {rows.map((r) => (
          <div key={r.label} className="flex items-center gap-3 p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-sky-blue text-night">
              {r.icon}
            </div>
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-wide text-muted-foreground">
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
          className="flex items-center justify-center gap-2 bg-night px-4 py-3 text-sm text-golden-coin"
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
          <Mail className="h-5 w-5 text-sky-blue-deep" />
          <div className="min-w-0">
            <div className="text-xs uppercase tracking-wide text-muted-foreground">Email</div>
            <div className="truncate text-sm">{EVENT.email}</div>
          </div>
        </a>
        <a
          href={EVENT.instagram}
          target="_blank"
          rel="noreferrer"
          className="voxel-card voxel-card-hover flex items-center gap-3 p-4"
        >
          <Instagram className="h-5 w-5 text-teddy-brown-deep" />
          <div className="min-w-0">
            <div className="text-xs uppercase tracking-wide text-muted-foreground">Instagram</div>
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
          ✅ RSVP por WhatsApp
          <ExternalLink className="h-4 w-4" />
        </a>
        <button onClick={onContinue} className="voxel-btn voxel-btn-coin w-full sm:w-auto">
          🎁 Ver guía de regalos
        </button>
      </div>
    </div>
  );
}
