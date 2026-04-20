import { motion, AnimatePresence } from 'framer-motion'
import { Trophy } from 'lucide-react'

export type Achievement = {
  id: number
  title: string
  description?: string
}

export function AchievementToast({
  achievement,
}: {
  achievement: Achievement | null
}) {
  return (
    <div className="pointer-events-none fixed top-4 right-4 z-100 flex w-[min(92vw,360px)] flex-col gap-2">
      <AnimatePresence>
        {achievement && (
          <motion.div
            key={achievement.id}
            initial={{ x: 420, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 420, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="voxel-card flex items-start gap-3 overflow-hidden p-3"
            role="status"
            aria-live="polite"
            style={{ background: 'var(--night)', color: 'oklch(0.99 0 0)' }}
          >
            <div className="bg-golden-coin animate-pulse-glow relative flex h-12 w-12 shrink-0 items-center justify-center rounded-md">
              <Trophy className="text-night h-6 w-6" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="pixel-text text-golden-coin text-[10px] tracking-widest uppercase">
                Achievement Unlocked
              </div>
              <div className="font-display text-base leading-tight">
                {achievement.title}
              </div>
              {achievement.description && (
                <div className="text-xs opacity-80">
                  {achievement.description}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
