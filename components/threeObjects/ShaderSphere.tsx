import React, { useMemo, useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { Mesh, TextureLoader, Vector2 } from 'three'
import sphereFragmentShader from '../shaders/sphere/sphereFragment.glsl'
import sphereVertexShader from '../shaders/sphere/sphereVertex.glsl'
import testTexture from '../../assets/textures/metal_texture.webp'

const ShaderSphere = (props: any) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef<Mesh>()

  const shaderData = useMemo(
    () => ({
      uniforms: {
        time: { value: 1.0 },
        uTexture: { value: useLoader(TextureLoader, testTexture.src) },
        resolution: { value: new Vector2() },
      },
      fragmentShader: sphereFragmentShader,
      vertexShader: sphereVertexShader,
    }),
    []
  )

  useFrame(({ clock }) => {
    // console.log(clock.elapsedTime)
    shaderData.uniforms.time.value = clock.elapsedTime * 3
  })

  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh {...props} ref={mesh}>
      <sphereBufferGeometry args={[0.5, 1000, 1000]} />
      <shaderMaterial {...shaderData} />
    </mesh>
  )
}

export default ShaderSphere
