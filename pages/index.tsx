import { Canvas } from '@react-three/fiber'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Vector3 } from 'three'
import Box from '../components/box'
import Scene from '../components/Scene'

const Home: NextPage = () => {
  const isWindowLoaded = typeof window !== 'undefined'
  const cameraOptions = {
    frustumCulled: false,
    position: new Vector3(0, 0, 1),
    fov: 70,
    near: 0.01,
    far: 10,
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
        <div className="h-screen w-screen">
          <Canvas
            camera={cameraOptions}
            gl={{ antialias: true }}
            dpr={isWindowLoaded ? window.devicePixelRatio : 1}
          >
            <Scene>
              <Box position={[0, 0, 0]} />
            </Scene>
          </Canvas>
        </div>
      </main>
    </div>
  )
}

export default Home
