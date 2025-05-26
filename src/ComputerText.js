import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'
import { useCamera } from './animations/CameraProvider'


function ComputerText({ controlsRef, setShowComputer, name, setPopup}) {
  
  const [zoomingIn, setZoomingIn] = useState(false)
  const targetPosition = new THREE.Vector3(1.85, 0.95, 0.1) // <-- Ändra till vad du vill fokusera på
  const cameraTarget = new THREE.Vector3(1.85, 0.95, 0)    // <-- Blickpunkt
  const { setCameraTarget } = useCamera()

  const handleClick = () => {
    setPopup(name)
    console.log(name)
    setCameraTarget({
      position: new THREE.Vector3(-0.5,-2,0),
      lookAt: new THREE.Vector3(-10, 0.8, -1.8),
      fov: 20, // Återställ till standard-FOV   
    });

    setTimeout(() => {
      setShowComputer(true)
    }, 300); // Delay in milliseconds (1000ms = 1 second)
  };

  return (
    <div onClick={() => handleClick()}>
      <h3>
        {name}
      </h3>
    </div>
  )
}



export default ComputerText;
