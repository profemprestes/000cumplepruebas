'use client'

import { useRouter } from 'next/navigation'
import { MissionPanel } from '@/components/aventura/mission-panel'
import { useAdventureContext } from '@/context/adventure-context'

export default function KidMissionPage() {
  const router = useRouter()
  const { hero } = useAdventureContext()

  return (
    <main className="bg-tactile-adventure min-h-screen w-full">
      <MissionPanel hero={hero} onContinue={() => router.push('/inventory')} />
    </main>
  )
}
