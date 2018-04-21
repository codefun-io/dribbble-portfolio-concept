import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 0 5rem;
  @media only screen and (max-width: 618px) {
    padding: 0 3rem;
  }
  @media only screen and (max-width: 320px) {
    padding: 0 1rem;
  }
`

const Navigation = styled.div`
  display: flex;
  margin-top: 2rem;
`

const NavLeft = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const NavRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const NavItem = styled.a`
  color: ${props => props.theme && props.theme.color};
  font-size: ${props => props.theme && props.theme.fontSize};
  padding: ${props => props.theme && props.theme.padding};
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`

const Logo = styled.img`
  width: 2.5rem;
  height: 2.2rem;
  margin-right: 1rem;
`

const Text = styled.div`
  color: ${props => props.theme && props.theme.color};
  font-size: ${props => props.theme && props.theme.fontSize};
  padding: ${props => props.theme && props.theme.padding};
  font-weight: lighter;
`

const Nav = () => (
  <Container>
    <Navigation className="navigation">
      <NavLeft className="nav-left">
        <Logo src="static/img/nav-logo.png" />
        <Text theme={{ color: '#707272', fontSize: '1.3rem' }}>Hexon</Text>
      </NavLeft>
      <NavRight className="nav-right">
        <NavItem
          href="/"
          theme={{ color: '#BBBBBB', fontSize: '1rem', padding: '0 2rem 0 0' }}
        >
          About
        </NavItem>
        <NavItem href="/" theme={{ color: '#BBBBBB', fontSize: '1rem' }}>
          Contact
        </NavItem>
      </NavRight>
    </Navigation>
  </Container>
)

export default Nav
