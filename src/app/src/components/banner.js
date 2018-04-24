import React, { Component } from 'react'
import styled from 'styled-components'

const BannerGrid = styled.div`
  display: grid;
  grid-template-columns: 65px 3fr 350px;
  grid-template-rows: 160px minmax(300px, max-content) 150px;
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
  font-size: 3.5em;
  white-space: nowrap;
  color: #4a4b4c;
  font-weight: 300;
  @media (max-width: 425px) {
    font-size: 2.5em;
  }
  @media (max-width: 400px) {
    font-size: 2em;
  }
`

const Text2 = styled.div`
  display: grid;
  grid-template-columns: 20px 70px 1fr;
  grid-template-rows: 40px minmax(300px, max-content);
`

const Text3 = styled.a`
  color: #ff377c;
  margin-top: 30px;
  font-weight: bold;
  display: block;
`

const Text31 = styled.div`
  color: #ff377c;
  grid-column: 1;
  grid-row: 2;
  @media (max-width: 425px) {
    display: none;
  }
`

const Text32 = styled.div`
  grid-column: 3;
  grid-row: 2;
  width: 21rem;
  color: #8f8f8f;
  font-size: 0.85rem;
  @media (max-width: 425px) {
    grid-column: 2;
    width: 17rem;
  }
`

const RectColor = styled.div`
  margin-top: 8px;
  margin-left: 15px;
  width: 45px;
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
  background: url(${props => props.data.image});
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

  @media (max-width: 320px) {
    width: 264px;
    height: 200px;
    bottom: -140px;
    right: 80px;
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
  box-shadow: 2px 2px 20px 2px rgba(20%, 20%, 20%, 0.15);
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
  @media (max-width: 320px) {
    width: 156px;
    height: 30px;
  }
`

export default data => props => {
  return (
    <Banner data={{ top: props.top }}>
      <Bg
        className="background"
        data={{ image: data.image || '/static/img/phone.png' }}
      />
      <BannerGrid>
        <TextArea>
          <Text1> {data.title || 'Stick Beauty '}</Text1>
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
