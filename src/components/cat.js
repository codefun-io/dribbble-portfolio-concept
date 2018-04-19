import React from 'react'
import styled, { injectGlobal } from 'styled-components'

const Img = styled.img`
  width: 100%;
  height: 100%;
`

const Cat = () => <Img src='/static/img/background.png' className='background' />

export default Cat