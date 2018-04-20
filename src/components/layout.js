import React from 'react'
import styled, { injectGlobal } from 'styled-components'

import Nav from './nav'
import Footer from './footer'

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Nanum Gothic', sans-serif;
    

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
  background: url(/static/img/background.png);
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 65%;
  z-index: -30;
  background-size: 100% 100%;
  background-repeat: no-repeat;
`

const Wrap = styled.div`
  overflow: hidden;
`

const withLayout = ComposedComponent => props => (
  <Wrap>
    <Bg className="background" />
    <Nav />
    <ComposedComponent />
    <Footer />
  </Wrap>
)

export default withLayout
