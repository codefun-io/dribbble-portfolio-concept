import React, { Component } from 'react'
import styled from 'styled-components'

const BannerGrid = styled.div`
  display: grid;
  grid-template-columns: 80px 3fr 350px;
  grid-template-rows: 150px minmax(300px, max-content) 150px;
  @media (max-width: 500px) {
    grid-template-columns: 1rem 3fr 350px;
  }
  @media (max-width: 400px) {
    grid-template-columns: 1rem 3fr 100px;
  }
`

const Banner = styled.div`
  background: #fff;
  width: 100%;
  min-width: 400px;
  height: 440px;
  top: ${props => props.data.top}px;
  position: absolute;
  z-index: 1;
  transition: 4s;
  transform: translate(0px, 0px);
`
const Text1 = styled.div`
  margin-left: 10px;
  font-size: 4.5em;
  letter-spacing: 4px;
  white-space: nowrap;
  @media (max-width: 400px) {
    font-size: 1.5em;
  }
`
const Text2 = styled.div`
  display: grid;
  grid-template-columns: 20px 50px 1fr;
  grid-template-rows: 40px minmax(300px, max-content);
`
const Text3 = styled.div`
  color: #ff377c;
  margin-top: 30px;
  font-weight: bold;
`
const Text31 = styled.div`
  color: #ff377c;
  grid-column: 1;
  grid-row: 2;
`
const Text32 = styled.div`
  grid-column: 3;
  grid-row: 2;
  width: 18rem;
`
const RectColor = styled.div`
  margin-top: 8px;
  margin-left: 15px;
  width: 38px;
  height: 4px;
  background-color: #ff377c;
`
const TextArea = styled.div`
  grid-column: 2/2;
  grid-row: 2/4;
  display: flex;
  flex-direction: column;
`
const Bg = styled.div`
  background: url('/static/img/phone1.png');
  width: 450px;
  height: 400px;
  position: absolute;
  bottom: -150px;
  right: 20px;
  z-index: -1;
  background-size: cover;

  @media (max-width: 1024px) {
    width: 350px;
    height: 300px;
    right: -10px;
  }

  @media (max-width: 425px) {
    width: 250px;
    height: 200px;
    bottom: -140px;
  }
`
const Button = styled.a`
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background: #f8f8f8;
  box-shadow: 2px 2px 20px 2px rgba(20%, 20%, 20%, 0.2);
  grid-column: ${props => props.data.column};
`
const ButtonArea = styled.div`
  grid-column: 3;
  grid-row: 3;
  grid-template-columns: 50px 50px;
  grid-template-rows: 1fr;
  position: absolute;
  right: 40px;
  bottom: -100px;
  display: grid;
`

export default props => {
  return (
    <Banner data={{ top: props.top }}>
      <Bg />
      <BannerGrid>
        <TextArea>
          <Text1> Slick Beauty 1</Text1>
          <Text2>
            <Text31>
              <RectColor />
            </Text31>
            <Text32>
              We've been working on this awesomesauce app that gives you
              balanced pallete colour from any image you upload. It's super
              useful for all sorts of visual artists out there.
              <Text3>GET THE APP →</Text3>
            </Text32>
          </Text2>
        </TextArea>
        <ButtonArea>
          <Button
            data={{ column: '1/1' }}
            onClick={() => props.handleBanner(-1)}
          >
            <img src="/static/img/ic_navigate_before_black_24dp_1x.png" />
          </Button>
          <Button
            data={{ column: '2/2' }}
            onClick={() => props.handleBanner(1)}
          >
            {' '}
            <img src="/static/img/ic_navigate_next_black_24dp_1x.png" />
          </Button>
        </ButtonArea>
      </BannerGrid>
    </Banner>
  )
}
