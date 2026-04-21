'use client'

import { useRouter } from 'next/navigation'
import { Gatekeeper } from '@/components/aventura/gatekeeper'
import { useAdventureContext } from '@/context/adventure-context'

export default function GatekeeperPage() {
  const router = useRouter()
  const { unlockAchievement } = useAdventureContext()

  return (
    <main className="bg-tactile-adventure min-h-screen w-full">
      <Gatekeeper
        onChoose={(mode) => {
          if (mode === 'kid') {
            unlockAchievement('Ruta seleccionada', 'Modo Aventurero activado')
            router.push('/kid-intro')
          } else {
            unlockAchievement('Ruta seleccionada', 'Modo Guardián activado')
            router.push('/adult-panel')
          }
        }}
      />
    </main>
  )
}
