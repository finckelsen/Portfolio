import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, Text } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'
import { useCamera } from './animations/CameraProvider'



function CvText({ controlsRef, setShowCv }) {
  const { setCameraTarget } = useCamera()

  const handleClick = () => {
    setCameraTarget({
      position: new THREE.Vector3(0, -2, 0),
      lookAt: new THREE.Vector3(-4, 2, 0),
      fov: 20, // Återställ till standard-FOV   
    });
  
    setTimeout(() => {
      setShowCv(true);
    }, 300); // Delay in milliseconds (1000ms = 1 second)
  };


  return (
    <h3 onClick={() => handleClick(true)}>
      CV
    </h3>
  )
}



export default CvText;
