'use client'

import { AchievementToast } from './achievement-toast'
import { useAdventureContext } from '@/context/adventure-context'

export function GlobalToastProvider() {
  const { currentAchievement } = useAdventureContext()
  return <AchievementToast achievement={currentAchievement} />
}
