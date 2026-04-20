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
    id: "1",
    name: "Pack de Aventurero",
    icon: "🎒",
    rarity: "raro",
    description: "Set de exploración: linterna, brújula y muchas pilas.",
  },
  {
    id: "2",
    name: "Cofre Sorpresa",
    icon: "🎁",
    rarity: "epico",
    description: "Algo a tu elección. La sorpresa siempre gana XP extra.",
  },
  {
    id: "3",
    name: "Set Lego / Construcción",
    icon: "🧱",
    rarity: "raro",
    description: "Para seguir construyendo mundos voxel en casa.",
  },
  {
    id: "4",
    name: "Skin Gamer",
    icon: "👕",
    rarity: "comun",
    description: "Remera, gorra o accesorio gamer talle 9-10 años.",
  },
  {
    id: "5",
    name: "Tarjeta Power-Up",
    icon: "💳",
    rarity: "legendario",
    description: "Gift card de tu librería o juguetería favorita.",
  },
  {
    id: "6",
    name: "Libro de Misiones",
    icon: "📚",
    rarity: "raro",
    description: "Aventura, cómics o cualquier libro de fantasía.",
  },
];
