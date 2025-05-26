import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

export function CameraAnimator({ targetPosition, lookAt, controlsRef, onComplete, targetFov }) {
  const { camera } = useThree()
  const [active, setActive] = useState(true)

  useFrame(() => {
    if (!active || !controlsRef.current) return

    controlsRef.current.target.lerp(lookAt, 0.1)
    camera.position.lerp(targetPosition, 0.2)

    if (targetFov !== undefined) {
      camera.fov += (targetFov - camera.fov) * 0.1
      camera.updateProjectionMatrix()
    }

    controlsRef.current.update()

    const positionClose = camera.position.distanceTo(targetPosition) < 0.1
    const fovClose = targetFov === undefined || Math.abs(camera.fov - targetFov) < 0.1
    
    if (positionClose && fovClose) {
      setActive(false)
      if (onComplete) onComplete()
    }
  })

  return null
}
