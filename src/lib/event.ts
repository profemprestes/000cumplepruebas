// Datos del evento — Gran Facu Aventura V2

export const EVENT = {
  hero: "Facu",
  level: 9,
  venue: "KBOOM",
  address: "Av. Italia 3421, Montevideo",
  dateLabel: "Domingo 24 de mayo",
  timeLabel: "18:30 a 21:00 hs",
  dateISO: "2026-05-24T18:30:00",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=-34.88619635981311,-56.1403753656917",
  mapsEmbed:
    "https://www.google.com/maps?q=-34.88619635981311,-56.1403753656917&hl=es&z=16&output=embed",
  email: "eventos@kboom.uy",
  instagram: "https://www.instagram.com/kboom.uy/",
  instagramHandle: "@kboom.uy",
  condition: "Llevar medias y ropa cómoda",
  // TODO: reemplazar por el número real (formato internacional sin + ni espacios)
  whatsapp: "+59898039248",
} as const;

export function whatsappLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${EVENT.whatsapp}?text=${text}`;
}

export const RSVP_KIDS_MSG = `🎮 ¡Misión aceptada! Confirmo asistencia al Nivel 9 de Facu el ${EVENT.dateLabel} en ${EVENT.venue}.`;
export const RSVP_PARENTS_MSG = `Hola! Confirmo asistencia al cumple de ${EVENT.hero} — ${EVENT.dateLabel} (${EVENT.timeLabel}) en ${EVENT.venue}.`;
