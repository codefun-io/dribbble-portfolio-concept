import React from 'react'

import Layout from '../src/components/layout'
import Section1 from '../src/components/section1'
import Section2 from '../src/components/section2'
import Section3 from '../src/components/section3'
import Section4 from '../src/components/section4'

import Section6 from '../src/components/section6'
import Cat from '../src/components/cat'
import Section5 from '../src/components/section5'
import Gallery from '../src/components/gallery'

const Index = () => (
  <div className="main-content">
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Gallery />
    <Section5 />
    <Cat />
    <Section6 />
  </div>
)

export default Layout(Index)
