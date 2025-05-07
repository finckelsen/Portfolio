import { useState, useEffect, useMemo } from 'react'
import { Edges } from '@react-three/drei'
import { useTexture } from '@react-three/drei'
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib'
import { RectAreaLight } from 'three'

export function Mail() {
  const [hovered, setHovered] = useState(false)

  return (
    <mesh
      position={[2.93, 3.8, 3.8]} // Lägger plattan framför kameran på väggen
      rotation={[0.3, Math.PI, 0 ]} // Platt på golvet (x-axis roterad)
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => window.open('mailto:casper@finckelsen.com')}
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
  )
}
