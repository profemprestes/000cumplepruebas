'use client'

import { useRouter } from 'next/navigation'
import { Loader } from '@/components/aventura/loader'
import { useAdventureContext } from '@/context/adventure-context'

export default function Index() {
  const router = useRouter()
  const { unlockAchievement } = useAdventureContext()

  return (
    <main className="bg-sky-blue min-h-screen w-full">
      <Loader
        onStart={() => {
          unlockAchievement('Sistema iniciado', 'Bienvenido a la Gran Facu Aventura')
          router.push('/gatekeeper')
        }}
      />
    </main>
  )
}
