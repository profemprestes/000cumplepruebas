'use client'

import { useRouter } from 'next/navigation'
import { GuardianPanel } from '@/components/aventura/guardian-panel'

export default function AdultPanelPage() {
  const router = useRouter()

  return (
    <main className="bg-tactile-adventure min-h-screen w-full">
      <GuardianPanel onContinue={() => router.push('/inventory')} />
    </main>
  )
}
