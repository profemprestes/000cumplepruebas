'use client'

import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html, useProgress, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

function Loader() {
  const { progress } = useProgress()
  return (
    <Html center className="font-display text-golden-coin text-xs">
      {progress.toFixed(0)}%
    </Html>
  )
}

function DuckModel() {
  const { scene } = useGLTF('/duck.glb')
  const meshRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y -= delta * 0.5
    }
  })

  return (
    <group ref={meshRef}>
      <primitive object={scene} scale={0.015} position={[0, -1, 0]} />
    </group>
  )
}

export function Bear3D() {
  return (
    <div
      className="z-20 h-44 w-44 sm:h-56 sm:w-56"
      style={{ pointerEvents: 'none' }}
    >
      <Canvas
        camera={{ position: [0, 1.5, 4], fov: 50 }}
        style={{ pointerEvents: 'auto' }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={<Loader />}>
          <DuckModel />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}

// Preload the model
useGLTF.preload('/duck.glb')