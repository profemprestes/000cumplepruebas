export type Rarity = "comun" | "raro" | "epico" | "legendario";

export type GiftItem = {
  id: string;
  name: string;
  icon: string;
  rarity: Rarity;
  description: string;
};

export const RARITY_STYLES: Record<
  Rarity,
  { label: string; ring: string; text: string }
> = {
  comun: {
    label: "Común",
    ring: "ring-muted-foreground/40",
    text: "text-muted-foreground",
  },
  raro: {
    label: "Raro",
    ring: "ring-sky-blue-deep",
    text: "text-sky-blue-deep",
  },
  epico: {
    label: "Épico",
    ring: "ring-teddy-brown",
    text: "text-teddy-brown-deep",
  },
  legendario: {
    label: "Legendario",
    ring: "ring-golden-coin-deep",
    text: "text-golden-coin-deep",
  },
};

export const GIFTS: GiftItem[] = [
  {
    id: "deportivo",
    name: "Modo Deportivo",
    icon: "🏀",
    rarity: "raro",
    description: "Cosas de Básquet para sumar agilidad.",
  },
  {
    id: "explorador",
    name: "Explorador",
    icon: "🎮",
    rarity: "epico",
    description: "Juegos de aventuras y plataformas.",
  },
  {
    id: "crafteo",
    name: "Crafteo",
    icon: "🎨",
    rarity: "legendario",
    description: "Arte, cosas para dibujar o inventar.",
  },
  {
    id: "skin",
    name: "Skin Nivel 9",
    icon: "👕",
    rarity: "comun",
    description: "Usa talle 10/12 de ropa y calza 34 de championes.",
  },
];
