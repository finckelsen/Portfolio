import { useTexture, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'


function Chair() {
  const { scene } = useGLTF('/models/chair.glb')
  const groupRef = useRef()

  const clockRef = useRef(new THREE.Clock()) // ⏰ Initiera en klocka som överlever re-renders

  useFrame(() => {
    const time = clockRef.current.getElapsedTime() // ⏱️ Hämta ny tid varje frame
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(time * 2) * (Math.PI / 12) // ±15 grader svängning
    }
  })

  return (
    <group
      ref={groupRef}
      position={[-1.7, -0.3, -1.6]}
      scale={1.2}
      rotation={[0, 0, 0]}
    >
      <primitive object={scene} />
    </group>
  )
}

export default Chair;

  