import React from 'react'

import Layout from '../src/components/layout'
import GetUpdate from '../src/components/get-update'
import Cat from '../src/components/cat'
import { Hero } from '../src/components/hero'
import Gallery from '../src/components/gallery'
import TextArea from '../src/components/textArea'
import TextArea2 from '../src/components/textArea'

const Index = () => (
  <div>
    <TextArea />
    <TextArea2 />

    <Gallery />
    <Hero />
    <Cat />
    <GetUpdate />
  </div>
)

export default Layout(Index)
