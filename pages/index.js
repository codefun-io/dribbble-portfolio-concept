import React from 'react'

import Layout from '../src/components/layout'
import Section1 from '../src/components/section1'
import Section2 from '../src/components/section2'
import Section3 from '../src/components/section3'
import Section6 from '../src/components/section6'
import Cat from '../src/components/cat'
import { Hero } from '../src/components/hero'
import Gallery from '../src/components/gallery'

const Index = () => (
  <div className="main-content">
    <Section1 />
    <Section2 />
    <Section3 />

    <Gallery />
    <Hero />
    <Cat />
    <Section6 />
  </div>
)

export default Layout(Index)
