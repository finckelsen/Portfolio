import { useTexture } from '@react-three/drei'
import * as THREE from 'three'


function WindowPlane({isDay}) {
    const texturePath = isDay ? '/windows.jpeg' : '/night.jpg'
    const viewTexture = useTexture(texturePath)

    return (
      <mesh position={[-1, 2, 5]} castShadow={false} receiveShadow={false}>
        <planeGeometry args={[5.3, 3]} />
        <meshPhysicalMaterial
          map={viewTexture}
          roughness={0}
          transmission={1}
          thickness={0.01}
          transparent
          side={THREE.DoubleSide}
        />
      </mesh>
    )
}

export default WindowPlane;

  