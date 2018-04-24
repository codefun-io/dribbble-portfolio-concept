import React, { Component } from 'react'
import styled from 'styled-components'

import { Section } from '../components/section'
import { Button } from '../components/button'

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
`
const Col1 = styled.div`
  padding: 30px 17%;
  grid-column-start: 1;
  grid-column-end: 1;
`
const Col2 = styled.div`
  grid-column-start: 2;
  grid-column-end: 2;
`

export const MiddleBody = props => {
  return (
    <Wrap>
      <Col1>
        <Section />
        <Button />
      </Col1>
    </Wrap>
  )
}
