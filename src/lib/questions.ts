export interface Question {
  q: string
  options: string[]
  correctIdx: number
  hint: string
}

// Trivia sencilla sobre Facu (cumpleañero, Nivel 9)
export const QUESTIONS: Question[] = [
  {
    q: '¿Qué nivel desbloquea Facu en este cumple?',
    options: ['Nivel 7', 'Nivel 8', 'Nivel 9', 'Nivel 10'],
    correctIdx: 2,
    hint: 'El nombre de la misión lo grita 😉',
  },
  {
    q: '¿Cuál es el reino favorito de Facu?',
    options: ['Mario World', 'Hubbearvillage', 'Hyrule', 'Minecraftia'],
    correctIdx: 1,
    hint: 'Suena a oso peludo + pueblo.',
  },
  {
    q: '¿Qué hay que llevar SÍ o SÍ a la misión?',
    options: ['Patines', 'Medias y ropa cómoda', 'Capa de superhéroe', 'Linterna'],
    correctIdx: 1,
    hint: 'Pista: KBOOM tiene piso especial.',
  },
  {
    q: '¿Quién es la guía oficial del Reino?',
    options: ['Baaren', 'Toast', 'Shicka', 'Mirabeja'],
    correctIdx: 2,
    hint: 'Te recibió en la cinemática.',
  },
]
