import React, { useMemo, useRef } from 'react'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { Mesh, TextureLoader, Vector2, Vector4 } from 'three'
import { useControls } from 'leva'
import gsap from 'gsap'
import planeFragmentShader from './shaders/plane/planeFragment.glsl'
import planeVertexShader from './shaders/plane/planeVertex.glsl'
import testTexture from '../assets/textures/numbers_texture.jpg'

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
        uCorners: { value: new Vector4(0, 0, 0, 0) },
        uResolution: { value: new Vector2(width, height) },
        uQuadSize: { value: new Vector2(300, 300) },
      },
      fragmentShader: planeFragmentShader,
      vertexShader: planeVertexShader,
    }
  }, [viewport])

  const tl = useMemo(() => {
    return gsap
      .timeline()
      .to(shaderData.uniforms.uCorners.value, { x: 1, duration: 1 }, 0.0)
      .to(shaderData.uniforms.uCorners.value, { y: 1, duration: 1 }, 0.1)
      .to(shaderData.uniforms.uCorners.value, { z: 1, duration: 1 }, 0.2)
      .to(shaderData.uniforms.uCorners.value, { w: 1, duration: 1 }, 0.3)
  }, [])

  useFrame(({ clock }) => {
    shaderData.uniforms.time.value = clock.elapsedTime * 3
    tl.progress(progress)

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
