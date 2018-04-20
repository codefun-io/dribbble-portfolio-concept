import React from 'react'
import styled from 'styled-components'

const Warpper = styled.div`
  background-color: #606060;
  padding: 0 5rem;
`

const LogoArea = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2rem;
`

const Logo = styled.img`
  width: 2.2rem;
  height: 2.2rem;
  margin-right: 0.4rem;
`

const Social = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Icon = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  margin: 0 0.4rem;
`

const CopyRight = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
`

const Left = styled.div`
  display: flex;
`

const Right = styled.div`
  display: flex;  
`

const Text = styled.div`
  color: ${ props => props.theme && props.theme.color };
  font-size: ${ props => props.theme && props.theme.fontSize };
  padding: ${ props => props.theme && props.theme.padding };
  font-weight: lighter;
`

const Footer = () => (
  <Warpper className='footer'>
    <LogoArea>
      <Logo src='static/img/footer-logo.svg' />
      <Text theme={{ color: '#D9D9D9', fontSize: '1.3rem' }}>Hexon</Text>
    </LogoArea>
    <Social>
      <Icon src='static/img/facebook.png' />
      <Icon src='static/img/dribbble.png' />
      <Icon src='static/img/twitter.png' />
    </Social>
    <CopyRight>
      <Left>
        <Text theme={{ color: '#ABABAB', fontSize: '0.9rem', padding: '0 1rem 0 0' }}>Hexon, 2016.</Text>
        <Text theme={{ color: '#868686', fontSize: '0.9rem' }}>Work rights belong to their respective owners</Text>
      </Left>
      <Right>
        <Text theme={{ color: '#AEAEAE', fontSize: '0.9rem', padding: '0 2rem 0 0' }}>Legal</Text>
        <Text theme={{ color: '#AEAEAE', fontSize: '0.9rem' }}>Support</Text>
      </Right>
    </CopyRight>
  </Warpper>
)

export default Footer