import { Canvas } from '@react-three/fiber'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import { Vector3 } from 'three'
import { radToDeg } from 'three/src/math/MathUtils'
import Scene from '../components/Scene'
import Box from '../components/box'
import ShaderSphere from '../components/ShaderSphere'
import ShaderPlane from '../components/ShaderPlane'
import { useControls } from 'leva'
import DnaPlane from '../components/DnaPlane'

const isWindowLoaded = typeof window !== 'undefined'
const Home: NextPage = () => {
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
    <div>
      <Head>
        <title>webgl portfolio</title>
        <meta
          name="description"
          content="Initial portfolio setup to train next.js & webgl"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <script src="js/three.js"></script>
        <div
          className="relative h-screen w-screen bg-slate-500"
          ref={containerRef}
        >
          <Canvas
            camera={cameraOptions}
            gl={{ antialias: true }}
            dpr={isWindowLoaded ? window.devicePixelRatio : 1}
          >
            <Scene>
              {/* <Box position={[0, 0, 0]} /> */}
              {/* <ShaderSphere /> */}
              <ShaderPlane />
              {/* <DnaPlane /> */}
            </Scene>
          </Canvas>
        </div>
      </main>
    </div>
  )
}

export default Home
