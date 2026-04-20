import { motion } from "framer-motion";
import { ReactNode } from "react";

export function DialogBox({
  speaker,
  emoji,
  children,
}: {
  speaker: string;
  emoji?: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="voxel-card mx-auto w-full max-w-2xl p-4 sm:p-5"
    >
      <div className="mb-2 flex items-center gap-2">
        <span className="text-2xl">{emoji}</span>
        <span className="font-display text-sm uppercase tracking-widest text-sky-blue-deep">
          {speaker}
        </span>
      </div>
      <div className="text-base leading-relaxed text-foreground sm:text-lg">{children}</div>
    </motion.div>
  );
}
