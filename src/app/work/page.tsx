import { ImageCarousel } from '@/components'
import { carouselProjects } from '@/data'
import { AllWorks, WorkHero } from '@/sections'
import React from 'react'

const Work = () => {
  return (
    <div>
      <WorkHero />
      <ImageCarousel projects={carouselProjects} />
      <AllWorks />
    </div>
  )
}

export default Work