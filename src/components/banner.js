import React, { Component } from 'react'
import styled from 'styled-components'

const BannerGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 100px;
  grid-template-rows: 100px minmax(300px, max-content) 50px;
`

const Banner = styled.div`
  background: #fff;
  border-radius: 15px;
  width: 100%;
  height: 440px;
  top: ${props => props.data.top}px;
  position: absolute;
  z-index: 1;
  box-shadow: 4px 4px 12px 4px rgba(20%, 20%, 40%, 0.5);
`
const Text1 = styled.div`
  grid-column: 2/3;
  grid-row: 1;
  font-size: 3em;
  white-space: nowrap;
`
const Text2 = styled.div`
  grid-column: 2/2;
  grid-row: 2;
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 80px auto;
`
const Text3 = styled.div`
  color: #ff377c;
  margin-top: 30px;
  grid-column: 2/2;
  grid-row: 2;
`
const Text31 = styled.div`
  grid-column: 1/1;
  grid-row: 1;
  color: #ff377c;
`
const RectColor = styled.div`
  margin-top: 8px;
  margin-left: 15px;
  width: 38px;
  height: 4px;
  background-color: #ff377c;
`
const TextArea = styled.div`
  grid-column: 1/1;
  grid-row: 2;
  display: grid;
  grid-template-columns: 20px 1fr;
  grid-template-rows: 30px auto;
`
const Bg = styled.div`
  background: url('/static/img/handphone.png');
  width: 450px;
  height: 400px;
  position: absolute;
  bottom: 0px;
  right: -70px;
  z-index: -1;
  background-size: cover;
`
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background: #f8f8f8;
  box-shadow: 2px 2px 2px 2px rgba(20%, 20%, 20%, 0.2);
  grid-column: ${props => props.data.column};
`
const ButtonArea = styled.div`
  grid-column: 3/3;
  grid-row: 3/3;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  display: grid;
`

export default props => {
  return (
    <Banner data={{ top: props.top }}>
      <Bg />
      <BannerGrid>
        <TextArea>
          <Text1> Slick Beauty</Text1>
          <Text2>
            <Text31>
              <RectColor />
            </Text31>
            We've been working on this awesomesauce app that gives you balanced
            pallete colour from any image you upload. It's super useful for all
            sorts of visual artists out there.
            <Text3>GET THE APP →</Text3>
          </Text2>
        </TextArea>
        <ButtonArea>
          <Button data={{ column: '1/1' }}>
            <a>{'<'}</a>
          </Button>
          <Button data={{ column: '2/2' }}>
            {' '}
            <a>{'>'}</a>
          </Button>
        </ButtonArea>
      </BannerGrid>
    </Banner>
  )
}
