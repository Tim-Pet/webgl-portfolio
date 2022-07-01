import React from 'react'

import textureImage from '../../assets/images/textures/numbers_texture.jpg'

const itemData = [
  {
    id: 0,
    title: 'Title 1',
    description: 'This is a good description',
    imageUrl: textureImage.src,
  },
  {
    id: 1,
    title: 'Title 2',
    description: 'This is a good description',
    imageUrl: textureImage.src,
  },
  {
    id: 2,
    title: 'Title 3',
    description: 'This is a good description',
    imageUrl: textureImage.src,
  },
  {
    id: 3,
    title: 'Title 4',
    description: 'This is a good description',
    imageUrl: textureImage.src,
  },
]

export async function getStaticPaths() {
  return {
    paths: itemData.map((item) => {
      return {
        params: {
          portfolioPageId: item.id,
        },
      }
    }),
    fallback: false,
  }
}

// export async function getStaticProps({ params }) {
//     const itemId = params.portfolioItemId;

//     return {
//       props: {
//         character: results[0]
//       }
//     }
//   }

type Props = {}

const PortfolioPage = (props: Props) => {
  return <div>PortfolioPage</div>
}

export default PortfolioPage
