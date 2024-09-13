import { AboutHero, AboutMission, AboutValues, Chat, Story } from '@/sections'
import React from 'react'

const About = () => {
  return (
    <main>
      <AboutHero />
      <AboutMission />
      <Story />
      <AboutValues />
      <Chat />
    </main>
  )
}

export default About