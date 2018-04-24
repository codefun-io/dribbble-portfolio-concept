import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 4rem 0 10rem 0;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const NumWrap = styled.div`
  margin-top: 1.4rem;
  margin-right: 1rem;
  align-self: baseline;
  @media (max-width: 700px) {
    align-self: center;
  }
`

const Num = styled.div`
  color: #ff377c;
  font-size: 4rem;
  font-weight: lighter;
`

const Middle = styled.div`
  color: #b8b9b9;
  width: 260px;
  margin-right: 4rem;
  font-size: 0.9rem;
  letter-spacing: 0.2px;
  @media (max-width: 700px) {
    text-align: center;
    margin-right: 0rem;
    margin-top: 3rem;
  }
`

const Right = styled.div`
  color: #b8b9b9;
  width: 250px;
  font-size: 0.9rem;
  letter-spacing: 0.2px;
  @media (max-width: 700px) {
    text-align: center;
    margin-top: 2rem;
  }
`

const ButtonWrap = styled.div`
  margin-top: 2rem;
`

const A = styled.a`
  color: #4f4f4f;
`

const Button = styled.div`
  font-size: 0.9rem;
  border: 1px solid #e7e7e7;
  width: 10rem;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  font-weight: bold;
  @media (max-width: 700px) {
    width: initial;
  }
`

export default () => (
  <Wrap>
    <NumWrap>
      <Num>02</Num>
    </NumWrap>
    <Middle>
      Etsy cornhole bicycle rights, fingerstache marfa slow-carb single-origin
      coffee bagel wayfarers shoreditch iPhone man bun man braid. Chambray
      kickstarter locavore, god hammock helvetica selfies asymmertircal.
      Mumbelecore small batch selfies hashtag so photo booth vinyl what the
      Thailand video
    </Middle>
    <Right>
      Tacos gingerstache photo booth freegan, sustainable leggins everyday carry
      street art farm-to-table. Mumblecore fanny pack intelligentsia man braid,
      shabby chic.
      <ButtonWrap>
        <A>
          <Button>SEE MORE</Button>
        </A>
      </ButtonWrap>
    </Right>
  </Wrap>
)
