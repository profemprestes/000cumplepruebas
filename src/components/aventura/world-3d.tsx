'use client'

import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html, useProgress, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

function Loader() {
  const { progress } = useProgress()
  return (
    <Html
      center
      className="font-display text-xl text-white drop-shadow-[2px_2px_0_var(--color-night)]"
    >
      {progress.toFixed(0)}%
    </Html>
  )
}

function WorldModel() {
  const { scene } = useGLTF('/modelos/mundo.glb')
  const meshRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotación lenta del mundo
      meshRef.current.rotation.y += delta * 0.05
    }
  })

  return (
    <group ref={meshRef}>
      {/* Ajusta la posición y escala según el modelo real para que se vea bien como fondo */}
      <primitive object={scene} scale={1} position={[0, -2, 0]} />
    </group>
  )
}

export function World3D() {
  return (
    <div className="bg-sky-blue pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 2, 10], fov: 60 }}
        style={{ pointerEvents: 'auto' }}
        className="h-full w-full"
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 15, 10]} intensity={1.2} />
        <directionalLight position={[-10, 10, -10]} intensity={0.5} />

        <Suspense fallback={<Loader />}>
          <WorldModel />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 2} // No ir por debajo del suelo
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  )
}

// Preload the model
useGLTF.preload('/modelos/mundo.glb')
