import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  color: #000;
  font-size: 1rem;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  grid-template-rows: 10px 100px auto;
  min-width: 400px;
  @media (max-width: 720px) {
    grid-template-columns: 1fr 5fr 1fr;
    grid-template-rows: 30px 60px auto;
  }
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
  font-size: 3.5em;
  grid-row: 2;
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
const BoldTitle = styled.b`
  font-family: 'Archivo', sans-serif;
  letter-spacing: 5px;
  margin-left: 15px;
  margin-top: 10px;
`

const Titleh3 = styled.div`
  grid-column: 2/3;
  font-size: 0.9em;
  grid-row: 3;
  display: flex;
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

const ButtonWrap = styled.div`
  grid-column: 2/3;
  font-size: 1em;
  grid-row: 4;
  display: flex;
  justify-content: center;
  flex: 1;
  text-align: center;
`
const Button = styled.div`
  font-family: 'Archivo', sans-serif;
  background: #fff;
  font-size: 1em;
  font-weight: bold;
  margin-top: 30px;
  padding: 15px 30px;
  border: 1px solid #bfbfbf;
  border-radius: 1px;
`

export const Hero = props => {
  return (
    <Wrap>
      <Titleh4>REYKYAVIK BASED</Titleh4>
      <WrapTitle2>
        We are <BoldTitle>HIRING.</BoldTitle>{' '}
      </WrapTitle2>
      <Titleh3>
        Reykyavik or remote ,get in touch and find a perfect spot for you .
        We're looking for owesome people and Martians
      </Titleh3>
      <ButtonWrap>
        <Button>LEARN MORE</Button>
      </ButtonWrap>
    </Wrap>
  )
}
