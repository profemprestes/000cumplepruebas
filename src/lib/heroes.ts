export type Hero = {
  id: string
  name: string
  emoji: string // fallback / decorative
  image: string // character render URL
  color: string // tailwind bg class
  quote: string
}

export const HEROES: Hero[] = [
  {
    id: 'baaren',
    name: 'Baaren',
    emoji: '🐻',
    image:
      'https://res.cloudinary.com/dbsm6mqcg/image/upload/q_auto/f_auto/v1776643490/Baaren.render_yrbejm.webp',
    color: 'bg-teddy-brown',
    quote: '¡Prepárense para el impacto, bo! Fuerte como un oso y listo para romperla en los minijuegos.',
  },
  {
    id: 'shicka',
    name: 'Shicka',
    emoji: '🦊',
    image:
      'https://res.cloudinary.com/dbsm6mqcg/image/upload/q_auto/f_auto/v1776643492/Shicka_render__gwy9ol.png',
    color: 'bg-golden-coin',
    quote: 'Rápida, astuta y tu guía oficial. Sin mí, no llegás ni a la puerta de KBOOM.',
  },
  {
    id: 'toast',
    name: 'Toast',
    emoji: '🍞',
    image:
      'https://res.cloudinary.com/dbsm6mqcg/image/upload/q_auto/f_auto/v1776643492/Toastseparate_lfuyet.webp',
    color: 'bg-sky-blue',
    quote: 'Tostado por fuera, pro-player por dentro. ¡Vamos a copar la partida!',
  },
  {
    id: 'violette',
    name: 'Violette',
    emoji: '💜',
    image:
      'https://res.cloudinary.com/dbsm6mqcg/image/upload/q_auto/f_auto/v1776643494/Violette_render__lqfu25.png',
    color: 'bg-grass-green',
    quote: 'Elegante y con el mejor salto del server. Esta aventura me queda de diez, crack.',
  },
  {
    id: 'mirabeja',
    name: 'Reina Mirabeja',
    emoji: '🐝',
    image:
      'https://res.cloudinary.com/dbsm6mqcg/image/upload/q_auto/f_auto/v1776643492/Reina_render_Mirabeja_imufxb.png',
    color: 'bg-golden-coin',
    quote: '¡Bzzzz! La reina del enjambre está conectada. ¿Te sumás a mi escuadrón para el Nivel 9?',
  },
]

export const FACU_HERO_IMAGE =
  'https://res.cloudinary.com/dbsm6mqcg/image/upload/q_auto/f_auto/v1776643778/facu_bear_sin_fondo_rkruq2.png'