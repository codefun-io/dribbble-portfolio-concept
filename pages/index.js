import React from 'react'

import Layout from '../src/components/layout'
import Section1 from '../src/components/section1'
import GetUpdate from '../src/components/get-update'
import Cat from '../src/components/cat'

const Index = () => (
  <div className='main-content'>
    <Section1 />
    <Cat />
    <GetUpdate />
  </div>
)

export default Layout(Index)
