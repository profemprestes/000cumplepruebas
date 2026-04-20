import { motion } from 'framer-motion'
import { Package } from 'lucide-react'
import { GIFTS, RARITY_STYLES } from '@/lib/gifts'

export function GiftInventory({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-night/95 min-h-screen w-full px-4 py-8 sm:px-6 flex flex-col items-center justify-center relative overflow-hidden">

      {/* Fondo con leve textura/partículas */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/5 to-transparent opacity-50" />

      <header className="relative z-10 mx-auto max-w-3xl text-center mb-8">
        <div className="pixel-text bg-teddy-brown inline-flex items-center gap-2 rounded-md px-4 py-2 text-[10px] tracking-widest text-white uppercase border-2 border-white/20 shadow-[3px_3px_0_#000] mb-4">
          <Package className="h-4 w-4" /> Escaneo de Stats
        </div>

        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="font-display text-golden-coin mt-2 text-4xl sm:text-6xl drop-shadow-[3px_3px_0_#000] tracking-wide uppercase"
        >
          El Inventario de Facu 🎒
        </motion.h2>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-white/90 mt-4 font-bold text-sm sm:text-base max-w-xl mx-auto leading-relaxed bg-black/30 p-4 rounded-xl border border-white/10"
        >
          El mejor <span className="text-grass-green font-black">loot (recompensa)</span> de esta misión es que vengas a festejar. ¡Tu presencia ya es un nivel superado! Pero si querés caer con un "power-up" sorpresa, los hackers de la base nos filtraron sus gustos:
        </motion.p>
      </header>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl w-full">
        {GIFTS.map((gift, index) => {
          const style = RARITY_STYLES[gift.rarity]
          return (
            <motion.div
              key={gift.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
              className="voxel-card bg-sky-blue/10 border-4 border-white/20 shadow-[4px_4px_0_#000] p-4 sm:p-5 rounded-2xl flex items-start gap-4 backdrop-blur-md"
            >
              <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border-2 border-night shadow-[3px_3px_0_#000] bg-white text-3xl`}>
                {gift.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className={`text-[10px] font-black tracking-widest uppercase mb-1 ${style.text} drop-shadow-[1px_1px_0_#000]`}>
                  {style.label}
                </div>
                <h3 className="font-display text-white text-xl sm:text-2xl tracking-wide mb-1 drop-shadow-md">
                  {gift.name}
                </h3>
                <p className="text-white/80 text-sm font-bold leading-tight">
                  {gift.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Botón de Salida */}
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        onClick={onClose}
        className="relative z-10 mt-8 bg-destructive text-destructive-foreground border-4 border-night rounded-xl px-8 py-3 font-display uppercase tracking-widest text-lg shadow-[4px_6px_0_#000] hover:translate-y-1 hover:shadow-[4px_2px_0_#000] active:translate-y-2 active:shadow-none transition-all"
      >
        ❌ Cerrar Inventario
      </motion.button>
    </div>
  )
}