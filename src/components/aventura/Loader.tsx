import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FACU_HERO_IMAGE } from "@/lib/heroes";

const PHRASES = [
  "Cargando Hubbearvillage...",
  "Despertando a Shicka...",
  "Sincronizando mundos...",
  "Listo para la aventura.",
];

export function Loader({ onStart }: { onStart: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phraseIdx, setPhraseIdx] = useState(0);
  const ready = progress >= 100;

  useEffect(() => {
    const i = window.setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          window.clearInterval(i);
          return 100;
        }
        return Math.min(100, p + 2 + Math.random() * 4);
      });
    }, 90);
    return () => window.clearInterval(i);
  }, []);

  useEffect(() => {
    const idx = Math.min(
      PHRASES.length - 1,
      Math.floor((progress / 100) * PHRASES.length),
    );
    setPhraseIdx(idx);
  }, [progress]);

  useEffect(() => {
    if (!ready) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") onStart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [ready, onStart]);

  return (
    <div className="bg-night-grid relative flex min-h-screen w-full flex-col items-center justify-center px-6 text-white">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-8 flex flex-col items-center gap-3"
      >
        <div className="voxel-card flex h-32 w-32 items-center justify-center bg-golden-coin animate-pulse-glow sm:h-36 sm:w-36">
          <img
            src={FACU_HERO_IMAGE}
            alt="Facu"
            className="h-28 w-28 object-contain animate-float sm:h-32 sm:w-32"
            loading="eager"
          />
        </div>
        <h1 className="font-display text-3xl text-golden-coin sm:text-4xl">
          FACU · NIVEL 9
        </h1>
      </motion.div>

      <div className="w-full max-w-md">
        <div
          className="voxel-card overflow-hidden p-1"
          style={{ background: "var(--night)" }}
        >
          <div className="relative h-5 w-full overflow-hidden rounded-sm bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-sky-blue to-golden-coin"
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.1 }}
            />
            <div className="pointer-events-none absolute inset-0 animate-shine" />
          </div>
        </div>
        <div className="pixel-text mt-3 flex items-center justify-between text-[10px] uppercase tracking-widest text-white/80">
          <span>{PHRASES[phraseIdx]}</span>
          <span>{Math.floor(progress)}%</span>
        </div>
      </div>

      {ready && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={onStart}
          className="pixel-text mt-12 text-base text-golden-coin animate-blink sm:text-xl"
          aria-label="Empezar aventura"
        >
          ▶ PRESS START
        </motion.button>
      )}
    </div>
  );
}
