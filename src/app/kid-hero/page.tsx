'use client'

import { useRouter } from 'next/navigation'
import { HeroSelector } from '@/components/aventura/hero-selector'
import { useAdventureContext } from '@/context/adventure-context'

export default function KidHeroPage() {
  const router = useRouter()
  const { setHero, unlockAchievement } = useAdventureContext()

  return (
    <main className="bg-tactile-adventure min-h-screen w-full">
      <HeroSelector
        onConfirm={(h) => {
          setHero(h)
          unlockAchievement('Héroe equipado', `${h.emoji} ${h.name} se une al equipo`)
          router.push('/kid-minigame')
        }}
      />
    </main>
  )
}
