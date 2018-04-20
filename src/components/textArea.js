import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  grid-template-rows: 40px 60px 1fr;
  min-height: 300px;
  justify-content: center;
  padding-top: 50px;
`

const Titleh4 = styled.div`
  font-size: 0.5em;
  letter-spacing: 5px;
  grid-column: 2/3;
  grid-row: 1;
  display: flex;
  justify-content: center;
  flex: 1;
  color: #bfbfbf;
  font-weight: 900;
`
const WrapTitle2 = styled.div`
  grid-column: 2/3;
  font-size: 4em;
  grid-row: 2;
  letter-spacing: 4px;
  display: flex;
  justify-content: center;
  white-space: nowrap;
  flex: 1;
  @media (max-width: 1000px) {
    font-size: 3em;
  }
  @media (max-width: 850px) {
    font-size: 2.5em;
  }
  @media (max-width: 720px) {
    font-size: 1.5em;
  }
`

const Titleh3 = styled.div`
  grid-column: 2/3;
  font-size: 0.9em;
  grid-row: 3;

  justify-content: center;
  flex: 1;
  text-align: center;
  color: #8e8e8e;

  @media (max-width: 1000px) {
    font-size: 0.8em;
  }
  @media (max-width: 850px) {
    font-size: 0.7em;
  }
  @media (max-width: 720px) {
    font-size: 0.6em;
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
