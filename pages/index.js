import React from 'react'

import Layout from '../src/components/layout'
import GetUpdate from '../src/components/get-update'
import Cat from '../src/components/cat'
import { Hero } from '../src/components/hero'
import Gallery from '../src/components/gallery'
const Index = () => (
  <div>
    <Gallery />
    <Hero />
    <Cat />
    <GetUpdate />
  </div>
)

export default Layout(Index)
