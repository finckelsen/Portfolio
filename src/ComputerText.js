import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'



function ComputerText({ controlsRef, setShowComputer }) {
  
  const [zoomingIn, setZoomingIn] = useState(false)
  const targetPosition = new THREE.Vector3(1.85, 0.95, 0.1) // <-- Ändra till vad du vill fokusera på
  const cameraTarget = new THREE.Vector3(1.85, 0.95, 0)    // <-- Blickpunkt


  return (
    <div onClick={() => setShowComputer(true)}>
      <h1>
        Show Computer
      </h1>
    </div>
  )
}



export default ComputerText;
