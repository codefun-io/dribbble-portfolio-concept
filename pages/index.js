import React from 'react'

import Layout from '../src/components/layout'
import GetUpdate from '../src/components/get-update'
import Cat from '../src/components/cat'

const Index = () => (
  <div>
    <Cat />
    <GetUpdate />
  </div>
)

export default Layout(Index)
