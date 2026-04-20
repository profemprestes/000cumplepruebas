'use client'

import { useState } from 'react'
import { Loader } from '@/components/aventura/loader'
import { Gatekeeper } from '@/components/aventura/gatekeeper'
import { SceneShichaIntro } from '@/components/aventura/scene-shicha-intro'
import { HeroSelector } from '@/components/aventura/hero-selector'
import { MissionPanel } from '@/components/aventura/mission-panel'
import { MiniGames } from '@/components/aventura/mini-games'
import { GuardianPanel } from '@/components/aventura/guardian-panel'
import { GiftInventory } from '@/components/aventura/gift-inventory'
import { SceneTransition } from '@/components/aventura/scene-transition'
import { AchievementToast } from '@/components/aventura/achievement-toast'
import { useAchievements } from '@/components/aventura/use-achievements'
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
