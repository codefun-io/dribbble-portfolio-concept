import React from 'react'
import styled, { injectGlobal } from 'styled-components'

import Nav from './nav'

const Container = styled.div`
  background-image: url(static/img/hexon-backgrond.svg);
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: left top;
  background-size: contain;
  overflow: hidden;
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 9rem 0 11rem 0;
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
`

const Img = styled.img`
  margin-top: 7rem;
  width: 52%;
  @media only screen and (max-width: 618px) {
    width: 80%;
  }
`

const Section1 = () => (
  <Container className="section1">
    <Nav className="nav" />
    <Main className="main">
      <TextArea>
        <Title
          theme={{
            color: '#363839',
            fontSize: '4rem',
            padding: '0 1rem 0 0',
            fontWeight: 'bold'
          }}
        >
          Hexon
        </Title>
        <Title
          theme={{
            color: '#363839',
            fontSize: '4rem',
            padding: '0 1rem 0 0',
            fontWeight: 'lighter'
          }}
        >
          Creative
        </Title>
      </TextArea>
      <Img src="static/img/mac.png" />
      <TextArea theme={{ margin: '14.5rem 0 0 0' }}>
        <SubTitle
          theme={{
            color: '#fff',
            fontSize: '2.5rem',
            padding: '0 0.9rem 0 0',
            fontWeight: 'lighter'
          }}
        >
          Slick
        </SubTitle>
        <SubTitle
          theme={{
            color: '#fff',
            fontSize: '2.5rem',
            fontWeight: 'bold'
          }}
        >
          approach
        </SubTitle>
      </TextArea>
      <TextArea theme={{ margin: '1.5rem 0 0 0' }}>
        <Desc
          theme={{
            color: '#FFC3D5',
            fontSize: '0.96rem',
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
