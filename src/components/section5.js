import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5.4rem 0 0 0;
`

const Titleh4 = styled.div`
  font-size: 0.7em;
  letter-spacing: 5px;
  color: #bfbfbf;
  font-weight: 900;
`

const WrapTitle2 = styled.div`
  margin-top: 2rem;
  font-size: 3.5em;
  letter-spacing: 4px;
  @media (max-width: 425px) {
    font-size: 2.5em;
  }
  @media (max-width: 320px) {
    font-size: 2rem;
  }
`

const BoldTitle = styled.b`
  letter-spacing: 4px;
`

const Titleh3 = styled.div`
  margin-top: 4rem;
  width: 35rem;
  text-align: center;
  color: #acacac;
  @media (max-width: 425px) {
    padding: 0 5rem;
  }
  @media (max-width: 320px) {
    width: 30rem;
  }
`

const ButtonWrap = styled.div`
  margin-top: 4rem;
`

const A = styled.a`
  color: #4f4f4f;
`

const Button = styled.div`
  font-size: 0.9rem;
  border: 1px solid #e7e7e7;
  padding: 0px 2rem;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  font-weight: bold;
`

const Section5 = props => {
  return (
    <Wrap>
      <Titleh4>REYKYAVIK BASED</Titleh4>
      <WrapTitle2>
        We are <BoldTitle>HIRING.</BoldTitle>{' '}
      </WrapTitle2>
      <Titleh3>
        Reykjavik or remote, get in touch and find a perfect spot for you.
        <br />
        We're looking for awesome people and Martians
      </Titleh3>

      <ButtonWrap>
        <A>
          <Button>LEARN MORE</Button>
        </A>
      </ButtonWrap>
    </Wrap>
  )
}

export default Section5
