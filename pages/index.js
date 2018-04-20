import React from 'react'

import Layout from '../src/components/layout'
import Section1 from '../src/components/section1'
import GetUpdate from '../src/components/get-update'
import Cat from '../src/components/cat'
import { Hero } from '../src/components/hero'
import Gallery from '../src/components/gallery'
import TextArea from '../src/components/textArea'

const Index = () => (
  <div className='main-content'>
    <Section1 />
    <TextArea />
    <Gallery />
    <Hero />
    <Cat />
    <GetUpdate />
  </div>
)

export default Layout(Index)
