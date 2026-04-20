import { motion } from "framer-motion";
import { DialogBox } from "./DialogBox";
import { EVENT } from "@/lib/event";
import { HEROES, FACU_HERO_IMAGE } from "@/lib/heroes";

const SHICKA_IMG = HEROES.find((h) => h.id === "shicka")!.image;

export function SceneShichaIntro({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="bg-sky-world relative flex min-h-screen w-full flex-col justify-between overflow-hidden p-6">
      {/* clouds */}
      <motion.div
        className="absolute left-6 top-12 text-6xl opacity-80"
        animate={{ x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        ☁️
      </motion.div>
      <motion.div
        className="absolute right-8 top-32 text-5xl opacity-80"
        animate={{ x: [0, -16, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        ☁️
      </motion.div>

      <header className="relative z-10 text-center">
        <div className="pixel-text mx-auto inline-block rounded-md bg-night px-3 py-1 text-[10px] uppercase tracking-widest text-golden-coin">
          Nivel 9 · Cinemática 1
        </div>
      </header>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-end gap-6 pb-8">
        <div className="flex items-end gap-2 sm:gap-4">
          <motion.img
            src={FACU_HERO_IMAGE}
            alt="Facu"
            initial={{ x: -120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="h-40 w-40 object-contain drop-shadow-[4px_4px_0_oklch(0.18_0.04_260/0.4)] animate-float sm:h-56 sm:w-56"
          />
          <motion.img
            src={SHICKA_IMG}
            alt="Shicka"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="h-44 w-44 object-contain drop-shadow-[4px_4px_0_oklch(0.18_0.04_260/0.4)] animate-float sm:h-60 sm:w-60"
          />
        </div>

        <DialogBox speaker="Shicka" emoji="🦊">
          <p>
            ¡Hola, héroe! Soy <b>Shicka</b>, tu guía. Te traigo una misión muy
            especial:
          </p>
          <p className="mt-2">
            <b>{EVENT.hero}</b> está por desbloquear el{" "}
            <b>Nivel {EVENT.level}</b> y necesita a los mejores aventureros del
            reino. ¿Aceptás la misión?
          </p>
        </DialogBox>

        <button onClick={onContinue} className="voxel-btn voxel-btn-coin">
          ▶ Aceptar misión
        </button>
      </div>
    </div>
  );
}
