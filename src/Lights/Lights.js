import React, {useState, useRef, useEffect} from 'react';
import { DirectionalLightHelper } from 'three'
import { useHelper } from '@react-three/drei'
import { Edges } from '@react-three/drei'


function Lights({isDay, color}) {
  const [light1, setLight1] = useState(false);
  const [light2, setLight2] = useState(false);
  const [lightDonut, setLightDonut] = useState(false);
  const [light1Hovered, setLight1Hovered] = useState(false);
  const [light2Hovered, setLight2Hovered] = useState(false);
  const [lightDonutHovered, setLightDonutHovered] = useState(false);
  const [light1Color, setLight1Color] = useState("orange");
  const [light2Color, setLight2Color] = useState("red");
  const [lightDonutColor, setLightDonutColor] = useState("#FFAA00");

  const lightRef = useRef()
  useHelper(lightRef, DirectionalLightHelper, 1)

  useEffect(() => {
    setLight1Color(color)
    setLight2Color(color)
    setLightDonutColor(color)
  }, [color]) 


  return (

  

  <>



  <mesh position={[3.3, 0.75, 3.2]} onClick={() => setLight2(!light2)} onPointerOver={() => setLight2Hovered(true)} onPointerOut={() => setLight2Hovered(false)}>
    <boxGeometry args={[0.4, 0.4, 0.4]} />
    <meshStandardMaterial
      emissive={light2Color}
      emissiveIntensity={light2 ? 0.1 : 1}
      color={light2Color}
    />
    {light2Hovered && (
        <Edges
          scale={1.05}          // lite större än plattan
          color="cyan"           // färg på linjen
          threshold={15}         // känslighet för kanter
        />
      )}
  </mesh>

  <mesh position={[-3.7, 2.44, -1.5]} onClick={() => setLight1(!light1)} onPointerOver={() => setLight1Hovered(true)} onPointerOut={() => setLight1Hovered(false)}>
    <boxGeometry args={[0.4, 0.4, 0.4]} />
    <meshStandardMaterial
      emissive={light1Color}
      emissiveIntensity={light1 ? 0.1 : 1}
      color={light1Color}
    />
    {light1Hovered && (
        <Edges
          scale={1.05}          // lite större än plattan
          color="cyan"           // färg på linjen
          threshold={15}         // känslighet för kanter
        />
    )}
  </mesh>

    <mesh position={[-3.9, 2, 2.8]}   rotation={[0, Math.PI / 2, 0]} onClick={() => setLightDonut(!lightDonut)} onPointerOver={() => setLightDonutHovered(true)} onPointerOut={() => setLightDonutHovered(false)}>
      <torusGeometry args={[0.4, 0.15, 16, 100]} />
      <meshStandardMaterial
        emissive={lightDonutColor}
        emissiveIntensity={lightDonut ? 0.1 : 1}
        color={lightDonutColor}
      />
      {lightDonutHovered && (
        <Edges
          scale={1.05}          // lite större än plattan
          color="cyan"           // färg på linjen
          threshold={15}         // känslighet för kanter
        />
      )}
    </mesh>



        <rectAreaLight
          position={[-2.3, 2, 2.8]}
          rotation={[0, Math.PI/4, 0]} // Rikta det rätt
          width={5}
          height={5}
          intensity={lightDonut ? 0 : 0.5}
          color={lightDonutColor}
          decay={1}  // Om decay är tillgängligt, an
        />
        <rectAreaLight
          position={[-3.9, 2, 2.8]}
          rotation={[0, -Math.PI/2, 0]} // Rikta det rätt
          width={5}
          height={5}
          intensity={lightDonut ? 0 : 0.5}
          color={lightDonutColor}
          decay={10}  // Om decay är tillgängligt, an
        />

        <pointLight
            position={[3.3, 0.8, 3.2]}
            intensity={light2 ? 0 : 7}          // Justera styrka
            distance={7}            // Hur långt ljuset når
            color={light2Color}
            castShadow
        />

        <pointLight
            position={[-3.7, 2.44, -1.5]}
            intensity={light1 ? 0 : 10}            // Justera styrka
            distance={7}            // Hur långt ljuset når
            color={light1Color}
            castShadow
        />

        <ambientLight intensity={0.5} />
        <directionalLight
          position={[-2, 3, 10]}
          castShadow
          intensity={0.01}
          color="lightblue" // varm solfärg (mjuk gul/orange)
        />
        </>
    
  )
}

export default Lights;
