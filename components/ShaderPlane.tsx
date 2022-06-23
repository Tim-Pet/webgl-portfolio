import React, { useMemo, useRef, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { Mesh, TextureLoader, Vector2 } from 'three'
import fragmentShader from './shaders/fragment.glsl'
import vertexShader from './shaders/vertex.glsl'
import testTexture from '../assets/textures/metal_texture.webp'
console.log(testTexture)

const ShaderPlane = (props: any) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef<Mesh>()

  const shaderData = useMemo(
    () => ({
      uniforms: {
        time: { value: 1.0 },
        uTexture: { value: useLoader(TextureLoader, testTexture.src) },
        resolution: { value: new Vector2() },
      },
      fragmentShader,
      vertexShader,
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
      <planeBufferGeometry args={[0.5, 0.5, 100, 100]} />
      <shaderMaterial {...shaderData} wireframe={true} />
    </mesh>
  )
}

export default ShaderPlane
