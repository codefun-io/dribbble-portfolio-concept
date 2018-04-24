import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5.5rem 0 8.5rem 0;
`

const Titleh4 = styled.div`
  font-size: 0.7em;
  letter-spacing: 5px;
  color: #bfbfbf;
  font-weight: 600;
`

const WrapTitle2 = styled.div`
  font-size: 4em;
  letter-spacing: 4px;
  font-weight: lighter;
  margin-top: 1.8rem;
  @media (max-width: 425px) {
    font-size: 2.5em;
  }
`

const Titleh3 = styled.div`
  width: 32rem;
  text-align: center;
  margin-top: 3.2rem;
  font-size: 0.75em;
  color: #8e8e8e;
  @media (max-width: 425px) {
    padding: 0 4rem;
  }
  @media (max-width: 320px) {
    padding: 0 6rem;
  }
`

export default () => (
  <Wrap>
    <Titleh4>DESIGN STUDIO</Titleh4>
    <WrapTitle2>See Us Live</WrapTitle2>
    <Titleh3>
      But it's just using an old paradigm to describe something new, and when
      you do that, you're tying the idea to all the weight and baggage that
      accompanied the old. You're taking the lazy option
    </Titleh3>
  </Wrap>
)
