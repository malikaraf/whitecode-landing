import { ImageCarousel } from '@/components'
import { AllNews, Chat, NewsHero } from '@/sections'
import React from 'react'

const News = () => {
  return (
    <div>
      <NewsHero />
      {/* Carousel Here */}
      <AllNews />
      <Chat />
    </div>
  )
}

export default News