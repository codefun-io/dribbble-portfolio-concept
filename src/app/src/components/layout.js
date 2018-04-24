import React from 'react'
import styled, { injectGlobal } from 'styled-components'

import Footer from './footer'

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif !important;
    font-weight: normal !important;
    font-size: 16px !important;
  }

  a {
    transition: color .2s ease;
    text-decoration: none;
    cursor: pointer;
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
    <ComposedComponent />
    <Footer />
  </Wrap>
)

export default withLayout
