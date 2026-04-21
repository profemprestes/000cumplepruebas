'use client'

import { useRouter } from 'next/navigation'
import { GiftInventory } from '@/components/aventura/gift-inventory'
import { useAdventureContext } from '@/context/adventure-context'

export default function InventoryPage() {
  const router = useRouter()
  const { setHero } = useAdventureContext()

  return (
    <main className="bg-tactile-adventure min-h-screen w-full">
      <GiftInventory
        onClose={() => {
          setHero(null)
          router.push('/')
        }}
      />
    </main>
  )
}
