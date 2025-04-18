import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, Text } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'
import './StartPage.css'
import CvLookup from './CvLookup'
import CvText from './CvText'
import ComputerText from './ComputerText'
import ComputerScreen from './ComputerScreen/ComputerScreen'


function MyModel() {
  const gltf = useGLTF('/models/rummet.glb')
  return <primitive object={gltf.scene} />
}


function App() {
  const controlsRef = useRef()
  const [showCv, setShowCv] = useState(false) 
  const [showComputer, setShowComputer] = useState(false) 

  return (
    <>
    {showCv && <CvLookup setShowCv={setShowCv}/>}
    {showComputer && <ComputerScreen setShowComputer={setShowComputer}/>}

    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />

      <MyModel />
      <CvText controlsRef={controlsRef} setShowCv={setShowCv} />
      <ComputerText controlsRef={controlsRef} setShowComputer={setShowComputer}/>
      <OrbitControls ref={controlsRef} />
      <Environment preset="city" />
    </Canvas>
    </>
  )
}

export default App