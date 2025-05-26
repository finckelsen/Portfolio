// src/contexts/CameraContext.js
import { createContext, useContext, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const CameraContext = createContext()

export function CameraProvider({ children }) {
  const [cameraTarget, setCameraTarget] = useState(null)
  
  const resetCamera = () => {
    setCameraTarget({
      position: new THREE.Vector3(10, 10, -10),     // standardposition
      lookAt: new THREE.Vector3(0, 0, 0),
      fov: 50, // Återställ till standard-FOV           // standardfokuspunkt
    })
  }

  return (
    <CameraContext.Provider value={{ cameraTarget, setCameraTarget, resetCamera }}>
      {children}
    </CameraContext.Provider>
  )
}

// Hook för enkel användning
export function useCamera() {
  return useContext(CameraContext)
}

