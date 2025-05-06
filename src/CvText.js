import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, Text } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'



function CvText({ controlsRef, setShowCv }) {


  return (
    <h1 onClick={() => setShowCv(true)}>
      CV
    </h1>
  )
}



export default CvText;
