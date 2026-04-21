'use client'

import { useRouter } from 'next/navigation'
import { SceneShichaIntro } from '@/components/aventura/scene-shicha-intro'

export default function KidIntroPage() {
  const router = useRouter()

  return (
    <main className="bg-tactile-adventure min-h-screen w-full">
      <SceneShichaIntro onContinue={() => router.push('/kid-hero')} />
    </main>
  )
}
