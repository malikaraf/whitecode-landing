import { ImageCarousel } from '@/components'
import { carouselProjects } from '@/data'
import { WorkHero } from '@/sections'
import React from 'react'

const Work = () => {
  return (
    <div>
      <WorkHero />
      <ImageCarousel projects={carouselProjects} />
    </div>
  )
}

export default Work