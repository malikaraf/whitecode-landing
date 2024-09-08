import { ImageCarousel } from '@/components'
import { carouselProjects } from '@/data'
import { AllWorks, Chat, WorkHero } from '@/sections'
import React from 'react'

const Work = () => {
  return (
    <div>
      <WorkHero />
      <ImageCarousel projects={carouselProjects} />
      <AllWorks />
      <Chat />
    </div>
  )
}

export default Work