import { OrbitControls, Text, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Outline } from '@react-three/postprocessing'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import Chair from './3dComponents/Chair'
import Skiva from './3dComponents/Skiva'
import WindowPlane from './3dComponents/WindowPlane'
import './App.css'
import Lights from './Lights/Lights'
import { CameraAnimator } from './animations/CameraAnimator'
import { useCamera } from './animations/CameraProvider'
import { Computer } from './objects/Computer'
import { Cv } from './objects/Cv'
import { Github } from './objects/Github'
import { Linkedin } from './objects/Linkedin'
import { Mail } from './objects/Mail'

function MyModel() {
  const gltf = useGLTF('/models/roomportfolio.glb')
  return(

  <>
    <group
    position={[0, -2, 0]}


    >
      <primitive object={gltf.scene} />
    </group>
  </>
    )
}
function DelAvRum() {
  const { scene } = useGLTF('/models/partofRoom.glb')

  return (
    <>
      <group
        position={[-4, -2, 0.6]}
        scale={3}
        rotation={[0, Math.PI / 2, 0]}
      >
        <primitive object={scene} />
      </group>
    </>
  )
}



function CanvasComponent({contactOpen, color, setShowCv, setShowComputer, setContactOpen}) {
  const controlsRef = useRef()
  const [isDay, setIsDay] = useState(true) 
  const [hoveredObject, setHoveredObject] = useState(null)

  const { cameraTarget, setCameraTarget, resetCamera } = useCamera()

  // 👇 Körs endast vid första inladdning
  useEffect(() => {
    const timeout = setTimeout(() => {
      resetCamera()
    }, 200) // Vänta lite tills Canvas och controls är redo
  
    return () => clearTimeout(timeout)
  }, [])


  return (

        <Canvas shadows camera={{ position: [20, 20, -10], fov: 140}} gl={{ toneMapping: THREE.NoToneMapping }} style={{position:'absolute', top:'0'}}>
          <Linkedin contactOpen={contactOpen} setContactOpen={setContactOpen}/>
          <Github contactOpen={contactOpen} setContactOpen={setContactOpen}/>
          <Mail contactOpen={contactOpen} setContactOpen={setContactOpen}/>
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

          {!contactOpen &&(
          <OrbitControls ref={controlsRef}
            enablePan={false}           // Disable panning
            enableZoom={true}           // Allow zooming
            minDistance={8}             // Minimum zoom-in distance
            maxDistance={20}             // Maximum zoom-out distance
            enableRotate={true}         // Allow rotation
            maxPolarAngle={Math.PI / 2} // Limit vertical rotation (no looking up/down)
            minPolarAngle={0}
            minAzimuthAngle={Math.PI / 2} // Limit how far left you can rotate (-45 degrees)
            maxAzimuthAngle={Math.PI + Math.PI / 20}  // Limit how far right you can rotate (+45 degrees) // Lock vertical angle to side view
            enableDamping={true}        // Smooth camera movement
            dampingFactor={0.2}
            />
          )}
          {cameraTarget && (
            <CameraAnimator
              targetPosition={cameraTarget.position}
              lookAt={cameraTarget.lookAt}
              controlsRef={controlsRef}
              targetFov={cameraTarget.fov} // skicka med FOV
              onComplete={() => setCameraTarget(null)}
            />
          )}

          <Text visible={false} fontSize={0.001} position={[0, -1000, 0]}>
            preload
          </Text>
        </Canvas>

  )
}

export default CanvasComponent