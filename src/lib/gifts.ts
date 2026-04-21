export type Rarity = 'comun' | 'raro' | 'epico' | 'legendario'

export type GiftItem = {
  id: string
  name: string
  icon: string
  rarity: Rarity
  description: string
}

export const RARITY_STYLES: Record<Rarity, { label: string; ring: string; text: string }> = {
  comun: {
    label: 'Drop Común',
    ring: 'ring-grass-green/50',
    text: 'text-grass-green',
  },
  raro: {
    label: 'Ítem Raro',
    ring: 'ring-sky-blue/80',
    text: 'text-sky-blue',
  },
  epico: {
    label: 'Loot Épico',
    ring: 'ring-teddy-brown',
    text: 'text-teddy-brown',
  },
  legendario: {
    label: 'Artefacto Legendario',
    ring: 'ring-golden-coin',
    text: 'text-golden-coin',
  },
}

export const GIFTS: GiftItem[] = [
  {
    id: 'deportivo',
    name: 'Modo Deportivo',
    icon: '🏀',
    rarity: 'epico',
    description: 'Todo lo que sea de Básquet le da un boost de agilidad al instante.',
  },
  {
    id: 'explorador',
    name: 'Explorador',
    icon: '🎮',
    rarity: 'legendario',
    description: 'Juegos de plataformas, aventuras o consolas. ¡Pura XP para Facu!',
  },
  {
    id: 'crafteo',
    name: 'Crafteo',
    icon: '🎨',
    rarity: 'raro',
    description: 'Herramientas de arte, ideal para dibujar o inventar nuevas misiones.',
  },
  {
    id: 'skin',
    name: 'Skin Nivel 9',
    icon: '👕',
    rarity: 'comun',
    description: 'Su armadura se actualizó: usa talle 10/12 de ropa y calza 34.',
  },
]
