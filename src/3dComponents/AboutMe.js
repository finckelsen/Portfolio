import * as THREE from 'three'
import { useRef, useState, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Text } from '@react-three/drei'

export default function AboutMe() {
  const sphereRef = useRef()
  const outlineRef = useRef()
  const textRef = useRef()  // Lägg till ref för Text
  const [hovered, setHovered] = useState(false)
  const { mouse, camera } = useThree()
  const [position, setPosition] = useState(false)

  const raycaster = useMemo(() => new THREE.Raycaster(), [])
  const plane = useMemo(() => {
    const normal = new THREE.Vector3()
    camera.getWorldDirection(normal)
    return new THREE.Plane(normal, -2)
  }, [camera])
  const initialPosition = useMemo(() => new THREE.Vector3(-2, 2, 2), [])

  useFrame(() => {
    if (!sphereRef.current) return
  
    raycaster.setFromCamera(mouse, camera)
  
    const intersection = new THREE.Vector3()
    const hit = raycaster.ray.intersectPlane(plane, intersection)
    if (!hit) return
  
    const sphere = sphereRef.current
    const distance = sphere.position.distanceTo(intersection)
    const maxDistance = 2
  
    if (distance < maxDistance) {
      const dir = intersection.clone().sub(sphere.position).normalize()
      sphere.position.addScaledVector(dir, 0.02)
      setPosition(sphere.position);
    } else {
      // Gå långsamt tillbaka till ursprung
      sphere.position.lerp(initialPosition, 0.05)
    }

    const targetScale = hovered ? 1.3 : 1
    sphere.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1)
  
    if (outlineRef.current) {
      outlineRef.current.scale.copy(sphere.scale.clone().multiplyScalar(1.05))
      outlineRef.current.position.copy(sphere.position)
    }
  })

  return (
    <>
      <mesh
        ref={sphereRef}
        position={[-2, 2, 2]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => alert('Du klickade på sfären!')}
      >
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color={hovered ? '#6A271B' : '#F95738'} />
      </mesh>

      <mesh ref={outlineRef}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshBasicMaterial color="white" side={THREE.BackSide} />
      </mesh>


      {/* Rotera texten för att alltid vara riktad mot kameran */}
      {hovered && (
        <mesh position={position}>
          <Text
            fontSize={2}
            color="white"
            anchorX="center"
            anchorY="middle"
            ref={textRef}
          >
            About me!
          </Text>
          {/* Texten följer kameran */}
          {textRef.current && textRef.current.lookAt(camera.position)}
        </mesh>
      )}
    </>
  )
}

