import React, { Component } from 'react'
import styled from 'styled-components'

const BannerGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 100px;
  grid-template-rows: 100px minmax(300px, max-content) 50px;
`
const ButtonArea = styled.div`
  grid-column: 3/3;
  grid-row: 3/3;
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
  grid-template-rows: 10px;
`
const Text3 = styled.div`
  color: #ff377c;
  margin-top: 30px;
`
const Text31 = styled.div`
  grid-column: 1/1;
  grid-row: 1;
  color: #ff377c;
`
const RectColor = styled.div`
  min-width: 12px;
  min-height: 12px;
  color: #ff377c;
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
  grid-column: 2/2;
  grid-row: 3;
  width: 300px;
  height: 100px;
  background-size: cover;
`

export default props => {
  return (
    <Banner data={{ top: props.top }}>
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
        <ButtonArea> 按鈕</ButtonArea>
      </BannerGrid>
    </Banner>
  )
}
