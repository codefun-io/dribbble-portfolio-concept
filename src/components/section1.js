import React from 'react'
import styled, { injectGlobal } from 'styled-components'

const Container = styled.div`
  background-image: url('static/img/hexon-backgrond.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7rem 0 20rem 0;
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
  width: 60%;
  text-align: center;
`

const Img = styled.img`
  margin-top: 7rem;
  @media only screen and (max-width: 618px) {
    width: 80%;
  }
`

const Section1 = () => (
  <Container>
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
    <TextArea theme={{ margin: '16rem 0 0 0' }}>
      <SubTitle
        theme={{
          color: '#fff',
          fontSize: '2.5rem',
          padding: '0 1rem 0 0',
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
    <TextArea theme={{ margin: '2rem 0 0 0' }}>
      <Desc
        theme={{
          color: '#FFC3D5',
          fontSize: '0.8rem',
          fontWeight: 'lighter'
        }}
      >
        We are Hexon Creative and we believe in building great products. What
        drives is constant challenge and non stop changing of our everyday jobs.
      </Desc>
    </TextArea>
  </Container>
)

export default Section1
