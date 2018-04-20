import React from 'react'

import Layout from '../src/components/layout'
import Section1 from '../src/components/section1'
import Section2 from '../src/components/section2'
import GetUpdate from '../src/components/get-update'
import Cat from '../src/components/cat'
import { Hero } from '../src/components/hero'
import Gallery from '../src/components/gallery'

const Index = () => (
  <div className="main-content">
    <Section1 />
    <Section2 />

    <Gallery />
    <Hero />
    <Cat />
    <GetUpdate />
  </div>
)

export default Layout(Index)
