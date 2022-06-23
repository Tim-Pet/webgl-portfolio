import React, { useMemo, useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { Mesh, TextureLoader, Vector2 } from 'three'
import planeFragmentShader from './shaders/plane/planeFragment.glsl'
import planeVertexShader from './shaders/plane/planeVertex.glsl'
import testTexture from '../assets/textures/metal_texture.webp'
import { useControls } from 'leva'

const ShaderPlane = (props: any) => {
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
        uTexture: { value: useLoader(TextureLoader, testTexture.src) },
        resolution: { value: new Vector2() },
      },
      fragmentShader: planeFragmentShader,
      vertexShader: planeVertexShader,
    }),
    []
  )

  useFrame(({ clock }) => {
    shaderData.uniforms.time.value = clock.elapsedTime * 3
    shaderData.uniforms.uProgress.value = progress
    mesh.current?.position.setX(100)
  })

  return (
    <mesh {...props} ref={mesh}>
      <planeBufferGeometry args={[350, 350, 1000, 1000]} />
      <shaderMaterial {...shaderData} />
    </mesh>
  )
}

export default ShaderPlane
