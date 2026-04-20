import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function diff(target: Date) {
  const now = new Date();
  const ms = Math.max(0, target.getTime() - now.getTime());
  const d = Math.floor(ms / 86_400_000);
  const h = Math.floor((ms % 86_400_000) / 3_600_000);
  const m = Math.floor((ms % 3_600_000) / 60_000);
  const s = Math.floor((ms % 60_000) / 1000);
  return { d, h, m, s, ms };
}

export function Countdown({ targetISO }: { targetISO: string }) {
  const target = new Date(targetISO);
  const [t, setT] = useState(() => diff(target));

  useEffect(() => {
    const id = window.setInterval(() => setT(diff(target)), 1000);
    return () => window.clearInterval(id);
  }, [targetISO]);

  if (t.ms === 0) {
    return (
      <div className="pixel-text text-center text-sm text-golden-coin animate-blink">
        ▶ ¡EL NIVEL 9 ESTÁ EN VIVO!
      </div>
    );
  }

  const cells: Array<{ label: string; value: number }> = [
    { label: "Días", value: t.d },
    { label: "Hs", value: t.h },
    { label: "Min", value: t.m },
    { label: "Seg", value: t.s },
  ];

  return (
    <div className="flex items-stretch justify-center gap-2 sm:gap-3">
      {cells.map((c) => (
        <div key={c.label} className="flex flex-col items-center">
          <div
            className="voxel-card flex h-16 w-16 items-center justify-center overflow-hidden bg-night text-golden-coin sm:h-20 sm:w-20"
            style={{ borderColor: "oklch(0.85 0.16 90)" }}
          >
            <AnimatePresence mode="popLayout">
              <motion.span
                key={c.value}
                initial={{ y: -24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 24, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="font-display text-2xl tabular-nums sm:text-3xl"
              >
                {String(c.value).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
          </div>
          <div className="pixel-text mt-1 text-[9px] uppercase tracking-widest text-white/80">
            {c.label}
          </div>
        </div>
      ))}
    </div>
  );
}
