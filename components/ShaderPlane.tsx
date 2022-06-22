import React, { useMemo, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh, Vector2 } from 'three'
import fragmentShader from './shaders/fragment.glsl'
import vertexShader from './shaders/vertex.glsl'

const ShaderPlane = (props: any) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef<Mesh>()

  const shaderData = useMemo(
    () => ({
      uniforms: {
        time: { value: 1.0 },
        resolution: { value: new Vector2() },
      },
      fragmentShader,
      vertexShader,
    }),
    []
  )

  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh {...props} ref={mesh}>
      <planeBufferGeometry args={[0.5, 0.5]} />
      <shaderMaterial {...shaderData} />
    </mesh>
  )
}

export default ShaderPlane
