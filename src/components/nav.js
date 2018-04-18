import React from 'react'
import styled from 'styled-components'

import Container from './container'

const Navigation = styled.div`
  display: flex;
  margin-top: 3rem;
`

const NavLeft = styled.div`
`

const Logo = styled.a`
  font-size: 2rem;
  color: #4c81c6;
`

const NavRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const NavItem = styled.a`
  margin: 0 1.2rem;
  color: #3da9c3;
`

const Nav = () => (
  <Container>
    <Navigation className='navigation'>
      <NavLeft className='nav-left'>
        <Logo href='/' className='logo'>
          Traveltrip
        </Logo>
      </NavLeft>
      <NavRight className='nav-right'>
        <NavItem href='/'>
          Home
        </NavItem>
        <NavItem href='/'>
          About us
        </NavItem>
        <NavItem href='/'>
          Service
        </NavItem>
        <NavItem href='/'>
          Contact
        </NavItem>
      </NavRight>
    </Navigation>
  </Container>
)

export default Nav