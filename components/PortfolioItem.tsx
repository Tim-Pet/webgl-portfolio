import React from 'react'

type Props = {
  imageUrl: string
  title: string
  description: string
  slug: string
}

const PortfolioItem = ({ imageUrl, title, description, slug }: Props) => {
  return (
    <a href={slug}>
      <img src={imageUrl} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
    </a>
  )
}

export default PortfolioItem
