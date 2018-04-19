import React from 'react'
import styled, { injectGlobal } from 'styled-components'

import { Hero } from './hero'
import Nav from './nav'
import GetUpdate from './get-update'

injectGlobal`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Raleway', sans-serif;
    

  }

  a {
    transition: color .2s ease;
    text-decoration: none;
    &:hover {
      opacity: .6;
    }
  }
`

const Wrap = styled.div`
  overflow: hidden;
`

const withLayout = ComposedComponent => props => (
  <Wrap>
    <Hero />
    <ComposedComponent />
  </Wrap>
)

export default withLayout
