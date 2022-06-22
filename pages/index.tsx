import { Camera, Canvas } from '@react-three/fiber'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Euler, Vector3 } from 'three'
import Box from '../components/box'
import Scene from '../components/Scene'
import { CameraHelper, deg2rad } from '../helper'

const Home: NextPage = () => {
  const cameraOptions = {
    frustumCulled: false,
    position: new Vector3(0, 0, 10),
    fov: 70,
    near: 1,
    far: 10,
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
          <Canvas camera={cameraOptions}>
            <Scene>
              <Box position={[0, 0, 0]} />
              <CameraHelper
                position={new Vector3(3, 0, 3)}
                rotation={new Euler(0, deg2rad(90), 0)}
                near={1}
                far={5}
              />
            </Scene>
          </Canvas>
        </div>
      </main>
    </div>
  )
}

export default Home
