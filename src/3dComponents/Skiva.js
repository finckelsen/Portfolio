import { useTexture, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'


function Skiva() {
  const { scene } = useGLTF('/models/skiva.glb')
  const groupRef = useRef()

  // Rotate the model every frame
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01 // Adjust speed here
    }
  })

  return (
    <group
      ref={groupRef}
      position={[0.75, -0.3, 2.9]}
      scale={3.55}
      rotation={[0, Math.PI / 2, 0]}
    >
      <primitive object={scene} />
    </group>
  )
}

export default Skiva;

  