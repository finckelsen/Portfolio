import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, Text } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'



function ComputerText({ controlsRef, setShowComputer }) {
  const [zoomingIn, setZoomingIn] = useState(false)
  const targetPosition = new THREE.Vector3(1.85, 0.95, 0.1) // <-- Ändra till vad du vill fokusera på
  const cameraTarget = new THREE.Vector3(1.85, 0.95, 0)    // <-- Blickpunkt

  useFrame(({ camera }) => {
    if (zoomingIn && controlsRef.current) {
      camera.position.lerp(targetPosition, 0.05)
      controlsRef.current.target.lerp(cameraTarget, 0.05)
      controlsRef.current.update()


      if (camera.position.distanceTo(targetPosition) < 0.1) {
        setZoomingIn(false)
        setShowComputer(true) // <-- Trigger render
      }
    }
  })

  return (
    <Text
      position={[2, 2.5, 0]}
      fontSize={0.5}
      color="white"
      anchorX="center"
      anchorY="middle"
      onClick={() => setZoomingIn(true)}
      style={{ cursor: 'pointer' }}
    >
      Computer
    </Text>
  )
}



export default ComputerText;
