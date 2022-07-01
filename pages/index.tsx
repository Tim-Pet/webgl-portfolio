import type { NextPage } from 'next'
import Head from 'next/head'
import PortfolioItem from '../components/PortfolioItem'
import Scene from '../components/Scene'
import numbersTexture from '../assets/textures/numbers_texture.jpg'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'

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

      <main className="bg-black">
        <Header />
        <PortfolioItem
          title="Title 1"
          description="This is a good description"
          imageUrl={numbersTexture.src}
          slug="/"
        />
        <Scene />
        <Footer />
      </main>
    </div>
  )
}

export default Home
