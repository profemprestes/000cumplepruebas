import { motion } from 'framer-motion'
import { Package } from 'lucide-react'
import { GIFTS, RARITY_STYLES } from '@/lib/gifts'

export function GiftInventory({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-sky-blue relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 py-8 sm:px-6">
      {/* Fondo con nubes decorativas (estilo Cielo/Día) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="bg-cloud-soft absolute -top-10 -left-10 h-64 w-64 rounded-full blur-3xl opacity-60"
        />
        <motion.div
          animate={{ x: [0, -40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="bg-white/40 absolute top-1/2 -right-20 h-96 w-96 rounded-full blur-[100px]"
        />
      </div>

      <header className="relative z-10 mx-auto mb-8 max-w-3xl text-center">
        <div className="pixel-text bg-teddy-brown border-night mb-4 inline-flex items-center gap-2 rounded-md border-2 px-4 py-2 text-[10px] tracking-widest text-white uppercase shadow-[3px_3px_0_#000]">
          <Package className="h-4 w-4" /> Escaneo de Stats
        </div>

        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="font-display text-night mt-2 text-4xl tracking-wide uppercase drop-shadow-[2px_2px_0_#fff] sm:text-6xl"
        >
          El Inventario de Facu 🎒
        </motion.h2>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-4 max-w-xl rounded-xl border-4 border-night bg-white/70 p-4 text-sm leading-relaxed font-bold text-night sm:text-base"
        >
          El mejor <span className="text-grass-green font-black drop-shadow-sm">loot (recompensa)</span> de esta
          misión es que vengas a festejar. ¡Tu presencia ya es un nivel superado! Pero si querés
          caer con un "power-up" sorpresa, los hackers de la base nos filtraron sus gustos:
        </motion.p>
      </header>

      <div className="relative z-10 grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
        {GIFTS.map((gift, index) => {
          const style = RARITY_STYLES[gift.rarity]
          return (
            <motion.div
              key={gift.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
              className="voxel-card border-night bg-white flex items-start gap-4 rounded-2xl border-4 p-4 shadow-[4px_4px_0_var(--color-night)] sm:p-5"
            >
              <div
                className={`border-night flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-xl border-2 bg-sky-blue/20 text-3xl shadow-[3px_3px_0_#000]`}
              >
                {gift.icon}
              </div>
              <div className="min-w-0 flex-1">
                <div
                  className={`mb-1 text-[10px] font-black tracking-widest uppercase ${style.text} drop-shadow-sm`}
                >
                  {style.label}
                </div>
                <h3 className="font-display text-night mb-1 text-xl tracking-wide sm:text-2xl">
                  {gift.name}
                </h3>
                <p className="text-night/80 text-sm leading-tight font-bold">{gift.description}</p>
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
        className="bg-destructive text-destructive-foreground border-night font-display relative z-10 mt-8 rounded-xl border-4 px-8 py-3 text-lg tracking-widest uppercase shadow-[4px_6px_0_#000] transition-all hover:translate-y-1 hover:shadow-[4px_2px_0_#000] active:translate-y-2 active:shadow-none"
      >
        ❌ Cerrar Inventario
      </motion.button>
    </div>
  )
}
