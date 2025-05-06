import React, {useState, useRef} from 'react';
import { DirectionalLightHelper } from 'three'
import { useHelper } from '@react-three/drei'


function Lights({isDay}) {
  const [lightYellow, setLightYellow] = useState(false);
  const [lightRed, setLightRed] = useState(false);

  const lightRef = useRef()
  useHelper(lightRef, DirectionalLightHelper, 1)
  return (



  <>
  <mesh position={[3.3, 2.75, 3.2]} onClick={() => setLightRed(!lightRed)}>
    <boxGeometry args={[0.4, 0.4, 0.4]} />
    <meshStandardMaterial
      emissive="red"
      emissiveIntensity={lightRed ? 0.1 : 1}
      color="red"
    />
  </mesh>

  <mesh position={[-3.6, 4.44, -2]} onClick={() => setLightYellow(!lightYellow)}>
    <boxGeometry args={[0.4, 0.4, 0.4]} />
    <meshStandardMaterial
      emissive="orange"
      emissiveIntensity={lightYellow ? 0.1 : 1}
      color="orange"
    />
  </mesh>


      {isDay ? (<>
        <pointLight
            position={[3.3, 2.75, 3.2]}
            intensity={lightRed ? 0 : 12}          // Justera styrka
            distance={7}            // Hur långt ljuset når
            color="red"
            castShadow
        />

<pointLight
            position={[1, 2.75, 3.2]}
            intensity={lightRed ? 0 : 12}          // Justera styrka
            distance={7}            // Hur långt ljuset når
            color="red"
            castShadow
        />

        <pointLight
            position={[-3.6, 4.44, -2]}
            intensity={lightYellow ? 0 : 10}            // Justera styrka
            distance={7}            // Hur långt ljuset når
            color="orange"
            castShadow
        />

        <ambientLight intensity={0.2} />
        <directionalLight
          ref={lightRef}
          position={[-2, 5, 10]}
          castShadow
          intensity={0.01}
          color="lightblue" // varm solfärg (mjuk gul/orange)
        />
        </>
      ) : (       
      <>
        <ambientLight intensity={1} />

        <directionalLight
          ref={lightRef}
          position={[-2, 5, 10]}
          castShadow
          intensity={10}
          color="#ffdda1" // varm solfärg (mjuk gul/orange)
        />
      </>
      )
      }
    </>
  )
}

export default Lights;
