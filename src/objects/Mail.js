import { useState, useEffect, useMemo } from 'react'
import { Edges, Text } from '@react-three/drei'
import { useTexture } from '@react-three/drei'
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib'
import { RectAreaLight } from 'three'
import { useCamera } from '../animations/CameraProvider'
import * as THREE from 'three'


export function Mail({contactOpen, setContactOpen}) {
  const [hovered, setHovered] = useState(false)
  const { setCameraTarget } = useCamera()

  const handleClick = () => {
    if (!contactOpen){
      setCameraTarget({
        position: new THREE.Vector3(2, 1.5, 0),
        lookAt: new THREE.Vector3(3, 1.5, 10),
        fov: 40, // Återställ till standard-FOV   
      });
      setTimeout(() => {
        setContactOpen(true);
      }, 300); // Delay in milliseconds (1000ms = 1 second)

    } else{
      window.open('mailto:casper@finckelsen.com')
    }
  };

  return (
    <group>
    <mesh
      position={[2.93, 1.8, 3.8]} // Lägger plattan framför kameran på väggen
      rotation={[0.3, Math.PI, 0 ]} // Platt på golvet (x-axis roterad)
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => handleClick()}
    >
      <planeGeometry args={[0.65, 0.65]} /> {/* Bredd och höjd */}
      <meshStandardMaterial
        transparent={true}             // Gör den transparent om du vill ha genomskinlig textur
        opacity={0}
        emissive="white"                    // Opacitet för texturen
        emissiveIntensity={0}        // Hur stark glöd ska vara (justera efter behov)
      />
      {hovered && (
        <Edges
          scale={1.05}          // lite större än plattan
          color="white"           // färg på linjen
          threshold={15}         // känslighet för kanter
        />
      )}

      </mesh>
      {hovered && contactOpen && (
        <Text
          position={[3.9, 2.3, 3.8]} // Adjust x slightly to the right of the mesh
          fontSize={0.09}
          color="white"
          anchorX="left"
          anchorY="middle"
          rotation={[0, -Math.PI, 0]}
        >
          Click to send e-mail to me! casper@finckelsen.com
        </Text>
      )}

    </group>
  )
}
