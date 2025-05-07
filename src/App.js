import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, Text, useTexture } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'
import './StartPage.css'
import CvLookup from './CvLookup'
import CvText from './CvText'
import ComputerScreen from './ComputerScreen/ComputerScreen'
import Navbar from './Navbar'
import { Cv } from './objects/Cv'
import { Computer } from './objects/Computer'
import { EffectComposer, Outline } from '@react-three/postprocessing'
import Lights from './Lights/Lights'
import WindowPlane from './3dComponents/WindowPlane'
import Skiva from './3dComponents/Skiva'
import Chair from './3dComponents/Chair'
import { Linkedin } from './objects/Linkedin'
import { Mail } from './objects/Mail'
import { Github } from './objects/Github'

function MyModel() {
  const gltf = useGLTF('/models/rumportfolio.glb')
  return <primitive object={gltf.scene} />
}
function DelAvRum() {
  const { scene } = useGLTF('/models/delavrum.glb')

  return (
    <>
      <group
        position={[-4, 0, 0.6]}
        scale={3}
        rotation={[0, Math.PI / 2, 0]}
      >
        <primitive object={scene} />
      </group>
    </>
  )
}



function App() {
  const controlsRef = useRef()
  const [showCv, setShowCv] = useState(false) 
  const [showComputer, setShowComputer] = useState(false) 
  const [isDay, setIsDay] = useState(true) 
  const [hoveredObject, setHoveredObject] = useState(null)
  const [color, setColor] = useState()


  return (
    <>
    {(!showComputer && !showCv) && <Navbar setShowComputer={setShowComputer} controlsRef={controlsRef} setShowCv={setShowCv} setIsDay={setIsDay} isDay={isDay} setColor={setColor} color={color}/>}
    {showCv && <CvLookup setShowCv={setShowCv}/>}
    {showComputer && <ComputerScreen setShowComputer={setShowComputer}/>}

    <Canvas shadows camera={{ position: [0, 10, 5], fov: 50 }}   gl={{ toneMapping: THREE.NoToneMapping }}
  style={{ backgroundColor: 'blue' }}>
      <Linkedin/>
      <Github/>
      <Mail/>
      <Cv setShowCv={setShowCv}/>
      <Computer setShowComputer={setShowComputer}/>
      <Lights isDay={isDay} color={color}/>
      <DelAvRum setHoveredObject={setHoveredObject}/>
      <Chair/>
      <MyModel/>
      <EffectComposer multisampling={8}>
      <Skiva/>
      <WindowPlane />
    {hoveredObject && (
      <Outline
        selection={[hoveredObject]}
        visibleEdgeColor="white"
        hiddenEdgeColor="transparent"
        edgeStrength={10}
      />
    )}
  </EffectComposer>

      {/* Controls and Environment */}
      <OrbitControls   ref={controlsRef}
        enablePan={false}           // Disable panning
        enableZoom={true}           // Allow zooming
        minDistance={8}             // Minimum zoom-in distance
        maxDistance={20}             // Maximum zoom-out distance
        enableRotate={true}         // Allow rotation
        maxPolarAngle={Math.PI / 2} // Limit vertical rotation (no looking up/down)
        minPolarAngle={0}
        minAzimuthAngle={Math.PI / 2} // Limit how far left you can rotate (-45 degrees)
        maxAzimuthAngle={Math.PI }  // Limit how far right you can rotate (+45 degrees) // Lock vertical angle to side view
        enableDamping={true}        // Smooth camera movement
        dampingFactor={0.1}   ref={controlsRef} />

      </Canvas>
    </>
  )
}

export default App