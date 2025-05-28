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


  return (
    <>
      {/* Ljus bakom skärmen */}


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
          transmission={0.01}
          thickness={0.05}
          transparent
          emissive="blue"
          emissiveIntensity={0.02}
        />
        {hovered && (
          <Edges scale={1.05} color="white" threshold={15} />
        )}
      </mesh>
    </>
  )
}
