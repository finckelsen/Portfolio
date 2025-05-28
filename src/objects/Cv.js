import { useState } from 'react'
import { Edges } from '@react-three/drei'
import { useTexture } from '@react-three/drei'
import { useCamera } from '../animations/CameraProvider'
import * as THREE from 'three'



export function Cv({setShowCv, controlsRef}) {
  const [hovered, setHovered] = useState(false)
  const texture = useTexture('cv.jpg') // Ersätt med din bildväg
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
    <mesh
      position={[-3.97, 1.78, 0.11]} // Lägger plattan framför kameran på väggen
      rotation={[0, Math.PI / 2, 0]} // Platt på golvet (x-axis roterad)
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => handleClick()}
    >
      <planeGeometry args={[1.1, 1.6]} /> {/* Bredd och höjd */}
      <meshStandardMaterial
        map={texture}               // Applicera bilden som textur
        transparent={true}             // Gör den transparent om du vill ha genomskinlig textur
        opacity={1}
        emissive="white"                    // Opacitet för texturen
        emissiveIntensity={0}        // Hur stark glöd ska vara (justera efter behov)
      />
      {hovered && (
        <Edges
          scale={1.05}          // lite större än plattan
          color="cyan"           // färg på linjen
          threshold={15}         // känslighet för kanter
        />
      )}
    </mesh>
  )
}