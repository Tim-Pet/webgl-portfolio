import { Canvas } from '@react-three/fiber'
import type { NextPage } from 'next'
import Head from 'next/head'
import Box from '../components/box'
import Scene from '../components/Scene'

const Home: NextPage = () => {
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
          <Canvas>
            <Scene>
              <Box position={[-1.2, 0, 0]} />
              <Box position={[2.2, 0, 0]} />
            </Scene>
          </Canvas>
        </div>
      </main>
    </div>
  )
}

export default Home
