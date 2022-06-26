import React, { useMemo, useRef } from 'react'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { Mesh, TextureLoader, Vector2 } from 'three'
import planeFragmentShader from './shaders/plane/planeFragment.glsl'
import planeVertexShader from './shaders/plane/planeVertex.glsl'
import testTexture from '../assets/textures/numbers_texture.jpg'
import { useControls } from 'leva'

const ShaderPlane = (props: any) => {
  const mesh = useRef<Mesh>()
  const { viewport } = useThree()
  const { progress } = useControls({
    progress: {
      value: 0,
      min: 0,
      max: 1,
      step: 0.001,
    },
  })

  const shaderData = useMemo(() => {
    const width = viewport.width * viewport.factor
    const height = viewport.height * viewport.factor

    return {
      uniforms: {
        time: { value: 1.0 },
        uProgress: { value: progress },
        uTexture: { value: useLoader(TextureLoader, testTexture.src) },
        uTextureSize: { value: new Vector2(100, 100) },
        uResolution: { value: new Vector2(width, height) },
        uQuadSize: { value: new Vector2(300, 300) },
      },
      fragmentShader: planeFragmentShader,
      vertexShader: planeVertexShader,
    }
  }, [viewport])

  useFrame(({ clock }) => {
    shaderData.uniforms.time.value = clock.elapsedTime * 3
    shaderData.uniforms.uProgress.value = progress
    if (mesh.current) {
      mesh.current.position.x = 300
      mesh.current.rotation.z = 0.5
    }
  })

  return (
    <mesh {...props} ref={mesh}>
      <planeBufferGeometry args={[300, 300, 1000, 1000]} />
      <shaderMaterial {...shaderData} />
    </mesh>
  )
}

export default ShaderPlane
