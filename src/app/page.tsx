'use client'

import { useState } from 'react'
import { Loader } from '@/components/aventura/Loader'
import { Gatekeeper } from '@/components/aventura/Gatekeeper'
import { SceneShichaIntro } from '@/components/aventura/SceneShichaIntro'
import { HeroSelector } from '@/components/aventura/HeroSelector'
import { MissionPanel } from '@/components/aventura/MissionPanel'
import { MiniGames } from '@/components/aventura/MiniGames'
import { GuardianPanel } from '@/components/aventura/GuardianPanel'
import { GiftInventory } from '@/components/aventura/GiftInventory'
import { SceneTransition } from '@/components/aventura/SceneTransition'
import { AchievementToast } from '@/components/aventura/AchievementToast'
import { useAchievements } from '@/components/aventura/useAchievements'
import type { Hero } from '@/lib/heroes'

type Scene =
  | 'loader'
  | 'gatekeeper'
  | 'kid-intro'
  | 'kid-hero'
  | 'kid-minigame'
  | 'kid-mission'
  | 'adult-panel'
  | 'inventory'

export default function Index() {
  const [scene, setScene] = useState<Scene>('loader')
  const [hero, setHero] = useState<Hero | null>(null)
  const { current, unlock } = useAchievements()

  const goto = (s: Scene) => setScene(s)

  return (
    <main className="bg-tactile-adventure min-h-screen w-full">
      <AchievementToast achievement={current} />
      <SceneTransition sceneKey={scene}>
        {scene === 'loader' && (
          <Loader
            onStart={() => {
              unlock('Sistema iniciado', 'Bienvenido a la Gran Facu Aventura')
              goto('gatekeeper')
            }}
          />
        )}

        {scene === 'gatekeeper' && (
          <Gatekeeper
            onChoose={(mode) => {
              if (mode === 'kid') {
                unlock('Ruta seleccionada', 'Modo Aventurero activado')
                goto('kid-intro')
              } else {
                unlock('Ruta seleccionada', 'Modo Guardián activado')
                goto('adult-panel')
              }
            }}
          />
        )}

        {scene === 'kid-intro' && (
          <SceneShichaIntro onContinue={() => goto('kid-hero')} />
        )}

        {scene === 'kid-hero' && (
          <HeroSelector
            onConfirm={(h) => {
              setHero(h)
              unlock('Héroe equipado', `${h.emoji} ${h.name} se une al equipo`)
              goto('kid-minigame')
            }}
          />
        )}

        {scene === 'kid-minigame' && (
          <MiniGames
            onContinue={(score) => {
              if (score >= 3) {
                unlock('Trivia Master', `Conocés a Facu (${score}/4)`)
              } else {
                unlock('Trivia completada', `Score ${score}/4 — ¡buen intento!`)
              }
              goto('kid-mission')
            }}
          />
        )}

        {scene === 'kid-mission' && (
          <MissionPanel hero={hero} onContinue={() => goto('inventory')} />
        )}

        {scene === 'adult-panel' && (
          <GuardianPanel onContinue={() => goto('inventory')} />
        )}

        {scene === 'inventory' && (
          <GiftInventory
            onRestart={() => {
              setHero(null)
              goto('loader')
            }}
          />
        )}
      </SceneTransition>
    </main>
  )
}
