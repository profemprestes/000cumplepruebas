'use client'

import { useRouter } from 'next/navigation'
import { MiniGames } from '@/components/aventura/mini-games'
import { useAdventureContext } from '@/context/adventure-context'

export default function KidMinigamePage() {
  const router = useRouter()
  const { unlockAchievement } = useAdventureContext()

  return (
    <main className="bg-tactile-adventure min-h-screen w-full">
      <MiniGames
        onContinue={(score) => {
          if (score >= 3) {
            unlockAchievement('Trivia Master', `Conocés a Facu (${score}/4)`)
          } else {
            unlockAchievement('Trivia completada', `Score ${score}/4 — ¡buen intento!`)
          }
          router.push('/kid-mission')
        }}
      />
    </main>
  )
}
