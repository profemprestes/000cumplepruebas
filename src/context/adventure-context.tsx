'use client'

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import type { Hero } from '@/lib/heroes'
import type { Achievement } from '@/components/aventura/achievement-toast'

interface AdventureContextType {
  hero: Hero | null
  setHero: (hero: Hero | null) => void
  currentAchievement: Achievement | null
  unlockAchievement: (title: string, description?: string) => void
}

const AdventureContext = createContext<AdventureContextType | undefined>(undefined)

export function AdventureProvider({ children }: { children: ReactNode }) {
  const [hero, setHero] = useState<Hero | null>(null)
  const [currentAchievement, setCurrentAchievement] = useState<Achievement | null>(null)

  const unlockAchievement = useCallback((title: string, description?: string) => {
    const id = Date.now()
    setCurrentAchievement({ id, title, description })
    window.setTimeout(() => {
      setCurrentAchievement((c) => (c && c.id === id ? null : c))
    }, 3200)
  }, [])

  return (
    <AdventureContext.Provider
      value={{
        hero,
        setHero,
        currentAchievement,
        unlockAchievement,
      }}
    >
      {children}
    </AdventureContext.Provider>
  )
}

export function useAdventureContext() {
  const context = useContext(AdventureContext)
  if (context === undefined) {
    throw new Error('useAdventureContext must be used within an AdventureProvider')
  }
  return context
}
