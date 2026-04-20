import { motion } from "framer-motion";
import { Gamepad2, Shield } from "lucide-react";

export function Gatekeeper({
  onChoose,
}: {
  onChoose: (mode: "kid" | "adult") => void;
}) {
  return (
    <div className="bg-cloud-soft relative flex min-h-screen w-full flex-col">
      <header className="px-6 pt-8 text-center sm:pt-12">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="font-display text-3xl text-night drop-shadow-[3px_3px_0_oklch(0.99_0_0)] sm:text-5xl"
        >
          ¡Misión Detectada!
        </motion.h1>
        <p className="mx-auto mt-2 max-w-md text-sm text-night/80 sm:text-base">
          Antes de entrar al Nivel 9 de <b>Facu</b>, elegí tu rol.
        </p>
      </header>

      <div className="flex flex-1 flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-center sm:gap-8">
        <ModeCard
          icon={<Gamepad2 className="h-10 w-10" />}
          title="Modo Aventurero"
          subtitle="Para los héroes de 9-11 años"
          color="sky"
          onClick={() => onChoose("kid")}
          delay={0.1}
        />
        <ModeCard
          icon={<Shield className="h-10 w-10" />}
          title="Modo Guardián"
          subtitle="Info logística directa para padres"
          color="teddy"
          onClick={() => onChoose("adult")}
          delay={0.25}
        />
      </div>
    </div>
  );
}

function ModeCard({
  icon,
  title,
  subtitle,
  color,
  onClick,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  color: "sky" | "teddy";
  onClick: () => void;
  delay: number;
}) {
  const bg =
    color === "sky"
      ? "bg-sky-blue text-night"
      : "bg-teddy-brown text-white";
  return (
    <motion.button
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      onClick={onClick}
      className={`voxel-card voxel-card-hover relative w-full max-w-md overflow-hidden p-6 text-left ${bg}`}
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100">
        <div className="absolute inset-0 animate-shine" />
      </div>
      <div className="relative flex flex-col gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white/25 backdrop-blur-sm">
          {icon}
        </div>
        <h2 className="font-display text-2xl uppercase tracking-wide sm:text-3xl">{title}</h2>
        <p className="text-sm opacity-90 sm:text-base">{subtitle}</p>
        <div className="pixel-text mt-2 text-[10px] uppercase tracking-widest opacity-80">
          ▶ Entrar
        </div>
      </div>
    </motion.button>
  );
}
