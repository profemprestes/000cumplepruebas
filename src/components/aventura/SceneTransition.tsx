import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'

export function SceneTransition({
  sceneKey,
  children,
}: {
  sceneKey: string
  children: ReactNode
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={sceneKey}
        initial={{ opacity: 0, scale: 0.985 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.01 }}
        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
