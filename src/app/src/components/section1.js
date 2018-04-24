import React from 'react'
import styled, { injectGlobal } from 'styled-components'

import Nav from './nav'

const Container = styled.div`
  background-image: url(static/img/hexon-backgrond.svg);
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-size: cover;
  overflow: hidden;
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 9rem 0 8rem 0;
  @media only screen and (max-width: 1024px) {
    padding-bottom: 8rem;
  }
  @media only screen and (max-width: 768px) {
    padding-bottom: 5rem;
  }
  @media only screen and (max-width: 425px) {
    padding-bottom: 4rem;
  }
`

const TextArea = styled.div`
  margin: ${props => props.theme && props.theme.margin};
  display: flex;
  @media only screen and (max-width: 425px) {
    text-align: center;
  }
`

const Text = styled.div`
  color: ${props => props.theme && props.theme.color};
  font-size: ${props => props.theme && props.theme.fontSize};
  padding: ${props => props.theme && props.theme.padding};
  font-weight: ${props => props.theme && props.theme.fontWeight};
`

const Title = Text.extend`
  letter-spacing: 1px;
  @media only screen and (max-width: 618px) {
    font-size: 3rem;
  }
  @media only screen and (max-width: 320px) {
    font-size: 2rem;
  }
`

const SubTitle = Text.extend`
  @media only screen and (max-width: 450px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 320px) {
    font-size: 1.5rem;
  }
`

const Desc = Text.extend`
  margin: 0 auto;
  width: 35rem;
  text-align: center;
  letter-spacing: 0.5px;
  @media only screen and (max-width: 650px) {
    width: 80%;
  }
`

const Img = styled.img`
  margin-top: 7rem;
  width: 52%;
  @media only screen and (max-width: 618px) {
    width: 80%;
  }
`

const Shadow = styled.div`
  width: 50%;
  height: 0.1px;
  box-shadow: 0px 10px 137px 27px rgba(0, 0, 0, 0.5);
`

const Section1 = () => (
  <Container className="section1">
    <Nav className="nav" />
    <Main className="main">
      <TextArea>
        <Title
          theme={{
            color: '#363839',
            fontSize: '4.5rem',
            padding: '0 1rem 0 0',
            fontWeight: 'bold'
          }}
        >
          Hexon
        </Title>
        <Title
          theme={{
            color: '#363839',
            fontSize: '4.5rem',
            padding: '0 1rem 0 0',
            fontWeight: 'lighter'
          }}
        >
          Creative
        </Title>
      </TextArea>

      <Img src="static/img/mac.png" />
      <Shadow />

      <TextArea theme={{ margin: '14.5rem 0 0 0' }}>
        <SubTitle
          theme={{
            color: '#fff',
            fontSize: '2.3rem',
            padding: '0 0.9rem 0 0',
            fontWeight: 'lighter'
          }}
        >
          Slick
        </SubTitle>
        <SubTitle
          theme={{
            color: '#fff',
            fontSize: '2.3rem',
            fontWeight: 'bold'
          }}
        >
          approach
        </SubTitle>
      </TextArea>

      <TextArea theme={{ margin: '1.5rem 0 0 0' }}>
        <Desc
          theme={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '0.8rem',
            fontWeight: 'lighter'
          }}
        >
          We are Hexon Creative and we believe in building great products. What
          drives is constant challenge and non stop changing of our everyday
          jobs.
        </Desc>
      </TextArea>
    </Main>
  </Container>
)

export default Section1
