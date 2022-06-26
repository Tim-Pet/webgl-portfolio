import React, { useMemo, useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { Mesh, TextureLoader, Vector2 } from 'three'
import dnaFragmentShader from './shaders/dna/dnaFragment.glsl'
import dnaVertexShader from './shaders/dna/dnaVertex.glsl'
import { useControls } from 'leva'

const DnaPlane = (props: any) => {
  const mesh = useRef<Mesh>()
  const { progress } = useControls({
    progress: {
      value: 0,
      min: 0,
      max: 1,
      step: 0.001,
    },
  })

  const shaderData = useMemo(
    () => ({
      uniforms: {
        time: { value: 1.0 },
        uProgress: { value: progress },
        resolution: { value: new Vector2() },
      },
      fragmentShader: dnaFragmentShader,
      vertexShader: dnaVertexShader,
    }),
    []
  )

  useFrame(({ clock }) => {
    shaderData.uniforms.time.value = clock.elapsedTime * 3
    shaderData.uniforms.uProgress.value = progress
  })

  return (
    <mesh {...props} ref={mesh}>
      <planeBufferGeometry args={[350, 350, 1000, 1000]} />
      <shaderMaterial {...shaderData} />
    </mesh>
  )
}

export default DnaPlane
