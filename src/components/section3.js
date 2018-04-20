import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 3.5fr 1fr;
  grid-template-rows: 40px 60px 1fr;
  min-height: 300px;
  justify-content: center;
  padding-top: 50px;
`

const WrapInner = styled.div`
  grid-column: 2/3;
  grid-row: 1;
  display: grid;
  grid-template-columns: 1fr 30px 3fr 3fr;
  grid-template-rows: auto;
`

const Num = styled.div`
  color: #ff377c;
  font-size: 3em;
  margin-top: 20px;

  grid-column: 2/3;
  grid-row: 3;
`

const Titleh3 = styled.div`
  grid-column: ${props => props.data.column};
  font-size: 0.9em;
  grid-row: 3;
  justify-content: center;
  flex: 1;
  padding-left: 20px;
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
    <WrapInner>
      <Num>02</Num>

      <Titleh3 data={{ column: '3/4' }}>
        But it's just using an old paradigm to describe something new, and when
        you do that, you're tying the idea to all the weight and baggage that
        accompanied the old. You're taking the lazy option
      </Titleh3>
      <Titleh3 data={{ column: '4/4' }}>
        But it's just using an old paradigm to describe something new, and when
        you do that, you're tying the idea to all the weight and baggage that
        accompanied the old. You're taking the lazy option
      </Titleh3>
    </WrapInner>
  </Wrap>
)
