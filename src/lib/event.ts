// Datos del evento — Gran Facu Aventura V2

export const EVENT = {
  hero: 'Facu',
  level: 9,
  venue: 'KBOOM',
  address: 'Av. Italia 3421, Montevideo',
  dateLabel: 'Domingo 24 de mayo',
  timeLabel: '18:30 a 21:00 hs',
  dateISO: '2026-05-24T18:30:00',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=-34.88619635981311,-56.1403753656917', // Reemplazar por link corto real
  mapsEmbed:
    'https://www.google.com/maps?q=-34.88619635981311,-56.1403753656917&hl=es&z=16&output=embed',
  email: 'eventos@kboom.uy',
  instagram: 'https://www.instagram.com/kboom.uy/',
  instagramHandle: '@kboom.uy',
  condition:
    '⚠️ Obligatorio: Traer medias deportivas y "armadura" (ropa) cómoda.',
  // Formato internacional sin '+' ni espacios (Ej: 59898039248)
  whatsapp: '59898039248',
} as const

export function whatsappLink(message: string) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${EVENT.whatsapp}?text=${text}`
}

export const RSVP_KIDS_MSG = `🎮 ¡Misión aceptada, bo! Confirmo mi lugar en el escuadrón para el Nivel 9 de Facu el ${EVENT.dateLabel} en ${EVENT.venue}. ¡Llevo las medias!`
export const RSVP_PARENTS_MSG = `¡Hola! Confirmamos asistencia al cumple de ${EVENT.hero} (Nivel 9) — ${EVENT.dateLabel} (${EVENT.timeLabel}) en ${EVENT.venue}.`
