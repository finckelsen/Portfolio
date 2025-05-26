import { useState, useEffect, useMemo } from 'react'
import { Edges } from '@react-three/drei'
import { useTexture } from '@react-three/drei'
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib'
import { RectAreaLight } from 'three'
import * as THREE from 'three'
import { useCamera } from '../animations/CameraProvider'

export function Computer({ setShowComputer }) {
  const [hovered, setHovered] = useState(false)
  const texture = useTexture('windows.jpeg')
  const { setCameraTarget } = useCamera()

  const handleClick = () => {
    setCameraTarget({
      position: new THREE.Vector3(-0.5,-2,0),
      lookAt: new THREE.Vector3(-10, 0.8, -1.8),
      fov: 20, // Återställ till standard-FOV   
    });

    setTimeout(() => {
      setShowComputer(true)
    }, 300); // Delay in milliseconds (1000ms = 1 second)
  };

  // Initiera RectAreaLight-uniforms
  useEffect(() => {
    RectAreaLightUniformsLib.init()
  }, [])

  // Skapa ljuset med useMemo för att undvika ny instans varje render
  const light = useMemo(() => {
    const rectLight = new RectAreaLight(0xa6d6ff, 20, 1.8, 0.6)
    rectLight.position.set(-3.5, 2.82, -1.67) // bakom skärmen
    rectLight.rotation.set(0, -Math.PI / 2, 0) // riktad mot skärmen
    return rectLight
  }, [])

  return (
    <>
      {/* Ljus bakom skärmen */}
      <primitive object={light} />

      {/* Skärmen */}
      <mesh
        position={[-3.361, 0.82, -1.67]}
        rotation={[0, Math.PI / 2, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => handleClick()}
      >
        <planeGeometry args={[1.8, 1.2]} />
        <meshPhysicalMaterial
          map={texture}
          roughness={0}
          transmission={1}
          thickness={0.05}
          transparent
          emissive="white"
          emissiveIntensity={0.01}
        />
        {hovered && (
          <Edges scale={1.05} color="white" threshold={15} />
        )}
      </mesh>
    </>
  )
}
