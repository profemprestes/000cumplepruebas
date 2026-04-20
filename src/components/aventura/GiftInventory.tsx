import { motion } from 'framer-motion'
import { GIFTS, RARITY_STYLES } from '@/lib/gifts'
import { RotateCcw } from 'lucide-react'
import { FACU_HERO_IMAGE } from '@/lib/heroes'

export function GiftInventory({ onRestart }: { onRestart: () => void }) {
  return (
    <div className="bg-night-grid min-h-screen w-full px-5 py-8 text-white">
      <header className="mx-auto max-w-3xl text-center">
        <div className="pixel-text bg-golden-coin text-night mx-auto inline-block rounded-md px-3 py-1 text-[10px] tracking-widest uppercase">
          Inventario del Héroe
        </div>
        <h2 className="font-display text-golden-coin mt-3 text-3xl sm:text-4xl">
          EL INVENTARIO DE FACU 🎒
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-white/80">
          El mejor loot (recompensa) de esta misión es que vengas a festejar.
          ¡Tu presencia ya es un nivel superado! Pero si querés caer con un
          'power-up' sorpresa, los hackers de la base nos filtraron sus gustos:
        </p>
      </header>

      <div className="mx-auto mt-6 grid max-w-2xl grid-cols-2 gap-3">
        {GIFTS.map((g, i) => {
          const r = RARITY_STYLES[g.rarity]
          return (
            <motion.div
              key={g.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className={`voxel-card voxel-card-hover flex flex-col items-center gap-2 p-4 ring-4 ring-inset ${r.ring} transition-all duration-200`}
              style={{
                background: 'oklch(0.24 0.05 260)',
                color: 'oklch(0.99 0 0)',
              }}
            >
              <div className="text-5xl">{g.icon}</div>
              <div className="font-display text-base leading-tight">
                {g.name}
              </div>
              <div
                className={`pixel-text text-[10px] tracking-widest uppercase ${r.text}`}
              >
                {r.label}
              </div>
              <p className="text-center text-xs opacity-85">{g.description}</p>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-4 text-center"
      >
        <div className="relative">
          <motion.img
            src={FACU_HERO_IMAGE}
            alt="Facu"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="h-40 w-40 object-contain drop-shadow-[4px_4px_0_oklch(0.85_0.16_90/0.5)] sm:h-48 sm:w-48"
          />
          <div className="pixel-text border-night bg-golden-coin text-night absolute -top-2 left-1/2 -translate-x-1/2 rounded-md border-2 px-2 py-1 text-[9px] tracking-widest whitespace-nowrap uppercase">
            ¡Te esperamos!
          </div>
        </div>
        <h3 className="font-display text-golden-coin text-2xl sm:text-3xl">
          MISIÓN COMPLETADA
        </h3>
        <p className="max-w-md text-sm text-white/85 italic">
          💛 ¡Ojo, bo! Las ganas de saltar valen mucho más que cualquier ítem
          legendario.
        </p>
        <button onClick={onRestart} className="voxel-btn voxel-btn-coin">
          <RotateCcw className="h-4 w-4" />
          Volver al inicio
        </button>
      </motion.div>
    </div>
  )
}
