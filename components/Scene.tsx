import { Canvas } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { Vector3 } from 'three'
import { radToDeg } from 'three/src/math/MathUtils'
import SceneSetup from '../components/SceneSetup'
import ShaderPlane from './threeObjects/ShaderPlane'

const isWindowLoaded = typeof window !== 'undefined'

const Scene = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  // camera setup
  const [cameraFov, setCameraFov] = useState<number>(0)
  const cameraDistance = 1000
  useEffect(() => {
    const height = containerRef.current?.clientHeight || 0
    const fov = 2 * radToDeg(Math.atan(height / 2 / cameraDistance))
    setCameraFov(fov)
  }, [containerRef.current])

  const cameraOptions = {
    frustumCulled: false,
    position: new Vector3(0, 0, cameraDistance),
    fov: cameraFov,
    near: 0.01,
    far: 1000,
    aspectRatio: () => {
      if (isWindowLoaded) {
        return window.innerWidth / window.innerHeight
      }
    },
  }
  return (
    <div className="relative h-screen w-screen bg-slate-500" ref={containerRef}>
      <Canvas
        camera={cameraOptions}
        gl={{ antialias: true }}
        dpr={isWindowLoaded ? window.devicePixelRatio : 1}
      >
        <SceneSetup>
          <ShaderPlane />
        </SceneSetup>
      </Canvas>
    </div>
  )
}

export default Scene
