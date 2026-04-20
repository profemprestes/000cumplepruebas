import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HEROES, type Hero } from "@/lib/heroes";

export function HeroSelector({
  onConfirm,
}: {
  onConfirm: (hero: Hero) => void;
}) {
  const [idx, setIdx] = useState(0);
  const hero = HEROES[idx];

  const prev = () => setIdx((i) => (i - 1 + HEROES.length) % HEROES.length);
  const next = () => setIdx((i) => (i + 1) % HEROES.length);

  return (
    <div className="bg-cloud-soft flex min-h-screen w-full flex-col px-6 py-8">
      <header className="text-center">
        <div className="pixel-text mx-auto inline-block rounded-md bg-night px-3 py-1 text-[10px] uppercase tracking-widest text-golden-coin">
          Selecciona tu héroe
        </div>
        <h2 className="mt-3 font-display text-3xl text-night sm:text-4xl">
          Equipá tu personaje
        </h2>
      </header>

      <div className="relative mt-6 flex flex-1 items-center justify-center">
        <button
          onClick={prev}
          aria-label="Anterior"
          className="voxel-btn voxel-btn-teddy !p-3"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div className="mx-3 flex-1 max-w-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={hero.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`voxel-card flex flex-col items-center gap-4 p-6 ${hero.color}`}
            >
              <div className="bg-pixel-grid relative flex h-44 w-44 items-center justify-center overflow-hidden rounded-md border-4 border-night sm:h-52 sm:w-52">
                <div className="bg-pixel-ground absolute inset-x-0 bottom-0 h-4 opacity-70" />
                <img
                  src={hero.image}
                  alt={hero.name}
                  className="relative h-[88%] w-[88%] object-contain animate-float drop-shadow-[4px_4px_0_oklch(0.18_0.04_260/0.4)]"
                  loading="eager"
                />
              </div>
              <h3 className="font-display text-3xl uppercase tracking-wide text-night">
                {hero.name}
              </h3>
              <p className="min-h-[60px] text-center text-sm italic text-night/85 sm:text-base">
                "{hero.quote}"
              </p>
              <div className="pixel-text text-[10px] uppercase tracking-widest text-night/70">
                {idx + 1} / {HEROES.length}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={next}
          aria-label="Siguiente"
          className="voxel-btn voxel-btn-teddy !p-3"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={() => onConfirm(hero)}
          className="voxel-btn voxel-btn-coin"
        >
          ⚔ Equipar a {hero.name}
        </button>
      </div>
    </div>
  );
}
