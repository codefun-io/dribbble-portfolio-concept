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
  margin: ${ props => props.theme && props.theme.margin };
  display: flex;
`

const Text = styled.div`
  color: ${ props => props.theme && props.theme.color };
  font-size: ${ props => props.theme && props.theme.fontSize };
  padding: ${ props => props.theme && props.theme.padding };
  font-weight: ${ props => props.theme && props.theme.fontWeight };
`

const Img = styled.img`
  margin-top: 7rem;
`

const Section1 = () => (
  <Container>
    <TextArea>
      <Text theme={{ color: '#363839', fontSize: '4rem', padding: '0 1rem 0 0', fontWeight: 'bold' }}>Hexon</Text> 
      <Text theme={{ color: '#363839', fontSize: '4rem', padding: '0 1rem 0 0', fontWeight: 'lighter' }}>Creative</Text> 
    </TextArea>
    <Img src='static/img/mac.png' />
    <TextArea theme={{ margin: '16rem 0 0 0' }}>
      <Text theme={{ color: '#fff', fontSize: '2.5rem', padding: '0 1rem 0 0', fontWeight: 'lighter' }}>Slick</Text> 
      <Text theme={{ color: '#fff', fontSize: '2.5rem', padding: '0 1rem 0 0', fontWeight: 'bold' }}>approach</Text> 
    </TextArea>
    <TextArea theme={{ margin: '2rem 0 0 0' }}>
      <Text theme={{ color: '#FFC3D5', fontSize: '0.8rem', padding: '0 1rem 0 0', fontWeight: 'lighter' }}>
        We are Hexon Creative and we believe in building great products. What drives is
      </Text> 
    </TextArea>
    <TextArea>
      <Text theme={{ color: '#FFC3D5', fontSize: '0.8rem', padding: '0 1rem 0 0', fontWeight: 'lighter' }}>
        constant challenge and non stop changing of our everyday jobs.
      </Text>
    </TextArea>
  </Container>
)

export default Section1