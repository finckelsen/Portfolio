import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, Text } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'
import { useCamera } from './animations/CameraProvider'



function ContactText({ controlsRef, setContactOpen }) {
  const { setCameraTarget } = useCamera()

  const handleClick = () => {
    setCameraTarget({
      position: new THREE.Vector3(2, 1.5, 0),
      lookAt: new THREE.Vector3(3, 1.5, 10),
      fov: 40, // Återställ till standard-FOV   
    });
    setTimeout(() => {
      setContactOpen(true);
    }, 300); // Delay in milliseconds (1000ms = 1 second)

  };

  return (
    <h3 onClick={() => handleClick(true)}>
      Contact me
    </h3>
  )
}



export default ContactText;
