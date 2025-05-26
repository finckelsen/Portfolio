import { useState } from 'react'
import { Edges, Text } from '@react-three/drei'
import { useCamera } from '../animations/CameraProvider'
import * as THREE from 'three'

export function Linkedin({ contactOpen, setContactOpen }) {
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
      window.open('https://www.linkedin.com/in/casper-finckelsen', '_blank');
    }
  };

  return (
    <group>
      <mesh
        position={[3.65, 1.8, 3.8]}
        rotation={[0.3, Math.PI, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => handleClick()}
      >
        <planeGeometry args={[0.65, 0.65]} />
        <meshStandardMaterial
          transparent
          opacity={0}
          emissive="white"
          emissiveIntensity={0}
        />
        {hovered && (
          <Edges scale={1.05} color="white" threshold={15} />
        )}
      </mesh>

      {hovered && contactOpen && (
        <Text
          position={[3.65, 2.3, 3.8]} // Adjust x slightly to the right of the mesh
          fontSize={0.09}
          color="white"
          anchorX="left"
          anchorY="middle"
          rotation={[0, -Math.PI, 0]}
        >
          Click for my LinkedIn-profile!
        </Text>
      )}
    </group>
  )
}
