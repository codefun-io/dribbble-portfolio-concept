import React from 'react'
import styled, { injectGlobal } from 'styled-components'

import Nav from './nav'

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter UI', sans-serif;
  }

  a {
    transition: color .2s ease;
    text-decoration: none;
    &:hover {
      opacity: .6;
    }
  }
`
const Bg = styled.div`
    background:url('../../static/img/500.png');
    position:absolute;
    max-width:100vw;
    max-height:100vh;
    z-index:-30;
    background-size:cover;
`
const Wrap = styled.div`
      overflow:hidden;
`
const withLayout = ComposedComponent => props => (
  <Wrap>
    <Bg />
    <Nav />
    <ComposedComponent />
  </Wrap>
)

export default withLayout
